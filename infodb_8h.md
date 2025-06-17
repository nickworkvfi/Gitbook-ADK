---
title: inf/include/inf/infodb.h
summary: Hierarchical Property Database API. 

---

# inf/include/inf/infodb.h

Hierarchical Property Database API. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[InfoChildren](struct_info_children.md)** <br>structure for returning the names of the direct child nodes  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[InfoResult](group__propdb.md#enum-inforesult)** { INFO_OK = 0, INFO_FAIL = -1, INFO_NO_DB = -2, INFO_NOT_FOUND = -3, INFO_INVALID_PARAM = -4, INFO_BUSY = -5, INFO_MEM = -6, INFO_BREAK = -7, INFO_NODE_NAME_INVALID = -8, INFO_NOT_IMPL = -900, INFO_NOT_SUPP = -901}<br>Result codes.  |
| enum| **[InfoType](group__propdb.md#enum-infotype)** { INFO_VOID, INFO_INTEGER, INFO_NUMBER, INFO_STRING, INFO_BINARY}<br>Data types.  |
| enum| **[InfoMode](group__propdb.md#enum-infomode)** { INFO_READ_ONLY, INFO_READ_WRITE}<br>Database open modes.  |
| enum| **[InfoOption](group__propdb.md#enum-infooption)** { INFO_OPT_DISABLE_AUTOCOMMIT = (0x1 << 0), INFO_OPT_MULTIPLE_ENTRIES = (0x1 << 1)}<br>Additional options.  |
| enum| **[@6](group__propdb.md#enum-@6)** { INFO_ROOT = 0} |
| typedef long long | **[InfoNode](group__propdb.md#typedef-infonode)** <br>64-bit ID referencing one node/key in the database, IDs are always positive numbers, [INFO_ROOT](group__propdb.md#enumvalue-info-root) is the ID of the root node  |
| typedef struct InfoDBHandle | **[InfoDB](group__propdb.md#typedef-infodb)** <br>Database handle.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const [INF_API](infodb_8h.md#define-inf-api) char * | **[info_getVersion](group__propdb.md#function-info-getversion)**(void )<br>get version of a library  |
| [INF_API](infodb_8h.md#define-inf-api)[InfoDB](group__propdb.md#typedef-infodb) * | **[info_opendb](group__propdb.md#function-info-opendb)**(const char * filename, enum [InfoMode](group__propdb.md#enum-infomode) mode)<br>Open the database.  |
| [INF_API](infodb_8h.md#define-inf-api) void | **[info_closedb](group__propdb.md#function-info-closedb)**([InfoDB](group__propdb.md#typedef-infodb) * handle)<br>Close database and release allocated resources.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_setOptions](group__propdb.md#function-info-setoptions)**([InfoDB](group__propdb.md#typedef-infodb) * handle, int options)<br>Set additional options changing behavior of info_* functions.  |
| [INF_API](infodb_8h.md#define-inf-api) int | **[info_getOptions](group__propdb.md#function-info-getoptions)**([InfoDB](group__propdb.md#typedef-infodb) * handle)<br>Get current additional options changing behavior of info_* functions.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_autocommit](group__propdb.md#function-info-autocommit)**([InfoDB](group__propdb.md#typedef-infodb) * handle, int enable)<br>Enable/disable automatic commit for every info_write* operation.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_transactionBegin](group__propdb.md#function-info-transactionbegin)**([InfoDB](group__propdb.md#typedef-infodb) * idb)<br>Save database state.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_transactionCommit](group__propdb.md#function-info-transactioncommit)**([InfoDB](group__propdb.md#typedef-infodb) * idb)<br>Commit changes.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_transactionRollback](group__propdb.md#function-info-transactionrollback)**([InfoDB](group__propdb.md#typedef-infodb) * idb)<br>Rollback changes.  |
| [INF_API](infodb_8h.md#define-inf-api)[InfoNode](group__propdb.md#typedef-infonode) | **[info_find](group__propdb.md#function-info-find)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path)<br>Find a node within the hierarchy and return its node ID.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_getType](group__propdb.md#function-info-gettype)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, enum [InfoType](group__propdb.md#enum-infotype) * type)<br>Determine the type of a value as it has been stored in the database.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_readInt](group__propdb.md#function-info-readint)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, int * value)<br>Read value from the database and convert it to int, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_readUnsignedInt](group__propdb.md#function-info-readunsignedint)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, unsigned int * value)<br>Read value from the database and convert it to unsigned int, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_readDouble](group__propdb.md#function-info-readdouble)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, double * value)<br>Read value from the database and convert it to double, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_readString](group__propdb.md#function-info-readstring)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, char ** value)<br>Read value from the database and convert it to a string, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_readBinary](group__propdb.md#function-info-readbinary)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, void ** value, int * size)<br>Read value from the database as chunk of memory.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_updateNodeName](group__propdb.md#function-info-updatenodename)**([InfoDB](group__propdb.md#typedef-infodb) * idb, [InfoNode](group__propdb.md#typedef-infonode) node, const char * newname, int allow_overwrite)<br>Update node_name.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_writeInt](group__propdb.md#function-info-writeint)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, int value)<br>Write int value to the database.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_writeUnsignedInt](group__propdb.md#function-info-writeunsignedint)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, unsigned int value)<br>Write unsigned int value to the database.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_writeDouble](group__propdb.md#function-info-writedouble)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, double value)<br>Write double value to the database.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_writeString](group__propdb.md#function-info-writestring)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, const char * value)<br>Write string value to the database.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_writeBinary](group__propdb.md#function-info-writebinary)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, const void * value, int size)<br>Write value from the database as chunk of memory.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_delete](group__propdb.md#function-info-delete)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path)<br>Delete a node and all of its child nodes from the database.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_list](group__propdb.md#function-info-list)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, struct [InfoChildren](struct_info_children.md) ** list)<br>Obtain a list of the names of all direct child nodes of a node.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_incrementInt](group__propdb.md#function-info-incrementint)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, int delta, int * value)<br>Atomically increment an integer by some delta.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_getPath](group__propdb.md#function-info-getpath)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) node, char ** path)<br>Determine the absolute path of a node.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_walkTree](group__propdb.md#function-info-walktree)**([InfoDB](group__propdb.md#typedef-infodb) * handle, [InfoNode](group__propdb.md#typedef-infonode) parent, const char * path, int(*)(void *data, const char *path, struct InfoReference *info) cb, void * data)<br>Recursively walk over the nodes of the (sub-) tree and invoke the callback for each node.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_nodeGetType](group__propdb.md#function-info-nodegettype)**(struct InfoReference * info, enum [InfoType](group__propdb.md#enum-infotype) * type)<br>Determine type of a node.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_nodeReadInt](group__propdb.md#function-info-nodereadint)**(struct InfoReference * info, int * value)<br>Read value from the database and convert it to int, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_nodeReadDouble](group__propdb.md#function-info-nodereaddouble)**(struct InfoReference * info, double * value)<br>Read value from the database and convert it to double, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_nodeReadString](group__propdb.md#function-info-nodereadstring)**(struct InfoReference * info, char ** value)<br>Read value from the database and convert it to a string, if required.  |
| [INF_API](infodb_8h.md#define-inf-api) enum [InfoResult](group__propdb.md#enum-inforesult) | **[info_nodeReadBinary](group__propdb.md#function-info-nodereadbinary)**(struct InfoReference * info, void ** value, int * size)<br>Read value from the database as chunk of memory.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INF_API](infodb_8h.md#define-inf-api)**  |
|  | **[PROP_NAME](group__propdb.md#define-prop-name)** <br>property table name  |

## Types Documentation

### enum InfoResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_OK | 0| No error.   |
| INFO_FAIL | -1| Generic operation failure.   |
| INFO_NO_DB | -2| Database cannot be accessed.   |
| INFO_NOT_FOUND | -3| Key was not found.   |
| INFO_INVALID_PARAM | -4| Invalid values for function parameters.   |
| INFO_BUSY | -5| The database is busy and cannot process the request within a reasonable timeframe.   |
| INFO_MEM | -6| Out of memory.   |
| INFO_BREAK | -7| The callback indicated to stop processing.   |
| INFO_NODE_NAME_INVALID | -8| Node name is invalid (i.e. does not match [a-zA-Z0-9-_.@].   |
| INFO_NOT_IMPL | -900| Function is not implemented (but might be in the future)   |
| INFO_NOT_SUPP | -901| Operation is not (and never will be) supported.   |



Result codes. 

### enum InfoType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_VOID | | void, no value   |
| INFO_INTEGER | | int   |
| INFO_NUMBER | | decimal number   |
| INFO_STRING | | string   |
| INFO_BINARY | | memory chunk   |



Data types. 

### enum InfoMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_READ_ONLY | | read-only access to database   |
| INFO_READ_WRITE | | read/write access to database   |



Database open modes. 

### enum InfoOption

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_OPT_DISABLE_AUTOCOMMIT | (0x1 << 0)| 0x1 bit disables autocommit for every info_write* operation   |
| INFO_OPT_MULTIPLE_ENTRIES | (0x1 << 1)| 0x2 bit allows inserting multiple entries for single key   |



Additional options. 

### enum @6

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_ROOT | 0| Dedicated root node of the hierarchical storage.   |




### typedef InfoNode

```cpp
typedef long long InfoNode;
```

64-bit ID referencing one node/key in the database, IDs are always positive numbers, [INFO_ROOT](group__propdb.md#enumvalue-info-root) is the ID of the root node 

### typedef InfoDB

```cpp
typedef struct InfoDBHandle InfoDB;
```

Database handle. 


## Functions Documentation

### function info_getVersion

```cpp
const INF_API char * info_getVersion(
    void 
)
```

get version of a library 

**Return**: string with version 

### function info_opendb

```cpp
INF_APIInfoDB * info_opendb(
    const char * filename,
    enum InfoMode mode
)
```

Open the database. 

**Parameters**: 

  * **filename** filename of the database 
  * **mode** read-only or read-write 


**Return**: database handle or `NULL` in case of error 

**Note**: If done the database has to be closed using [info_closedb()](group__propdb.md#function-info-closedb)

### function info_closedb

```cpp
INF_API void info_closedb(
    InfoDB * handle
)
```

Close database and release allocated resources. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)


**Note**: It is safe to call info_closedb(NULL); 

### function info_setOptions

```cpp
INF_API enum InfoResult info_setOptions(
    InfoDB * handle,
    int options
)
```

Set additional options changing behavior of info_* functions. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)
  * **value(s)** specified in enum InfoOption. 0 - default behavior. 


**Return**: error code 

### function info_getOptions

```cpp
INF_API int info_getOptions(
    InfoDB * handle
)
```

Get current additional options changing behavior of info_* functions. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)


**Return**: current options. Negative value indicates error. 

### function info_autocommit

```cpp
INF_API enum InfoResult info_autocommit(
    InfoDB * handle,
    int enable
)
```

Enable/disable automatic commit for every info_write* operation. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)
  * **enable** 0 - disable autocommit, any other value enables autocommit 


**Return**: error code 

**Note**: 

  * Default operation mode is enabled autocommit. 
  * This function call is equivalent to info_setOptions function call with accordingly defined INFO_OPT_DISABLE_AUTOCOMMIT bit. 


### function info_transactionBegin

```cpp
INF_API enum InfoResult info_transactionBegin(
    InfoDB * idb
)
```

Save database state. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)


### function info_transactionCommit

```cpp
INF_API enum InfoResult info_transactionCommit(
    InfoDB * idb
)
```

Commit changes. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)


### function info_transactionRollback

```cpp
INF_API enum InfoResult info_transactionRollback(
    InfoDB * idb
)
```

Rollback changes. 

**Parameters**: 

  * **handle** database handle obtained from [info_opendb()](group__propdb.md#function-info-opendb)


### function info_find

```cpp
INF_APIInfoNode info_find(
    InfoDB * handle,
    InfoNode parent,
    const char * path
)
```

Find a node within the hierarchy and return its node ID. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 


**Return**: Node ID (>=0) or error code (<0). 

This id can be used as starting node for subsequent addressing within the database (similar to the current working directory in a file system). 


### function info_getType

```cpp
INF_API enum InfoResult info_getType(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    enum InfoType * type
)
```

Determine the type of a value as it has been stored in the database. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **type** pointer for storing the type of the value in the database. In case no value was found it is set to [INFO_VOID](group__propdb.md#enumvalue-info-void). 


**Return**: error code 

### function info_readInt

```cpp
INF_API enum InfoResult info_readInt(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    int * value
)
```

Read value from the database and convert it to int, if required. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged. 


**Return**: error code 

### function info_readUnsignedInt

```cpp
INF_API enum InfoResult info_readUnsignedInt(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    unsigned int * value
)
```

Read value from the database and convert it to unsigned int, if required. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged. 


**Return**: error code 

### function info_readDouble

```cpp
INF_API enum InfoResult info_readDouble(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    double * value
)
```

Read value from the database and convert it to double, if required. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged. 


**Return**: error code 

### function info_readString

```cpp
INF_API enum InfoResult info_readString(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    char ** value
)
```

Read value from the database and convert it to a string, if required. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **value** pointer for storing the string. The string is returned as C-string in memory that has been allocated using malloc(), the returned string has to be released using free() when done. In case no value was found `NULL` is returned. 


**Return**: error code 

### function info_readBinary

```cpp
INF_API enum InfoResult info_readBinary(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    void ** value,
    int * size
)
```

Read value from the database as chunk of memory. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **value** pointer for storing the chunk of memory. The memory has been allocated using malloc(), it has to be released using free() when done. In case no value was found or in case _size_ is 0 then `NULL` is returned. 
  * **size** size of the returned memory. In case no value was found 0 is returned. 


**Return**: error code 

### function info_updateNodeName

```cpp
INF_API enum InfoResult info_updateNodeName(
    InfoDB * idb,
    InfoNode node,
    const char * newname,
    int allow_overwrite
)
```

Update node_name. 

**Parameters**: 

  * **handle** database handle. 
  * **node** node that require change. 
  * **newname** new name of node. 
  * **allow_overwrite** acts when destination (newname) exists. 


**Return**: error code 

### function info_writeInt

```cpp
INF_API enum InfoResult info_writeInt(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    int value
)
```

Write int value to the database. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. 
  * **value** int value to be written. 


**Return**: error code 

### function info_writeUnsignedInt

```cpp
INF_API enum InfoResult info_writeUnsignedInt(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    unsigned int value
)
```

Write unsigned int value to the database. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. 
  * **value** unsigned int value to be written. 


**Return**: error code 

### function info_writeDouble

```cpp
INF_API enum InfoResult info_writeDouble(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    double value
)
```

Write double value to the database. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. 
  * **value** double value to be written. 


**Return**: error code 

### function info_writeString

```cpp
INF_API enum InfoResult info_writeString(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    const char * value
)
```

Write string value to the database. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. 
  * **value** C-string to be written, may be `NULL`, in this case an empty value of type [INFO_VOID](group__propdb.md#enumvalue-info-void) is written 


**Return**: error code 

### function info_writeBinary

```cpp
INF_API enum InfoResult info_writeBinary(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    const void * value,
    int size
)
```

Write value from the database as chunk of memory. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. 
  * **value** pointer to memory region to be written, may be `NULL`, in this case an empty value of type [INFO_VOID](group__propdb.md#enumvalue-info-void) is written 
  * **size** number of bytes to be written 


**Return**: error code 

### function info_delete

```cpp
INF_API enum InfoResult info_delete(
    InfoDB * handle,
    InfoNode parent,
    const char * path
)
```

Delete a node and all of its child nodes from the database. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. 


**Return**: error code 

### function info_list

```cpp
INF_API enum InfoResult info_list(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    struct InfoChildren ** list
)
```

Obtain a list of the names of all direct child nodes of a node. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **list** pointer to list of child names that has been allocated using malloc(). All information is stored in a single block of memory. Use free() to release when done. 


**Return**: error code 

**Note**: Names in the result are similar to strcmp but with special handling of contained numbers: These are treated as single character and compared by value, i.e. sorting "z","n2","n10","n1","a" would be listed as "a","n1","n2","n10","z" ("n2" is listed before "n10" since 2<10) 

### function info_incrementInt

```cpp
INF_API enum InfoResult info_incrementInt(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    int delta,
    int * value
)
```

Atomically increment an integer by some delta. 

**Parameters**: 

  * **handle** database handle 
  * **parent** parent node used as starting point for the path. Use [INFO_ROOT](group__propdb.md#enumvalue-info-root) to address relative to the root of the tree. 
  * **path** path see sect-path 
  * **delta** amount by which to increment the value 
  * **value** pointer for resulting value after increment, if `NULL` no value will be returned. 


**Return**: error code 

**Note**: If the value does not exist it is created with a default value of 0, i.e. it will have the value _delta_ after incrementing. 

### function info_getPath

```cpp
INF_API enum InfoResult info_getPath(
    InfoDB * handle,
    InfoNode node,
    char ** path
)
```

Determine the absolute path of a node. 

**Parameters**: 

  * **handle** database handle 
  * **node** parent node for which to determine the path 
  * **path** absolute path of the node as C-string that has been allocated using malloc(). Use free() to release it when not needed any longer. In case of error `NULL` is returned. 


**Return**: error code 

### function info_walkTree

```cpp
INF_API enum InfoResult info_walkTree(
    InfoDB * handle,
    InfoNode parent,
    const char * path,
    int(*)(void *data, const char *path, struct InfoReference *info) cb,
    void * data
)
```

Recursively walk over the nodes of the (sub-) tree and invoke the callback for each node. 

**Parameters**: 

  * **handle** database handle; 
  * **parent** parent node of the (sub-) tree 
  * **path** path see sect-path 
  * **cb** callback that will be invoked for node _parent/path_ and all of its descendant nodes. The callback is invoked with the path and a handle to read the type and value stored in that node. 
  * **data** data pointer that is passed on to the callback 


**Return**: error code 

### function info_nodeGetType

```cpp
INF_API enum InfoResult info_nodeGetType(
    struct InfoReference * info,
    enum InfoType * type
)
```

Determine type of a node. 

**Parameters**: 

  * **info** handle provided to callback function 
  * **type** pointer for storing the type of the value in the database. In case no value was found it is set to [INFO_VOID](group__propdb.md#enumvalue-info-void). 


**Return**: error code 

### function info_nodeReadInt

```cpp
INF_API enum InfoResult info_nodeReadInt(
    struct InfoReference * info,
    int * value
)
```

Read value from the database and convert it to int, if required. 

**Parameters**: 

  * **info** handle provided to callback function 
  * **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged. 


**Return**: error code 

### function info_nodeReadDouble

```cpp
INF_API enum InfoResult info_nodeReadDouble(
    struct InfoReference * info,
    double * value
)
```

Read value from the database and convert it to double, if required. 

**Parameters**: 

  * **info** handle provided to callback function 
  * **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged. 


**Return**: error code 

### function info_nodeReadString

```cpp
INF_API enum InfoResult info_nodeReadString(
    struct InfoReference * info,
    char ** value
)
```

Read value from the database and convert it to a string, if required. 

**Parameters**: 

  * **info** handle provided to callback function 
  * **value** pointer for storing the string. The string is returned as C-string in memory that has been allocated using malloc(), the returned string has to be released using free() when done. In case no value was found `NULL` is returned. 


**Return**: error code 

### function info_nodeReadBinary

```cpp
INF_API enum InfoResult info_nodeReadBinary(
    struct InfoReference * info,
    void ** value,
    int * size
)
```

Read value from the database as chunk of memory. 

**Parameters**: 

  * **info** handle provided to callback function 
  * **value** pointer for storing the chunk of memory. The memory has been allocated using malloc(), it has to be released using free() when done. In case no value was found or in case _size_ is 0 then `NULL` is returned. 
  * **size** size of the returned memory. In case no value was found 0 is returned. 


**Return**: error code 



## Macros Documentation

### define INF_API

```cpp
#define INF_API 
```


### define PROP_NAME

```cpp
#define PROP_NAME "registry"
```

property table name 

## Source code

```cpp

#ifndef INFODB_H_
#define INFODB_H_

#ifndef INF_API

#ifdef _VRXEVO
#   ifdef _INF_API_EXPORT
#       define INF_API __declspec(dllexport)
#   else
#       define INF_API __declspec(dllimport)
#   endif
#else
#   define INF_API
#endif
#endif

#define PROP_NAME   "registry"


#ifdef __cplusplus
extern "C"
{
#endif




struct InfoChildren
{
    int count;    
    char **name;    
};


enum InfoResult
{
    INFO_OK = 0,    
    INFO_FAIL = -1,    
    INFO_NO_DB = -2,    
    INFO_NOT_FOUND = -3,    
    INFO_INVALID_PARAM = -4,    
    INFO_BUSY = -5,    
    INFO_MEM = -6,    
    INFO_BREAK = -7,    
    INFO_NODE_NAME_INVALID = -8,    

    INFO_NOT_IMPL = -900,    
    INFO_NOT_SUPP = -901    
};

enum InfoType
{
    INFO_VOID,    
    INFO_INTEGER,    
    INFO_NUMBER,    
    INFO_STRING,    
    INFO_BINARY    
};

enum InfoMode
{
    INFO_READ_ONLY,    
    INFO_READ_WRITE    
};

enum InfoOption
{
    INFO_OPT_DISABLE_AUTOCOMMIT = (0x1 << 0), 
    INFO_OPT_MULTIPLE_ENTRIES   = (0x1 << 1)  
};

typedef long long InfoNode;

struct InfoDBHandle;
struct InfoReference;

typedef struct InfoDBHandle InfoDB;

enum
{
    INFO_ROOT = 0    
};

INF_API const char *info_getVersion(void);

INF_API InfoDB *info_opendb(const char *filename, enum InfoMode mode);

INF_API void info_closedb(InfoDB *handle);

INF_API enum InfoResult info_setOptions(InfoDB *handle, int options);

INF_API int info_getOptions(InfoDB *handle);

INF_API enum InfoResult info_autocommit(InfoDB *handle, int enable);

INF_API enum InfoResult info_transactionBegin(InfoDB *idb);

INF_API enum InfoResult info_transactionCommit(InfoDB *idb);

INF_API enum InfoResult info_transactionRollback(InfoDB *idb);

INF_API InfoNode info_find(InfoDB *handle, InfoNode parent, const char *path);

INF_API enum InfoResult info_getType(InfoDB *handle, InfoNode parent, const char *path, enum InfoType *type);

INF_API enum InfoResult info_readInt(InfoDB *handle, InfoNode parent, const char *path, int *value);

INF_API enum InfoResult info_readUnsignedInt(InfoDB *handle, InfoNode parent, const char *path, unsigned int *value);

INF_API enum InfoResult info_readDouble(InfoDB *handle, InfoNode parent, const char *path, double *value);

INF_API enum InfoResult info_readString(InfoDB *handle, InfoNode parent, const char *path, char **value);

INF_API enum InfoResult info_readBinary(InfoDB *handle, InfoNode parent, const char *path, void **value, int *size);


INF_API enum InfoResult info_updateNodeName(InfoDB *idb, InfoNode node, const char *newname, int allow_overwrite);

INF_API enum InfoResult info_writeInt(InfoDB *handle, InfoNode parent, const char *path, int value);


INF_API enum InfoResult info_writeUnsignedInt(InfoDB *handle, InfoNode parent, const char *path, unsigned int value);


INF_API enum InfoResult info_writeDouble(InfoDB *handle, InfoNode parent, const char *path, double value);

INF_API enum InfoResult info_writeString(InfoDB *handle, InfoNode parent, const char *path, const char *value);

INF_API enum InfoResult info_writeBinary(InfoDB *handle, InfoNode parent, const char *path, const void *value,
                                             int size);


INF_API enum InfoResult info_delete(InfoDB *handle, InfoNode parent, const char *path);



INF_API enum InfoResult info_list(InfoDB *handle, InfoNode parent, const char *path, struct InfoChildren **list);

INF_API enum InfoResult info_incrementInt(InfoDB *handle, InfoNode parent, const char *path, int delta, int *value);

INF_API enum InfoResult info_getPath(InfoDB *handle, InfoNode node, char **path);

INF_API enum InfoResult info_walkTree(InfoDB *handle, InfoNode parent, const char *path,
                                          int(*cb)(void *data, const char *path, struct InfoReference *info),
                                          void *data);

INF_API enum InfoResult info_nodeGetType(struct InfoReference *info, enum InfoType *type);

INF_API enum InfoResult info_nodeReadInt(struct InfoReference *info, int *value);

INF_API enum InfoResult info_nodeReadDouble(struct InfoReference *info, double *value);

INF_API enum InfoResult info_nodeReadString(struct InfoReference *info, char **value);

INF_API enum InfoResult info_nodeReadBinary(struct InfoReference *info, void **value, int *size);

#ifdef __cplusplus
}
#endif

#endif // INFODB_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

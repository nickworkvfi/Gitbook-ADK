---
title: com_adksec_cmd::CTransactionValue

---

# com_adksec_cmd::CTransactionValue






`#include <CTransactionData.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ePermissionFlags](classcom__adksec__cmd_1_1_c_transaction_value.md#enum-epermissionflags)** { PermPrivate = 0x00, PermWriteAble = 0x01, PermReadAble = 0x10, PermWriteOnly = PermWriteAble, PermReadOnly = PermReadAble, PermReadWrite = PermWriteAble | PermReadAble, PermDefault = PermReadWrite} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-ctransactionvalue)**() |
| | **[CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-ctransactionvalue)**(const std::string & s) |
| | **[CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-ctransactionvalue)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & json) |
| | **[CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-ctransactionvalue)**(const int & data) |
| | **[CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-ctransactionvalue)**(const std::vector< uint8_t > & vData) |
| | **[CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-ctransactionvalue)**(const uint8_t * pData, size_t len) |
| | **[~CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md#function-~ctransactionvalue)**() |
| std::string | **[dump](classcom__adksec__cmd_1_1_c_transaction_value.md#function-dump)**() const |
| void | **[load](classcom__adksec__cmd_1_1_c_transaction_value.md#function-load)**(const std::string & jsonString) |
| void | **[load](classcom__adksec__cmd_1_1_c_transaction_value.md#function-load)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & js) |
| bool | **[getBool](classcom__adksec__cmd_1_1_c_transaction_value.md#function-getbool)**() const |
| int | **[getInt](classcom__adksec__cmd_1_1_c_transaction_value.md#function-getint)**() const |
| std::string | **[getString](classcom__adksec__cmd_1_1_c_transaction_value.md#function-getstring)**() const |
| std::vector< uint8_t > | **[getBuffer](classcom__adksec__cmd_1_1_c_transaction_value.md#function-getbuffer)**() const |
| std::vector< uint8_t > | **[getRaw](classcom__adksec__cmd_1_1_c_transaction_value.md#function-getraw)**() const |
| void | **[cleanBuffer](classcom__adksec__cmd_1_1_c_transaction_value.md#function-cleanbuffer)**() |
| | **[operator bool](classcom__adksec__cmd_1_1_c_transaction_value.md#function-operator-bool)**() const |
| | **[operator int](classcom__adksec__cmd_1_1_c_transaction_value.md#function-operator-int)**() const |
| | **[operator uint8_t](classcom__adksec__cmd_1_1_c_transaction_value.md#function-operator-uint8-t)**() const |
| | **[operator uint32_t](classcom__adksec__cmd_1_1_c_transaction_value.md#function-operator-uint32-t)**() const |
| | **[operator std::string](classcom__adksec__cmd_1_1_c_transaction_value.md#function-operator-stdstring)**() const |
| | **[operator std::vector< uint8_t >](classcom__adksec__cmd_1_1_c_transaction_value.md#function-operator-stdvector<-uint8-t->)**() const |
| void | **[restrictPermissions](classcom__adksec__cmd_1_1_c_transaction_value.md#function-restrictpermissions)**([bitMask_t](namespacecom__adksec__cmd.md#typedef-bitmask-t) allowedPermissions) |
| [bitMask_t](namespacecom__adksec__cmd.md#typedef-bitmask-t) | **[getPermissions](classcom__adksec__cmd_1_1_c_transaction_value.md#function-getpermissions)**() const |
| bool | **[isWritable](classcom__adksec__cmd_1_1_c_transaction_value.md#function-iswritable)**() const |
| bool | **[isReadable](classcom__adksec__cmd_1_1_c_transaction_value.md#function-isreadable)**() const |
| bool | **[isWritable](classcom__adksec__cmd_1_1_c_transaction_value.md#function-iswritable)**([bitMask_t](namespacecom__adksec__cmd.md#typedef-bitmask-t) permissionFlags) |
| bool | **[isReadable](classcom__adksec__cmd_1_1_c_transaction_value.md#function-isreadable)**([bitMask_t](namespacecom__adksec__cmd.md#typedef-bitmask-t) permissionFlags) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[CTransactionData](classcom__adksec__cmd_1_1_c_transaction_value.md#friend-ctransactiondata)**  |

## Public Types Documentation

### enum ePermissionFlags

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PermPrivate | 0x00|   |
| PermWriteAble | 0x01|   |
| PermReadAble | 0x10|   |
| PermWriteOnly | PermWriteAble| 01 - write only   |
| PermReadOnly | PermReadAble| 10 - read only   |
| PermReadWrite | PermWriteAble \| PermReadAble| 11 - read/write   |
| PermDefault | PermReadWrite|   |




## Public Functions Documentation

### function CTransactionValue

```cpp
CTransactionValue()
```


### function CTransactionValue

```cpp
CTransactionValue(
    const std::string & s
)
```


### function CTransactionValue

```cpp
CTransactionValue(
    const vfiipc::JSObject & json
)
```


### function CTransactionValue

```cpp
CTransactionValue(
    const int & data
)
```


### function CTransactionValue

```cpp
CTransactionValue(
    const std::vector< uint8_t > & vData
)
```


### function CTransactionValue

```cpp
CTransactionValue(
    const uint8_t * pData,
    size_t len
)
```


### function ~CTransactionValue

```cpp
~CTransactionValue()
```


### function dump

```cpp
std::string dump() const
```


**Return**: JSON string 

get a json representation of the object 


### function load

```cpp
void load(
    const std::string & jsonString
)
```


### function load

```cpp
void load(
    const vfiipc::JSObject & js
)
```


### function getBool

```cpp
bool getBool() const
```


### function getInt

```cpp
int getInt() const
```


### function getString

```cpp
std::string getString() const
```


### function getBuffer

```cpp
std::vector< uint8_t > getBuffer() const
```


### function getRaw

```cpp
std::vector< uint8_t > getRaw() const
```


### function cleanBuffer

```cpp
void cleanBuffer()
```


### function operator bool

```cpp
inline operator bool() const
```


### function operator int

```cpp
inline operator int() const
```


### function operator uint8_t

```cpp
inline operator uint8_t() const
```


### function operator uint32_t

```cpp
inline operator uint32_t() const
```


### function operator std::string

```cpp
inline operator std::string() const
```


### function operator std::vector< uint8_t >

```cpp
inline operator std::vector< uint8_t >() const
```


### function restrictPermissions

```cpp
inline void restrictPermissions(
    bitMask_t allowedPermissions
)
```


**Parameters**: 

  * **allowedPermissions** 


**Note**: it's not possible to grant additional permissions again after they have been restricted 

reduce the Permissions of this value 


### function getPermissions

```cpp
inline bitMask_t getPermissions() const
```


**Return**: Permissions 

provide the Permissions of this value 


### function isWritable

```cpp
inline bool isWritable() const
```


### function isReadable

```cpp
inline bool isReadable() const
```


### function isWritable

```cpp
static inline bool isWritable(
    bitMask_t permissionFlags
)
```


**Parameters**: 

  * **permissionFlags** value of ePermissionFlags 


**Return**: 

test if writing is allowed 


### function isReadable

```cpp
static inline bool isReadable(
    bitMask_t permissionFlags
)
```


**Parameters**: 

  * **permissionFlags** value of ePermissionFlags 


**Return**: 

test if reading is allowed 


## Friends

### friend CTransactionData

```cpp
friend class CTransactionData;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
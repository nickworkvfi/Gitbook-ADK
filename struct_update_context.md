---
title: UpdateContext

---

# UpdateContext





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[UpdateContext](struct_update_context.md#function-updatecontext)**() |
| virtual | **[~UpdateContext](struct_update_context.md#function-~updatecontext)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[uploadType](struct_update_context.md#variable-uploadtype)**  |
| unsigned int | **[paketNbr](struct_update_context.md#variable-paketnbr)**  |
| void * | **[handle](struct_update_context.md#variable-handle)**  |
| [mADK_PP_ProtBusyLock](classm_a_d_k___p_p___prot_busy_lock.md) * | **[busy_lock](struct_update_context.md#variable-busy-lock)**  |
| string | **[file](struct_update_context.md#variable-file)**  |
| string | **[dest](struct_update_context.md#variable-dest)**  |

## Public Functions Documentation

### function UpdateContext

```cpp
inline UpdateContext()
```


constructor: init variables obtain the SDI busy lock 


### function ~UpdateContext

```cpp
inline virtual ~UpdateContext()
```


destructor: resets the SDI busy lock and clears the uploaded update file 


## Public Attributes Documentation

### variable uploadType

```cpp
unsigned char uploadType;
```


upload tpye, e.g. UPLOAD_TYPE_SOFTWARE_UPDATE 


### variable paketNbr

```cpp
unsigned int paketNbr;
```


package number 


### variable handle

```cpp
void * handle;
```


connection handle 


### variable busy_lock

```cpp
mADK_PP_ProtBusyLock * busy_lock;
```


SDI busy lock object 


### variable file

```cpp
string file;
```


upload file for update 


### variable dest

```cpp
string dest;
```


destination of the update file (in case of config file upload) 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
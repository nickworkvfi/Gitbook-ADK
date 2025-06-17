---
title: mADK_PP_ProtBusyLock

---

# mADK_PP_ProtBusyLock



 [More...](#detailed-description)


`#include <madk_pp_protocol.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[mADK_PP_ProtBusyLock](classm_a_d_k___p_p___prot_busy_lock.md#function-madk-pp-protbusylock)**(bool cmd_ctx =true) |
| virtual | **[~mADK_PP_ProtBusyLock](classm_a_d_k___p_p___prot_busy_lock.md#function-~madk-pp-protbusylock)**() |
| void | **[unlock](classm_a_d_k___p_p___prot_busy_lock.md#function-unlock)**() |
| bool | **[locked](classm_a_d_k___p_p___prot_busy_lock.md#function-locked)**() const |

## Detailed Description

```cpp
class mADK_PP_ProtBusyLock;
```


helper class to obtain the protocol busy lock and automatic lock release with the object deletion 

## Public Functions Documentation

### function mADK_PP_ProtBusyLock

```cpp
inline mADK_PP_ProtBusyLock(
    bool cmd_ctx =true
)
```


**Parameters**: 

  * **cmd_ctx** set true, if the lock shall be obtained while processing an active SDI command, see [mADK_PP_Prot::set_busy()](classm_a_d_k___p_p___prot.md#function-set-busy) for more details 


constructer to obtain the protocol busy lock 


### function ~mADK_PP_ProtBusyLock

```cpp
inline virtual ~mADK_PP_ProtBusyLock()
```


destructer automatically doing the unlock 


### function unlock

```cpp
inline void unlock()
```


function to release the protocol busy lock, if this might be required before object deletion 


### function locked

```cpp
inline bool locked() const
```


function to check, if the protocol busy lock was successfully obtained after object construction 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
---
title: _lock_thread_info_t

---

# _lock_thread_info_t





## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[in_use](struct__lock__thread__info__t.md#variable-in-use)**  |
| pthread_t | **[lock_thread_id](struct__lock__thread__info__t.md#variable-lock-thread-id)**  |
| vhq_result_t | **[lock_ret_val](struct__lock__thread__info__t.md#variable-lock-ret-val)**  |
| char[MAX_SERVER_INSTANCE_NAME_LEN] | **[prev_server_instance](struct__lock__thread__info__t.md#variable-prev-server-instance)**  |
| VHQRootRequestMsg | **[requestMsg](struct__lock__thread__info__t.md#variable-requestmsg)**  |

## Public Attributes Documentation

### variable in_use

```cpp
bool in_use;
```


### variable lock_thread_id

```cpp
pthread_t lock_thread_id;
```


### variable lock_ret_val

```cpp
vhq_result_t lock_ret_val;
```


### variable prev_server_instance

```cpp
char[MAX_SERVER_INSTANCE_NAME_LEN] prev_server_instance;
```


### variable requestMsg

```cpp
VHQRootRequestMsg requestMsg;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
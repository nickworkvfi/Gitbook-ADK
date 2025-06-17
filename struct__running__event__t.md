---
title: _running_event_t

---

# _running_event_t





## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[in_use](struct__running__event__t.md#variable-in-use)**  |
| event_set_id_t | **[event_set_id](struct__running__event__t.md#variable-event-set-id)**  |
| event_id_t | **[event_id](struct__running__event__t.md#variable-event-id)**  |
| event_thread_arg * | **[arg_p](struct__running__event__t.md#variable-arg-p)**  |
| pthread_t | **[thread_id](struct__running__event__t.md#variable-thread-id)**  |
| time_t | **[start_time](struct__running__event__t.md#variable-start-time)**  |
| time_t | **[expire_time](struct__running__event__t.md#variable-expire-time)**  |
| event_result_t | **[status](struct__running__event__t.md#variable-status)**  |
| event_result_t | **[static_result](struct__running__event__t.md#variable-static-result)**  |
| callback_t | **[eCallback](struct__running__event__t.md#variable-ecallback)**  |
| pthread_mutex_t | **[wd_mutex](struct__running__event__t.md#variable-wd-mutex)**  |
| bool | **[release_instance](struct__running__event__t.md#variable-release-instance)**  |

## Public Attributes Documentation

### variable in_use

```cpp
bool in_use;
```


### variable event_set_id

```cpp
event_set_id_t event_set_id;
```


### variable event_id

```cpp
event_id_t event_id;
```


### variable arg_p

```cpp
event_thread_arg * arg_p;
```


### variable thread_id

```cpp
pthread_t thread_id;
```


### variable start_time

```cpp
time_t start_time;
```


### variable expire_time

```cpp
time_t expire_time;
```


### variable status

```cpp
event_result_t status;
```


### variable static_result

```cpp
event_result_t static_result;
```


### variable eCallback

```cpp
callback_t eCallback;
```


### variable wd_mutex

```cpp
pthread_mutex_t wd_mutex;
```


### variable release_instance

```cpp
bool release_instance;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
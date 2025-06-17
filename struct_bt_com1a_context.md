---
title: BtCom1aContext

---

# BtCom1aContext





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[BtCom1aContext](struct_bt_com1a_context.md#function-btcom1acontext)**(bool enable_ui, bool reconnect) |
| virtual | **[~BtCom1aContext](struct_bt_com1a_context.md#function-~btcom1acontext)**() |
| bool | **[wait](struct_bt_com1a_context.md#function-wait)**(unsigned seconds) |
| void * | **[ui_thread_func](struct_bt_com1a_context.md#function-ui-thread-func)**(void * data) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[mutex](struct_bt_com1a_context.md#variable-mutex)**  |
| pthread_cond_t | **[cond](struct_bt_com1a_context.md#variable-cond)**  |
| bool | **[flag](struct_bt_com1a_context.md#variable-flag)**  |
| bool | **[abort_ui](struct_bt_com1a_context.md#variable-abort-ui)**  |
| bool | **[ui_enabled](struct_bt_com1a_context.md#variable-ui-enabled)**  |
| bool | **[is_reconnect](struct_bt_com1a_context.md#variable-is-reconnect)**  |
| pthread_t | **[ui_thread](struct_bt_com1a_context.md#variable-ui-thread)**  |

## Public Functions Documentation

### function BtCom1aContext

```cpp
inline BtCom1aContext(
    bool enable_ui,
    bool reconnect
)
```


### function ~BtCom1aContext

```cpp
inline virtual ~BtCom1aContext()
```


### function wait

```cpp
inline bool wait(
    unsigned seconds
)
```


### function ui_thread_func

```cpp
static inline void * ui_thread_func(
    void * data
)
```


## Public Attributes Documentation

### variable mutex

```cpp
pthread_mutex_t mutex;
```


### variable cond

```cpp
pthread_cond_t cond;
```


### variable flag

```cpp
bool flag;
```


### variable abort_ui

```cpp
bool abort_ui;
```


### variable ui_enabled

```cpp
bool ui_enabled;
```


### variable is_reconnect

```cpp
bool is_reconnect;
```


### variable ui_thread

```cpp
pthread_t ui_thread;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
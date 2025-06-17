---
title: ThreadControl

---

# ThreadControl






`#include <thread.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ThreadState](class_thread_control.md#enum-threadstate)** { Initialized, Running, Stopped, Detached} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[ThreadControl](class_thread_control.md#function-threadcontrol)**([Thread](class_thread.md) * o, int detach =0) |
| virtual | **[~ThreadControl](class_thread_control.md#function-~threadcontrol)**() |
| void * | **[wait](class_thread_control.md#function-wait)**() |
| [ThreadState](class_thread_control.md#enum-threadstate) | **[getState](class_thread_control.md#function-getstate)**() const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [ThreadControl::ThreadState](class_thread_control.md#enum-threadstate) | **[threadState](class_thread_control.md#variable-threadstate)**  |

## Public Types Documentation

### enum ThreadState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Initialized | |   |
| Running | |   |
| Stopped | |   |
| Detached | |   |




## Public Functions Documentation

### function ThreadControl

```cpp
ThreadControl(
    Thread * o,
    int detach =0
)
```


### function ~ThreadControl

```cpp
inline virtual ~ThreadControl()
```


### function wait

```cpp
void * wait()
```


### function getState

```cpp
inline ThreadState getState() const
```


## Public Attributes Documentation

### variable threadState

```cpp
enum ThreadControl::ThreadState threadState;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
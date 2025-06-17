---
title: Thread

---

# Thread






`#include <thread.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Thread](class_thread.md#function-thread)**() |
| virtual | **[~Thread](class_thread.md#function-~thread)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void * | **[main](class_thread.md#function-main)**() =0 |
| virtual void | **[thread_init](class_thread.md#function-thread-init)**() |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[ThreadControl](class_thread.md#friend-threadcontrol)**  |

## Public Functions Documentation

### function Thread

```cpp
inline Thread()
```


### function ~Thread

```cpp
inline virtual ~Thread()
```


## Protected Functions Documentation

### function main

```cpp
virtual void * main() =0
```


### function thread_init

```cpp
inline virtual void thread_init()
```


## Friends

### friend ThreadControl

```cpp
friend class ThreadControl;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
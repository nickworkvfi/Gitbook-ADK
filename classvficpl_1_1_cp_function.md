---
title: vficpl::CpFunction

---

# vficpl::CpFunction



 [More...](#detailed-description)


`#include <CpFunctional.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpFunction](classvficpl_1_1_cp_function.md#function-cpfunction)**() |
| | **[~CpFunction](classvficpl_1_1_cp_function.md#function-~cpfunction)**() |
| template <typename F \> <br>void | **[assign](classvficpl_1_1_cp_function.md#function-assign)**([F](md5_8cpp.md#define-f) f) |
| template <typename M ,typename T \> <br>void | **[assign](classvficpl_1_1_cp_function.md#function-assign)**(T * obj, M mem) |
| R | **[operator()](classvficpl_1_1_cp_function.md#function-operator())**(A1 arg1, A2 arg2, A3 arg3) |

## Detailed Description

```cpp
template <typename R ,
typename A1 ,
typename A2 ,
typename A3 >
class vficpl::CpFunction;
```

## Public Functions Documentation

### function CpFunction

```cpp
inline CpFunction()
```


### function ~CpFunction

```cpp
inline ~CpFunction()
```


### function assign

```cpp
template <typename F >
inline void assign(
    F f
)
```


### function assign

```cpp
template <typename M ,
typename T >
inline void assign(
    T * obj,
    M mem
)
```


### function operator()

```cpp
inline R operator()(
    A1 arg1,
    A2 arg2,
    A3 arg3
)
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
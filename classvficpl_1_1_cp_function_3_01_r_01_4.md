---
title: vficpl::CpFunction< R >

---

# vficpl::CpFunction< R >



 [More...](#detailed-description)


`#include <CpFunctional.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpFunction](classvficpl_1_1_cp_function_3_01_r_01_4.md#function-cpfunction)**() |
| | **[~CpFunction](classvficpl_1_1_cp_function_3_01_r_01_4.md#function-~cpfunction)**() |
| template <typename F \> <br>void | **[assign](classvficpl_1_1_cp_function_3_01_r_01_4.md#function-assign)**([F](md5_8cpp.md#define-f) f) |
| template <typename M ,typename T \> <br>void | **[assign](classvficpl_1_1_cp_function_3_01_r_01_4.md#function-assign)**(T * obj, M mem) |
| R | **[operator()](classvficpl_1_1_cp_function_3_01_r_01_4.md#function-operator())**() |

## Detailed Description

```cpp
template <typename R >
class vficpl::CpFunction< R >;
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
inline R operator()()
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
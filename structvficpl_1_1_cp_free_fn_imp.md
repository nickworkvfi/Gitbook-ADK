---
title: vficpl::CpFreeFnImp

---

# vficpl::CpFreeFnImp



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherits from [CpBaseFnImp< R, void, void, void >](structvficpl_1_1_cp_base_fn_imp.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpFreeFnImp](structvficpl_1_1_cp_free_fn_imp.md#function-cpfreefnimp)**([F](md5_8cpp.md#define-f) fn) |
| virtual R | **[invoke](structvficpl_1_1_cp_free_fn_imp.md#function-invoke)**(A1 a1, A2 a2, A3 a3) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [F](md5_8cpp.md#define-f) | **[m_fn](structvficpl_1_1_cp_free_fn_imp.md#variable-m-fn)**  |

## Additional inherited members

**Public Functions inherited from [CpBaseFnImp< R, void, void, void >](structvficpl_1_1_cp_base_fn_imp.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp.md#function-~cpbasefnimp)**() |


## Detailed Description

```cpp
template <typename F ,
typename R ,
typename A1  =void,
typename A2  =void,
typename A3  =void>
struct vficpl::CpFreeFnImp;
```

## Public Functions Documentation

### function CpFreeFnImp

```cpp
inline CpFreeFnImp(
    F fn
)
```


### function invoke

```cpp
inline virtual R invoke(
    A1 a1,
    A2 a2,
    A3 a3
)
```


## Public Attributes Documentation

### variable m_fn

```cpp
F m_fn;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
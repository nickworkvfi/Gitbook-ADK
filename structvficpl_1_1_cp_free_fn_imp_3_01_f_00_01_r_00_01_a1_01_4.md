---
title: vficpl::CpFreeFnImp< F, R, A1 >

---

# vficpl::CpFreeFnImp< F, R, A1 >



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherits from [CpBaseFnImp< R, A1 >](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpFreeFnImp](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md#function-cpfreefnimp)**([F](md5_8cpp.md#define-f) fn) |
| virtual R | **[invoke](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md#function-invoke)**(A1 a1) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [F](md5_8cpp.md#define-f) | **[m_fn](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md#variable-m-fn)**  |

## Additional inherited members

**Public Functions inherited from [CpBaseFnImp< R, A1 >](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md#function-~cpbasefnimp)**() |


## Detailed Description

```cpp
template <typename F ,
typename R ,
typename A1 >
struct vficpl::CpFreeFnImp< F, R, A1 >;
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
    A1 a1
)
```


**Reimplements**: [vficpl::CpBaseFnImp< R, A1 >::invoke](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md#function-invoke)


## Public Attributes Documentation

### variable m_fn

```cpp
F m_fn;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
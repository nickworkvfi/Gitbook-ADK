---
title: vficpl::CpFreeFnImp< F, R >

---

# vficpl::CpFreeFnImp< F, R >



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherits from [CpBaseFnImp< R >](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpFreeFnImp](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md#function-cpfreefnimp)**([F](md5_8cpp.md#define-f) fn) |
| virtual R | **[invoke](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md#function-invoke)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [F](md5_8cpp.md#define-f) | **[m_fn](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md#variable-m-fn)**  |

## Additional inherited members

**Public Functions inherited from [CpBaseFnImp< R >](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md#function-~cpbasefnimp)**() |


## Detailed Description

```cpp
template <typename F ,
typename R >
struct vficpl::CpFreeFnImp< F, R >;
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
inline virtual R invoke()
```


**Reimplements**: [vficpl::CpBaseFnImp< R >::invoke](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md#function-invoke)


## Public Attributes Documentation

### variable m_fn

```cpp
F m_fn;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
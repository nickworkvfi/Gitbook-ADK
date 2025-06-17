---
title: vficpl::CpMemberFnImp< M, T, R >

---

# vficpl::CpMemberFnImp< M, T, R >



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherits from [CpBaseFnImp< R >](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpMemberFnImp](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md#function-cpmemberfnimp)**(T * obj, M memfn) |
| | **[CpMemberFnImp](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md#function-cpmemberfnimp)**(T & obj, M memfn) |
| virtual R | **[invoke](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md#function-invoke)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| M | **[m_memfn](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md#variable-m-memfn)**  |
| T * | **[m_obj](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md#variable-m-obj)**  |

## Additional inherited members

**Public Functions inherited from [CpBaseFnImp< R >](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md#function-~cpbasefnimp)**() |


## Detailed Description

```cpp
template <typename M ,
typename T ,
typename R >
struct vficpl::CpMemberFnImp< M, T, R >;
```

## Public Functions Documentation

### function CpMemberFnImp

```cpp
inline CpMemberFnImp(
    T * obj,
    M memfn
)
```


### function CpMemberFnImp

```cpp
inline CpMemberFnImp(
    T & obj,
    M memfn
)
```


### function invoke

```cpp
inline virtual R invoke()
```


**Reimplements**: [vficpl::CpBaseFnImp< R >::invoke](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md#function-invoke)


## Public Attributes Documentation

### variable m_memfn

```cpp
M m_memfn;
```


### variable m_obj

```cpp
T * m_obj;
```


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
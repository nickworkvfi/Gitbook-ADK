---
title: vficpl::CpMemberFnImp

---

# vficpl::CpMemberFnImp



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherits from [CpBaseFnImp< R, void, void, void >](structvficpl_1_1_cp_base_fn_imp.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CpMemberFnImp](structvficpl_1_1_cp_member_fn_imp.md#function-cpmemberfnimp)**(T * obj, M memfn) |
| | **[CpMemberFnImp](structvficpl_1_1_cp_member_fn_imp.md#function-cpmemberfnimp)**(T & obj, M memfn) |
| virtual R | **[invoke](structvficpl_1_1_cp_member_fn_imp.md#function-invoke)**(A1 a1, A2 a2, A3 a3) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| M | **[m_memfn](structvficpl_1_1_cp_member_fn_imp.md#variable-m-memfn)**  |
| T * | **[m_obj](structvficpl_1_1_cp_member_fn_imp.md#variable-m-obj)**  |

## Additional inherited members

**Public Functions inherited from [CpBaseFnImp< R, void, void, void >](structvficpl_1_1_cp_base_fn_imp.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp.md#function-~cpbasefnimp)**() |


## Detailed Description

```cpp
template <typename M ,
typename T ,
typename R ,
typename A1  =void,
typename A2  =void,
typename A3  =void>
struct vficpl::CpMemberFnImp;
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
inline virtual R invoke(
    A1 a1,
    A2 a2,
    A3 a3
)
```


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
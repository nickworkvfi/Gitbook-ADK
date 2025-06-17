---
title: vficpl::CpBaseFnImp< R, A1 >

---

# vficpl::CpBaseFnImp< R, A1 >



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherited by [CpFreeFnImp< F, R, A1 >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md), [CpMemberFnImp< M, T, R, A1 >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_00_01_a1_01_4.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md#function-~cpbasefnimp)**() |
| virtual R | **[invoke](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md#function-invoke)**(A1 ) =0 |

## Detailed Description

```cpp
template <typename R ,
typename A1 >
struct vficpl::CpBaseFnImp< R, A1 >;
```

## Public Functions Documentation

### function ~CpBaseFnImp

```cpp
inline virtual ~CpBaseFnImp()
```


### function invoke

```cpp
virtual R invoke(
    A1 
) =0
```


**Reimplemented by**: [vficpl::CpFreeFnImp< F, R, A1 >::invoke](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md#function-invoke), [vficpl::CpMemberFnImp< M, T, R, A1 >::invoke](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_00_01_a1_01_4.md#function-invoke)


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
---
title: vficpl::CpBaseFnImp< R >

---

# vficpl::CpBaseFnImp< R >



 [More...](#detailed-description)


`#include <CpFunctional.h>`

Inherited by [CpFreeFnImp< F, R >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md), [CpMemberFnImp< M, T, R >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md#function-~cpbasefnimp)**() |
| virtual R | **[invoke](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md#function-invoke)**() =0 |

## Detailed Description

```cpp
template <typename R >
struct vficpl::CpBaseFnImp< R >;
```

## Public Functions Documentation

### function ~CpBaseFnImp

```cpp
inline virtual ~CpBaseFnImp()
```


### function invoke

```cpp
virtual R invoke() =0
```


**Reimplemented by**: [vficpl::CpFreeFnImp< F, R >::invoke](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md#function-invoke), [vficpl::CpMemberFnImp< M, T, R >::invoke](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md#function-invoke)


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
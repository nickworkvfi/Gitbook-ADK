---
title: SECINS_ERROR_INFO

---

# SECINS_ERROR_INFO



 [More...](#detailed-description)


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char[CONTAINER_MAX_NAME_SIZE] | **[bundle_name](struct_s_e_c_i_n_s___e_r_r_o_r___i_n_f_o.md#variable-bundle-name)**  |
| char[CONTAINER_MAX_NAME_SIZE] | **[package_name](struct_s_e_c_i_n_s___e_r_r_o_r___i_n_f_o.md#variable-package-name)**  |

## Detailed Description

```cpp
struct SECINS_ERROR_INFO;
```


Additional information about Secins error. 

## Public Attributes Documentation

### variable bundle_name

```cpp
char[CONTAINER_MAX_NAME_SIZE] bundle_name;
```


Last failed bundle name 


### variable package_name

```cpp
char[CONTAINER_MAX_NAME_SIZE] package_name;
```


Last failed package name 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
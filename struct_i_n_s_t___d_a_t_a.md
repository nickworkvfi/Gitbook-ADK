---
title: INST_DATA
summary: Data to install a list of dl files. 

---

# INST_DATA



Data to install a list of dl files. 


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned int | **[inflags](struct_i_n_s_t___d_a_t_a.md#variable-inflags)**  |
| int | **[dlpathslength](struct_i_n_s_t___d_a_t_a.md#variable-dlpathslength)**  |
| char[] | **[dlpaths](struct_i_n_s_t___d_a_t_a.md#variable-dlpaths)**  |

## Public Attributes Documentation

### variable inflags

```cpp
unsigned int inflags;
```


Flag for installation, can be SECINS_FORCE_INSTALL, SECINS_FORCE_RESTART_APPS. SECINS_FORCE_REBOOT 


### variable dlpathslength

```cpp
int dlpathslength;
```


Full length of concatenated null terminated file paths 


### variable dlpaths

```cpp
char[] dlpaths;
```


Zero-length array pointing to concatenated null terminated file paths 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
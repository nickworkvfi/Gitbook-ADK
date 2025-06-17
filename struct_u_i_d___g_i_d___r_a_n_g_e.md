---
title: UID_GID_RANGE
summary: User/Group ID range. 

---

# UID_GID_RANGE



User/Group ID range. 


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[start_uid](struct_u_i_d___g_i_d___r_a_n_g_e.md#variable-start-uid)**  |
| int | **[num_uids](struct_u_i_d___g_i_d___r_a_n_g_e.md#variable-num-uids)**  |
| int | **[start_gid](struct_u_i_d___g_i_d___r_a_n_g_e.md#variable-start-gid)**  |
| int | **[num_gids](struct_u_i_d___g_i_d___r_a_n_g_e.md#variable-num-gids)**  |

## Public Attributes Documentation

### variable start_uid

```cpp
int start_uid;
```


Start User ID in the assigned range 


### variable num_uids

```cpp
int num_uids;
```


Number User IDs assigned. Valid UID range [start_uid:num_uids-1] 


### variable start_gid

```cpp
int start_gid;
```


Start Group ID in the assigned range 


### variable num_gids

```cpp
int num_gids;
```


Number Group IDs assigned. Valid UID range [start_gid:num_gids-1] 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
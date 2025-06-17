---
title: child_death_cert
summary: Application termination record. 

---

# child_death_cert



Application termination record. 


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[cause_of_death](structchild__death__cert.md#variable-cause-of-death)**  |
| int | **[death_details](structchild__death__cert.md#variable-death-details)**  |
| pid_t | **[pid](structchild__death__cert.md#variable-pid)**  |

## Public Attributes Documentation

### variable cause_of_death

```cpp
int cause_of_death;
```


Application termination cause 


### variable death_details

```cpp
int death_details;
```


Signal No / RC & 0xFF (0 ... 255 range) 


### variable pid

```cpp
pid_t pid;
```


Application pid 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
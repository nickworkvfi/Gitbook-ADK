---
title: SecinsDaemonAction
summary: Daemon name and action to perform. 

---

# SecinsDaemonAction



Daemon name and action to perform. 


`#include <libsecins.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char[SECINS_MAX_DAEMON_NAME] | **[daemon](struct_secins_daemon_action.md#variable-daemon)**  |
| int | **[action](struct_secins_daemon_action.md#variable-action)**  |

## Public Attributes Documentation

### variable daemon

```cpp
char[SECINS_MAX_DAEMON_NAME] daemon;
```


name of the daemon 


### variable action

```cpp
int action;
```


One of SECINS_DAEMON_XX values 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
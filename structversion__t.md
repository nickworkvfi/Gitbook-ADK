---
title: version_t

---

# version_t






`#include <svc_tms.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[major](structversion__t.md#variable-major)**  |
| int | **[minor](structversion__t.md#variable-minor)**  |
| int | **[maint](structversion__t.md#variable-maint)**  |
| int | **[hotfix](structversion__t.md#variable-hotfix)**  |
| char[16] | **[build](structversion__t.md#variable-build)**  |

## Public Attributes Documentation

### variable major

```cpp
int major;
```


Major Version 


### variable minor

```cpp
int minor;
```


Minor Version 


### variable maint

```cpp
int maint;
```


Maintenance Version 


### variable hotfix

```cpp
int hotfix;
```


Hotfix Version 


### variable build

```cpp
char[16] build;
```


Optional build string (i.e. rc1) 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
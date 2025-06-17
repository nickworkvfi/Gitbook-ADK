---
title: vfisysbase

---

# vfisysbase

**Module:** **[Low level system power management functions. Please use vfisyspm.h instead.](group__syspm.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysTransferToBase](namespacevfisysbase.md#function-systransfertobase)**(const std::string & ip_addr, const std::string & filename) |

## Detailed Description


Verifone system base (vfisysbase) namespace 


## Functions Documentation

### function sysTransferToBase

```cpp
SYS_INFO_API int sysTransferToBase(
    const std::string & ip_addr,
    const std::string & filename
)
```


Transfer "dl" file to base \ error codes: ERROR_REMOTE_DISCONNECT (1) ERROR_INVALID_RESPONSE (2) ERROR_SENDING_FILE (3) ERROR_FILE_SIZE_SENT (4) ERROR_CLOSING_SOCKET (5) ERROR_NO_SOCKET_FD (6) ERROR_FILE_NOT_FOUND (7) ERROR_DOWNLOAD_FAILED (8) Special OK return code indicating base has SI extended api (rebooted automatically) OK_BASE_SI_EXTENDED (100) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
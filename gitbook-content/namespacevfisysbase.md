---
hidden: true
title: vfisysbase Namespace ReferenceLow level system power management functions. Please use vfisyspm.h instead.
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysTransferToBase](#aa658507910d7a23d2a62b0193a284abf) (const std::string &ip_addr, const std::string &filename) |

## DetailedDescription {#detailed-description}

Verifone system base (vfisysbase) namespace

## FunctionDocumentation {#function-documentation}

## sysTransferToBase() <a href="#aa658507910d7a23d2a62b0193a284abf" id="aa658507910d7a23d2a62b0193a284abf"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfisysbase::sysTransferToBase</p>

Transfer \"dl\" file to base \\ error codes: ERROR_REMOTE_DISCONNECT (1) ERROR_INVALID_RESPONSE (2) ERROR_SENDING_FILE (3) ERROR_FILE_SIZE_SENT (4) ERROR_CLOSING_SOCKET (5) ERROR_NO_SOCKET_FD (6) ERROR_FILE_NOT_FOUND (7) ERROR_DOWNLOAD_FAILED (8) Special OK return code indicating base has SI extended api (rebooted automatically) OK_BASE_SI_EXTENDED (100)

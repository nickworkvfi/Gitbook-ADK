---
title: vficom::status

---

# vficom::status



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PipeStatus](namespacevficom_1_1status.md#enum-pipestatus)** { OK = 0, INVALID = 1, NOSUPPORT = 2, NOTREADY = 3, FAILED = 5, TIMEOUT = 6, STARVATION = 7, USER_INTERRUPT = 8, MAX_ENUM = 0x7FFFFFFF} |

## Types Documentation

### enum PipeStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OK | 0| No Error.   |
| INVALID | 1| Invalid request. This indicates an application programming error.   |
| NOSUPPORT | 2| Not supported. The requested action cannot complete under any circumstance.   |
| NOTREADY | 3| Try again in a short while.   |
| FAILED | 5| The action failed.   |
| TIMEOUT | 6| The action could not be completed in the requested time.   |
| STARVATION | 7| The system is unable to allocate resources to process this request.   |
| USER_INTERRUPT | 8| The FD given as the interrupt is active.   |
| MAX_ENUM | 0x7FFFFFFF|   |









-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
---
title: Graphical User Interface

---

# Graphical User Interface



## Namespaces

| Name           |
| -------------- |
| **[vfigui](namespacevfigui.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[UIError](group__vfigui.md#enum-uierror)** { UI_ERR_OK =  0, UI_ERR_ABORT = -1, UI_ERR_BACK = -2, UI_ERR_TIMEOUT = -3, UI_ERR_PROPERTY = -4, UI_ERR_WRONG_PIN = -5, UI_ERR_PARAMETER = -6, UI_ERR_PERMISSION = -7, UI_ERR_CANCELLED = -8, UI_ERR_REGION = -9, UI_ERR_FAIL = -10, UI_ERR_UNSUPPORTED = -11, UI_ERR_INVALID = -12, UI_ERR_WAIT_TIMEOUT = -13, UI_ERR_CONNECTION_LOST = -14, UI_ERR_PROTOCOL = -15, UI_ERR_SCRIPT = -16, UI_ERR_FILE_READ = -17, UI_ERR_RESTRICTED = -18, UI_ERR_MODIFIED = -19, UI_ERR_ACTION = -20, UI_ERR_DISPLAY = -21, UI_ERR_PIN_ENTRY_DENIED = -22} |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](group__vfigui.md#define-dllspec)**  |
|  | **[DllSpec](group__vfigui.md#define-dllspec)**  |

## Types Documentation

### enum UIError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_ERR_OK |  0|  no error  |
| UI_ERR_ABORT | -1|  abort by user  |
| UI_ERR_BACK | -2|  user selected back button  |
| UI_ERR_TIMEOUT | -3|  dialog timeout  |
| UI_ERR_PROPERTY | -4|  the property does not exist  |
| UI_ERR_WRONG_PIN | -5|  wrong PIN was entered  |
| UI_ERR_PARAMETER | -6|  parameter error  |
| UI_ERR_PERMISSION | -7|  insufficient permissions  |
| UI_ERR_CANCELLED | -8|  the dialog has been cancelled by callback or by displaying another dialog  |
| UI_ERR_REGION | -9|  the region is not known  |
| UI_ERR_FAIL | -10|  generic error  |
| UI_ERR_UNSUPPORTED | -11|  the function requested is not supported on the current platform/device/...  |
| UI_ERR_INVALID | -12|  an invalid transaction ID was provided  |
| UI_ERR_WAIT_TIMEOUT | -13|  timeout while waiting for the result of an async function  |
| UI_ERR_CONNECTION_LOST | -14|  cannot connect or lost connection to server  |
| UI_ERR_PROTOCOL | -15|  data received violated the protocol  |
| UI_ERR_SCRIPT | -16|  error occurred during script processing, check [uiScriptError()](namespacevfigui.md#function-uiscripterror) for more information about the error  |
| UI_ERR_FILE_READ | -17|  the file was not found or could not be read  |
| UI_ERR_RESTRICTED | -18|  the dialog was not shown due to security restrictions, e.g. using more than 3 buttons  |
| UI_ERR_MODIFIED | -19|  the old layout does not match  |
| UI_ERR_ACTION | -20|  invalid action provided  |
| UI_ERR_DISPLAY | -21|  invalid display  |
| UI_ERR_PIN_ENTRY_DENIED | -22|  requesting too many PIN sessions in a short period of time.  |




Verifone GUI namespace error codes returned by the functions 





## Macros Documentation

### define DllSpec

```
#define DllSpec 
```


### define DllSpec

```
#define DllSpec 
```




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
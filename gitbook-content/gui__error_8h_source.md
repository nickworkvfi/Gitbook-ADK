---
hidden: true
title: gui_error.h
---

<a href="gui__error_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef GUI_ERROR_H_2013_03_22
 2 #define GUI_ERROR_H_2013_03_22
 3 
 10 #ifdef __cplusplus
 11 #ifndef DOXYGEN
 12 namespace vfigui {
 13 #endif
 14 #endif
 15 
 17 enum UIError{
 18  // general errors
 19  UI_ERR_OK = 0,
 20  UI_ERR_ABORT = -1,
 21  UI_ERR_BACK = -2,
 22  UI_ERR_TIMEOUT = -3,
 23  UI_ERR_PROPERTY = -4,
 24  UI_ERR_WRONG_PIN = -5,
 25  UI_ERR_PARAMETER = -6,
 26  UI_ERR_PERMISSION = -7,
 27  UI_ERR_CANCELLED = -8,
 28  UI_ERR_REGION = -9,
 29  UI_ERR_FAIL = -10,
 30  UI_ERR_UNSUPPORTED = -11,
 31  UI_ERR_INVALID = -12,
 32  UI_ERR_WAIT_TIMEOUT = -13,
 33  UI_ERR_CONNECTION_LOST = -14,
 34  UI_ERR_PROTOCOL = -15,
 35  UI_ERR_SCRIPT = -16,
 36  UI_ERR_FILE_READ = -17,
 37  UI_ERR_RESTRICTED = -18,
 38  UI_ERR_MODIFIED = -19,
 39  UI_ERR_ACTION = -20,
 40  UI_ERR_DISPLAY = -21,
 41  UI_ERR_PIN_ENTRY_DENIED = -22
 42 };
 43 
 44 
 45 #ifdef __cplusplus
 46 #ifndef DOXYGEN
 47 }
 48 #endif
 49 #endif
 50 
 53 #endif
```

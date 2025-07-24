---
hidden: true
title: zontalk.h
---

<a href="netloader_2include_2zontalk_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef ZONTALKD_H_20221209
 2 #define ZONTALKD_H_20221209
 3 
 6 #include <string>
 7 #include <vector>
 8 
 9 #if defined _WIN32 && defined ZONTALK_SHARED_EXPORT
 10 # define DllSpec __declspec(dllexport)
 11 #elif defined __GNUC__ && defined ZONTALK_SHARED_EXPORT
 12 # define DllSpec __attribute__((visibility ("default")))
 13 #else
 14 # define DllSpec
 15 #endif
 16 
 18 
 19 #ifdef __cplusplus
 20 extern "C" {
 21 #endif
 22 
 24 enum ZonTalkResult {
 25  ZT_OK,
 26  ZT_RUNNING,
 27  ZT_ERROR
 28 };
 29 
 31 enum ZonTalkStatus {
 32  ZT_REBOOT_REQUESTED,
 33  ZT_STOP_REQUESTED,
 34  ZT_DISPLAY_MESSAGE,
 35  ZT_SET_TIME,
 37  ZT_DOWNLOAD_FILE=0x10,
 38  ZT_INSTALL_FILE,
 39  ZT_DOWNLOAD_OK,
 40  ZT_DOWNLOAD_ERROR,
 41  ZT_INSTALL_OK,
 42  ZT_INSTALL_ERROR,
 43 };
 44 
 46 enum ZonTalkInstallResult {
 47  ZTINST_OK,
 48  ZTINST_INVALID_PARAM,
 49  ZTINST_NO_SOFTWARE,
 50  ZTINST_FAIL
 51 };
 52 
 53 
 73 DllSpec enum ZonTalkResult zontalk_start(
 74  const char *port,
 75  const char *download_dir,
 76  void (*status_cb)(void *data,
 77  enum ZonTalkStatus status,
 78  const char *msg,
 79  int progress),
 80  enum ZonTalkInstallResult (*install_cb)(void *data,
 81  const char **files),
 82  void *data
 83 );
 84 
 105 DllSpec enum ZonTalkResult zontalk_start_fd(
 106  int fd,
 107  const char *download_dir,
 108  void (*status_cb)(void *data,
 109  enum ZonTalkStatus status,
 110  const char *msg,
 111  int progress),
 112  enum ZonTalkInstallResult (*install_cb)(void *data,
 113  const char **files),
 114  void *data
 115 );
 116 
 119 DllSpec void zontalk_stop();
 120 
 121 
 122 #ifdef __cplusplus
 123 } // extern "C"
 124 #endif // __cplusplus
 125 
 126 #undef DllSpec
 127 
 128 #endif
```

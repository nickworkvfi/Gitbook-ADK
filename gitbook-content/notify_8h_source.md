---
hidden: true
title: notify.h
---

<a href="notify_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef NOTIFY_H_20150722
 2 #define NOTIFY_H_20150722
 3 
 4 
 7 #include <string>
 8 #include <ipc/jsobject.h>
 9 
 10 #if defined _WIN32 && defined VFI_IPC_SHARED_EXPORT
 11 # define DllSpec __declspec(dllexport)
 12 #elif defined __GNUC__ && defined VFI_IPC_SHARED_EXPORT
 13 # define DllSpec __attribute__((visibility ("default")))
 14 #else
 15 # define DllSpec
 16 #endif
 17 
 18 #ifndef DEPRECATED
 19 # ifdef __GNUC__
 20 # define DEPRECATED __attribute__((deprecated))
 21 # elif defined(_MSC_VER)
 22 # define DEPRECATED __declspec(deprecated)
 23 # else
 24 # define DEPRECATED
 25 # endif
 26 #endif
 27 
 29 namespace vfiipc {
 30 #if 0
 31 }
 32 #endif
 33 
 35 enum NotifyResult {
 36  NOTIFY_OK=0,
 37  NOTIFY_ERR_SERVER=-1,
 38  NOTIFY_ERR_APP_ID=-2,
 39  NOTIFY_ERR_PERMISSION=-3,
 40  NOTIFY_ERR_CONFIG_FILE=-4,
 41  NOTIFY_ERR_CONFIG_SYNTAX=-5,
 42 };
 43 
 44 
 48 DllSpec void ipcSetAppID(const std::string &app_id);
 49 
 53 DllSpec std::string ipcGetAppID();
 54 
 66 DllSpec enum NotifyResult ipcNotify(const std::string &to,
 67  const std::string &notification_id,
 68  const vfiipc::JSObject &param,
 69  unsigned flags=0,
 70  const std::string &from=""
 71  );
 72 
 83 typedef void (*NotifyCallback)(
 84  void *data,
 85  const std::string &from,
 86  const std::string &to,
 87  const std::string &notification_id,
 88  const vfiipc::JSObject &param,
 89  unsigned flags);
 90 
 91 
 103 DllSpec enum NotifyResult ipcRegisterNotificationCB(const std::string &notification_id, NotifyCallback cb, void *data, int priority=0, const std::string &to="");
 104 
 105 
 117 DllSpec enum NotifyResult ipcUnregisterNotificationCB(const std::string &notification_id, NotifyCallback cb, void *data=0, const std::string &to="");
 118 
 128 DEPRECATED inline enum NotifyResult ipcUnregisterNotificationCB(const std::string &notification_id, const std::string &to="")
 129 {
 130  return ipcUnregisterNotificationCB(notification_id,0,0,to);
 131 }
 132 
 141 DllSpec enum NotifyResult ipcRegisterUnicastError(NotifyCallback cb, void *data);
 142 
 154 DllSpec enum NotifyResult ipcUnregisterUnicastError(NotifyCallback cb, void *data);
 155 
 161 DEPRECATED inline enum NotifyResult ipcUnregisterUnicastError() {
 162  return ipcRegisterUnicastError(0,0);
 163 }
 164 
 174 typedef void (*NotifyObserver)(
 175  void *data,
 176  const std::string &from,
 177  const std::string &to,
 178  const std::string &notification_id,
 179  unsigned flags
 180 );
 181 
 187 DllSpec enum NotifyResult ipcRegisterObserver(NotifyObserver cb, void *data);
 188 
 196 DllSpec enum NotifyResult ipcUnregisterObserver(NotifyObserver cb, void *data);
 197 
 198 
 204 DEPRECATED inline enum NotifyResult ipcUnregisterObserver() {
 205  return ipcRegisterObserver(0,0);
 206 }
 207 
 213 DllSpec enum NotifyResult ipcNotificationServer();
 214 
 215 
 231 DllSpec enum NotifyResult ipcNotificationServer(const char *config_file);
 232 
 233 } //namespace
 234 
 235 #undef DllSpec
 236 #endif
```

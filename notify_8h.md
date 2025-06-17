---
title: ipc/src/ipc/notify.h

---

# ipc/src/ipc/notify.h



## Namespaces

| Name           |
| -------------- |
| **[vfiipc](namespacevfiipc.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](notify_8h.md#define-dllspec)**  |
|  | **[DEPRECATED](notify_8h.md#define-deprecated)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


### define DEPRECATED

```cpp
#define DEPRECATED 
```


## Source code

```cpp
#ifndef NOTIFY_H_20150722
#define NOTIFY_H_20150722


#include <string>
#include <ipc/jsobject.h>

#if defined _WIN32 && defined VFI_IPC_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_IPC_SHARED_EXPORT
#  define DllSpec __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#ifndef DEPRECATED
#  ifdef __GNUC__
#    define DEPRECATED __attribute__((deprecated))
#  elif defined(_MSC_VER)
#    define DEPRECATED __declspec(deprecated)
#  else
#    define DEPRECATED
#  endif
#endif

namespace vfiipc {
#if 0
}
#endif

enum NotifyResult {
   NOTIFY_OK=0,          
   NOTIFY_ERR_SERVER=-1,  
   NOTIFY_ERR_APP_ID=-2,  
   NOTIFY_ERR_PERMISSION=-3, 
   NOTIFY_ERR_CONFIG_FILE=-4,   
   NOTIFY_ERR_CONFIG_SYNTAX=-5, 
};


DllSpec void ipcSetAppID(const std::string &app_id);

DllSpec std::string ipcGetAppID();

DllSpec enum NotifyResult ipcNotify(const std::string &to,
             const std::string &notification_id,
             const vfiipc::JSObject &param,
             unsigned flags=0,
             const std::string &from=""
             );

typedef void (*NotifyCallback)(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &param,
   unsigned flags);


DllSpec enum NotifyResult ipcRegisterNotificationCB(const std::string &notification_id, NotifyCallback cb, void *data, int priority=0, const std::string &to="");


DllSpec enum NotifyResult ipcUnregisterNotificationCB(const std::string &notification_id, NotifyCallback cb, void *data=0, const std::string &to="");

DEPRECATED inline enum NotifyResult ipcUnregisterNotificationCB(const std::string &notification_id, const std::string &to="")
{
   return ipcUnregisterNotificationCB(notification_id,0,0,to);
}

DllSpec enum NotifyResult ipcRegisterUnicastError(NotifyCallback cb, void *data);

DllSpec enum NotifyResult ipcUnregisterUnicastError(NotifyCallback cb, void *data);

DEPRECATED inline enum NotifyResult ipcUnregisterUnicastError() {
   return ipcRegisterUnicastError(0,0);
}

typedef void (*NotifyObserver)(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   unsigned flags
);

DllSpec enum NotifyResult ipcRegisterObserver(NotifyObserver cb, void *data);

DllSpec enum NotifyResult ipcUnregisterObserver(NotifyObserver cb, void *data);


DEPRECATED inline enum NotifyResult ipcUnregisterObserver() {
   return ipcRegisterObserver(0,0);
}

DllSpec enum NotifyResult ipcNotificationServer();


DllSpec enum NotifyResult ipcNotificationServer(const char *config_file);

} //namespace

#undef DllSpec
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

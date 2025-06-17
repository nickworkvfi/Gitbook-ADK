---
title: vfiipc

---

# vfiipc

**Module:** **[inter process communication](group__vfiipc.md)**

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfiipc::IPC](classvfiipc_1_1_i_p_c.md)**  |
| class | **[vfiipc::JSObject](classvfiipc_1_1_j_s_object.md)**  |
| class | **[vfiipc::Pipe](classvfiipc_1_1_pipe.md)**  |
| class | **[vfiipc::TCP](classvfiipc_1_1_t_c_p.md)**  |
| class | **[vfiipc::TLS](classvfiipc_1_1_t_l_s.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NotifyResult](namespacevfiipc.md#enum-notifyresult)** { NOTIFY_OK =0, NOTIFY_ERR_SERVER =-1, NOTIFY_ERR_APP_ID =-2, NOTIFY_ERR_PERMISSION =-3, NOTIFY_ERR_CONFIG_FILE =-4, NOTIFY_ERR_CONFIG_SYNTAX =-5} |
| typedef void(*)(void *data, IPC *ipc) | **[ipcCallback](namespacevfiipc.md#typedef-ipccallback)**  |
| typedef void(*)(void *data, const std::string &from, const std::string &to, const std::string &notification_id, const vfiipc::JSObject &param, unsigned flags) | **[NotifyCallback](namespacevfiipc.md#typedef-notifycallback)**  |
| typedef void(*)(void *data, const std::string &from, const std::string &to, const std::string &notification_id, unsigned flags) | **[NotifyObserver](namespacevfiipc.md#typedef-notifyobserver)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) void | **[ipcSetAppID](namespacevfiipc.md#function-ipcsetappid)**(const std::string & app_id) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[ipcGetAppID](namespacevfiipc.md#function-ipcgetappid)**() |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcNotify](namespacevfiipc.md#function-ipcnotify)**(const std::string & to, const std::string & notification_id, const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & param, unsigned flags =0, const std::string & from ="") |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcRegisterNotificationCB](namespacevfiipc.md#function-ipcregisternotificationcb)**(const std::string & notification_id, [NotifyCallback](namespacevfiipc.md#typedef-notifycallback) cb, void * data, int priority =0, const std::string & to ="") |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcUnregisterNotificationCB](namespacevfiipc.md#function-ipcunregisternotificationcb)**(const std::string & notification_id, [NotifyCallback](namespacevfiipc.md#typedef-notifycallback) cb, void * data =0, const std::string & to ="") |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcUnregisterNotificationCB](namespacevfiipc.md#function-ipcunregisternotificationcb)**(const std::string & notification_id, const std::string & to ="") |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcRegisterUnicastError](namespacevfiipc.md#function-ipcregisterunicasterror)**([NotifyCallback](namespacevfiipc.md#typedef-notifycallback) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcUnregisterUnicastError](namespacevfiipc.md#function-ipcunregisterunicasterror)**([NotifyCallback](namespacevfiipc.md#typedef-notifycallback) cb, void * data) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcUnregisterUnicastError](namespacevfiipc.md#function-ipcunregisterunicasterror)**() |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcRegisterObserver](namespacevfiipc.md#function-ipcregisterobserver)**([NotifyObserver](namespacevfiipc.md#typedef-notifyobserver) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcUnregisterObserver](namespacevfiipc.md#function-ipcunregisterobserver)**([NotifyObserver](namespacevfiipc.md#typedef-notifyobserver) cb, void * data) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcUnregisterObserver](namespacevfiipc.md#function-ipcunregisterobserver)**() |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcNotificationServer](namespacevfiipc.md#function-ipcnotificationserver)**() |
| [DllSpec](sound_8h.md#define-dllspec) enum [NotifyResult](namespacevfiipc.md#enum-notifyresult) | **[ipcNotificationServer](namespacevfiipc.md#function-ipcnotificationserver)**(const char * config_file) |

## Detailed Description


[IPC](classvfiipc_1_1_i_p_c.md) namespace 

## Types Documentation

### enum NotifyResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NOTIFY_OK | =0|  No error.  |
| NOTIFY_ERR_SERVER | =-1|  notification server is not running  |
| NOTIFY_ERR_APP_ID | =-2|  the application ID has not been set yet, use ipcSetAppID to set it  |
| NOTIFY_ERR_PERMISSION | =-3|  No permission to create the notification pipe  |
| NOTIFY_ERR_CONFIG_FILE | =-4|  The configuration file could not be opened for reading  |
| NOTIFY_ERR_CONFIG_SYNTAX | =-5|  The configuration file contained invalid input  |




Notify result code 


### typedef ipcCallback

```cpp
typedef void(* ipcCallback) (void *data, IPC *ipc);
```


### typedef NotifyCallback

```cpp
typedef void(* NotifyCallback) (void *data, const std::string &from, const std::string &to, const std::string &notification_id, const vfiipc::JSObject &param, unsigned flags);
```


**Parameters**: 

  * **data** opaque data pointer that was passed by the application when registering the callback. 
  * **from** source application ID 
  * **to** destination application ID that was used to send the notification. This may be used to distinguish the different cases send to application, send to single, send to all. 
  * **notification_id** notification ID 
  * **param** parameters to send along the notification 
  * **flags** optional flags for future extensions 


**Note**: All notification and error callbacks are run in separate threads. These are started on demand and terminate when the callback terminates. 

Notify callback. The callback gets invoked when a matching notification has been sent. 


### typedef NotifyObserver

```cpp
typedef void(* NotifyObserver) (void *data, const std::string &from, const std::string &to, const std::string &notification_id, unsigned flags);
```


**Parameters**: 

  * **data** opaque data pointer that was passed by the application when registering the callback. 
  * **from** source application ID 
  * **to** resolved destination application ID 
  * **notification_id** notification ID 
  * **flags** optional flags for future extensions 


**Note**: All observer callbacks are run in separate threads. These are started on demand and terminate when the callback terminates. 

Observer callback, will be called for all delivered notifications. If no receiver has been found the callback is called with an empty _to_ parameter. 



## Functions Documentation

### function ipcSetAppID

```cpp
DllSpec void ipcSetAppID(
    const std::string & app_id
)
```


**Parameters**: 

  * **app_id** application ID, the app ID should match the application ID used in the manifest. 


application ID that will be used as source address when sending notifications 


### function ipcGetAppID

```cpp
DllSpec std::string ipcGetAppID()
```


**Return**: application ID 

read application ID that has been set using ipcSetAppID 


### function ipcNotify

```cpp
DllSpec enum NotifyResult ipcNotify(
    const std::string & to,
    const std::string & notification_id,
    const vfiipc::JSObject & param,
    unsigned flags =0,
    const std::string & from =""
)
```


**Parameters**: 

  * **to** destination application ID or '1' to send notifications to exactly one receiver or '*' to broadcast to all registered receivers 
  * **notification_id** notification ID 
  * **param** parameters to send along the notification 
  * **flags** optional flags for future extensions 
  * **from** optional source application ID. If empty the application ID set by ipcSetAppID is used. This parameter is only required if a process needs to impersonate as another application, e.g. the multi app controller may use it to send notifications on behalf of CP apps 


**Return**: error code 

Send notification 


### function ipcRegisterNotificationCB

```cpp
DllSpec enum NotifyResult ipcRegisterNotificationCB(
    const std::string & notification_id,
    NotifyCallback cb,
    void * data,
    int priority =0,
    const std::string & to =""
)
```


**Parameters**: 

  * **notification_id** notification ID 
  * **cb** notification callback to be invoked. If NULL the registration will be discarded 
  * **data** opaque data pointer passed on to the callback 
  * **priority** priority of the callback. If several matching callbacks are found and the notification is not sent as a broadcast, then only the callback with the highest priority (highest value) will be called. 
  * **to** optional destination application ID. If empty then the application ID set by ipcSetAppID is used. This parameter is only required if a process needs to impersonate as another application, e.g. the multi app controller may use it to receive notifications on behalf of CP apps 


**Return**: error code 

Register notification callback. New registrations will overwrite old ones for the same notification ID and destination app ID. 


### function ipcUnregisterNotificationCB

```cpp
DllSpec enum NotifyResult ipcUnregisterNotificationCB(
    const std::string & notification_id,
    NotifyCallback cb,
    void * data =0,
    const std::string & to =""
)
```


**Parameters**: 

  * **notification_id** notification ID, must match the value passed to ipcRegisterNotificationCB 
  * **cb** notification callback used during registration. If NULL all callbacks registered for the notification ID are discarded. Use with care to not unintentionally discard registrations of other threads or libraries. 
  * **data** opaque data pointer used during registration. If NULL only cb is checked for finding the matching callback function. 
  * **to** optional destination application ID. If empty then the application ID set by ipcSetAppID is used, must match the value passed to ipcRegisterNotificationCB. 


**Return**: error code 

**Note**: ipcUnregisterNotificationCB cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it. 

unregister a notification callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer. 


### function ipcUnregisterNotificationCB

```cpp
inline DEPRECATED enum NotifyResult ipcUnregisterNotificationCB(
    const std::string & notification_id,
    const std::string & to =""
)
```


**Parameters**: 

  * **notification_id** notification ID 
  * **to** optional destination application ID. If null then the application ID set by ipcSetAppID is used. This parameter is only required if a process needs to impersonate as another application, e.g. the multi app controller may use it to receive notifications on behalf of CP apps 


**Return**: error code 

**Note**: ipcUnregisterNotificationCB cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it. 

unregister a notification callback, shortcut for ipcRegisterNotificationCB(notification_id,0,0,0,to); 


### function ipcRegisterUnicastError

```cpp
DllSpec enum NotifyResult ipcRegisterUnicastError(
    NotifyCallback cb,
    void * data
)
```


**Parameters**: 

  * **cb** notification callback to be invoked. 
  * **data** opaque data pointer passed on to the callback 


**Return**: error code 

**Note**: In case a receiver process terminates there is some risk that the failure to deliver a notification will go unnoticed: If the process terminates after receiving a notification but before sending an error, this error cannot be detected. 

Register error callback. The error callback is invoked if the notification server cannot deliver a unicast notification to any receiver. Broadcast notifications are not considered. 


### function ipcUnregisterUnicastError

```cpp
DllSpec enum NotifyResult ipcUnregisterUnicastError(
    NotifyCallback cb,
    void * data
)
```


**Parameters**: 

  * **cb** notification callback used during registration. If NULL all callbacks registered for the notification ID are discarded. Use with care to not unintentionally discard registrations of other threads or libraries. 
  * **data** opaque data pointer used during registration. If NULL only cb is checked for finding the matching callback function. 


**Return**: error code 

**Note**: 

  * In case a receiver process terminates there is some risk that the failure to deliver a notification will go unnoticed: If the process terminates after receiving a notification but before sending an error, this error cannot be detected. 
  * ipcUnregisterUnicastError cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it. 


**Par**: 

Unregister error callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer. 


### function ipcUnregisterUnicastError

```cpp
inline DEPRECATED enum NotifyResult ipcUnregisterUnicastError()
```


**Return**: error code 

**Note**: ipcUnregisterUnicastError cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it. 

unregister an error callback, shortcut for ipcRegisterUnicastError(0,0); 


### function ipcRegisterObserver

```cpp
DllSpec enum NotifyResult ipcRegisterObserver(
    NotifyObserver cb,
    void * data
)
```


**Parameters**: 

  * **cb** notification callback to be invoked. 
  * **data** opaque data pointer passed on to the callback 


**Return**: error code 

register notification observer callback. The callback will be invoked for each notification delivered. 


### function ipcUnregisterObserver

```cpp
DllSpec enum NotifyResult ipcUnregisterObserver(
    NotifyObserver cb,
    void * data
)
```


**Parameters**: 

  * **cb** notification callback used during registration. If NULL all registrations will be discarded 
  * **data** opaque data pointer passed used during registration. If NULL only cb is checked for finding the matching callback function. 


**Return**: error code 

**Note**: ipcUnregisterObserver cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it. 

unregister notification observer callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer. 


### function ipcUnregisterObserver

```cpp
inline DEPRECATED enum NotifyResult ipcUnregisterObserver()
```


**Return**: error code 

**Note**: ipcUnregisterObserver cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it. 

unregister notification observer callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer. 


### function ipcNotificationServer

```cpp
DllSpec enum NotifyResult ipcNotificationServer()
```


**Return**: error code 

**Note**: This function only returns in case of error. 

start the notification server. Only one notification server may exist in the system. Normally it is started from the multi application controller. 


### function ipcNotificationServer

```cpp
DllSpec enum NotifyResult ipcNotificationServer(
    const char * config_file
)
```


**Parameters**: 

  * **config_file** name of the configuration file. May be NULL in which case it is identical to [ipcNotificationServer()](namespacevfiipc.md#function-ipcnotificationserver). 


**Return**: error code 

**Note**: 

  * This function only returns in case of error. 
  * If there is a configuration, then the notification server binds to IPADDR_ANY so that notifications from external IP addresses may be accepted depending on the configuration. If config_file is NULL or the configuration is empty, then the notification server binds to localhost so that only connects from localhost are supported. 
  * On Verix connecting from external IP addresses is not supported, _config_file_ is ignored. 


**Par**: 

  * 
  * 


start the notification server. Only one notification server may exist in the system. Normally it is started from the multi application controller. The config_file names a configuration file that contains a whitelist of notifications that may be received from external IP addresses and that may be sent to external ones. 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
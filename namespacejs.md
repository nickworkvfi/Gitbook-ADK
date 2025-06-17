---
title: js

---

# js



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[JSTraceType](namespacejs.md#enum-jstracetype)** { JST_HTTPGET, JST_HTTPPOST, JST_HTTPRESULT} |
| enum| **[JSLogLevel](namespacejs.md#enum-jsloglevel)** { JSL_EMERGENCY =0, JSL_ALERT =1, JSL_CRITICAL =2, JSL_ERROR =3, JSL_WARNING =4, JSL_NOTICE =5, JSL_INFO =6, JSL_DEBUG =7} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) bool | **[jsProcessor](namespacejs.md#function-jsprocessor)**(void * data, const std::string & sourcecode, std::map< std::string, std::string > & arg, std::string & out, std::string & err, std::string & exitcode) |
| [DllSpec](sound_8h.md#define-dllspec) bool | **[jsProcessorExt](namespacejs.md#function-jsprocessorext)**(void * data, const std::string & sourcecode, std::map< std::string, std::string > & arg, std::string & out, std::string & err, std::string & exitcode, vfihtml::ExtContext * context) |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[jsProcVersion](namespacejs.md#function-jsprocversion)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsSetHttpProxy](namespacejs.md#function-jssethttpproxy)**(const char * proxy) |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[jsGetHttpProxy](namespacejs.md#function-jsgethttpproxy)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsSetConsole](namespacejs.md#function-jssetconsole)**(void(*)(void *data, const char *text) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsGetConsole](namespacejs.md#function-jsgetconsole)**(void(*&)(void *, const char *) cb, void *& data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsSetNotify](namespacejs.md#function-jssetnotify)**(int(*)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsGetNotify](namespacejs.md#function-jsgetnotify)**(int(*&)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from) cb, void *& data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsSetNotifyAndWait](namespacejs.md#function-jssetnotifyandwait)**(int(*)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from, const char *wait_id, std::string &result, int timeout_msec) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsGetNotifyAndWait](namespacejs.md#function-jsgetnotifyandwait)**(int(*&)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from, const char *wait_id, std::string &result, int timeout_msec) cb, void *& data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsSetTrace](namespacejs.md#function-jssettrace)**(void(*)(void *data, [JSTraceType](namespacejs.md#enum-jstracetype) type, const std::string &app_id, std::map< std::string, std::string > &trace) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsGetTrace](namespacejs.md#function-jsgettrace)**(void(*&)(void *data, [JSTraceType](namespacejs.md#enum-jstracetype) type, const std::string &app_id, std::map< std::string, std::string > &trace) cb, void *& data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsSetLog](namespacejs.md#function-jssetlog)**(void(*)(void *data, const std::string &app_id, [JSLogLevel](namespacejs.md#enum-jsloglevel) log_level, const std::vector< std::string > &msg) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[jsGetLog](namespacejs.md#function-jsgetlog)**(void(*&)(void *data, const std::string &app_id, [JSLogLevel](namespacejs.md#enum-jsloglevel) log_level, const std::vector< std::string > &msg) cb, void *& data) |

## Types Documentation

### enum JSTraceType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| JST_HTTPGET | |  trace of an HTTP GET request, data provided: "url"  |
| JST_HTTPPOST | |  trace of an HTTP POST request, data provided: "url"  |
| JST_HTTPRESULT | |  trace of the HTTP result, data provided: "status"  |




trace type 


### enum JSLogLevel

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| JSL_EMERGENCY | =0|   |
| JSL_ALERT | =1|   |
| JSL_CRITICAL | =2|   |
| JSL_ERROR | =3|   |
| JSL_WARNING | =4|   |
| JSL_NOTICE | =5|   |
| JSL_INFO | =6|   |
| JSL_DEBUG | =7|   |





## Functions Documentation

### function jsProcessor

```cpp
DllSpec bool jsProcessor(
    void * data,
    const std::string & sourcecode,
    std::map< std::string, std::string > & arg,
    std::string & out,
    std::string & err,
    std::string & exitcode
)
```


**Parameters**: 

  * **data** this parameter is unused, it is just there for compatibility with the ADKGUI scripting interface 
  * **sourcecode** string containing the Js source code 
  * **arg** key value map, can be accessed as table 'ARG' from within the JavaScript script 
  * **out** data sent to stdout 
  * **err** data sent to stderr 
  * **exitcode** parameter that was passed to exit() 


**Return**: true if processing was successful, false if not 

Process JavaScript script and return the data sent to stdout and stderr 


### function jsProcessorExt

```cpp
DllSpec bool jsProcessorExt(
    void * data,
    const std::string & sourcecode,
    std::map< std::string, std::string > & arg,
    std::string & out,
    std::string & err,
    std::string & exitcode,
    vfihtml::ExtContext * context
)
```


**Parameters**: 

  * **data** this parameter is unused, it is just there for compatibility with the ADKGUI scripting interface 
  * **sourcecode** string containing the Js source code 
  * **arg** key value map, can be accessed as table 'ARG' from within the JavaScript script 
  * **out** data sent to stdout 
  * **err** data sent to stderr 
  * **exitcode** parameter that was passed to exit() 
  * **context** extended context, if NULL GUI extensions are disabled. 


**Return**: true if processing was successful, false if not 

Process JavaScript script and return the data sent to stdout and stderr. This is the variant with ADKGUI extensions support. 


### function jsProcVersion

```cpp
const DllSpec char * jsProcVersion()
```


**Return**: version information 

### function jsSetHttpProxy

```cpp
DllSpec void jsSetHttpProxy(
    const char * proxy
)
```


**Parameters**: 

  * **proxy** Proxy setting, e.g. [http://localhost:8888](http://localhost:8888) or NULL 


Set Http-Proxy 


### function jsGetHttpProxy

```cpp
const DllSpec char * jsGetHttpProxy()
```


**Return**: proxy setting. 

Read current proxy setting 


### function jsSetConsole

```cpp
DllSpec void jsSetConsole(
    void(*)(void *data, const char *text) cb,
    void * data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter
  * **data** data pointer 
  * **text** string to be sent to console


**Note**: The console callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions. 

set callback for console output 
The callback takes the following parameters: 


### function jsGetConsole

```cpp
DllSpec void jsGetConsole(
    void(*&)(void *, const char *) cb,
    void *& data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter 


get current setting of callback for console output 


### function jsSetNotify

```cpp
DllSpec void jsSetNotify(
    int(*)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from) cb,
    void * data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter
  * **data** data pointer 
  * **to** destination address 
  * **notification_id** notification id 
  * **json_param** string containing the JSON encoded parameters 
  * **flags** optional flags 
  * **from** optional source address, if NULL use default source address 


**Return**: 0 in case of success or negative error code

**Note**: The notification callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions. 

set callback for sending notifications 
The callback takes the following parameters: 


### function jsGetNotify

```cpp
DllSpec void jsGetNotify(
    int(*&)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from) cb,
    void *& data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter 


get current setting of notification callback 


### function jsSetNotifyAndWait

```cpp
DllSpec void jsSetNotifyAndWait(
    int(*)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from, const char *wait_id, std::string &result, int timeout_msec) cb,
    void * data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter
  * **data** data pointer 
  * **to** destination address 
  * **notification_id** notification id 
  * **json_param** string containing the JSON encoded parameters 
  * **flags** optional flags 
  * **from** optional source address, if NULL use default source address 
  * **wait_id** wait for notification with this id 
  * **result** received notification 
  * **timeout_msec** timeout in milliseconds 


**Return**: 0 in case of success or negative error code

**Note**: The notification callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions. 

set callback for sending notifications 
The callback takes the following parameters: 


### function jsGetNotifyAndWait

```cpp
DllSpec void jsGetNotifyAndWait(
    int(*&)(void *data, const char *to, const char *notification_id, const char *json_param, unsigned flags, const char *from, const char *wait_id, std::string &result, int timeout_msec) cb,
    void *& data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter 


get current setting of notification callback 


### function jsSetTrace

```cpp
DllSpec void jsSetTrace(
    void(*)(void *data, JSTraceType type, const std::string &app_id, std::map< std::string, std::string > &trace) cb,
    void * data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter
  * **data** data pointer 
  * **type** trace type 
  * **app_id** application ID (as found in ARGV["cp_appId"]) 
  * **trace** key value map containing trace parameters


**Note**: The trace callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions. 

install HTTP trace callback 
The callback takes the following parameters: 


### function jsGetTrace

```cpp
DllSpec void jsGetTrace(
    void(*&)(void *data, JSTraceType type, const std::string &app_id, std::map< std::string, std::string > &trace) cb,
    void *& data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter 


read HTTP trace callback 


### function jsSetLog

```cpp
DllSpec void jsSetLog(
    void(*)(void *data, const std::string &app_id, JSLogLevel log_level, const std::vector< std::string > &msg) cb,
    void * data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter
  * **data** data pointer 
  * **log_level** logging level 0-7 (emergency,alert,critical, 
  * **app_id** application ID (as found in ARGV["cp_appId"]) 
  * **msg** log message parameters in the order they were provided to log.info()/log.debug(),log.error()


**Note**: The log callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions. 

install logging callback 
The callback takes the following parameters: 


### function jsGetLog

```cpp
DllSpec void jsGetLog(
    void(*&)(void *data, const std::string &app_id, JSLogLevel log_level, const std::vector< std::string > &msg) cb,
    void *& data
)
```


**Parameters**: 

  * **cb** callback function pointer or NULL 
  * **data** data pointer provided to callback as first parameter 


read logging callback 






-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
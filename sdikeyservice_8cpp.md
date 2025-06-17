---
title: sdi/src/sdikeyservice.cpp

---

# sdi/src/sdikeyservice.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[remote_keyservice_supported](sdikeyservice_8cpp.md#function-remote-keyservice-supported)**() |
| string | **[keyservice_get_libname](sdikeyservice_8cpp.md#function-keyservice-get-libname)**() |
| string | **[keyservice_get_build_date](sdikeyservice_8cpp.md#function-keyservice-get-build-date)**() |
| string | **[keyservice_get_version](sdikeyservice_8cpp.md#function-keyservice-get-version)**() |
| void | **[keyservice_trace_cb](sdikeyservice_8cpp.md#function-keyservice-trace-cb)**(enum KsLog_Levels level, const char * file, unsigned line, const char * str, void * data) |
| void | **[keyservice_start](sdikeyservice_8cpp.md#function-keyservice-start)**() |
| void | **[keyservice_stop](sdikeyservice_8cpp.md#function-keyservice-stop)**() |
| unsigned short | **[keyservice_read_certificate](sdikeyservice_8cpp.md#function-keyservice-read-certificate)**(const string & refname, vector< unsigned char > & certificate) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| LibLogHandle | **[sdiks_log_handle](sdikeyservice_8cpp.md#variable-sdiks-log-handle)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SDI_KS_LOCALHOST](sdikeyservice_8cpp.md#define-sdi-ks-localhost)**  |
|  | **[SDI_KS_HOST_INT_ANDROID](sdikeyservice_8cpp.md#define-sdi-ks-host-int-android)**  |
|  | **[SDI_KS_PORT](sdikeyservice_8cpp.md#define-sdi-ks-port)**  |
|  | **[SDI_KS_LOG_CHANNEL](sdikeyservice_8cpp.md#define-sdi-ks-log-channel)**  |


## Functions Documentation

### function remote_keyservice_supported

```cpp
static bool remote_keyservice_supported()
```


### function keyservice_get_libname

```cpp
string keyservice_get_libname()
```


**Return**: library name or an empty string, if SDI remote keyservice is not supported for this device type 

returns the library name for the SDI remote keyservice 


### function keyservice_get_build_date

```cpp
string keyservice_get_build_date()
```


**Return**: build date or an empty string, if SDI remote keyservice is not supported for this device type 

returns the build date string for the SDI remote keyservice library 


### function keyservice_get_version

```cpp
string keyservice_get_version()
```


**Return**: version string or an empty string, if SDI remote keyservice is not supported for this device type 

returns the version string for the SDI remote keyservice library 


### function keyservice_trace_cb

```cpp
static void keyservice_trace_cb(
    enum KsLog_Levels level,
    const char * file,
    unsigned line,
    const char * str,
    void * data
)
```


### function keyservice_start

```cpp
void keyservice_start()
```


**Note**: This function does nothing, if SDI remote keyservice is not supported for this device type 

starts the SDI remote keyservice 


### function keyservice_stop

```cpp
void keyservice_stop()
```


**Note**: This function does nothing, if SDI remote keyservice is not supported for this device type 

stops the SDI remote keyservice 


### function keyservice_read_certificate

```cpp
unsigned short keyservice_read_certificate(
    const string & refname,
    vector< unsigned char > & certificate
)
```



## Attributes Documentation

### variable sdiks_log_handle

```cpp
static LibLogHandle sdiks_log_handle;
```



## Macros Documentation

### define SDI_KS_LOCALHOST

```cpp
#define SDI_KS_LOCALHOST "127.0.0.1"
```


### define SDI_KS_HOST_INT_ANDROID

```cpp
#define SDI_KS_HOST_INT_ANDROID "vfi-terminal"
```


### define SDI_KS_PORT

```cpp
#define SDI_KS_PORT 12001
```


### define SDI_KS_LOG_CHANNEL

```cpp
#define SDI_KS_LOG_CHANNEL "SDIKS"
```


## Source code

```cpp
#include "sdikeyservice.h"
#include "_logf.h"
#include "libsdikeyservice.h"
#include "epp/counterTop.h"

using namespace std;

#include "sys.h"

// standard: localhost
#define SDI_KS_LOCALHOST "127.0.0.1"
// Engage with internal Android have /etc/hosts entry specifying internal PPP network device connected to Android
#define SDI_KS_HOST_INT_ANDROID "vfi-terminal"
#define SDI_KS_PORT 12001
#define SDI_KS_LOG_CHANNEL "SDIKS"

static LibLogHandle sdiks_log_handle;

static bool remote_keyservice_supported()
{
  /* never start keyservice on EPP, this service is only intended for
   * applications running on same device as on Standalone/Countertop */
  if (vfiepm::CounterTop::getInstance().isEpp())
  {
    _LOGF_INFO("remote_keyservice_supported(): SDI remote keyservice disabled for EPP");
    return false;
  }

#ifdef _VOS
  /* on Engage, SDI remote keyservice is only supported for device types
   * having an internal Android, which runs the payment application */
  return sys_internal_android(); // returns always false for V/OS (Fusion)
#else
  /* other have enabled SDI remote keyservice by default (even on x86 for testing) */
  return true;
#endif
}

string keyservice_get_libname()
{
  string info = sdikeyservice_getBuildInfo();
  size_t pos = info.find(" ");

  if (pos == string::npos)
  {
    return "";
  }

  info.erase(pos);
  return info;
}

string keyservice_get_build_date()
{
  string info = sdikeyservice_getBuildInfo();
  size_t pos = info.find(" ");

  if (pos == string::npos)
  {
    return "";
  }

  pos = info.find(" ", ++pos);

  if (pos == string::npos)
  {
    return "";
  }

  return info.substr(++pos);
}

string keyservice_get_version()
{
  return string(sdikeyservice_getVersion());
}

static void keyservice_trace_cb(enum KsLog_Levels level, const char *file,
                                unsigned line, const char *str, void *data)
{
  (void) data;
  LogAPI_printf2(sdiks_log_handle, (LogAPI_Levels)level, file, line, "%s", str);
}

void keyservice_start()
{
  /* First step: Enable logging for libsdikeyservice. This happens on all devices, since
   * (even on Fusion) SDI might use internal API w/o the remote keyservice as server is started */

  /* set defaults, which are used on Android, since ()
   * LogAPI_GetConfigParam might still be implemented as dummy function.
   * Once LogAPI_GetConfigParam() is implemented correcly, it will overwrite
   * logmask with a valid value and default logmask here is no longer used. */
  long logmask = 127; // logmask (enable all bits, except KSLOG_TRACE)
  long enabled = 1; // logging enabled

  /* check for enabled logging configuration for the SDI keyservice
   * Note: This is just to optimize runtime of the keyservice. */
  (void) LogAPI_GetConfigParam(SDI_KS_LOG_CHANNEL, LOGAPI_ENABLED_PARAM, &enabled);

  if (enabled)
  {
    (void) LogAPI_GetConfigParam(SDI_KS_LOG_CHANNEL, LOGAPI_MASK_PARAM, &logmask);
  }
  else
  {
    logmask = 0;
  }

  if (logmask)
  {
    if (!sdiks_log_handle)
    {
      sdiks_log_handle = LOGAPI_INIT(SDI_KS_LOG_CHANNEL);
    }

    // set the trace callback for the SDI keyservice
    sdikeyservice_setTraceCb(keyservice_trace_cb, (int)logmask, 0);
  }
  else
  {
    if (sdiks_log_handle)
    {
      LOGAPI_DEINIT(sdiks_log_handle);
      sdiks_log_handle = 0;
    }

    // disable the trace for the SDI keyservice
    sdikeyservice_setTraceCb(0, 0, 0);
  }

  // check of the SDI remote keyservice shall be enabled on this device
  if (!remote_keyservice_supported())
  {
    _LOGF_INFO("keyservice_start(): SDI remote keyservice not supported for this device type");
    return;
  }

  // start the SDI remove keyservice
  const char *host = sys_internal_android() ? SDI_KS_HOST_INT_ANDROID : SDI_KS_LOCALHOST;

  if (sdikeyservice_start(SDI_KS_PORT, host))
  {
    _LOGF_INFO("keyservice_start(): SDI remote keyservice for %s:%d successfully started, see log channel '%s' for more details",
               host, SDI_KS_PORT, SDI_KS_LOG_CHANNEL);
    return;
  }

  _LOGF_ERROR("keyservice_start(): Failed to start SDI remote keyservice for %s:%d, see log channel '%s' for more details",
              host, SDI_KS_PORT, SDI_KS_LOG_CHANNEL);
}

void keyservice_stop()
{
  // disable logging
  if (sdiks_log_handle)
  {
    LOGAPI_DEINIT(sdiks_log_handle);
    sdiks_log_handle = 0;
  }

  if (!remote_keyservice_supported())
  {
    return;
  }

  // stop the SDI keyservice
  sdikeyservice_stop();
  _LOGF_INFO("keyservice_stop(): Stopped SDI remote keyservice");
}

unsigned short keyservice_read_certificate(const string &refname,
    vector<unsigned char> &certificate)
{
  return sdikeyservice_readCertificate(refname, certificate);
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

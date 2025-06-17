---
title: sdi/src/madk_pp_protocol.cpp

---

# sdi/src/madk_pp_protocol.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[ConnectionContext](class_connection_context.md)**  |
| struct | **[mADK_PP_Prot_Loader](structm_a_d_k___p_p___prot___loader.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[cleanup](madk__pp__protocol_8cpp.md#function-cleanup)**(void * data) |
| void | **[make_key](madk__pp__protocol_8cpp.md#function-make-key)**() |
| void | **[trace_callback](madk__pp__protocol_8cpp.md#function-trace-callback)**(const char * trace, void * data) |
| int | **[select_com_callback](madk__pp__protocol_8cpp.md#function-select-com-callback)**(int comInterfaces, char ** ComFileName, void * data) |
| void | **[protocol_status_callback](madk__pp__protocol_8cpp.md#function-protocol-status-callback)**(const struct ProtStatus * status, void * data) |
| void | **[command_callback](madk__pp__protocol_8cpp.md#function-command-callback)**(void * handle, char * cmd, int size, char protType, unsigned msgId, void * data) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_key_t | **[key](madk__pp__protocol_8cpp.md#variable-key)**  |
| pthread_once_t | **[key_once](madk__pp__protocol_8cpp.md#variable-key-once)**  |
| pthread_mutex_t | **[obj_mutex](madk__pp__protocol_8cpp.md#variable-obj-mutex)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[PROT_TYPE_VALID](madk__pp__protocol_8cpp.md#define-prot-type-valid)**(t)  |


## Functions Documentation

### function cleanup

```cpp
static void cleanup(
    void * data
)
```


### function make_key

```cpp
static void make_key()
```


### function trace_callback

```cpp
static void trace_callback(
    const char * trace,
    void * data
)
```


callback function invoked, if the protocol does trace output, see description of mADK_PP_Prot_TraceCallback() 


### function select_com_callback

```cpp
static int select_com_callback(
    int comInterfaces,
    char ** ComFileName,
    void * data
)
```


**Parameters**: 

  * **comInterfaces** available COM interfaces, bitmask of ADKCOM enum com_FeatureMask 
  * **ComFileName** full path to COM profile to use 
  * **data** application pointer (always NULL, recently unused) 


**Return**: RESULT_OK on success, else RESULT_FAIL on error. 

**Note**: This function is passed as callback mADK_PP_Prot_CommSelection to protocol API function mADK_PP_Prot_CommSelection() 

callback function invoked, if the protocol wants to use a COM profile. 


### function protocol_status_callback

```cpp
void protocol_status_callback(
    const struct ProtStatus * status,
    void * data
)
```


**Parameters**: 

  * **status** pointer to protocol status structure 
  * **data** application pointer (always NULL, recently unused) 


callback function invoked by SDI protocol to notify SDI about new connection state. The callback function passes the protocol status, same as returned by [mADK_PP_Prot::get_status()](classm_a_d_k___p_p___prot.md#function-get-status) function. For more details, see description of mADK_PP_Prot_GetStatus() and mADK_PP_Prot_StatusCallback() 


### function command_callback

```cpp
static void command_callback(
    void * handle,
    char * cmd,
    int size,
    char protType,
    unsigned msgId,
    void * data
)
```


callback function for selection of the communication type, see description of mADK_PP_Prot_ProcessCommand() 



## Attributes Documentation

### variable key

```cpp
static pthread_key_t key;
```


### variable key_once

```cpp
static pthread_once_t key_once = PTHREAD_ONCE_INIT;
```


### variable obj_mutex

```cpp
static pthread_mutex_t obj_mutex = PTHREAD_MUTEX_INITIALIZER;
```



## Macros Documentation

### define PROT_TYPE_VALID

```cpp
#define PROT_TYPE_VALID(
    t
)
((t=='A' || t=='B' || t=='C' || t=='D') ? true : false)
```


## Source code

```cpp
#include "madk_pp_protocol.h"
#include "main.h"
#include "filesystem.h"
#include "pathutil.h"
#include "pthreadutil.h" // MutexLock
#ifndef HEADLESS
  #include "ui_mode.h"
#endif
#ifdef __ANDROID__
  #include "sdi-pal.h"
#endif
#include "_logf.h"
#include "sys.h"
#include "sec.h"
#include "ped.h"
#include "card_dt.h"
#include "epp/counterTop.h"
#ifndef _STM32
  #include <dlfcn.h> // don't use dlopen() on Titus
#endif
#include <sys/stat.h>

/* protocol library header
 * Depending on define NO_LIBCOM this either includes for
 * NO_LIBCOM==0: "com/libcom.h" (requires linking of ADKCOM library)
 * NO_LIBCOM==1: "libcom_adapt/libcom_adapt.h" (requires adding ADKCOM library adaption module libcom_adapt.cpp) */
#include "lib_mADK_PP_Prot/mADK_PP_Prot.h"

// macro to check protocol type
#define PROT_TYPE_VALID(t) ((t=='A' || t=='B' || t=='C' || t=='D') ? true : false)

using namespace std;

/**************************** class ConnectionContext ****************************/

/* For each connection a separate thread is used, which invokes
 * mADK_PP_Prot::set_command(), whenever data is provided by the protocol.
 * This helper class is used to store context data for each connection so that
 * the invoking thread (belonging to this connection) can access its data */
class ConnectionContext
{
    /* disallow copy of this object */
    ConnectionContext();
    void operator=(const ConnectionContext &o);
  public:
    void *handle;   
    char prot_type; 
    unsigned msg_id; 
    /* get connection context for the invoking thread
     * \return pointer to connection context or NULL,
     * if the invoking thread does not belong to any active connection */
    static ConnectionContext *get();

    /* create a connection for the invoking thread.
     * If the context already exists, the existing context is returned.
     * \return pointer to connection context */
    static ConnectionContext *create();
};

ConnectionContext::ConnectionContext()
{
  handle = 0;
  prot_type = 0;
  msg_id = 0;
}
static pthread_key_t key;
static pthread_once_t key_once = PTHREAD_ONCE_INIT;

static void cleanup(void *data)
{
  if (data)
  {
    delete (ConnectionContext *)data;
  }
}

static void make_key()
{
  pthread_key_create(&key, cleanup);
}

ConnectionContext *ConnectionContext::get()
{
  pthread_once(&key_once, make_key);
  return (ConnectionContext *)pthread_getspecific(key);
}

ConnectionContext *ConnectionContext::create()
{
  pthread_once(&key_once, make_key);
  ConnectionContext *ctx = (ConnectionContext *)pthread_getspecific(key);

  if (!ctx)
  {
    ctx = new ConnectionContext;
    pthread_setspecific(key, ctx);
  }

  return ctx;
}

static void trace_callback(const char *trace, void *data)
{
  (void) data;
  _LOGF_TRACE("%s", trace);
}

static int select_com_callback(int comInterfaces, char **ComFileName, void *data)
{
  (void) data;
#ifdef HEADLESS
  (void) comInterfaces;
  (void) ComFileName;
  return RESULT_FAIL;
#else

  if (select_com_profile(comInterfaces, ComFileName))
  {
    return RESULT_OK;
  }

  return RESULT_FAIL;
#endif
}

void protocol_status_callback(const struct ProtStatus *status, void *data)
{
  (void)data;

  if (!status)
  {
    return;
  }

  // set connection state for EPP (running as TLS server in mADK_PP_Prot (IPC variant)
  vfiepm::CounterTop::getInstance().setEppConnected(status->connection_state == ComConnected);

#ifndef HEADLESS
  // update UI with new protocol status
  protocol_status_ui_update(status);
#endif
}

static void command_callback(void *handle, char *cmd, int size, char protType, unsigned msgId, void *data)
{
  mADK_PP_Prot *proto = (mADK_PP_Prot *)data;
  proto->set_command(handle, cmd, size, protType, msgId);
}

/**************************** class mADK_PP_Prot ****************************/

/* PWMADK-2030: load mADK_PP protocol library with dlopen() to decice during runtime, which variant to use:
 *              - COM variant: Uses ADKCOM to support several COM types, such as BT, BLE etc.
 *                             Note: This variant does not provide multi connection support with protocol C (side connections).
 *              - IPC variant: Uses ADKIPC and provides multi connection support with protocol C (side connections).
 *                             Note: This variant does not provide several COM types (BT, BLE etc.), only profiles for TCP/IP are supported. */
struct mADK_PP_Prot_Loader
{
#ifndef _STM32
    void *so_handle;
#endif
    void (*_mADK_PP_Prot_GetStatus)(struct ProtStatus *status);
    void (*_mADK_PP_Prot_GetConnectInfo)(struct ConnectInfo *info);
    void (*_mADK_PP_Prot_FreeConnectInfo)(struct ConnectInfo *info);
    void (*_mADK_PP_Prot_SelectComProfile)(const char *newComFileName);
    void (*_mADK_PP_Prot_SetStatusCallback)(mADK_PP_Prot_StatusCallback cb, void *cb_data);
    void (*_mADK_PP_Prot_SetTraceCallback)(mADK_PP_Prot_TraceCallback cbf, void *cb_data);
    void (*_mADK_PP_Prot_handleComm)(mADK_PP_Prot_ProcessCommand cmd_cb, void *cmd_data, mADK_PP_Prot_CommSelection sel_cb);
    int (*_mADK_PP_Prot_SendCommand)(void *handle, char *data, unsigned long dataLength, char protType, unsigned msgId);
    int (*_mADK_PP_Prot_isTrustedConnection)(void *handle, int interal_android);
    int (*_mADK_PP_Prot_SetAclConfig)(const char *acl_default, const char *acl_user); // optional symbol
    int (*_mADK_PP_Prot_GetTcpClientInfo)(void *handle, struct TcpInfo *info);
    int (*_mADK_PP_Prot_GetUdsClientInfo)(void *handle, struct UdsInfo *info); // optional symbol
    int (*_mADK_PP_Prot_GetConnectionType)(void *handle);

#ifdef _STM32
    mADK_PP_Prot_Loader(bool &error, string &info)
    {
      _mADK_PP_Prot_GetStatus = mADK_PP_Prot_GetStatus;
      _mADK_PP_Prot_GetConnectInfo = mADK_PP_Prot_GetConnectInfo;
      _mADK_PP_Prot_FreeConnectInfo = mADK_PP_Prot_FreeConnectInfo;
      _mADK_PP_Prot_SelectComProfile = mADK_PP_Prot_SelectComProfile;
      _mADK_PP_Prot_SetStatusCallback = mADK_PP_Prot_SetStatusCallback;
      _mADK_PP_Prot_SetTraceCallback = mADK_PP_Prot_SetTraceCallback;
      _mADK_PP_Prot_handleComm = mADK_PP_Prot_handleComm;
      _mADK_PP_Prot_SendCommand = mADK_PP_Prot_SendCommand;
      _mADK_PP_Prot_isTrustedConnection = mADK_PP_Prot_isTrustedConnection;
      _mADK_PP_Prot_SetAclConfig = 0; // optional symbol
      _mADK_PP_Prot_GetTcpClientInfo = mADK_PP_Prot_GetTcpClientInfo;
      _mADK_PP_Prot_GetUdsClientInfo = 0; // optional symbol
      _mADK_PP_Prot_GetConnectionType = mADK_PP_Prot_GetConnectionType;
      error = false;
      info = "use Titus protocol functions";
    }
#else
    mADK_PP_Prot_Loader(bool &error, string &info)
    {
      _mADK_PP_Prot_GetStatus = 0;
      _mADK_PP_Prot_GetConnectInfo = 0;
      _mADK_PP_Prot_FreeConnectInfo = 0;
      _mADK_PP_Prot_SelectComProfile = 0;
      _mADK_PP_Prot_SetStatusCallback = 0;
      _mADK_PP_Prot_SetTraceCallback = 0;
      _mADK_PP_Prot_handleComm = 0;
      _mADK_PP_Prot_SendCommand = 0;
      _mADK_PP_Prot_isTrustedConnection = 0;
      _mADK_PP_Prot_SetAclConfig = 0;
      _mADK_PP_Prot_GetTcpClientInfo = 0;
      _mADK_PP_Prot_GetUdsClientInfo = 0;
      _mADK_PP_Prot_GetConnectionType = 0;
      error = true;
      info.clear();
      string protlib;

#if defined _VOS || defined _VOS3
#ifndef HEADLESS

      if (multi_connection_support_enabled())
      {
        protlib = pathcat(sdi::filesystem::home_lib_dir(), "lib_mADK_PP_Prot_ipc.so.1");
      }
      else
      {
        protlib = pathcat(sdi::filesystem::home_lib_dir(), "lib_mADK_PP_Prot_com.so.1");
      }

#else // shouldn't happen, since all VOS platforms do not use HEADLESS
      protlib = pathcat(sdi::filesystem::home_lib_dir(), "lib_mADK_PP_Prot_ipc.so.1");
#endif
#elif defined __ANDROID__
      // always use IPC variant with multi connection support
      protlib = pathcat(sdi::filesystem::home_lib_dir(), "lib_mADK_PP_Prot_ipc.so");
#else // x86
      // search next to the SDI server binary
#  ifdef NO_LIBCOM // default: use IPC variant
      protlib = pathcat(sdi::filesystem::binary_dir(), "lib_mADK_PP_Prot_ipc.so.1");
#  else            // SDI server was build to use old COM variant
      protlib = pathcat(sdi::filesystem::binary_dir(), "lib_mADK_PP_Prot_com.so.1");
#  endif
#endif
      // load the protocol library
      so_handle = dlopen(protlib.c_str(), RTLD_NOW);

      if (!so_handle)
      {
        info = "failed to load protocol library " + protlib + " (error=" + dlerror() + ")";
        return;
      }

      _mADK_PP_Prot_GetStatus = (void (*)(struct ProtStatus * status))dlsym(so_handle, "mADK_PP_Prot_GetStatus");

      if (!_mADK_PP_Prot_GetStatus)
      {
        info = "symbol mADK_PP_Prot_GetStatus missing";
        return;
      }

      _mADK_PP_Prot_GetConnectInfo = (void (*)(struct ConnectInfo * info))dlsym(so_handle, "mADK_PP_Prot_GetConnectInfo");

      if (!_mADK_PP_Prot_GetConnectInfo)
      {
        info = "symbol mADK_PP_Prot_GetConnectInfo missing";
        return;
      }

      _mADK_PP_Prot_FreeConnectInfo = (void (*)(struct ConnectInfo * info))dlsym(so_handle, "mADK_PP_Prot_FreeConnectInfo");

      if (!_mADK_PP_Prot_FreeConnectInfo)
      {
        info = "symbol mADK_PP_Prot_FreeConnectInfo missing";
        return;
      }

      _mADK_PP_Prot_SelectComProfile = (void (*)(const char *newComFileName))dlsym(so_handle, "mADK_PP_Prot_SelectComProfile");

      if (!_mADK_PP_Prot_SelectComProfile)
      {
        info = "symbol mADK_PP_Prot_SelectComProfile missing";
        return;
      }

      _mADK_PP_Prot_SetStatusCallback = (void (*)(mADK_PP_Prot_StatusCallback cb, void *cb_data))dlsym(so_handle, "mADK_PP_Prot_SetStatusCallback");

      if (!_mADK_PP_Prot_SetStatusCallback)
      {
        info = "symbol mADK_PP_Prot_SetStatusCallback missing";
        return;
      }

      _mADK_PP_Prot_SetTraceCallback = (void (*)(mADK_PP_Prot_TraceCallback cbf, void *cb_data))dlsym(so_handle, "mADK_PP_Prot_SetTraceCallback");

      if (!_mADK_PP_Prot_SetTraceCallback)
      {
        info = "symbol mADK_PP_Prot_SetTraceCallback missing";
        return;
      }

      _mADK_PP_Prot_handleComm = (void (*)(mADK_PP_Prot_ProcessCommand cmd_cb, void *cmd_data, mADK_PP_Prot_CommSelection sel_cb))dlsym(so_handle, "mADK_PP_Prot_handleComm");

      if (!_mADK_PP_Prot_handleComm)
      {
        info = "symbol mADK_PP_Prot_handleComm missing";
        return;
      }

      _mADK_PP_Prot_SendCommand = (int (*)(void *handle, char *data, unsigned long dataLength, char protType, unsigned msgId))dlsym(so_handle, "mADK_PP_Prot_SendCommand");

      if (!_mADK_PP_Prot_SendCommand)
      {
        info = "symbol mADK_PP_Prot_SendCommand missing";
        return;
      }

      _mADK_PP_Prot_isTrustedConnection = (int (*)(void *handle, int interal_android))dlsym(so_handle, "mADK_PP_Prot_isTrustedConnection");

      if (!_mADK_PP_Prot_isTrustedConnection)
      {
        info = "symbol mADK_PP_Prot_isTrustedConnection missing";
        return;
      }

      _mADK_PP_Prot_SetAclConfig = (int (*)(const char *acl_default, const char *acl_user))dlsym(so_handle, "mADK_PP_Prot_SetAclConfig");

      // optional symbol, access control only supported by IPC protocol variant
      if (!_mADK_PP_Prot_SetAclConfig)
      {
        info = "symbol mADK_PP_Prot_SetAclConfig missing, SDI access control disabled\n";
      }

      _mADK_PP_Prot_GetTcpClientInfo = (int (*)(void *handle, struct TcpInfo * info))dlsym(so_handle, "mADK_PP_Prot_GetTcpClientInfo");

      if (!_mADK_PP_Prot_GetTcpClientInfo)
      {
        info = "symbol mADK_PP_Prot_GetTcpClientInfo missing";
        return;
      }

      _mADK_PP_Prot_GetUdsClientInfo = (int (*)(void *handle, struct UdsInfo * info))dlsym(so_handle, "mADK_PP_Prot_GetUdsClientInfo");

      // optional symbol, UDS only supported by IPC protocol variant
      if (!_mADK_PP_Prot_GetUdsClientInfo)
      {
        info = "symbol mADK_PP_Prot_GetUdsClientInfo missing, Unix Domain Socket disabled\n";
      }

      _mADK_PP_Prot_GetConnectionType = (int (*)(void *handle))dlsym(so_handle, "mADK_PP_Prot_GetConnectionType");

      if (!_mADK_PP_Prot_GetConnectionType)
      {
        info = "symbol mADK_PP_Prot_GetConnectionType missing";
        return;
      }

      error = false;
      info += "protocol library " + protlib + " successfully loaded";
    }
#endif

    virtual ~mADK_PP_Prot_Loader()
    {
#ifndef _STM32

      if (so_handle)
      {
        dlclose(so_handle);
      }

#endif
    }

  private:
    // disable copy constructor and assign operator
    mADK_PP_Prot_Loader(const mADK_PP_Prot_Loader&);
    mADK_PP_Prot_Loader& operator=(const mADK_PP_Prot_Loader&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    mADK_PP_Prot_Loader(const mADK_PP_Prot_Loader&&);
    mADK_PP_Prot_Loader& operator=(mADK_PP_Prot_Loader&&);
#endif
};

// init singleton object
mADK_PP_Prot *mADK_PP_Prot::obj = 0;
// protects creation of the protocol singleton instance
static pthread_mutex_t obj_mutex = PTHREAD_MUTEX_INITIALIZER;

mADK_PP_Prot *mADK_PP_Prot::getInstance()
{
  if (obj)  // optimize
  {
    return obj;
  }

  pthread_mutex_lock(&obj_mutex);

  if (!obj)
  {
    obj = new mADK_PP_Prot;
  }

  pthread_mutex_unlock(&obj_mutex);
  return obj;
}

mADK_PP_Prot::mADK_PP_Prot()
{
  pthread_mutex_init(&mutex, 0);
  pthread_condattr_t attr;
  pthread_condattr_init(&attr);
  pthread_condattr_setclock(&attr, CLOCK_MONOTONIC);
  pthread_cond_init(&cond, &attr);
  pthread_condattr_destroy(&attr);
  prot_type = 0;
  msg_id = msg_id_payment = msg_id_nested = 0;
  prot_state = PS_Stopped;
  cmd_active = false;
  nested_cmd = false;
  aborted = AS_NotAborted;
  req_type = Request_None;
  recovery_mode = false;
  busy = false;
  cancelled = false;
  unlock_payment_pending = false;
  main_handle = 0;
  busy_handle = 0;
  cmd_counter = 0;

  bool error;
  string info;
  lib = new mADK_PP_Prot_Loader(error, info);

  if (error)
  {
    _LOGF_ERROR("mADK_PP_Prot::mADK_PP_Prot(): mADK_PP_Prot_Loader() failed with error: %s !!!", info.c_str());
    delete lib;
    lib = 0;
    return;
  }

  _LOGF_INFO("mADK_PP_Prot::mADK_PP_Prot(): %s", info.c_str());

  // enable protocol trace (trace_callback() logs for level LOGAPI_TRACE only)
  if (_LOG_LEVEL_ENABLED(LOGAPI_TRACE))
  {
    lib->_mADK_PP_Prot_SetTraceCallback(trace_callback, NULL);
  }

  // load initial ACL configuration
  (void)loadAcl();

#ifndef HEADLESS
  // enable connection status callbacks to get protocol connection state
  lib->_mADK_PP_Prot_SetStatusCallback(protocol_status_callback, NULL);
#endif
}

mADK_PP_Prot::~mADK_PP_Prot()
{
  pthread_cond_destroy(&cond);
  pthread_mutex_destroy(&mutex);

  if (lib)
  {
    delete lib;
  }
}

void mADK_PP_Prot::setRecoveryMode(bool on_off)
{
  _LOGF_INFO("mADK_PP_Prot::setRecoveryMode(): %s", on_off ? "true" : "false");
  recovery_mode = on_off;
}

bool mADK_PP_Prot::start()
{
  MutexLock m(&mutex);

  // protocol library not loaded
  if (!lib)
  {
    return false;
  }

  if (prot_state != PS_Stopped)
  {
    return true; // already running
  }

#ifdef _STM32
  /* On Titus we call mADK_PP_Prot::run() at once, which will register required
   * handlers to detect activity on physical I/O interfaces only (recently for
   * USB and BT). Finally, threads will be created if required and not on startup.
   * This avoids waste of resources for threads just waiting. */
  mADK_PP_Prot::run(this);
#else
  // start the protocol in a separate thread
  int ret = pthread_create(&proto_thread, 0, mADK_PP_Prot::run, this);

  if (ret != 0)
  {
    _LOGF_ERROR("mADK_PP_Prot::mADK_PP_Prot(): cannot start protocol thread !!!");
    return false;
  }

#endif

  prot_state = PS_Running;

  _LOGF_INFO("mADK_PP_Prot::mADK_PP_Prot(): protocol started");

  return true;
}

void mADK_PP_Prot::stop()
{
  if (prot_state != PS_Running)
  {
    return;  // we're done, if protocol wasn't started or was already stopped
  }

  prot_state = PS_Aborted;

  /* reset the protocol with an empty COM profile, this will close
   * all active connections and _mADK_PP_Prot_handleComm() will return.
   * Finally, PS_Aborted will terminate the thread in mADK_PP_Prot::run(). */
  if (lib)
  {
    lib->_mADK_PP_Prot_SelectComProfile("");
  }

#ifndef _STM32 // no SDI protocol thread on Titus
  pthread_join(proto_thread, 0);
#endif

  prot_state = PS_Stopped; // make start() working

  _LOGF_INFO("mADK_PP_Prot::mADK_PP_Prot(): protocol stopped");
}

bool mADK_PP_Prot::loadAcl()
{
  if (!lib || !lib->_mADK_PP_Prot_SetAclConfig) // check optional symbol
  {
    _LOGF_INFO("%s: SDI access control disabled", __FUNCTION__);
    return false;
  }

#ifdef __ANDROID__
  string version;
  long version_code;

  if (pal::getPackageVersion("com.verifone.cardreader", version, version_code) != PAL_OK)
  {
    _LOGF_ERROR("%s: getPackageVersion() for 'com.verifone.cardreader' failed", __FUNCTION__);
    return false;
  }

  _LOGF_INFO("%s: getPackageVersion() for 'com.verifone.cardreader' returned: '%s' (version_code: %ld)",
             __FUNCTION__, version.c_str(), version_code);

  // expected minimum version of CRS with Unix Domain Socket support: 5.340.1 meaning version_code 5340100 (dec)
  const long CRS_VERSION_EXPECTED = 5340100;

  // check if installed CRS supports Unix Domain Socket
  if (version_code < CRS_VERSION_EXPECTED)
  {
    long major = CRS_VERSION_EXPECTED / 1000000;
    long minor = (CRS_VERSION_EXPECTED % 1000000) / 1000;
    long bugfix = (CRS_VERSION_EXPECTED % 1000) / 100;
    long build = CRS_VERSION_EXPECTED % 100;
    _LOGF_WARN("%s: Installed 'com.verifone.cardreader' does not support Unix Domain Socket (%ld<%ld, expected version is: %ld.%ld.%ld.%ld). "
               "SDI access control disabled.", __FUNCTION__, version_code, CRS_VERSION_EXPECTED, major, minor, bugfix, build);
    return false;
  }

#endif

  // unload ACL configuration (if already loaded)
  lib->_mADK_PP_Prot_SetAclConfig(NULL, NULL);

  struct stat s;

  // check if default access control file exists (usually always installed with SDI base package)
  std::string default_aclFile = sdi::filesystem::home_config_file(SDI_ACL_FILE);

  if (stat(default_aclFile.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
  {
    // shouldn't happen (SDI server installation always provides an ACL default file)
    _LOGF_ERROR("%s: default ACL configuration '%s' does not exist", __FUNCTION__, default_aclFile.c_str());
    return false;
  }

  // check if user config access control file exists (optionally installed with user config package)
  std::string user_aclFile = pathcat(sdi::filesystem::ext_config_dir(), SDI_ACL_FILE);

  if (stat(user_aclFile.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
  {
    user_aclFile.clear();
    // user ACL configuration file is optional
    _LOGF_INFO("%s: user ACL configuration '%s' not installed", __FUNCTION__, user_aclFile.c_str());
  }

  // load ACL configuration
  int ret = lib->_mADK_PP_Prot_SetAclConfig(default_aclFile.c_str(),
            user_aclFile.empty() ? NULL : user_aclFile.c_str());

  if (ret != 0)
  {
    _LOGF_ERROR("%s: cannot load ACL configuration file(s) (default: '%s', user: '%s')",
                __FUNCTION__, default_aclFile.c_str(), user_aclFile.empty() ? "none" : user_aclFile.c_str());
    return false;
  }

  _LOGF_INFO("%s: ACL configuration file(s) successfully loaded (default: '%s', user: '%s')",
             __FUNCTION__, default_aclFile.c_str(), user_aclFile.empty() ? "none" : user_aclFile.c_str());

  return true;
}

void mADK_PP_Prot::reset()
{
#ifndef HEADLESS
  /* reset selected COM profile and clear current COM configuration. This will force
   * reading of COM configuration and selection of COM profile with next call of
   * select_com_callback(). With enabled UI, the COM setup wizard will pop up. */
  reset_com_profile();
#endif

  if (prot_state != PS_Running)
  {
    return;  // we're done, if protocol wasn't started yet
  }

  /* reset the protocol with an empty COM profile, this will close
   * all active connections and _mADK_PP_Prot_handleComm() will return.
   * When mADK_PP_Prot::run() calls this function again, this will lead to
   * invocation of select_com_callback(), which setups COM interface again */
  if (lib)
  {
    lib->_mADK_PP_Prot_SelectComProfile("");
  }

#ifdef _STM32
  // Titus has no SDI protocol thread, thus, we have to care about restart
  mADK_PP_Prot::run(this);
#endif
}

bool mADK_PP_Prot::get_status(struct ProtStatus *status) const
{
  if (!lib || !status)
  {
    return false;
  }

  lib->_mADK_PP_Prot_GetStatus(status);
  return true;
}

bool mADK_PP_Prot::get_connection_info(struct ConnectInfo *info) const
{
  if (!lib || !info)
  {
    return false;
  }

  lib->_mADK_PP_Prot_GetConnectInfo(info);
  return true;
}

void mADK_PP_Prot::free_connection_info(struct ConnectInfo *info) const
{
  if (!lib || !info)
  {
    return;
  }

  lib->_mADK_PP_Prot_FreeConnectInfo(info);
}

void mADK_PP_Prot::set_com_profile(const char *file) const
{
  if (lib)
  {
    lib->_mADK_PP_Prot_SelectComProfile(file);
  }
}

bool mADK_PP_Prot::trusted_connection()
{
  // protocol library not loaded
  if (!lib)
  {
    return false;
  }

  void *handle = get_handle();

  if (!handle)
  {
    _LOGF_ERROR("mADK_PP_Prot::trusted_connection(): failed, no connection handle");
    return false;
  }

  return lib->_mADK_PP_Prot_isTrustedConnection(handle, sys_internal_android() ? 1 : 0) == 1;
}

bool mADK_PP_Prot::get_tcp_info(struct TcpInfo *info)
{
  // protocol library not loaded
  if (!info || !lib)
  {
    return false;
  }

  void *handle = get_handle();

  if (!handle)
  {
    _LOGF_ERROR("mADK_PP_Prot::get_tcp_info(): failed, no connection handle");
    return false;
  }

  return lib->_mADK_PP_Prot_GetTcpClientInfo(handle, info) == 0;
}

bool mADK_PP_Prot::get_uds_info(struct UdsInfo *info)
{
  if (!info || !lib || !lib->_mADK_PP_Prot_GetUdsClientInfo) // check optional symbol
  {
    return false;
  }

  void *handle = get_handle();

  if (!handle)
  {
    _LOGF_ERROR("mADK_PP_Prot::get_uds_info(): failed, no connection handle");
    return false;
  }

  return lib->_mADK_PP_Prot_GetUdsClientInfo(handle, info) == 0;
}

bool mADK_PP_Prot::isConnectionThread() const
{
  return !!ConnectionContext::get();
}

bool mADK_PP_Prot::isMainConnectionThread() const
{
  ConnectionContext *ctx = ConnectionContext::get();
  return (ctx && ctx->handle == main_handle); // note: context only stores valid handles (! NULL)
}

void *mADK_PP_Prot::get_handle() const
{
  /* SDI main thread(s) never invoke(s) this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a connection thread from the protocol */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    return ctx->handle;
  }

  // other SDI application threads must use SDI main connection handle
  return main_handle;
}

char mADK_PP_Prot::get_protocol_type() const
{
  /* SDI main thread(s) never invoke(s) this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a connection thread from the protocol */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    return ctx->prot_type;
  }

  if (!cmd_active)
  {
    return 0;
  }

  return prot_type;
}


void *mADK_PP_Prot::run(void *data)
{
  mADK_PP_Prot *prot = (mADK_PP_Prot *)data;

  while (1)
  {
    /* Open the communication channel and start receiving commands.
     * Note: Paramater prot contains pointer to mADK_PP_Prot object,
     *       which is passed to callback function mADK_PP_Prot::command_callback() */
    prot->loader()->_mADK_PP_Prot_handleComm(command_callback, prot, select_com_callback);
    _LOGF_INFO("mADK_PP_Prot::run(): mADK_PP_Prot_handleComm: returned");
#ifdef _STM32
    /* Titus does not use SDI protocol thread and just registers handlers
     * to start internal protocols. select_com_callback also unused. */
    break;
#else

    // check, if protocol was aborted
    if (prot->get_protocol_state() == PS_Aborted)
    {
      _LOGF_INFO("mADK_PP_Prot::run(): protocol thread terminates...");
      break;
    }

    /* avoid busy loop of this callback, in case if no COM type was
     * selected or the protocol fails with the selected COM type */
    sleep(1);
#endif
  }

  return 0;
}

bool mADK_PP_Prot::isCallbackResponse(const enum CommandType cmd)
{
  switch (cmd)
  {
    case Cmd_EmvCbResponse:
    case Cmd_CtrlCbResponse:
    case Cmd_TrgrCbResponse:
      return true;

    default:
      break;
  }

  return false;
}

enum mADK_PP_Prot::CommandType mADK_PP_Prot::getCommandType(const unsigned char *cmd, unsigned size)
{
  if (cmd && size >= 2)
  {
    if (cmd[0] == 0x20 && cmd[1] == 0x02)
    {
      return Cmd_Abort;
    }

    if (cmd[0] == 0x20 && cmd[1] == 0x06)
    {
      return Cmd_LockPayment;
    }

    if (cmd[0] == 0x20 && cmd[1] == 0x07)
    {
      return Cmd_ResetLink;
    }

    if (cmd[0] == 0x20 && cmd[1] == 0x20)
    {
      return Cmd_ExtButton;
    }

    if (cmd[0] == 0x20 && cmd[1] == 0x1D)
    {
      return Cmd_Check4Update;
    }

    if (cmd[0] == 0x92)
    {
      return Cmd_EmvCbResponse;
    }

    if (cmd[0] == 0x9C)
    {
      return Cmd_CtrlCbResponse;
    }

    if (cmd[0] == 0x9A && cmd[1] == 0x02)
    {
      return Cmd_TrgrCbResponse;
    }

    if ((cmd[0] == 0x9E)
        || (cmd[0] == 0x9A && cmd[1] == 0x04))  // 9A-04 callback (triggered by the VOS3 plugin callback) needs to be handled by SDI as a Cmd_PaymentNotificationCb similar to the 9E-XX callbacks.
    {
      return Cmd_PaymentNotificationCb;
    }
  }

  return Cmd_Any;
}

void mADK_PP_Prot::set_command(void *handle, char *cmd, int size, char protType, unsigned msgId)
{
  /* ignore invalid parameters or command (shouldn't happen)
   * 1. set_command() always must be invoked with a handle
   * 2. a command (cmd != NULL) must always be at least 2 bytes and must have a valid command type
   * 3. allow cmd == NULL and size == 0, which means EOF */
  if (!handle || (cmd && (size < 2 || !PROT_TYPE_VALID(protType))) || (!cmd && size != 0))
  {
    _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): failed, invalid parameter or command (cmd=%p,size=%d)",
                handle, (protType ? protType : '0'), msgId, cmd, size);
    return;
  }

  // resolve to known command type
  enum CommandType cmd_type = getCommandType((const unsigned char *)cmd, (unsigned)size);

  if (cmd_type == Cmd_ResetLink)
  {
    _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): received command reset link [2007]",
               handle, protType, msgId);

    /* only serial (UART/USB emulated) connection types (so far) have support for reset link [2007],
     * others usually use a TCP stack, which provides connection setup/termination handling */
    if (_get_connection_type(handle) != COM_CONNECTION_TYPE_RAW_SERIAL)
    {
      unsigned char c[] = {0x64, 0xF9}; // command not allowed
      _send(handle, c, 2, protType, msgId);

      _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline side command reset link [2007] with 64F9 (reason: only allowed for serial/USB connection types)",
                  handle, protType, msgId);
      return;
    }

    // fall through and handle Cmd_ResetLink below
  }

  // connection disturbed (e.g. received EOF or 20-07 Reset Link)
  if ((!cmd && size == 0) || cmd_type == Cmd_ResetLink)
  {
    // close opened ADKSEC handles associated to this connection
    cleanUpSecHandles(handle);
    // stop PIN Entry for this connection, if it was started with 22-03 (Start PIN entry)
    pedReset(handle);
    // stop Card Detection for the main connection, if it was started asynchronous with 23-03 (Start Card Detection)
    cardDetectReset(handle);
    // reset update context allocated for SW update with 20-14, 20-15, 20-16
    sysResetUpdateContext(handle); // calls set_busy(false) and requires mutex

    MutexLock m(&mutex);

    if (main_handle == handle)
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): Main connection terminated (reason: %s)",
                 handle, (protType ? protType : '0'), msgId, (cmd_type == Cmd_ResetLink ? "reset link [2007]" : "EOF"));

      // if a command is active or pending and send() wasn't called yet
      if (cmd_active || !cmdbuf.empty())
      {
        // decrement command counter (check to avoid overflow, shouldn't happen)
        if (cmd_counter > 0)
        {
          cmd_counter--;
        }
      }

      // reset state variables, if current command connection terminates
      main_handle = 0;
      cmd_active = false;
      cancelled = false;
      unlock_payment_pending = false;
      req_type = Request_None;
      cmdbuf.clear();
      // wake up waiting thread in poll()
      aborted = AS_ConnectionLost;
      pthread_cond_signal(&cond);
    }
    else
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): Side connection terminated (reason: %s)",
                 handle, (protType ? protType : '0'), msgId, (cmd_type == Cmd_ResetLink ? "reset link [2007]" : "EOF"));
    }

    // reset the busy flag, if the busy state was requested by another command
    if (busy_handle == handle)
    {
      busy_handle = 0;
      busy = false;
    }

    // send response for reset link (20-07)
    if (cmd_type == Cmd_ResetLink)
    {
      unsigned char c[] = {0x90, 0x00};
      _send(handle, c, 2, protType, msgId);
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): send result 9000 for command [2007]", handle, protType, msgId);
    }

    return;
  }

  _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): received command [%02x%02x], size: %d",
             handle, protType, msgId, cmd[0], cmd[1], size);

  /* variable which decides to reply with result response within this function independently.
   * It is set to true (suppress sending result) for the following commands and conditions:
   * 1. sysAbort 20-02 using protocol type D
   * 2. sysAbort 20-02 suppressed by option P2 using another protocol type than D
   * 3. sysExtButton 20-20 suppressed by option P2 using other protocol than D */
  bool suppress_reply =
    (cmd_type == Cmd_Abort && (protType == 'D' || (size > 3 && (cmd[3] & 0x01)))) ||
    (cmd_type == Cmd_ExtButton && protType != 'D' && size > 3 && (cmd[3] & 0x01));

  /* For early command processing with process_side_command(), we store required data in
   * connection context of this thread, which is taken from there, if the command is
   * exexcuted as a side command. Finally, send() must know at least, which handle to use.
   * Even if this context is required to identify side connection threads only,
   * it is also created for the main connection thread, because this connection is
   * allowed use protocol type 'C' and 'D', too. In this case the main connection thread
   * is also considered as a side connection thread, which uses process_side_command(). */
  ConnectionContext *ctx = ConnectionContext::create();
  ctx->handle = handle; // store the handle of this connection
  ctx->prot_type = protType; // store protocol type
  ctx->msg_id = msgId; // store message ID

  /* PWMADK-3450: Decrypt command (if required) as soon as possible, otherwise we would do it with
   * process_side_command() and dispatch() afterwards at twice (for payment command using protocol type D) */
  vector<unsigned char> decr_cmd;

  if (!isCallbackResponse(cmd_type)) // incomming command, no request response
  {
    // if enabled, check MAC and decrypt command
    unsigned cmd_size = size;
    unsigned short ret = check_mac_decrypt((unsigned char *)cmd, cmd_size, decr_cmd);

    if (ret != 0x9000)
    {
      unsigned char c[] = {(unsigned char)(ret >> 8), (unsigned char)(ret)};

      if (!suppress_reply)
      {
        _send(handle, c, 2, protType, msgId);
      }

      _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): check_mac_decrypt() failed, decline side command [%02x%02x] with %sresult %02x%02x returned by check_mac_decrypt()",
                  handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "", c[0], c[1]);
      return;
    }

    // apply new command size (removed MAC or decrypted)
    if (cmd_size != (unsigned) size)
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): adjust size=%d to new size %u returned by check_mac_decrypt()",
                 handle, protType, msgId, size, cmd_size);
      size = (int) cmd_size;
    }

    // apply decrypted data as command
    if (decr_cmd.size() > 0)
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): adjust cmd=%p to decr_cmd=%p returned by check_mac_decrypt()",
                 handle, protType, msgId, cmd, &decr_cmd[0]);
      cmd = (char *)&decr_cmd[0];
    }
  }

  /* PWMADK-2042: Handle side commands with protocol type 'C', which are processed
   * full simultaneously to main connection. Note: These commands are bypassed
   * and the protocol connection thread does the command processing in parallel to
   * the running SDI main thread. Synchronisation is done in lower level functions
   * which are invoked by process_side_command().
   * PWMADK-3450: With new protocol type 'D' command can be processed simultaneously
   * on the same connection, since the protocol header supports message IDs so that
   * the receive can associate responses for each command. For a protocol type 'D' command
   * SDI tries to process it as side command first and if this processing is not supported,
   * the command is forwared to the SDI main thread for execution.  */
  if (protType == 'C' || protType == 'D')
  {
    // enter critical section to access class members
    MutexLock m(&mutex);

    bool processed = false; // set to true, if command was processed as side command

    // all callback request responses must be processed with SDI main thread
    if (!isCallbackResponse(cmd_type))
    {
      /* busy state set: decline command with busy response. Only the connection,
       * which has requested the busy state is allowed to send further commands */
      if (busy && busy_handle != handle)
      {
        unsigned char c[] = {0x64, 0x0A};

        if (!suppress_reply)
        {
          _send(handle, c, 2, protType, msgId);
        }

        _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline side command [%02x%02x] with %sresult 640A (reason=busy)",
                    handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "");
        return;
      }

      // recovery mode active : decline all commands except check4update
      if (recovery_mode && cmd_type != Cmd_Check4Update)
      {
        unsigned char c[] = {0x6F, 0xF1};

        if (!suppress_reply)
        {
          _send(handle, c, 2, protType, msgId);
        }

        _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline side command [%02x%02x] with %sresult 6FF1 (reason=recovery mode active)",
                    handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "");
        return;
      }

      // process type C or D command
      cmd_counter++;
      m.unlock(); // parallel processing of multiple type C or D commands
      processed = process_side_command((unsigned char *)cmd, (unsigned)size);
      m.lock(); // enter critical section to access class members again

      // decrement command counter (check to avoid overflow, shouldn't happen)
      if (cmd_counter > 0)
      {
        cmd_counter--;
      }
    }

    if (processed)
    {
      /* we're done with both protocol types, if the command was processed and
       * process_side_command() has sent the result response (positive or negative) */
      return;
    }

    /* provide error response for protocol type 'C' if the command wasn't processed.
     * Only protocol type D commands allow execution of the command with SDI main thread. */
    if (protType == 'C')
    {
      unsigned char c[] = {0x64, 0xF9}; // command not allowed

      if (!suppress_reply)
      {
        _send(handle, c, 2, protType, msgId);
      }

      _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline side command [%02x%02x] with %sresult 64F9 (reason: not allowed as side command)",
                  handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "");
      return;
    }

    // else: try to process protocol type 'D' command with SDI main thread
  }

  // enter critical section to access class members
  MutexLock m(&mutex);

  /*************************************************************************
  * Additional commands directly processed by this side connection thread *
  * to optain/release the payment lock (main connection). These commands  *
  * require SDI to be idle (see checks above) and to access to members    *
  * of this classmADK_PP_Prot with the internal mutex.                    *
  *************************************************************************/

  /* handle command sysLockPayment (20-06)
   * This is processed here as special side command at first, since this command
   * can be received at any time, from several connections or even from main connection
   * for a second time, since several threads in same SDI client application might
   * request the payment lock, if they run with different contexts independently. */
  if (cmd_type == Cmd_LockPayment)
  {
    /* Protocol type D: Even handle can be the main_handle, we always have to decline a
     * second command sysLockPayment (20-06), since several SDI client might share the
     * main connection (using a proxy, see docs) and might request the lock. For instance,
     * this is the case for 2 payment applications runniing with different contexts independently.
     * Protocol type A/B: Only decline another connection, which tries to obtain the payment lock
     * and the lock is already owned by the main connection. */
    if (main_handle) // already locked?
    {
      if (protType == 'D' || handle != main_handle)
      {
        unsigned char c[] = {0x64, 0xFA};
        _send(handle, c, 2, protType, msgId); // suppress_reply is always false for Cmd_LockPayment
        _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline command [%02x%02x] (lock payment) with result 64FA (reason: %s (main_handle=%p) %s)",
                    handle, protType, msgId, cmd[0], cmd[1],
                    handle != main_handle ? "another connection" : "this connection",
                    main_handle,
                    handle != main_handle ? "already owns the payment lock, no second main connection allowed" :
                    "is already owner of the payment lock, no second lock allowed");
        return; // already locked
      }

      /* protocol type 'A' and 'B': We are already locked on this main connection,
                                    fall through and respond with final result 9000. */
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): this connection is already main connection (main_handle=%p) and owns of the payment lock",
                 handle, protType, msgId, main_handle);
    }

    // send final message for protocol type 'A' and 'B'
    unsigned char c[] = {0x90, 0x00};

    /* for protocol D send keep command open and send
     * callback to signal that payment lock was obtained */
    if (protType == 'D')
    {
      c[0] = 0x99; // intermediate result callback
      c[1] = 0x01;
    }

    if (_send(handle, c, 2, protType, msgId)) // suppress_reply is always false for Cmd_LockPayment
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): send %s %02x%02x for command [%02x%02x] (lock payment)",
                 handle, protType, msgId, protType == 'D' ? "info callback" : "result", c[0], c[1], cmd[0], cmd[1]);
    }
    else
    {
      _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): failed to send %s %02x%02x for command [%02x%02x] (lock payment)",
                  handle, protType, msgId, protType == 'D' ? "callback" : "result", c[0], c[1], cmd[0], cmd[1]);
      return; // don't set payment lock, if reply wasn't successful
    }

    _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): obtain payment lock for main connection (new main_handle=%p)",
               handle, protType, msgId, handle);
    // set main connection handle (payment lock)
    main_handle = handle;
    // apply message ID for unidirectional callbacks with command()
    msg_id_payment = msgId; // unused for other protocol types than D
    return;
  }

  /*************************************************************/
  /**** DO CHECKS FOR PROCESSING AS MAIN CONNECTION COMMAND ****/
  /*************************************************************/

  /* PWMADK-1901: Only one connection at the same time is allowed to send messages with protocol
   * type 'A' or 'B' (or 'D' since PWMADK-3450). This connection is stored as main connection,
   * which is allowed to use the full function scope of SDI server (such as processing EMV payments).
   * Other side command must use a protocol type 'C' (or 'D' since PWMADK-3450) with restricted
   * scope of SDI server functions w/o payment functions. Thus, if another connection than the
   * main connection sends a message with protocol type 'A' or 'B' (or 'D' since PWMADK-3450
   * without the payment lock), this message is declined immediatelly. */
  if (main_handle != 0 && main_handle != handle)
  {
    unsigned char c[] = {0x64, 0xFA};

    if (!suppress_reply)
    {
      _send(handle, c, 2, protType, msgId);
    }

    _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline command [%02x%02x] with %sresult 64FA (reason: another connection (main_handle=%p) already owns the payment lock, no second main connection allowed)",
                handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "", main_handle);
    return;
  }

  // else: now main_handle equals handle, if not main_handle!=0

  /* handle some commands during SDI main thread is already
   * processing a command or a command is already buffered */
  if (cmd_active || !cmdbuf.empty())
  {
    /* handle command sysAbort(20-02)
     * Note: This command is not handled process_side_command() above, therefore, protocol
     * types A,B and D will reach this code. For C it was already declined (as not supported). */
    if (cmd_type == Cmd_Abort)
    {
      if (protType == 'D')
      {
        /* an async. abort with message ID of sysLockPayment (20-06) was received. This
         * shall release the payment lock. For this we abort the active SDI main thread command
         * and set the flag release the lock (reset main_handle) pending by send() when the active
         * command has been finished. The main connection handle is required during the active
         * command, since command() might send unidirectional callbacks (w/o response). */
        if (msgId == msg_id_payment)
        {
          cancelled = true;
          unlock_payment_pending = true;
          _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): abort command [%02x%02x] received, set cancelled and unlock_payment_pending flag",
                     handle, protType, msgId, cmd[0], cmd[1]);
          return;
        }

        // ignore abort for protocol type D, if message ID does not match the active command
        if (msgId != msg_id)
        {
          _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): ignore abort command [%02x%02x] (reason: message ID %u does not match the active SDI command [msg_id=%u])",
                     handle, protType, msgId, cmd[0], cmd[1], msgId, msg_id);
          return;
        }

        // else (msgId == msg_id): fall through and set the cancelled flag to abort the active command only
      }
      else
      {
        // protocol type A or B: consider P2 value 0x02 to release payment lock (main connection)
        if (size > 3 && (cmd[3] & 0x02))
        {
          cancelled = true;
          unlock_payment_pending = true;
          _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): abort command [%02x%02x] received, set cancelled and unlock_payment_pending flag",
                     handle, protType, msgId, cmd[0], cmd[1]);
          return;
        }

        // else: fall through and set the cancelled flag to abort the active command only
      }

      cancelled = true;
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): abort command [%02x%02x] received, set cancelled flag",
                 handle, protType, msgId, cmd[0], cmd[1]);
      return; // we're done, only set cancelled flag without command processing and response
    }

    /* handle command sysExtButton(20-20)
     * Note: This command is fully supported as side command, thus, only protocol type A or B will
     * reach this code here to cancel a running PED Get PIN (22-01) or PED start PIN entry (22-03) */
    if (cmd_type == Cmd_ExtButton)
    {
      bool result = pedSetExtButton();
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): ext button command [%02x%02x] received, pedSetExtButton() %s",
                 handle, protType, msgId, cmd[0], cmd[1], result ? "successful" : "failed");
      return; // we're done, don't send response during active command for protocol A and B
    }

    /* all request responses, which are received during an active command on main connection
     * with protocol type D must match the message ID of the active SDI command. */
    if (isCallbackResponse(cmd_type) && protType == 'D' && msgId != msg_id)
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): ignore callback response [%02x%02x] (reason: message ID %u does not match the active SDI command [msg_id=%u])",
                 handle, protType, msgId, cmd[0], cmd[1], msgId, msg_id);
      return; // don't respond callback responses
    }
  }
  else // process as normal command, if SDI server is idle
  {
    /* handle synchronous sysAbort 20-02 (as previously implemented in sys.cpp)
     * Note: This command is not handled process_side_command() above, therefore, protocol
     * types A,B and D will reach this code. For C it was already declined (as not supported).
     * We process this command before other decline checks (see below), since we don't
     * need the SDI main thread for its execution. Finally, the commmand does nothing except
     * release of the payment lock. In addition, this might resolve conflicts since with
     * protocol type D has no final message and cannot report errors (e.g. busy). */
    if (cmd_type == Cmd_Abort)
    {
      if (protType == 'D')
      {
        // release the payment lock obtained with sysLockPayment (20-06) above
        if (main_handle && msgId == msg_id_payment) // if main_handle is set, it equals handle (see check above)
        {
          _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): release payment lock (main_handle=%p set to 0)",
                     handle, protType, msg_id, main_handle);
          // reset the main connection handle
          main_handle = 0;
          /* even suppress_reply is true for Cmd_Abort with protocol type D, we must
           * send response for open sysLockPayment (20-06) with corresponsing message ID */
          unsigned char c[] = {0x65, 0x00}; // 6500: execution aborted (success)
          _send(handle, c, 2, protType, msg_id_payment);
          _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): _send(handle=%p,type=%c,msgId=%u) with result 6500 for abort command [%02x%02x] (unlock payment)",
                     handle, protType, msg_id, handle, protType, msg_id_payment, cmd[0], cmd[1]);
          return;
        }

        // we're done, since no command with SDI main thread active
        _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): ignore abort command [%02x%02x] (reason: no main connection command active)",
                   handle, protType, msgId, cmd[0], cmd[1]);
        return;
      }

      // protocol type A or B: consider P2 value 0x02 to release payment lock (main connection)
      if (main_handle && size > 3 && (cmd[3] & 0x02))
      {
        _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): release payment lock (main_handle=%p set to 0)",
                   handle, protType, msg_id, main_handle);
        main_handle = 0; // if main_handle is set, it equals handle (see check above)
      }

      unsigned char c[] = {0x65, 0x00}; // 6500: execution aborted (success)

      if (!suppress_reply)
      {
        _send(handle, c, 2, protType, msgId);
      }

      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): %s result 6500 for command [%02x%02x]",
                 handle, protType, msgId, suppress_reply ? "suppress" : "send", cmd[0], cmd[1]);
      return;
    }
  }

  /*******************************************************
   **** Checks to decline command with busy response  ****
   *******************************************************/

  // used for both, as flag to send 640A (busy) and storing reason for log message
  const char *decline = 0;

  /* a command or request response is already pending
   * and waits for being processed by SDI server */
  if (!cmdbuf.empty())
  {
    decline = "command pending";
  }

  // local flag required to store message ID of a nested command
  bool is_nested_cmd = false;

  // if waiting for a command (not a request response)
  if (req_type == Request_None)
  {
    /* busy state set: decline command with busy response. Only the connection
     * which has requested the busy state is allowed to send further commands */
    if (busy && busy_handle != handle)
    {
      decline = "busy";
    }

    // SDI-Server is already processing a command
    if (cmd_active)
    {
      decline = "command active";
    }

    if (isCallbackResponse(cmd_type))
    {
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): ignore callback response [%02x%02x], since no callback active",
                 handle, protType, msgId, cmd[0], cmd[1]);
      return;
    }
  }
  else
  {
    if (nested_cmd)
    {
      decline = "nested command active";
    }

    // a nested command was received
    if (!isCallbackResponse(cmd_type))
    {
      is_nested_cmd = true;
    }
  }

  if (aborted == AS_ConnectionLost)
  {
    decline = "SDI not idle yet after lost connection";
  }

  // decline command with busy response
  if (decline)
  {
    unsigned char c[] = {0x64, 0x0A};

    if (!suppress_reply)
    {
      _send(handle, c, 2, protType, msgId);
    }

    _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline command [%02x%02x] with %sresult 640A (reason: %s)",
                handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "", decline);
    return;
  }

  // recovery mode active: decline all commands except check4update
  if (recovery_mode && cmd_type != Cmd_Check4Update)
  {
    unsigned char c[] = {0x6F, 0xF1};

    if (!suppress_reply)
    {
      _send(handle, c, 2, protType, msgId);
    }

    _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline command [%02x%02x] with %sresult 6FF1 (reason=recovery mode active)",
                handle, protType, msgId, cmd[0], cmd[1], suppress_reply ? "suppressed " : "");
    return;
  }

  /*****************************************************
   **** Check payment lock (main connection handle) ****
   *****************************************************/
  if (!main_handle)
  {
    /* For protocol type D (with request ID) the payment lock for main connection is mandatory to execute
     * commands with the SDI main thread (payment functions). This requires command System LockPayment (20-06) */
    if (protType == 'D')
    {
      unsigned char c[] = {0x64, 0xFA};
      _send(handle, c, 2, protType, msgId);
      _LOGF_ERROR("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): decline command [%02x%02x] with 64FA (reason: protocol type D requires payment lock)",
                  handle, protType, msgId, cmd[0], cmd[1]);
      return; // no payment lock set yet
    }
    else
    {
      // First protocol type 'A'/'B' command obtains the payment lock automatically.
      _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): obtain payment lock for main connection (new main_handle=%p)",
                 handle, protType, msgId, handle);
      // set main connection handle (payment lock)
      main_handle = handle;
    }
  }

  /**************************************************
   **** Let SDI main thread process the command  ****
   **************************************************/

  // main connection command pending, which waits for processing
  _LOGF_INFO("mADK_PP_Prot::set_command(handle=%p,type=%c,msgId=%u): New main connection command [%02x%02x] (size=%d) buffered",
             handle, protType, msgId, cmd[0], cmd[1], size);

  if (req_type == Request_None) // PWMADK-2501: Don't change cmd_counter for callbacks or nested commands
  {
    cmd_counter++;
  }

  // take over command data and signal receive()
  cmdbuf.resize(size);
  memcpy(&cmdbuf[0], cmd, size);
  prot_type = protType;

  if (is_nested_cmd)
  {
    msg_id_nested = msgId;
  }
  else
  {
    msg_id = msgId;
  }

  pthread_cond_signal(&cond);
}

bool mADK_PP_Prot::_poll(int timeout_msec)
{
  if (timeout_msec > 0) // wait with timeout
  {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    ts.tv_sec += timeout_msec / 1000;
    ts.tv_nsec += (timeout_msec % 1000) * 1000000;

    if (ts.tv_nsec >= 1000000000)
    {
      ts.tv_sec++;
      ts.tv_nsec -= 1000000000;
    }

    while (cmdbuf.empty()
           && aborted != AS_ConnectionLost // abort if main connection gets lost
           && (cmd_active || aborted != AS_AbortIdle)) // abort once, when SDI is idle
    {
      if (pthread_cond_timedwait(&cond, &mutex, &ts) == ETIMEDOUT)
      {
        break; // timeout
      }
    }
  }
  else if (timeout_msec < 0)  // wait infinite
  {
    while (cmdbuf.empty()
           && aborted != AS_ConnectionLost  // abort if main connection gets lost
           && (cmd_active || aborted != AS_AbortIdle)) // abort once, when SDI is idle
    {
      pthread_cond_wait(&cond, &mutex);
    }
  }

  // reset AS_AbortIdle, after SDI was aborted once in idle
  if (!cmd_active && aborted == AS_AbortIdle)
  {
    aborted = AS_NotAborted;
  }

  return !cmdbuf.empty();
}

bool mADK_PP_Prot::poll(int timeout_msec)
{
  /* main connection thread never invokes this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a side connection thread */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    _LOGF_ERROR("mADK_PP_Prot::poll(): failed, must not be invoked by side connection thread");
    return false;
  }

  MutexLock m(&mutex);
  return _poll(timeout_msec);
}

bool mADK_PP_Prot::_receive(vector<unsigned char> &cmd, int timeout_msec)
{
  cmd.clear();

  if (!_poll(timeout_msec))
  {
    return false;
  }

  // take over command content (and clear member command)
  cmd.swap(cmdbuf);
  return true;
}

bool mADK_PP_Prot::receive(vector<unsigned char> &cmd, int timeout_msec)
{
  /* main connection thread never invokes this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a side connection thread */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    _LOGF_ERROR("mADK_PP_Prot::receive(): failed, must not be invoked by side connection thread");
    return false;
  }

  MutexLock m(&mutex);

  // first call of receive() will reset abort state for lost connection
  if (aborted == AS_ConnectionLost)
  {
    aborted = AS_NotAborted;
  }

  bool ret = _receive(cmd, timeout_msec);

  if (ret)
  {
    // SDI-Server now starts processing of a new command
    cmd_active = true;
    _LOGF_INFO("mADK_PP_Prot::receive(): SDI server starts processing of command [%02x%02x]", cmd[0], cmd[1]);
  }

  return ret;
}

bool mADK_PP_Prot::abort()
{
  MutexLock m(&mutex);

  aborted = AS_AbortIdle;
  pthread_cond_signal(&cond);
  return !cmd_active; // immediate abort, if no command is active
}

bool mADK_PP_Prot::_send(void *handle, const unsigned char *cmd, unsigned size, char protType, unsigned msgId) const
{
  // protocol library not loaded
  if (!lib)
  {
    return false;
  }

  return (lib->_mADK_PP_Prot_SendCommand(handle, (char *)cmd, (unsigned long)size, protType, msgId) == 0);
}

int mADK_PP_Prot::_get_connection_type(void *handle)
{
  // protocol library not loaded
  if (!lib)
  {
    return COM_CONNECTION_TYPE_NONE;
  }

  return lib->_mADK_PP_Prot_GetConnectionType(handle);
}

bool mADK_PP_Prot::send(const unsigned char *cmd, unsigned size)
{
  if (!cmd || size < 2)
  {
    _LOGF_ERROR("mADK_PP_Prot::send(cmd=%p,size=%u): failed, parameter error", cmd, size);
    return false;
  }

  /* main connection thread never invokes this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a side connection thread */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread has finished a side command
  {
    bool ret = _send(ctx->handle, cmd, size, ctx->prot_type, ctx->msg_id);

    if (ret)
    {
      _LOGF_INFO("mADK_PP_Prot::send(): _send(handle=%p,size=%u,type=%c,msgId=%u) with command [%02x%02x] successful (side connection)",
                 ctx->handle, size, ctx->prot_type, ctx->msg_id, cmd[0], cmd[1]);
    }
    else
    {
      _LOGF_ERROR("mADK_PP_Prot::send(): _send(handle=%p,size=%u,type=%c,msgId=%u) failed with command [%02x%02x] (side connection)",
                  ctx->handle, size,  ctx->prot_type, ctx->msg_id, cmd[0], cmd[1]);
    }

    return ret;
  }

  MutexLock m(&mutex);

  // reset flags for the current command
  cancelled = false;

  unsigned message_id = msg_id; // message ID of active SDI command

  if (nested_cmd) // send() called for a nested command
  {
    message_id = msg_id_nested; // message ID of nested SDI command
    // each send() finalizes a nested command (if any is active)
    nested_cmd = false;
  }

  // no command active
  if (!cmd_active)
  {
    _LOGF_ERROR("mADK_PP_Prot::send(): failed, no command active");
    return false;
  }

  // connection already terminated
  if (!main_handle)
  {
    _LOGF_ERROR("mADK_PP_Prot::send(): failed, no main connection");
    return false;
  }

  bool ret = true; // suppressed == success

  // check if result command is suppressed
  if (cmd[0] == 0xff && cmd[1] == 0xff)
  {
    _LOGF_INFO("mADK_PP_Prot::send(): result command suppressed by option");
  }
  else
  {
    // send command reply
    ret = _send(main_handle, cmd, size, prot_type, message_id);

    if (ret)
    {
      _LOGF_INFO("mADK_PP_Prot::send(): _send(handle=%p,size=%u,type=%c,msgId=%u) with command [%02x%02x] successful (main connection)",
                 main_handle, size, prot_type, message_id, cmd[0], cmd[1]);
    }
    else
    {
      _LOGF_ERROR("mADK_PP_Prot::send(): _send(handle=%p,size=%u,type=%c,msgId=%u) failed with command [%02x%02x] (main connection)",
                  main_handle, size, prot_type, message_id, cmd[0], cmd[1]);
    }
  }

  /*  SDI-Server allows to process nested commands during an active request,
   *  therefore, the current command stays active as long as send() is called
   *  and no request is pending at the same time */
  if (req_type == Request_None)
  {
    // SDI-Server has finished processing of the current command
    cmd_active = false;

    // decrement command counter (check to avoid overflow, shouldn't happen)
    if (cmd_counter > 0)
    {
      cmd_counter--;
    }

    /* command sysAbort (20-02) was received during the active command to release
     * the payment lock. This must reset main_handle, which is required during the
     * active command, since command() might send unidirectional callbacks (w/o response).
     * Therefore, the processing happens pending in this function, after the
     * command result has been sent and the active command has been finished. */
    if (unlock_payment_pending)
    {
      /* protocol type D: send response for open
       * sysLockPayment (20-06) with its message ID */
      if (prot_type == 'D')
      {
        unsigned char c[] = {0x65, 0x00}; // 6500: execution aborted (success)
        _send(main_handle, c, 2, prot_type, msg_id_payment);
        _LOGF_INFO("mADK_PP_Prot::send(): _send(handle=%p,type=%c,msgId=%u) with result 6500 for pending abort command [2002] (unlock payment)",
                   main_handle, prot_type, msg_id_payment);
      }

      _LOGF_INFO("mADK_PP_Prot::send():: release payment lock (main_handle=%p set to 0)", main_handle);
      // reset the main connection handle and the flag
      main_handle = 0;
      unlock_payment_pending = false;
    }
  }

  return ret;
}

bool mADK_PP_Prot::command(const unsigned char *cmd, unsigned size)
{
  if (!cmd || size < 2)
  {
    _LOGF_ERROR("mADK_PP_Prot::command(cmd=%p, size=%u): failed, parameter error", cmd, size);
    return false;
  }

  /* main connection thread never invokes this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a side connection thread */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    _LOGF_ERROR("mADK_PP_Prot::command(): unidirectional callback [%02x%02x] failed, must not be invoked by side connection thread",
                cmd[0], cmd[1]);
    return false;
  }

  MutexLock m(&mutex);

  // no payment lock (main connection)
  if (!main_handle)
  {
    _LOGF_ERROR("mADK_PP_Prot::command(): unidirectional callback [%02x%02x] failed, no main connection", cmd[0], cmd[1]);
    return false;
  }

  /* only payment notifications (9E-XX) use message ID of sysLockPayment (20-06),
   * otherwise SDI uses the message ID of the current active command. */
  unsigned msgId = msg_id; // message ID of the current command (if active)
  enum CommandType cmd_type = getCommandType(cmd, size);

  if (cmd_type == Cmd_PaymentNotificationCb) // 9E-XX
  {
    msgId = msg_id_payment; // use message ID of sysLockPayment (20-06)
  }
  else
  {
    /* Other callback are command related and are sent during active command only.
     * Otherwise msg_id would be invalid, when using protocol type D. */
    if (!cmd_active)
    {
      _LOGF_ERROR("mADK_PP_Prot::command(): unidirectional callback [%02x%02x] failed, no command active", cmd[0], cmd[1]);
      return false;
    }

    // use message ID of nested command, if the callback was triggered during it
    if (nested_cmd)
    {
      msgId = msg_id_nested;
    }
  }

  // send the unidirectional callback
  if (!_send(main_handle, cmd, size, prot_type, msgId))
  {
    _LOGF_ERROR("mADK_PP_Prot::command(): _send(main_handle=%p,type=%c,msgId=%u) failed with unidirectional callback [%02x%02x] (main connection)",
                main_handle, prot_type, msgId, cmd[0], cmd[1]);
    return false;
  }

  _LOGF_INFO("mADK_PP_Prot::command():  _send(handle=%p,type=%c,msgId=%u) with unidirectional callback [%02x%02x] successful",
             main_handle, prot_type, msgId, cmd[0], cmd[1]);

  return true;
}

bool mADK_PP_Prot::request(const unsigned char *cmd, unsigned size)
{
  if (!cmd || size < 2)
  {
    _LOGF_ERROR("mADK_PP_Prot::request(cmd=%p,size=%u): failed, parameter error", cmd, size);
    return false;
  }

  /* main connection thread never invokes this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a side connection thread */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    _LOGF_ERROR("mADK_PP_Prot::request(): failed, must not be invoked by side connection thread");
    return false;
  }

  MutexLock m(&mutex);

  // request only possible during active command
  if (!cmd_active)
  {
    _LOGF_ERROR("mADK_PP_Prot::request(): failed, no command active");
    return false;
  }

  if (!main_handle)
  {
    _LOGF_ERROR("mADK_PP_Prot::request(): failed, no main connection");
    return false;
  }

  // another request was already sent
  if (req_type != Request_None)
  {
    _LOGF_ERROR("mADK_PP_Prot::request(): failed, request %d already active (no second request allowed)", req_type);
    return false;
  }

  if (cancelled)
  {
    _LOGF_INFO("mADK_PP_Prot::request(): command already cancelled, skip sending callback request");
    return true; // let caller invoke recv_response() that will return 2002 to abort the callback
  }

  // request name (just used for log)
  const char *reqname = "";

  // check for supported request types
  switch (cmd[0])
  {
    case 0x91:
      req_type = Request_EMV;
      reqname = "EMV";
      break; // EMV callback 91-xx

    case 0x9b:
      req_type = Request_Ctrl;
      reqname = "Control";
      break; // Control callback 9B-xx

    case 0x9a:
      req_type = Request_Trgr;
      reqname = "Trigger";
      break; // Trigger callback 9A-01

    default:
      _LOGF_ERROR("mADK_PP_Prot::request(): failed, callback request [%02x%02x] not support", cmd[0], cmd[1]);
      return false;
  }

  // send request
  if (!_send(main_handle, cmd, size, prot_type, msg_id))
  {
    _LOGF_ERROR("mADK_PP_Prot::request(): _send(handle=%p,type=%c,msgId=%u) failed, send error (main connection)",
                main_handle, prot_type, msg_id);
    req_type = Request_None;
    return false;
  }

  _LOGF_INFO("mADK_PP_Prot::request(): _send(handle=%p,type=%c,msgId=%u) with %s callback request [%02x%02x] successful (main connection)",
             main_handle, prot_type, msg_id, reqname, cmd[0], cmd[1]);

  return true;
}

bool mADK_PP_Prot::recv_response(vector<unsigned char> &response, int timeout_msec)
{
  response.clear();

  /* main connection thread never invokes this function (see set_command()), therefore,
   * a returned ConnectionContext always belongs to a side connection thread */
  ConnectionContext *ctx = ConnectionContext::get();

  if (ctx) // side connection thread
  {
    _LOGF_ERROR("mADK_PP_Prot::recv_response(): failed, must not be invoked by side connection thread");
    return false;
  }

  MutexLock m(&mutex);

  if (req_type == Request_None)
  {
    if (cancelled)
    {
      // signal abort to caller
      response.resize(2);
      memcpy(&response[0], "\x20\x02", 2);
      _LOGF_INFO("mADK_PP_Prot::recv_response(): provide 2002 to caller to abort callback");
      return true;
    }

    _LOGF_ERROR("mADK_PP_Prot::recv_response(): failed, no request active");
    return false;
  }

  if (!_receive(response, timeout_msec))
  {
    _LOGF_ERROR("mADK_PP_Prot::recv_response(): _receive() failed");
    return false;
  }

  bool ret = false;

  enum CommandType cmd_type = getCommandType(&response[0], response.size());

  // check for callback response
  if (isCallbackResponse(cmd_type))
  {
    switch (cmd_type)
    {
      case Cmd_EmvCbResponse:
        if (req_type == Request_EMV)
        {
          req_type = Request_None;
          _LOGF_INFO("mADK_PP_Prot::recv_response(): received EMV callback response [%02x%02x]",
                     response[0], response[1]);
          ret = true;
        }
        else
        {
          _LOGF_ERROR("mADK_PP_Prot::recv_response(): received EMV callback response [%02x%02x], but no EMV request active",
                      response[0], response[1]);
        }

        break;

      case Cmd_CtrlCbResponse:
        if (req_type == Request_Ctrl)
        {
          req_type = Request_None;
          _LOGF_INFO("mADK_PP_Prot::recv_response(): received Control callback response [%02x%02x]",
                     response[0], response[1]);
          ret = true;
        }
        else
        {
          _LOGF_ERROR("mADK_PP_Prot::recv_response(): received Control callback response [%02x%02x], but no Control request active",
                      response[0], response[1]);
        }

        break;

      case Cmd_TrgrCbResponse:
        if (req_type == Request_Trgr)
        {
          req_type = Request_None;
          _LOGF_INFO("mADK_PP_Prot::recv_response(): received Control callback response [%02x%02x]",
                     response[0], response[1]);
          ret = true;
        }
        else
        {
          _LOGF_ERROR("mADK_PP_Prot::recv_response(): received Control callback response [%02x%02x], but no Control request active",
                      response[0], response[1]);
        }

        break;

      default:
        // shouldn't happen (as long as isCallbackResponse() adds additional requests not handled here)
        _LOGF_ERROR("mADK_PP_Prot::recv_response(): invalid response or command received [%02x%02x]",
                    response[0], response[1]);
        break;
    }
  }
  else // nested command received
  {
    nested_cmd = true;
    _LOGF_INFO("mADK_PP_Prot::recv_response(): nested command [%02x%02x]", response[0], response[1]);
  }

  return ret;
}

bool mADK_PP_Prot::set_busy(bool flag, bool cmd_ctx)
{
  MutexLock m(&mutex);

  // function invoked to obtain the busy lock
  if (flag)
  {
    // during a command, only this command is must be active
    if (cmd_ctx)
    {
      if (cmd_counter > 1)
      {
        return false;
      }

      /* remember the connection handle of the command, which has obtained
       * the lock, which is required, if busy state must be set over
       * command sequences, e.g. during SW update with 20-14, 20-15, 20-16 */
      busy_handle = get_handle();
    }
    else
    {
      // check that no command is active to block all connections
      if (cmd_counter > 0)
      {
        return false;
      }
    }
  }
  else
  {
    busy_handle = 0;
  }

  // busy lock successfully set/reset
  busy = flag;
  return true;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

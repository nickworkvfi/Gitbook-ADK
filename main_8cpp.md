---
title: sdi/src/main.cpp

---

# sdi/src/main.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[sdi_exit](main_8cpp.md#function-sdi-exit)**(int status) |
| void | **[sdi_shutdown](main_8cpp.md#function-sdi-shutdown)**() |
| void | **[callExit](main_8cpp.md#function-callexit)**(int signal) |
| void * | **[shutdown_thread](main_8cpp.md#function-shutdown-thread)**(void * ) |
| void | **[prepare_shutdown](main_8cpp.md#function-prepare-shutdown)**() |
| bool | **[isPinPadInUse](main_8cpp.md#function-ispinpadinuse)**() |
| bool | **[isDeviceTampered](main_8cpp.md#function-isdevicetampered)**() |
| bool | **[pm_criticalSection](main_8cpp.md#function-pm-criticalsection)**() |
| void | **[pm_setCriticalSection](main_8cpp.md#function-pm-setcriticalsection)**(bool enable) |
| void | **[data_store_expiry_cb](main_8cpp.md#function-data-store-expiry-cb)**(void * data) |
| void | **[checkLibraryVersion](main_8cpp.md#function-checklibraryversion)**() |
| unsigned short | **[check_mac_decrypt](main_8cpp.md#function-check-mac-decrypt)**(unsigned char * cmd, unsigned & cmdSize, vector< unsigned char > & out) |
| void | **[add_mac_encrypt](main_8cpp.md#function-add-mac-encrypt)**(vector< unsigned char > & rsp, unsigned short & rspSize, unsigned char secChannel) |
| void | **[checkCLA](main_8cpp.md#function-checkcla)**(unsigned long msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned long rspBufSize, unsigned char * rsp, unsigned short * rspSize, MutexLock & dp_mutex) |
| void | **[dispatch](main_8cpp.md#function-dispatch)**(vector< unsigned char > & cmd) |
| bool | **[process_side_command](main_8cpp.md#function-process-side-command)**(unsigned char * cmd, unsigned size) |
| int | **[main](main_8cpp.md#function-main)**(int argc, char * argv[]) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| SDITrxData | **[sdiData](main_8cpp.md#variable-sdidata)**  |
| LibLogHandle | **[logHandle](main_8cpp.md#variable-loghandle)**  |
| bool | **[run_idle_loop](main_8cpp.md#variable-run-idle-loop)**  |
| int[2] | **[fdpair](main_8cpp.md#variable-fdpair)**  |
| bool | **[criticalSection](main_8cpp.md#variable-criticalsection)**  |
| pthread_mutex_t | **[dispatch_mutex](main_8cpp.md#variable-dispatch-mutex)**  |
| pthread_mutex_t | **[g_mutexEppSendReceive](main_8cpp.md#variable-g-mutexeppsendreceive)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SET_RESULT](main_8cpp.md#define-set-result)**(sw1, sw2)  |
|  | **[CHECK_MAXSIZE](main_8cpp.md#define-check-maxsize)**(maxsize)  |


## Functions Documentation

### function sdi_exit

```cpp
void sdi_exit(
    int status
)
```


**Parameters**: 

  * **status** exit code of SDI 


depending on platform SDI must call exit() or _exit(). This function ensures to use the correct variant, therefore, it shall be used instead of using functions of stdlib directly. 


### function sdi_shutdown

```cpp
static void sdi_shutdown()
```


Shutdown SDI server. First try proper shutdown, if SDI is idle, otherwise exit() (or _exit()) is called to force the hard shutdown 


### function callExit

```cpp
static void callExit(
    int signal
)
```


**Parameters**: 

  * **signal** Signal (will be SIGTERM in all cases) 


**Note**: SDI must call exit() or return from [main()](main_8cpp.md#function-main), so that EMV libraries (which have implement atexit()) can switch off peripherals on VOS and VOS2. (e.g. ADK-EMV for turning of CTLS LEDs). 

Triggers the shutdown thread to shutdown SDI when process gets a SIGTERM. 


### function shutdown_thread

```cpp
static void * shutdown_thread(
    void * 
)
```


### function prepare_shutdown

```cpp
static void prepare_shutdown()
```


**Note**: EMV requires to call exit() on VOS/VOS2 only, since applications get stopped, when entering sysmode. Others (e.g. Android/VOS3) call _exit(), see define sdi_exit. 

Call this function at SDI startup to prepare SDI shutdown with SIGTERM. We need to register SIGTERM handler to let SDI server return from [main()](main_8cpp.md#function-main) or to call exit() so that some libraries (e.g. ADKEMV) will get invoked cleanup functions, which were registered with atexit(). Since we are not allowed to call protocol functions or exit() from within signal handler, we use a separate thread, which is triggered via pipe to call these functions. 


### function isPinPadInUse

```cpp
static bool isPinPadInUse()
```


### function isDeviceTampered

```cpp
static bool isDeviceTampered()
```


### function pm_criticalSection

```cpp
bool pm_criticalSection()
```


**Return**: true if SDI has entered critical PM section, else false. 

check if SDI has entered critical PM section with [pm_setCriticalSection()](main_8h.md#function-pm-setcriticalsection). 


### function pm_setCriticalSection

```cpp
void pm_setCriticalSection(
    bool enable
)
```


**Parameters**: 

  * **enable** true to enter critical PM section false to leave critical PM section 


Enter/leave critical section of power management (PM). If true is passed for parameter _enable_, it invokes [sys_CriticalSectionEnter()](namespacevfisyspm.md#function-sys-criticalsectionenter), in case of false [sys_CriticalSectionExit()](namespacevfisyspm.md#function-sys-criticalsectionexit) is called. For more details please refer to documentation of ADKPM. 


### function data_store_expiry_cb

```cpp
static void data_store_expiry_cb(
    void * data
)
```


### function checkLibraryVersion

```cpp
void checkLibraryVersion()
```


### function check_mac_decrypt

```cpp
unsigned short check_mac_decrypt(
    unsigned char * cmd,
    unsigned & cmdSize,
    vector< unsigned char > & out
)
```


see [main.h](main_8h.md#file-main.h) for details description 


### function add_mac_encrypt

```cpp
static void add_mac_encrypt(
    vector< unsigned char > & rsp,
    unsigned short & rspSize,
    unsigned char secChannel
)
```


**Parameters**: 

  * **rsp** vector containing the response data, please note that [rsp.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size) must be at least the in value of _rspSize_. 
  * **rspSize** in: size of valid response data in vector _rsp_ out: size of valid data returned in output vector _out_. Note: The real response size is always provided with _rspSize_ ([rsp.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size) might be creater!) 
  * **secChannel** content of P1 byte of the incomming command, see also [check_mac_decrypt()](main_8cpp.md#function-check-mac-decrypt)


checks for security options in P1 field _secChannel_ of the incomming command, if response shall be encrypted and/or appended with MAC. In case with bit 0x04 set: The function calculates the MAC from incomming response and appends the MAC to tail of the response. In case with bit 0x08 set: The function encrypts the response data and returns the cipher in output vector _out_. Both option bits can be combined. If no security options were enabled, the function does not touch vector _rsp_ and returns immediately. In case of success, the MACed/encrypted response is returned with _rsp_, otherwise this vector contains already an error response. For both cases real size of response data in _rsp_ is returned with _rspSize_. 


### function checkCLA

```cpp
static void checkCLA(
    unsigned long msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned long rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    MutexLock & dp_mutex
)
```


### function dispatch

```cpp
void dispatch(
    vector< unsigned char > & cmd
)
```


### function process_side_command

```cpp
bool process_side_command(
    unsigned char * cmd,
    unsigned size
)
```


**Parameters**: 

  * **cmd** pointer to command buffer 
  * **size** size of command buffer 


**Return**: true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command and requires execution of [dispatch()](main_8h.md#function-dispatch) with the SDI main thread. 

**Note**: This function is not allowed to use protocol function like [mADK_PP_Prot::receive()](classm_a_d_k___p_p___prot.md#function-receive), [mADK_PP_Prot::command()](classm_a_d_k___p_p___prot.md#function-command), [mADK_PP_Prot::request()](classm_a_d_k___p_p___prot.md#function-request) or [mADK_PP_Prot::recv_response()](classm_a_d_k___p_p___prot.md#function-recv-response). These APIs are only allowed for SDI application threads (main thread and siblings), which process commands received on the main connection (see function [dispatch()](main_8h.md#function-dispatch)). 

Function to process a command as a side command, which was triggered by a side connection with protocol type 'C' asynchronously or by an asynchronous command with protocol type 'D'. The function is invoked by SDI connection thread (such as invoking [mADK_PP_Prot::set_command()](classm_a_d_k___p_p___prot.md#function-set-command)), thus, these threads are fully decoupled from SDI main thread processing (see function [dispatch()](main_8h.md#function-dispatch)). Subfunctions invoked by [process_side_command()](main_8h.md#function-process-side-command) are invoked simultaneously, thus, they must be implemented thread-safe!!! If the command is not supported to be executed as a side command, the function returns false, which means that the command requires execution of [dispatch()](main_8h.md#function-dispatch) with the SDI main thread. Side commands just have restricted access to SDI function scope and do not support intermediate messages like requests (callbacks) or aborts, they just use internal function [mADK_PP_Prot::send()](classm_a_d_k___p_p___prot.md#function-send) to reply the command. Therefore, side commands are usually short-term in nature. 


### function main

```cpp
int main(
    int argc,
    char * argv[]
)
```



## Attributes Documentation

### variable sdiData

```cpp
SDITrxData sdiData;
```


### variable logHandle

```cpp
LibLogHandle logHandle = 0;
```


### variable run_idle_loop

```cpp
static bool run_idle_loop = false;
```


### variable fdpair

```cpp
static int[2] fdpair = {-1, -1};
```


### variable criticalSection

```cpp
static bool criticalSection;
```


### variable dispatch_mutex

```cpp
static pthread_mutex_t dispatch_mutex = PTHREAD_RECURSIVE_MUTEX_INITIALIZER_NP;
```


### variable g_mutexEppSendReceive

```cpp
pthread_mutex_t g_mutexEppSendReceive;
```



## Macros Documentation

### define SET_RESULT

```cpp
#define SET_RESULT(
    sw1,
    sw2
)
{ rsp[0] = sw1; rsp[1] = sw2; rspSize = 2; }
```


### define CHECK_MAXSIZE

```cpp
#define CHECK_MAXSIZE(
    maxsize
)
if (size > maxsize) {    \
     _LOGF_ERROR("%s(cmd=%p,size=%u): failed, max. message size %lu exceeded", __FUNCTION__, cmd, size, (unsigned long)maxsize); \
     rspSize = 2;          \
     if (rsp.size() < rspSize)\
       rsp.resize(rspSize);\
     rsp[0] = 0x64;        \
     rsp[1] = 0xFE;        \
     break; }
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <map>
#include <string>

#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <signal.h>
#include <dirent.h>

#ifdef __cplusplus
extern "C" {
#endif

#ifdef __ANDROID__
#  include <jni.h>
#  include <sys/socket.h>
#  include <sys/un.h>
#  include <sys/system_properties.h>
#  include <android/native_activity.h>
#endif

#include <svcsec.h>

#ifdef __cplusplus
} // extern C
#endif

#include "main.h"
#include "madk_pp_protocol.h"
#include "emv/E2E_EMV_CT_Serialize.h"
#include "emv/E2E_EMV_CTLS_Serialize.h"
#include "emv/EMV_CT_Link.h"
#include "emv/EMV_CTLS_Link.h"
#include "btlv_helper.h"
#include "epp/counterTop.h"
#include "epp/epp.h"
#include "unistd.h"
#include "pthread.h"
#include "emv.h"
#include "emv_ctls.h"
#include "card_dt.h"
#include "cardranges.h"
#include "sys.h"
#include "ped.h"
#include "disp.h"
#include "msr.h"
#include "crypt.h"
#include "sysinfo/sysinfo.h"

#if defined(__ANDROID__) || defined (_VOS3) || defined (_STM32)
  #include "sdi-pal.h"
  #include "pal/debug.h"
#endif

#if defined (_VOS) || defined (_VOS3) || defined (_x86)
  #include "sysinfo/vfisyspm.h"
  #include "vcl_client.h"
#endif

#ifndef HEADLESS
  #include "ui_mode.h"
#endif

#include "data.h"
#include "sec.h"
#include "nfc.h"
#include "prt.h"
#include "vcl_ser.h"
#include "vcl_client.h"
#include "hexutil.h"

#include "_logf.h"
#include "version.h"
#include "msr/msr.h"
#include "tec/tec.h"
#include "ui.h"
#include "config.h"
#include "config/sdi_sysconfig.h"
#include "sdi_tags.h"
#include "loadplugin.h"
#include "pthreadutil.h" // MutexLock
#include "filesystem.h"
#include "sec/libsec.h"

#include "csd.h"
#include "csd-version.h"
#include "sdikeyservice.h"
#include "tracefilter.h"
#include "filterconfig.h"
#include "emv_common.h"

#if defined (__ANDROID__) || defined (_x86)
  #define USE_RESPONSE_BUFFER_POOL // response vector pool on Android only for instance
#endif

#define SET_RESULT(sw1, sw2) { rsp[0] = sw1; rsp[1] = sw2; rspSize = 2; }

using namespace com_verifone_seccmd;
using namespace com_adksec_cmd;
#if !defined __ANDROID__ && !defined _STM32
  using namespace vfisyspm;
#endif
using namespace sdi;
using namespace std;

using namespace vfisysinfo;

extern SDITrxData       sdiData;

LibLogHandle logHandle = 0;

static bool run_idle_loop = false;

void sdi_exit(int status)
{
#ifdef _VOS
  /* PWMADK-3147: Only on VOS/VOS2 we use exit() to call final cleanup
  *              functions registered with atexit() in EMV libraries. */
  exit(status);
#else
  _exit(status);
#endif
}

#ifdef USE_RESPONSE_BUFFER_POOL
static pthread_mutex_t gRspMutex = PTHREAD_MUTEX_INITIALIZER; // protects gRspInUse
static const unsigned RSP_BUFFER_POOL_SIZE = 3; // main + nested + one side command
static vector<unsigned char> gRspBuffers[RSP_BUFFER_POOL_SIZE];
static bool gRspInUse[RSP_BUFFER_POOL_SIZE] = {false};

inline vector<unsigned char>& getRspBuffer()
{
  MutexLock m(&gRspMutex);
  unsigned i;

  for (i = 0; i < RSP_BUFFER_POOL_SIZE; i++)
  {
    if (!gRspInUse[i])
    {
      gRspInUse[i] = true;
      return gRspBuffers[i];
    }
  }

  // If more buffers needed we fall back to new allocation. Alternative could
  // be to make gRspBuffers a vector and resize it to size + 1.
  return *new vector<unsigned char>;
}

inline void releaseRspBuffer(vector<unsigned char>& x)
{
  MutexLock m(&gRspMutex);
  unsigned i;

  for (i = 0; i < RSP_BUFFER_POOL_SIZE; i++)
  {
    if (&x == &gRspBuffers[i])
    {
      gRspInUse[i] = false;
      return;
    }
  }

  delete &x;
}

struct RSP_BUFFER_GUARD
{
  vector<unsigned char>& rsp;
  RSP_BUFFER_GUARD() : rsp(getRspBuffer()) {}
  ~RSP_BUFFER_GUARD()
  {
    releaseRspBuffer(rsp);
  }
  vector<unsigned char>& getRpsBuffer()
  {
    return rsp;
  }
};
#endif // USE_RESPONSE_BUFFER_POOL

// no shutdown handler on Titus
#ifndef _STM32

static void sdi_shutdown()
{
  _LOGF_INFO("sdi_shutdown(): Invoked by shutdown thread !!!");
  // try proper shutdown
  run_idle_loop = false;

  if (!mADK_PP_Prot::getInstance()->abort()) // will exit SDI, if idle
  {
    // SDI not idle -> force hard shutdown
    _LOGF_INFO("sdi_shutdown(): Force SDI server shutdown, exit.");
    sdi_exit(0);
  }
}

/* fd pair to signal shutdown thread from signal handler
 * Note: exit() must not be used from inside signal handler, since
 *       it is not async-signal-safe. Instead, using write() is safe. */
static int fdpair[2] = {-1, -1};

static void callExit(int signal)
{
  (void)signal;

  while (1)
  {
    int ret =::write(fdpair[1], "", 1); // 0 byte

    if (ret == -1 && errno == EINTR)
    {
      continue;
    }

    break;
  }
}

static void *shutdown_thread(void *)
{
  while (1)
  {
    char buf;
    int ret =::read(fdpair[0], &buf, 1);

    if (ret == -1 && errno == EINTR)
    {
      continue;  // interrupted system call -> repeat
    }

    break;
  }

  // shutdown SDI server
  sdi_shutdown();
  return 0;
}

static void prepare_shutdown()
{
  // create pipe to trigger shutdown thread from signal handler
  if (pipe(fdpair) != 0)
  {
    fprintf(stderr, "prepare_shutdown(): pipe() failed\n"); // no ADKLOG at early startup
    return;
  }

  pthread_t th;

  if (pthread_create_detached(&th, shutdown_thread, 0) != 0)
  {
    fprintf(stderr, "prepare_shutdown(): cannot create shutdown thread\n"); // no ADKLOG at early startup
    close(fdpair[0]);
    close(fdpair[1]);
    return;
  }

  /* register function to handle SIGTERM, which will trigger shutdown
   * thread call atexit registered functions in shared libraries */
  signal(SIGTERM, callExit);
}
#endif // #ifndef _STM32


static bool isPinPadInUse()
{
  static int flag = -1;

  if (flag < 0)
  {
    std::string modelName;

    flag = (sysGetPropertyString(SYS_PROP_HW_MODEL_NAME, modelName) == SYS_ERR_OK) &&
           (modelName.size() >= 3) &&
           ((strncasecmp(modelName.c_str(), "UX3", 3) == 0) ||
            (strncasecmp(modelName.c_str(), "UX4", 3) == 0) ||
            (strncasecmp(modelName.c_str(), "VR1", 3) == 0)) ? 0 : 1;
  }

  return flag > 0;
}

static bool isDeviceTampered()
{
  static int coveredDevice = -1;

  if (coveredDevice < 0)
  {
    std::string modelName;

    coveredDevice = (sysGetPropertyString(SYS_PROP_HW_MODEL_NAME, modelName) == SYS_ERR_OK &&
                     ((strncasecmp(modelName.c_str(), "UX302", 5) == 0) ||
                      (strncasecmp(modelName.c_str(), "VR1", 3) == 0))) ? 1 : 0;
  }

  if (coveredDevice)
  {
    // Determine the Tamper status for UX302 and VR1 only
    int tamperState = 0;

    if ((sysGetPropertyInt(SYS_PROP_ATTACK_STATUS, &tamperState) == SYS_ERR_OK) &&
        (tamperState == 1))
    {
      _LOGF_WARN("%s: device is tampered!!!", __FUNCTION__);
      return true;
    }
  }

  return false;
}

static bool criticalSection;

bool pm_criticalSection()
{
  return criticalSection;
}

void pm_setCriticalSection(bool enable)
{
#if defined __ANDROID__ || defined _STM32
  criticalSection = enable;
#else
  static pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;
  pthread_mutex_lock(&m);

  if (criticalSection == enable)
  {
    pthread_mutex_unlock(&m);
    return;
  }

  if (enable)
  {
    if (sys_CriticalSectionEnter(PM_CRIT_SUPRESS_STANDBY) == SYS_PM_ERR_OK)
    {
      criticalSection = true;
    }
  }
  else
  {
    if (sys_CriticalSectionExit() == SYS_PM_ERR_OK)
    {
      criticalSection = false;
    }
  }

  pthread_mutex_unlock(&m);
#endif
}

static void data_store_expiry_cb(void *data)
{
  (void) data;

  if (pm_criticalSection() && mADK_PP_Prot::getInstance()->command_active() == mADK_PP_Prot::CMD_None)
  {
    pm_setCriticalSection(false);
  }
}

void checkLibraryVersion()
{
  char version[32] = {0};

  MSR_Version(version, sizeof(version));
  _LOGF_INFO("%s %s", "Version of libmsr:", version);

  memset(version, 0x00, sizeof(version));
  cts_Version(version, sizeof(version));
  _LOGF_INFO("%s %s", "Version of libtec:", version);
}

unsigned short check_mac_decrypt(unsigned char *cmd, unsigned &cmdSize, vector<unsigned char> &out)
{
  /* command must at least have 4 bytes (CLS/INS and P1/P2).
   * max. message size depends on command and is checked below */
  if (!cmd || cmdSize < 4)
  {
    _LOGF_ERROR("%s(cmd=%p,cmdSize=%u): failed, no command passed", __FUNCTION__, cmd, cmdSize);
    // parameter error 64FE or message length error 6700
    return (!cmd ? 0x64FE : 0x6700);
  }

  unsigned char secChannel = cmd[2]; // P1

  if (!(secChannel & (0x40 | 0x80)))
  {
    return 0x9000; // we're done
  }

  // Check secure channel for command
  unsigned char macBuf[8], *mac = 0;

  if (secChannel & 0x40) // check if command is MACed
  {
    if (cmdSize < 13) // MACed: the cmd must contain CLA, INS, P1, P2, at least 1 byte data, 8 byte MAC
    {
      _LOGF_ERROR("%s: MAC length ERROR: %u < 13", __FUNCTION__, cmdSize);
      return 0x6FB1; // CMAC Length Error
    }

    mac = macBuf;
    memcpy(mac, &cmd[cmdSize - 8], 8);
    cmdSize -= 8;
  }

  // check if command is encrypted
  if (secChannel & 0x80)
  {
    if (cmdSize < 12 ||          // encrypted: the cmd must contain CLA, INS, P1, P2, at least 8 bytes
        ((cmdSize - 4) % 8) != 0) // encrypted data must be a multiple of 8 bytes
    {
      _LOGF_ERROR("%s: command decryption length ERROR: cmdSize=%u", __FUNCTION__, cmdSize);
      return 0x6FB9; // Decryption Length Error
    }

    // Decrypt the command
    _LOGF_INFO("%s: command encrypted", __FUNCTION__);

    // Allocate memory for decryption of incoming message
    vector<unsigned char> decCmdData;
    unsigned long decCmdDataSize = cmdSize;

    /* adjust buffer size to passed output vector,
     * this is required for pre-allocation in dispatch() */
    if (out.size() > cmdSize)
    {
      decCmdDataSize = out.size();
    }

    decCmdData.resize(decCmdDataSize + 4);

    if (decCmdData.size() != decCmdDataSize + 4)
    {
      _LOGF_ERROR("%s: No memory allocation for command decryption possible, return 6400", __FUNCTION__);
      return 0x6400;
    }

    if (decrypt_Data(&cmd[4], cmdSize - 4, &decCmdData[4], &decCmdDataSize) != RESULT_OK)
    {
      _LOGF_ERROR("%s: command decryption ERROR", __FUNCTION__);
      return 0x6FB8; // Decryption Error
    }

    // decryption successful
    _LOGF_INFO("%s: command decryption successfully DONE", __FUNCTION__);
    cmdSize = decCmdDataSize + 4;
    memcpy(&decCmdData[0], &cmd[0], 4);
    out.swap(decCmdData);
    cmd = &out[0]; // required for MAC below
  }

  // command MACed?
  if (secChannel & 0x40)
  {
    _LOGF_INFO("%s: command MACed", __FUNCTION__);

    if (check_CMAC(INPUT_TYPE_BUFFER, NULL, &cmd[4], cmdSize - 4, mac) != RESULT_OK)
    {
      _LOGF_ERROR("%s: MAC ERROR", __FUNCTION__);
      return 0x6FB0; // CMAC Error
    }

    _LOGF_INFO("%s: check_CMAC successfully DONE", __FUNCTION__);
  }

  return 0x9000;
}

static void add_mac_encrypt(vector<unsigned char> &rsp, unsigned short &rspSize, unsigned char secChannel)
{
  // if no data or MAC/encryption for response not enabled
  if (rspSize <= 2 || !(secChannel & (0x04 | 0x08)))
  {
    return; // we're done
  }

  unsigned char mac[8] = {0};

  // generate CMAC for the response
  if (secChannel & 0x04)
  {
    _LOGF_INFO("%s: response has to be MACed", __FUNCTION__);

    if (calculate_CMAC(INPUT_TYPE_BUFFER, NULL, &rsp[2], rspSize - 2, mac) != RESULT_OK)
    {
      _LOGF_ERROR("%s: MAC ERROR", __FUNCTION__);
      SET_RESULT(0x6F, 0xB0);
      return;
    }
  }

  // Encrypt the response
  if (secChannel & 0x08)
  {
    _LOGF_INFO("%s: response has to be decrypted", __FUNCTION__);

    // Allocate memory for encryption of response message
    vector<unsigned char> encRespData;
    // optimize: already preserve optional space for MAC (see below)
    encRespData.resize(rsp.size() + 2 + sizeof(mac));

    if (encRespData.size() != rsp.size() + 2 + sizeof(mac))
    {
      _LOGF_ERROR("%s: No memory allocation for response encryption possible, return 6400", __FUNCTION__);
      SET_RESULT(0x64, 0x00);
      return;
    }

    unsigned long encRespDataSize = rsp.size();

    if (encrypt_Data(&rsp[2], rspSize - 2, &encRespData[2], &encRespDataSize) != RESULT_OK)
    {
      _LOGF_ERROR("%s: response encryption ERROR", __FUNCTION__);
      SET_RESULT(0x6F, 0xB4);
      return;
    }

    // Encryption successful
    _LOGF_INFO("%s: response encryption successfully DONE", __FUNCTION__);
    memcpy(&encRespData[0], &rsp[0], 2);
    rsp.swap(encRespData);
    rspSize = 2 + encRespDataSize;
  }

  // add MAC to response buffer
  if (secChannel & 0x04)
  {
    if (rspSize + sizeof(mac) > rsp.size())
    {
      rsp.resize(rspSize + sizeof(mac));

      if (rsp.size() != rspSize + sizeof(mac))
      {
        _LOGF_ERROR("%s: No memory for adding MAC available, return 6400", __FUNCTION__);
        SET_RESULT(0x64, 0x00);
        return;
      }
    }

    memcpy(&rsp[rspSize], mac, sizeof(mac));
    rspSize += sizeof(mac);
  }
}

static void checkCLA(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned long rspBufSize, unsigned char *rsp, unsigned short *rspSize, MutexLock &dp_mutex);

/* PWMADK-2587: Usually dispatch() is called by SDI main thread only. There is at least one known case (for command
 * 23-01 Card Detection), where another SDI sibling thread (child of SDI main thread) invokes dispatch(): In case
 * handleCardDetect() invokes cts_StartSelection() the TECSEL thread is started in TECSEL library. If this thread
 * invokes EMV_CTLS_SER_ContinueOffline() in the library internally, this might cause invocation of
 * processCTLSCallback() (in emv_ctls.cpp). This function further sends SDI callbacks with handleSdiCallbackOnMobileDevice().
 * When receiving a nested command during this request/response callback, this leads to new invocation of dispatch() by TECSEL thread.
 * Even the main thread is blocked and just waiting with cts_WaitSelection(), the mutex dispatch_mutex is added to
 * guarantee thread safetyness of dispatch(). It is temporary unlocked for command 23-01 so that the TECSEL thread
 * can enter dispatch(). dispatch_mutex must be implemented as recursive mutex, since dispatch() could be invoked for
 * nested commands by the same thread (SDI main thread). Finally, we use MutexLock object as helper to ensure unlocking
 * the mutex in every case dispatch() returns. In addition, MutexLock::trylock() allows to wait for Mutex with a timeout to
 * avoid possible deadlocks. This shouldn't happen at all as long as dispatch() isn't called by multiple thread concurrently. */
static pthread_mutex_t dispatch_mutex = PTHREAD_RECURSIVE_MUTEX_INITIALIZER_NP;

/* central function, which does processing of commands in SDI main thread (synchronous command received on main connection)
 * \param[in] cmd received SDI command to process */
void dispatch(vector<unsigned char> &cmd)
{
  unsigned short rspSize = 0;
  unsigned long rspBufSize = 0;
  unsigned long cmdSize = 0;

  _LOGF_TRACE("dispatch: start");

  if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
  {
    string dump;

    if (cmd.size() > 0)
    {
      filterCommand(&cmd[0], cmd.size(), dump);
    }

    _LOGF_INFO("dispatch: process command (size=%llu):\n%s",
               (unsigned long long)cmd.size(), dump.c_str());
  }

  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

  // enter critical section of dispatch() to process SDI commands for main connection
  MutexLock dpm(&dispatch_mutex, true); // true -> don't lock

  if (!dpm.trylock(10000))
  {
    /* This shouldn't happen as long as dispatch() is invoked by multiple
     * threads concurrently. In this case we try to resolve this blocking
     * situation with a 10 seconds timeout. If this does not resolve it,
     * we return busy response 640A. */
    unsigned char resp[] = {0x64, 0x0A};
    _LOGF_ERROR("dispatch: cannot enter critical section, send result (size=2):\n640A");
    proto->send(resp, 2);
    return;
  }

  /**** CRITICAL SECTION ENTERED ****/

  /* PWMADK-2212: local helper class, to send a final response in all
   * cases, even if SDI server does not provide any response data */
  class AutoResponder
  {
      enum mADK_PP_Prot::CMDActiveType m_cmd_type;
      mADK_PP_Prot *m_p;

      // disable copy constructor and assign operator
      AutoResponder(const AutoResponder&);
      AutoResponder& operator=(const AutoResponder&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
      AutoResponder(const AutoResponder&&);
      AutoResponder& operator=(AutoResponder&&);
#endif
    public:
      // constructor
      AutoResponder(mADK_PP_Prot *p): m_p(p)
      {
        m_cmd_type = p->command_active();
      }
      // destructor
      ~AutoResponder()
      {
        if (m_cmd_type == mADK_PP_Prot::CMD_None)
        {
          // shouldn't happen, since dispatch() isn't called without command
          return;
        }

        // no change of state means that send() wasn't called yet
        if (m_p->command_active() == m_cmd_type)
        {
          /* checkCLA() hasn't returned data and send() wasn't called.
           * This might happen, if SDI server hasn't detected an error in lower
           * functions due to wrong command format. In this case we return
           * a parameter error to avoid a deadlock, since SDI server wouldn't
           * be able to process any command and just returns 640A (busy) */
          unsigned char resp[] = {0x64, 0xFE};
          _LOGF_ERROR("AutoResponder: missing response data, send result (size=2):\n64FE");
          m_p->send(resp, 2);
        }
      }
  } auto_responder(proto); // create on stack to call destructor, if dispatch() returns

#ifndef HEADLESS
  // enter PM active mode
  sys_Active();

  // lock idle screen (disable menu) with receipt of the first SDI command
  (void)sysSetIdleScreenLocked();

#endif

  // Enter a critical section for power management, Standby suppressed
  pm_setCriticalSection(true);

  // Determine the message and response buffer sizes
  /* !!! CAUTION !!!
   * checkCLA() modifies command in-buffer and appends data to it.
   * Therefore, we must blow up the buffer to magic additional size of 1024,
   * so that SDI functions do not write outside of command buffer bounds. */
  cmdSize = cmd.size();
  cmd.resize(cmd.size() + 1024);
  // get the protocol type (A or B) to allocate the correct number of bytes
  rspBufSize = (proto->get_protocol_type() == 'A' ? MAX_OUT_MSG_SIZE_A : MAX_OUT_MSG_SIZE_B_C_D);
#ifdef USE_RESPONSE_BUFFER_POOL
  RSP_BUFFER_GUARD rspGuard;
  vector<unsigned char>& rsp = rspGuard.getRpsBuffer();
#else
  vector<unsigned char> rsp;
#endif
  rsp.resize(rspBufSize); // Allocate memory for response message

  if (rsp.size() != rspBufSize)
  {
    unsigned char rspBuf[2];

    // Return an execution error
    rspBuf[0] = 0x64;
    rspBuf[1] = 0x00;
    rspSize = 2;

    _LOGF_ERROR("dispatch: No memory allocation for response possible, send result 6400");
    proto->send(rspBuf, rspSize);
  }
  else if (cmdSize > 0xFFFF &&
           !((cmd[0] == CLA_SYS && cmd[1] == INS_SYS_SW_UPLOAD_TRANSFER) ||
             (cmd[0] == CLA_PRT && (cmd[1] == INS_PRT_HTML || cmd[1] == INS_PRT_BITMAP)) ||
             (cmd[0] == CLA_DISP  && cmd[1] == INS_DISP_HANDLE_DISPLAY)))
  {
    // Large message length is not supported for the current command -> execution error
    SET_RESULT(0x64, 0x00);

    _LOGF_ERROR("dispatch: Large message length is not supported for the current command, send result 6400");
    proto->send(&rsp[0], rspSize);
  }
  else if (cmdSize < 4)
  {
    SET_RESULT(0x67, 0x00);
    _LOGF_ERROR("dispatch: Message length ERROR: %lu < 4, send result 6700", cmdSize);
    proto->send(&rsp[0], rspSize);
  }
  else
  {
    // if enabled, check MAC and decrypt command
    unsigned char secChannel = cmd[2]; // P1

    // process command by CLA/INST
    checkCLA(cmd.size(), &cmd[0], cmdSize, rsp.size(), &rsp[0], &rspSize, dpm);

    // if enabled, add MAC and/or encrypt response
    add_mac_encrypt(rsp, rspSize, secChannel);

    if (rspSize > 0)
    {
      if (check4Interrupt() == RESULT_NO_LINK)
      {
        // Link is interrupted, set device into idle state
        setDevice2Idle();
      }
      else
      {
        if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
        {
          string dump;
          filterResponse(&cmd[0], cmdSize, &rsp[0], rspSize, dump);
          _LOGF_INFO("dispatch: send result (size=%hu):\n%s", rspSize, dump.c_str());
        }

        // send command response
        proto->send(&rsp[0], rspSize);
      }
    }
    else
    {
      _LOGF_INFO("dispatch: result suppressed by rspSize==0");
    }
  }

  // Leave the critical section for power management
  if (pm_criticalSection())
  {
    // Remove that critical section is set
    pm_setCriticalSection(false);
  }
}

bool process_side_command(unsigned char *cmd, unsigned size)
{
#ifdef USE_RESPONSE_BUFFER_POOL
  RSP_BUFFER_GUARD rspGuard;
  vector<unsigned char>& rsp = rspGuard.getRpsBuffer();
#else
  vector<unsigned char> rsp;
#endif
  unsigned short rspSize = 0;
  unsigned dest = vfiepm::CounterTop::CmdDest_Error;
  vfiepm::CounterTop::cmd_dest_output out;
  unsigned char secChannel = 0;

  if (!cmd || size < 4)
  {
    _LOGF_ERROR("%s(cmd=%p,size=%u): failed, no command passed", __FUNCTION__, cmd, size);
    rspSize = 2;

    if (rsp.size() < rspSize) // avoid shrinking pool buffer
    {
      rsp.resize(rspSize);
    }

    // parameter error 64FE or message length error 6700
    rsp[0] = (!cmd ? 0x64 : 0x67);
    rsp[1] = (!cmd ? 0xFE : 0x00);
    goto done;
  }

  // required for add_mac_encrypt() below
  secChannel = cmd[2]; // P1

  // side commands not yet supported for EPP
  dest = vfiepm::CounterTop::getInstance().get_cmd_destination(cmd, size, out);

  if (dest == vfiepm::CounterTop::CmdDest_Error)
  {
    rspSize = 2;

    if (rsp.size() < rspSize) // avoid shrinking pool buffer
    {
      rsp.resize(rspSize);
    }

    rsp[0] = (unsigned char)(out.err_code >> 8);
    rsp[1] = (unsigned char)(out.err_code);
    _LOGF_ERROR("%s(cmd=%p,size=%u): get_cmd_destination() failed for command [%02x%02x] with error code %02x%02x",
                __FUNCTION__, cmd, size, cmd[0], cmd[1], rsp[0], rsp[1]);
    goto done;
  }

  // check if command requires remote execution on EPP
  if (dest & vfiepm::CounterTop::CmdDest_Remote)
  {
    // command not allowed
    _LOGF_INFO(
      "%s(cmd=%p,size=%u): command [%02x%02x] for EPP requires call of dispatch() with SDI main thread",
      __FUNCTION__, cmd, size, cmd[0], cmd[1]);
    return false;
  }

#ifndef HEADLESS
  // enter PM active mode
  sys_Active();

  // lock idle screen (disable menu) with receipt of the first SDI command
  (void)sysSetIdleScreenLocked();

#endif

  if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
  {
    string dump;
    filterCommand(cmd, size, dump);

    _LOGF_INFO("%s(cmd=%p,size=%u): try processing as side command:\n%s", __FUNCTION__, cmd, size, dump.c_str());
  }

  /*  macro to check maximal input buffer size (USHRT_MAX or ULONG_MAX), which depends on command type.
      If maxsize is exceeded, the macro will break from switch below with parameter error */
#define CHECK_MAXSIZE(maxsize) \
  if (size > maxsize) {    \
     _LOGF_ERROR("%s(cmd=%p,size=%u): failed, max. message size %lu exceeded", __FUNCTION__, cmd, size, (unsigned long)maxsize); \
     rspSize = 2;          \
     if (rsp.size() < rspSize)\
       rsp.resize(rspSize);\
     rsp[0] = 0x64;        \
     rsp[1] = 0xFE;        \
     break; }

  /* process the command
   * do the same than dispatch() and pre-allocate buffer for command response */
  switch (cmd[0])
  {
    // process PED commands
    case CLA_PED:
      CHECK_MAXSIZE(USHRT_MAX)
      rsp.resize(MAX_OUT_MSG_SIZE_B_C_D);

      if (isPinPadInUse())
      {
        if (!handlePedCmd((unsigned short)size, cmd, (unsigned short)size, rsp.size(), &rsp[0], &rspSize))
        {
          _LOGF_INFO("%s(cmd=%p,size=%u): command [%02x%02x] requires call of dispatch() in SDI main thread",
                     __FUNCTION__, cmd, size, cmd[0], cmd[1]);
          return false;
        }
      }
      else
      {
        // Ped commands are not supported on UX3xx/UX4xx and VR1 devices

        rsp[0] = 0x6E; // Unknown class
        rsp[1] = 0x00;
        rspSize = 2;

        // mirror the command (compatibility to e105)
        if (size <= (rsp.size() - 2))
        {
          memcpy(&rsp[2], cmd, size);
          rspSize += size;
        }
      }

      break; // goto done

#ifndef _STM32

    // process printer commands
    case CLA_PRT:
      CHECK_MAXSIZE(ULONG_MAX)
      rsp.resize(MAX_OUT_MSG_SIZE_B_C_D);
      handlePrt((unsigned short)size, cmd, (unsigned long)size, rsp.size(), &rsp[0], &rspSize);
      // handlePrt() is always executed, even invoked by side command
      break; // goto done
#endif

    // process system commands
    case CLA_SYS:
      CHECK_MAXSIZE(ULONG_MAX)
      rsp.resize(MAX_OUT_MSG_SIZE_B_C_D);

      if (!handleSystemCmd((unsigned long)size, cmd, (unsigned long)size, rsp.size(), &rsp[0], &rspSize))
      {
        _LOGF_INFO("%s(cmd=%p,size=%u): command [%02x%02x] requires call of dispatch() in SDI main thread",
                   __FUNCTION__, cmd, size, cmd[0], cmd[1]);
        return false;
      }

      break;

    // process security interface command
    case CLA_SEC:
      CHECK_MAXSIZE(USHRT_MAX)
      rsp.resize(MAX_OUT_MSG_SIZE_B_C_D);
      handleSec((unsigned short)size, cmd, (unsigned short)size, rsp.size(), &rsp[0], &rspSize);
      // handleSec() is always executed, even invoked by side command
      break;

    // process data interface command
    case CLA_DATA:
      CHECK_MAXSIZE(USHRT_MAX)
      rsp.resize(MAX_OUT_MSG_SIZE_B_C_D);

      if (!handleDataCmd((unsigned short)size, cmd, (unsigned short)size, rsp.size(), &rsp[0], &rspSize))
      {
        _LOGF_INFO("%s(cmd=%p,size=%u): command [%02x%02x] requires call of dispatch() in SDI main thread",
                   __FUNCTION__, cmd, size, cmd[0], cmd[1]);
        return false;
      }

      break;

    default:
      _LOGF_INFO("%s(cmd=%p,size=%u): command [%02x%02x] requires call of dispatch() in SDI main thread",
                 __FUNCTION__, cmd, size, cmd[0], cmd[1]);
      return false;
  }

done:

  if (rspSize < 2)
  {
    if (rspSize == 0)
    {
      _LOGF_INFO("%s(cmd=%p,size=%u): result suppressed by rspSize==0", __FUNCTION__, cmd, size);
    }
    else
    {
      _LOGF_ERROR("%s(cmd=%p,size=%u): failed, invalid response size=%u", __FUNCTION__, cmd, size, rspSize);
    }

    return true; // even on error, no further processing
  }

  // if enabled, add MAC and/or encrypt response
  add_mac_encrypt(rsp, rspSize, secChannel);

  if (_LOG_LEVEL_ENABLED(LOGAPI_INFO))
  {
    string dump;
    filterResponse(cmd, size, &rsp[0], rspSize, dump);

    _LOGF_INFO("%s(cmd=%p,size=%u): send result (size=%hu):\n%s", __FUNCTION__, cmd, size, rspSize, dump.c_str());
  }

  // check if result command is suppressed
  if (rsp[0] == 0xff && rsp[1] == 0xff)
  {
    _LOGF_INFO("%s(cmd=%p,size=%u): result suppressed by option", __FUNCTION__, cmd, size);
    return true; // no further processing
  }

  // send the command response
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
  proto->send(&rsp[0], rspSize);
  return true; // no further processing
}

#if defined _VOS || defined _VOS3
#include <sys/file.h>
static bool checkAlreadyRunning()
{
  int fd = open(SDI_LOCK_FILE, O_RDWR | O_CREAT, 0666);

  if (fd == -1) // shouldn't happen
  {
    _LOGF_ERROR("checkAlreadyRunning(): can't open lock file '%s'\n", SDI_LOCK_FILE);
    return false; // error: assume that no other instance is running
  }

  fchmod(fd, 0666);
  char pid[64];
  int r = flock(fd, LOCK_EX | LOCK_NB);

  if (r == -1)
  {
    if (read(fd, pid, sizeof(pid)) < 1)
    {
      snprintf(pid, sizeof(pid), "unknown");
    }

    _LOGF_ERROR("checkAlreadyRunning(): can't obtain lock on file '%s', another SDI instance (PID=%s) is already running\n", SDI_LOCK_FILE, pid);
    close(fd);
    return true;
  }

  _LOGF_INFO("checkAlreadyRunning(): obtained lock on file '%s', no other SDI instance running\n", SDI_LOCK_FILE);
  int pidlen = snprintf(pid, sizeof(pid), "%d", getpid()) + 1; // write to file as C-string

  if (write(fd, pid, pidlen) != pidlen)
  {
    _LOGF_ERROR("checkAlreadyRunning(): can't write PID=%s to file '%s', \n", pid, SDI_LOCK_FILE);
    close(fd);
    return true;
  }

  // don't close fd, which would release the file lock, this is done with exit
  fsync(fd);
  return false;
}
#endif

#if defined(__ANDROID__) || defined(_VOS3) || defined(_STM32)
static bool pal_info_callback(pal_InfoType type, void * const out, size_t out_size)
{
  (void) out_size;

  switch (type)
  {
#ifndef _STM32

    case PIT_ADE_STATUS:
    {
      bool * const outb = static_cast<bool*>(out);
      *outb = isAdeEnabled();
      _LOGF_INFO("%s:%d   ADE status: %d", __FUNCTION__, __LINE__, *outb);
      break;
    }

    case PIT_VCL_STATUS:
    {
      bool * const outb = static_cast<bool*>(out);
      *outb = isVclEnabled();
      _LOGF_INFO("%s:%d   VCL status: %d", __FUNCTION__, __LINE__, *outb);
      break;
    }

#endif

    case PIT_CONNECTION_STATUS:
    {
      const bool is_trusted_connection = mADK_PP_Prot::getInstance()->trusted_connection();
      *static_cast<pal_ConnectionStatusType*>(out) = (is_trusted_connection) ? PCS_TRUSTED : PCS_UNTRUSTED;
      _LOGF_INFO("%s:%d   Connection status: %s", __FUNCTION__, __LINE__, (*static_cast<pal_ConnectionStatusType*>(out) == PCS_TRUSTED) ? "TRUSTED" : "UNTRUSTED");
      break;
    }

    case PIT_CERTSTORE_DIR:
    {
      const char **outb = static_cast<const char **>(out);
      *outb = sdi::filesystem::sdi_certstore_dir();
      _LOGF_INFO("%s:%d   Certstore directory: %s", __FUNCTION__, __LINE__, *outb ? *outb : "");
      break;
    }

#ifndef NO_PLUGINS

    case PIT_PCI_PLUGINS:
    {
      const vector<SDIPluginCtx *> &plugins = getLoadedPlugins();

      static std::string valueStr;
      valueStr.clear();

      for (vector<SDIPluginCtx *>::const_iterator cit = plugins.begin(); cit != plugins.end(); ++cit)
      {
        const std::string pver = (*cit)->getPciVersion();

        if (!pver.empty())
        {
          valueStr += valueStr.empty() ? pver : "," + pver;
        }
      }

      const char **outb = static_cast<const char **>(out);
      *outb = valueStr.c_str();
      break;
    }

#endif

    default:
      _LOGF_INFO("%s:%d   Unknown InfoType", __FUNCTION__, __LINE__);
      return false;
  }

  return true;
}
#endif

#ifdef __ANDROID__
extern "C"
JNIEXPORT void JNICALL
Java_com_verifone_sdi_SDIService_SDIStop(JNIEnv *env, jobject instance)
{
  (void) env;
  (void) instance;
  _LOGF_INFO("%s:%d Shutdown SDI server", __FUNCTION__, __LINE__);
  // shutdown SDI server
  sdi_shutdown();
}

extern "C"
JNIEXPORT void JNICALL
Java_com_verifone_sdi_SDIService_SDIStart(JNIEnv *env, jobject instance, jstring workingDir, jboolean waitForVCL, jboolean waitForSplitter)
{
  (void) instance;

  jboolean isCopy;
  const char* internalFilesDir = env->GetStringUTFChars(workingDir, &isCopy);
  chdir(internalFilesDir);
  symlink("../lib", "lib"); // SDI server searches lib directory for plugins
  setenv("CRDABS_PORT", "9000", 0); // for Card Emulation library (if loaded)

  // Enable logging
  logHandle = LOGAPI_INIT(SDI_LOG_CHANNEL);

  if (waitForSplitter)
  {
    _LOGF_INFO("Waiting for splitter service ...");
    static const char name[] = "/mnt/vendor/persist/data/mux1";

    int fd = socket(AF_UNIX, SOCK_STREAM, 0);

    if (fd == -1)
    {
      return;
    }

    struct sockaddr_un addr;

    addr.sun_family = AF_UNIX;

    strcpy(addr.sun_path, name);

    size_t size = (offsetof(struct sockaddr_un, sun_path)
                   + strlen(addr.sun_path) + 1);

    while (::connect(fd, (struct sockaddr *) &addr, size) < 0)
    {
      _LOGF_INFO("Connecting splitter service ...");
      sleep(1);
    }

    close(fd);
  }

  pal_setInfoCallback(&pal_info_callback);
  pal_ReturnCodes pal_ret = pal_init();

  __system_property_set("debug.sdi.version", SDI_VERSION);
  __system_property_set("debug.sdi.build.date", __DATE__);
  __system_property_set("debug.sdi.build.time", __TIME__);

  if (pal_ret == PAL_OK)
  {
    pal_initTamperLogging();
  }

  if (waitForVCL)
  {
    _LOGF_INFO("Need to wait for VCL daemon to startup ...");
    int timeout_sec = 30;

    while (!VCL_IsReady() && timeout_sec--)
    {
      sleep(1);
    }
  }

#elif defined _STM32
int sdi_main()
{
  // Enable logging
  logHandle = LOGAPI_INIT(SDI_LOG_CHANNEL);
  pal_setInfoCallback(&pal_info_callback);
  pal_init();

#else // VOS/VOS2/VOS3
int main(int argc, char *argv[])
{
  // Enable logging
  logHandle = LOGAPI_INIT(SDI_LOG_CHANNEL);

#if defined(_VOS3)
  pal_setInfoCallback(&pal_info_callback);
  pal_init();
  EMV_CT_SetClientMode(EMV_CLIENT_MODE_LIBRARY);
  EMV_CTLS_SetClientMode(EMV_CLIENT_MODE_LIBRARY);
#endif

#endif // __ANDROID__

#ifndef _STM32
  // install signal handler and start thread to shutdown SDI
  prepare_shutdown();
#endif

#ifdef HEADLESS
  enum config::SdiSysConfig::SDIMode sdi_mode = config::SdiSysConfig::SDIMode_Headless;
#else
  enum config::SdiSysConfig::SDIMode sdi_mode = config::SdiSysConfig::SDIMode_Standard;

  // option processing
  while (argc >= 2)
  {
    if (!strcmp(argv[1], "--headless"))
    {
      sdi_mode = config::SdiSysConfig::SDIMode_Headless;
      argc--;
      argv++;
    }
    else
    {
      _LOGF_ERROR("main: invalid option '%s'", argv[1]);
      break;
    }
  }

#endif // HEADLESS

  // set functions to wipe memory, if data is removed from BTLV buffers
  vBTLVSetWipeCallback(csd::wipe);

  // set callback function for expiration of SDI data store
  sdiData.set_expiry_cb(data_store_expiry_cb, 0);

#if defined _VOS || defined _VOS3

  // PWMADK-2248: check for already running SDI instance
  // PWMADK-2975: enable check for VOS3
  if (checkAlreadyRunning())
  {
    _LOGF_ERROR("main: avoid to start a second SDI instance, exit.\n");
    LOGAPI_DEINIT(logHandle);
    return 1;
  }

#endif

  // init SDI files (sync external user configuration with flash)
  sdi::filesystem::init(sdi_mode);

#ifdef _x86

  // on PC use a different name for the run.sh which tests if already running
  if (getenv("SDI_EPP"))
  {
    pthread_setname_np(pthread_self(), "SDI_Server_EPP");
  }

#endif

  // create CounterTop instance
  vfiepm::CounterTop& counterTop = vfiepm::CounterTop::getInstance();

#ifndef HEADLESS

  // enable UI (for standard mode)
  if (sdi_mode == config::SdiSysConfig::SDIMode_Standard)
  {
    // initialilze UI mode
    init_ui_mode();
  }

#endif

  // log SDI Server main version
  _LOGF_INFO("main: %s v%s (%s %s)",
             SDI_APP_NAME, SDI_VERSION, __DATE__, __TIME__);

  // log libsdicsd version
  _LOGF_INFO("main: %s v%s", CSD_LIBNAME, csd::csd_GetVersion());

#ifndef _STM32 //libsdikeyservice and plugins not available under STM32
  // log libsdikeyservice version
  _LOGF_INFO("%s v%s (%s)", keyservice_get_libname().c_str(),
             keyservice_get_version().c_str(), keyservice_get_build_date().c_str());
#endif

#ifndef NO_PLUGINS
  // load SDI plugins
  const vector<SDIPluginCtx *> &plugins = loadPlugins();
  _LOGF_INFO("main: loadPlugins() %zu SDI plugins loaded", plugins.size());

  // log plugin version info
  if (plugins.size() > 0)
  {
    string plugin_info = "main: Loaded SDI plugins:\n";

    for (unsigned i = 0; i < plugins.size(); i++)
    {
      plugin_info += plugins[i]->getName() + " v" + plugins[i]->getVersion();

      if (i + 1 < plugins.size())
      {
        plugin_info += "\n";
      }
    }

    _LOGF_INFO("%s", plugin_info.c_str());
  }

#endif

#if !defined _STM32
  NFC_deletePreloadFile();
#endif

#ifdef __ANDROID__
  bool recoveryMode = false;

  if (pal_ret == PAL_RECOVERY)
  {
    _LOGF_ERROR("main: PAL_RECOVERY detected, skipping further initializations. Device unusable ...");
    recoveryMode = true;
  }
  else
#endif
  {
    secError_t  errCode = secInit();
    _LOGF_INFO("main: secInit() returned 0x%X", errCode);

    if (errCode == EsecOK)
    {
      string versions;
      errCode = secGetVersions(versions);
      _LOGF_INFO("main: secGetVersions() returned 0x%X (versions: %s)", errCode, versions.c_str());
    }

    // Get the version of MSR library and TecSel library
    checkLibraryVersion();

    // create EMVInfo cache and setup EMV terminal information
    initEmvInfo();

#if !defined(__ANDROID__) && !defined _STM32
#ifndef _DEBUG
    // Initialize SYS-ADK Power Management
    int ret = sys_Init(NULL, PM_NOTIFY_TYPE_NONE);
    _LOGF_INFO("main: sys_Init() returned: %d", ret);
#endif
#endif

#ifndef _STM32
    // start the SDI remote keyservice (if supported by device type)
    keyservice_start();

    if (isHybridReader())
    {
      // For UX devices set the MSR_UX_ENHANCEMENTS option to read the Magstripe card on card removal only because of the hybrid card reader
      unsigned char msrOptions = MSR_UX_ENHANCEMENTS;

      if (MSR_SetOptions(&msrOptions, sizeof(msrOptions)) != MSR_OK)
      {
        _LOGF_ERROR("main: MSR_SetOptions to set MSR_UX_ENHANCEMENTS not successful");
      }

      // ... and set the card removal callback function
      cts_SetNotificationCallback(CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED, cardRemovalCallback, NULL);
    }

#endif

    // Countertop/EPP initialisation
    counterTop.startUp();

    // call getInstance of the CardRanges singleton object to pre-load and pre-sort the card ranges file into memory
    CardRanges::getInstance();
  }

  // create (and start) the protocol
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

#ifdef __ANDROID__
  proto->setRecoveryMode(recoveryMode);
#endif

  if (counterTop.isCounterTop())
  {
    // CT/standalone: We start the protocol immediately
    run_idle_loop = proto->start();
  }
  else
  {
    /* EPP: We enter idle loop w/o starting the protocol, since this is
     *      handled by Countertop, if the USB cable is plugged. In this
     *      case proto->receive() does nothing and is just aborted.  */
    run_idle_loop = true;
#ifndef HEADLESS
    /* display idlescreen connection status, which
     * is usually triggered by the running protocol */
    show_idle_connect_status();
#endif
  }

  int exit_code = (run_idle_loop ? 0 : 1); // use exit code 1 if SDI startup fails

  while (run_idle_loop)
  {
    // process event callback (if triggered)
    int tout = counterTop.handleEventCallback(); // with tout!=-1 receive() return and to invoke handleEventCallback()

    vector<unsigned char> cmd;

    if (proto->receive(cmd, tout)) // counterTop may abort receive() to call handleEventCallback()
    {
      // process command
      dispatch(cmd);
    }
  }

#ifndef _STM32 //libsdikeyservice not available under STM32
  // stop the SDI remote keyservice (if supported by device type)
  keyservice_stop();
#endif

  _LOGF_ERROR("main: SDI server shutdown, exit.");

  LOGAPI_DEINIT(logHandle);

  /* PWMADK-3147: Use sdi_exit(), which is
   *              1. exit() on VOS/VOS2 to call final cleanup functions
   *                 registered with atexit() in EMV libraries.
   *              2. _exit() on other platforms so that SDI terminates
   *                 without EMV exit handlers immediately. */
  sdi_exit(exit_code);
#ifndef __ANDROID__
  return exit_code; // just to avoid compiler warning
#endif
}

extern pthread_mutex_t g_mutexEppSendReceive;

static void checkCLA(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned long rspBufSize, unsigned char *rsp, unsigned short *rspSize, MutexLock &dp_mutex)
{
  vfiepm::CounterTop& ctp = vfiepm::CounterTop::getInstance();

  if ((msg[0] == CLA_MSR || msg[0] == CLA_PED || msg[0] == CLA_CRD_DT || msg[0] == CLA_VCL || msg[0] == CLA_NFC ||
       msg[0] == CLA_VAS || msg[0] == CLA_EMV || msg[0] == CLA_EMV_ALT || msg[0] == CLA_CRD || msg[0] == CLA_CRD_ALT) &&
      isDeviceTampered())
  {
    // Device is tampered
    rsp[0] = 0x6F;
    rsp[1] = 0xF0;
    *rspSize = 2;
    return;
  }

  if (!ctp.isEppMode()) // Perform special MAC and encryption checks for EMV_CT/EMV_CTLS commands
  {
    struct BTLVRootNode xBtlv;
    unsigned char cardSlot = 0x00; // slot = card holder

    // Determine the card slot for CT commands only
    if (msg[0] == CLA_CRD)
    {
      // import TLV stream
      if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
      {
        struct BTLVNode *node = NULL;

        // Check if the option declaring the card slot is present
        node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "DF06"));

        if (node && node->uSize == 1)
        {
          cardSlot = node->pucData[0] & 0x03; // 0x00 = card holder, else SAM (1..3)
        }
      }

      _LOGF_INFO("checkCLA: cardSlot = %d", cardSlot);
    }

    // Check for unknown instruction on CLA_EMV or CLA_EMV_ALT
    if ((msg[0] == CLA_EMV && ((msg[1] == INS_FETCH_TAG) || (msg[1] >= INS_FETCH_DOL))) ||
        (msg[0] == CLA_EMV_ALT && ((msg[1] == INS_RFU) || (msg[1] == INS_FETCH_TAG) || (msg[1] == INS_FETCH_DOL) || (msg[1] >  INS_BREAK))))
    {
      // Unknown instruction
      rsp[0] = 0x6D;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
    else if ((msg[0] == CLA_MSR || msg[0] == CLA_CRD || msg[0] == CLA_CRD_ALT || msg[0] == CLA_NFC || msg[0] == CLA_VAS)
             && (getCardDetectionState() != STOPPED || getEppCardDetectionState() != STOPPED))
    {
      _LOGF_INFO("Command not allowed during card detection");
      rsp[0] = 0x64;
      rsp[1] = 0xF9;
      *rspSize = 2;
    }
    // Check for Set EMV_CT/EMV_CTLS configuration without MAC
    else if ((msg[0] == CLA_EMV || msg[0] == CLA_EMV_ALT) &&
             (msg[1] == INS_TERM_CFG || msg[1] == INS_APPLI_CFG || msg[1] == INS_CAPKEY_CFG) &&
             (msg[3] == 0x00 && ((msg[2] & 0x40) != 0x40))) // MAC already checked by mADK_PP_Prot::set_command()
    {
#ifndef NO_PLUGINS

      // No MAC -> check if an EMV config plugin is installed/loaded to authenticate EMV config
      if (pluginInstalledForTrigger(SDIPlugin::SDITrigger_EMVConfig))
      {
        int ret = executeSingleTrigger(SDIPlugin::SDITrigger_EMVConfig, msg, msgSize, 0, NULL, NULL);

        if (ret != 0x9000)
        {
          _LOGF_ERROR("EMV configuration (w/o MAC) not authentic, declined by plugin with error=0x%x", ret);
          // CMAC missing (as returned in previous SDI versions)
          rsp[0] = 0x6F;
          rsp[1] = 0xB2;
          *rspSize = 2;
        }

        // else: EMV configuration autenticated by plugin process command
      }
      else // no EMV config plugin installed
#endif
      {
        // PWMADK-2446: allow EMV configuration for local/trusted connection
        mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

        if (!proto->trusted_connection() && emvConfigMacRequired(msg, msgSize))
        {
          _LOGF_ERROR("EMV configuration (w/o MAC) not authentic, declined for untrusted connection");
          // CMAC missing
          rsp[0] = 0x6F;
          rsp[1] = 0xB2;
          *rspSize = 2;
        }

        // else: EMV configuration accepted for trusted/local connection
      }
    }
    // Check for encryption of EMV_CT/EMV_CTLS Smart ISO commands
    else if ((((msg[0] == CLA_CRD) && (cardSlot == 0x00)) || (msg[0] == CLA_CRD_ALT)) &&
             ((msg[1] == INS_ICC_ISO) && ((msg[2] & 0x88) != 0x88)))
    {
#ifdef __ANDROID__
      Whitelist &wl = Whitelist::getInstance();
      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

      if (!(wl.isOpenSDI() && proto->trusted_connection()))
      {
#endif
        // Encryption missing error
        rsp[0] = 0x6F;
        rsp[1] = 0xB6;
        *rspSize = 2;
#ifdef __ANDROID__
      }

#endif
    }

#if !defined(_STM32)
    // Check for encryption of NFC APDU Exchange an Pass Through TxRx commands
    else if ((msg[0] == CLA_NFC) &&
             (msg[1] == INS_NFC_APDU_EXCH || msg[1] == INS_NFC_PT_TXRX) &&
             ((msg[2] & 0x88) != 0x88))
    {
#ifdef __ANDROID__
      Whitelist &wl = Whitelist::getInstance();
      mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

      if (!(wl.isOpenSDI() && proto->trusted_connection()))
      {
#endif
        // Encryption missing error
        rsp[0] = 0x6F;
        rsp[1] = 0xB6;
        *rspSize = 2;
#ifdef __ANDROID__
      }

#endif
    }

#endif
  }

  if (*rspSize == 0)
  {
    unsigned char origP1 = msg[2];

    // Keep the original P1 value and set to 0x00 for sending to EPP
    msg[2] = 0x00;

    pthread_mutex_lock(&g_mutexEppSendReceive);

    // send command to epp if needed
    if (!ctp.dispatch(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize))
    {
      // command will only be executed on external pin pad
      pthread_mutex_unlock(&g_mutexEppSendReceive);
      return;
    }

    pthread_mutex_unlock(&g_mutexEppSendReceive);

    // Special handling for Add Technology command on Countertop
    // If CTLS only is running and MSR or CT to be added, so need to start detection using saved command data
    if (ctp.isCounterTopMode() && ctp.isEppEnabled() && !ctp.isEppMode()
        && msg[0] == CLA_CRD_DT && msg[1] == INS_CRD_DT_ADD_TECHNOLOGY
        && getCardDetectionState() == STOPPED
        && (getEppCardDetectionState() == RUNNING_POLLING_MODE || getEppCardDetectionState() == RUNNING_CALLBACK_MODE))
    {
      struct BTLVRootNode xBtlv;
      struct BTLVNode *node;
      unsigned char tec = 0;

      // Check for Tag 'DFA108' for supported technologies
      if (msgSize > 4 &&
          iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0 &&
          (node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA108_SUPPORTED_CARD_TECHNOLOGY))) != NULL)
      {
        if (node->uSize == 1 && (((tec = node->pucData[0])&CTS_CTLS) == 0)) // No CTLS should be enabled on Countertop
        {
          // perform original card detection command with additional technology
          vBTLVClear(&xBtlv);
          std::vector<unsigned char> cmd = ctp.getCrdDetectCmd();

          if (iBTLVImport(&xBtlv, &cmd[4], cmd.size() - 4, NULL, NULL) == 0)
          {
            pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA108_SUPPORTED_CARD_TECHNOLOGY), &tec, 1);

            if (iBTLVExport(&xBtlv, &cmd[4], cmd.size() - 4) > 0)
            {
              return handleCardDetect(msgBufSize, &cmd[0], cmd.size(), rspBufSize, rsp, rspSize, dp_mutex);
            }
          }
        }
      }
    }

    // Reset P1 to original value
    msg[2] = origP1;

    // Check CLA
    switch (msg[0])
    {
      case CLA_CRD_DT:
        handleCardDetect(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize, dp_mutex); //ToDo: Buffer size
        break;

      case CLA_MSR:
        if (msg[1] == INS_MSR_READ)
        {
          // Activate and deactivate the MSR if a MSR read command is received
          if (MSR_Activate(NULL, NULL) != MSR_ERROR)
          {
            handleMsr(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size

            MSR_Deactivate();
          }
          else
          {
            // execution error
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
          }
        }
        else
        {
          // Other command than MSR read is received don't activate and deactivate the MSR
          handleMsr(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        }

        break;

      case CLA_EMV:
      case CLA_CRD:
      case EMV_CT_CLA_CBCK_RESP:
        handleEmv(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_EMV_ALT: // alternative class for CTLS EMV commands
      case CLA_CRD_ALT: // alternative class for CTLS Smart Card commands
      case CLA_LED:
        handleEmvCTLS(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_SYS:
        if (!handleSystemCmd(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize)) //ToDo: Buffer size
        {
          // command not allowed, shouldn't happen with SDI main thread
          rsp[0] = 0x64;
          rsp[1] = 0xF9;
          *rspSize = 2;
        }

        break;

      case CLA_PED:
        if (isPinPadInUse())
        {
          if (!handlePedCmd(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize)) //ToDo: Buffer size
          {
            // command not allowed, shouldn't happen with SDI main thread
            rsp[0] = 0x64;
            rsp[1] = 0xF9;
            *rspSize = 2;
          }

          // Check for link interruption to mobile device here and not inside PED module
          // to avoid a strange behavior of the EMV-Framework in case of EMV Online PIN
          if (rspSize == 0)
          {
            // Set ExtServer into idle state
            setDevice2Idle();
          }
        }
        else
        {
          // Ped commands are not supported on UX3xx/UX4xx and VR1 devices

          rsp[0] = 0x6E; // Unknown class
          rsp[1] = 0x00;
          *rspSize = 2;

          // mirror the command (compatibility to e105)
          if (msgSize <= (rspBufSize - 2))
          {
            memcpy(&rsp[2], msg, msgSize);
            *rspSize += msgSize;
          }
        }

        break;

      case CLA_DISP:
        if (!ui_enabled()) // headless mode
        {
          rsp[0] = 0x6E; // Unknown class
          rsp[1] = 0x00;
          *rspSize = 2;

          // mirror the command (compatibility to e105)
          if (msgSize <= (rspBufSize - 2))
          {
            memcpy(&rsp[2], msg, msgSize);
            *rspSize += msgSize;
          }
        }
        else
        {
#ifndef HEADLESS
          handleDispCmd(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
#endif
        }

        break;

      case CLA_DATA:
        handleDataCmd(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_SEC:
        handleSec(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

        /* Following commands are disabled for STM32:
         * - CLA_PRT: Printer commands, as no printer is available
         * - CLA_NFC: NFC commands, disabled in first step
         * - CLA_VAS: VAS commands, disabled in first step
         * - CLA_PLUGIN_CMD: Plugins not supported
         * - CLA_VCL: VCL not supported in first step
         * - CLA_EPM: EPP not supported
         */
#ifndef _STM32

      case CLA_PRT:
        handlePrt(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_NFC:
        handleNFC(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_VAS:
        handleVAS(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_PLUGIN_CMD:
        handlePluginCmd(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_VCL:
        handleVcl(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;

      case CLA_EPM:
        handleEpm(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize); //ToDo: Buffer size
        break;
#endif

      default:
        // unknown CLA
        rsp[0] = 0x6E;
        rsp[1] = 0x00;
        *rspSize = 2;

        _LOGF_INFO("dispatch: unknown command received");

        // mirror the command (compatibility to e105)
        if (msgSize <= rspBufSize - 2)
        {
          memcpy(&rsp[2], msg, msgSize);
          *rspSize += msgSize;
        }

        break;
    }
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

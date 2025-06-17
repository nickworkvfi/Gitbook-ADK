---
title: sdi/src/ped.cpp

---

# sdi/src/ped.cpp



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PPIN_ENTRY](ped_8cpp.md#enum-ppin-entry)** { PPIN_IDLE, PPIN_CALLBACK, PPIN_POLLING, PPIN_POLLING_DONE} |
| enum| **[PPIN_RESULT](ped_8cpp.md#enum-ppin-result)** { PPIN_DONE = 0x000000, PPIN_COLLECTING = 0x010000, PPIN_DIGIT_ENTERED = 0x0100, PPIN_BACKSPACE_ENTERED = 0x0800, PPIN_OK_ENTERED = 0x0D00, PPIN_CANCEL_ENTERED = 0x1B00, PPIN_DIGIT_SELECTED = 0xD100, PPIN_CANCEL_SELECTED = 0xD200, PPIN_BACKSPACE_SELECTED = 0xD300, PPIN_OK_SELECTED = 0xDE00, PPIN_MULTITOUCH = 0xDF00, PPIN_UNDERFLOW = 0xF800, PPIN_OVERFLOW = 0xF900, PPIN_BYPASS = 0xFC, PPIN_CANCEL = 0xFD, PPIN_TIMEOUT = 0xFE, PPIN_ERROR = 0xFF} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[pedEnable](ped_8cpp.md#function-pedenable)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[pedGetPin](ped_8cpp.md#function-pedgetpin)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[pedSetPinTimeout](ped_8cpp.md#function-pedsetpintimeout)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[pedSetPinInputParameter](ped_8cpp.md#function-pedsetpininputparameter)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[pedStartPin](ped_8cpp.md#function-pedstartpin)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[pedPollPin](ped_8cpp.md#function-pedpollpin)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[pedStopPin](ped_8cpp.md#function-pedstoppin)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[setResult](ped_8cpp.md#function-setresult)**(unsigned short response, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| bool | **[handlePedCmd](ped_8cpp.md#function-handlepedcmd)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| unsigned | **[getUnsigned](ped_8cpp.md#function-getunsigned)**([BTLVNode](struct_b_t_l_v_node.md) * node, const char * tag, unsigned default_value) |
| void | **[getVector](ped_8cpp.md#function-getvector)**(std::vector< unsigned char > & v, [BTLVNode](struct_b_t_l_v_node.md) * node, const char * tag) |
| void | **[setResultPIN](ped_8cpp.md#function-setresultpin)**(unsigned short response, unsigned pinstatus, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| unsigned short | **[startPin](ped_8cpp.md#function-startpin)**() |
| bool | **[pedSetExtButton](ped_8cpp.md#function-pedsetextbutton)**(void ) |
| void | **[pedReset](ped_8cpp.md#function-pedreset)**(void * handle) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| [sdi::SdiLanguage](classsdi_1_1_sdi_language.md) | **[trxLanguage](ped_8cpp.md#variable-trxlanguage)**  |
| unsigned char | **[pinType](ped_8cpp.md#variable-pintype)**  |
| SDITrxData | **[sdiData](ped_8cpp.md#variable-sdidata)**  |
| int | **[pin_minlen](ped_8cpp.md#variable-pin-minlen)**  |
| int | **[pin_maxlen](ped_8cpp.md#variable-pin-maxlen)**  |
| int | **[pin_bypass_key](ped_8cpp.md#variable-pin-bypass-key)**  |
| int | **[pin_direct_bypass](ped_8cpp.md#variable-pin-direct-bypass)**  |
| int | **[pin_auto_enter](ped_8cpp.md#variable-pin-auto-enter)**  |
| int | **[pin_clear_all](ped_8cpp.md#variable-pin-clear-all)**  |
| int | **[pin_navigator](ped_8cpp.md#variable-pin-navigator)**  |
| int | **[pin_digits](ped_8cpp.md#variable-pin-digits)**  |
| std::vector< unsigned char > * | **[pin_key](ped_8cpp.md#variable-pin-key)**  |
| pthread_mutex_t | **[mutex](ped_8cpp.md#variable-mutex)**  |
| pthread_t | **[pin_thread](ped_8cpp.md#variable-pin-thread)**  |
| void * | **[pin_handle](ped_8cpp.md#variable-pin-handle)**  |
| [PPIN_ENTRY](ped_8cpp.md#enum-ppin-entry) | **[pin_entry_status](ped_8cpp.md#variable-pin-entry-status)**  |

## Types Documentation

### enum PPIN_ENTRY

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PPIN_IDLE | |   |
| PPIN_CALLBACK | |   |
| PPIN_POLLING | |   |
| PPIN_POLLING_DONE | |   |




### enum PPIN_RESULT

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PPIN_DONE | 0x000000|   |
| PPIN_COLLECTING | 0x010000|   |
| PPIN_DIGIT_ENTERED | 0x0100|   |
| PPIN_BACKSPACE_ENTERED | 0x0800|   |
| PPIN_OK_ENTERED | 0x0D00|   |
| PPIN_CANCEL_ENTERED | 0x1B00|   |
| PPIN_DIGIT_SELECTED | 0xD100|   |
| PPIN_CANCEL_SELECTED | 0xD200|   |
| PPIN_BACKSPACE_SELECTED | 0xD300|   |
| PPIN_OK_SELECTED | 0xDE00|   |
| PPIN_MULTITOUCH | 0xDF00|   |
| PPIN_UNDERFLOW | 0xF800|   |
| PPIN_OVERFLOW | 0xF900|   |
| PPIN_BYPASS | 0xFC|   |
| PPIN_CANCEL | 0xFD|   |
| PPIN_TIMEOUT | 0xFE|   |
| PPIN_ERROR | 0xFF|   |





## Functions Documentation

### function pedEnable

```cpp
static void pedEnable(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: This command doesn't contain any further data than CLA, INS, P1 and P2. The distinction between Enable and Disable is handled by the P2 value (0-Enable, 1-Disable). 

Enable or disable the PIN entry device 


### function pedGetPin

```cpp
static void pedGetPin(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: This command is required for MSR Online PIN. 

Perform the PIN entry 


### function pedSetPinTimeout

```cpp
static void pedSetPinTimeout(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: This configured timeout will be used for later PIN entries. 

Configure the timeout for the PIN entry 


### function pedSetPinInputParameter

```cpp
static void pedSetPinInputParameter(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rsp** pointer to the response message size 


**Note**: The configured PIN entry parameter will be used for all following PIN entries. 

Configure the parameter for the PIN input 


additional parameters required for EMV PIN entry, which is supported for UI standard mode only


### function pedStartPin

```cpp
static void pedStartPin(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function pedPollPin

```cpp
static void pedPollPin(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function pedStopPin

```cpp
static void pedStopPin(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function setResult

```cpp
static void setResult(
    unsigned short response,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function handlePedCmd

```cpp
bool handlePedCmd(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


**Return**: true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command. 

Dispatch function to handle different PED commands 


### function getUnsigned

```cpp
static unsigned getUnsigned(
    BTLVNode * node,
    const char * tag,
    unsigned default_value
)
```


### function getVector

```cpp
static void getVector(
    std::vector< unsigned char > & v,
    BTLVNode * node,
    const char * tag
)
```


### function setResultPIN

```cpp
static void setResultPIN(
    unsigned short response,
    unsigned pinstatus,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function startPin

```cpp
static unsigned short startPin()
```


### function pedSetExtButton

```cpp
bool pedSetExtButton(
    void 
)
```


**Return**: true if PIN polling is active and Navigator Mode 2 set, else false 

Inform the VAULT about the Confirm button was pressed if PIN polling is active and Navigator Mode 2 is set 


### function pedReset

```cpp
void pedReset(
    void * handle
)
```


**Parameters**: 

  * **handle** handle of the terminating connection 


Function invoked by a thread at connection termination to abort the PIN entry. SDI server supports multiple connections, which can use the PED interface. With activation of the PED interface with command 22-03 (Start PIN entry) on one connection, the interface is locked for other connections. If a connection terminates, which optains the PED lock, the interface would be unaccessable for other connections. Therfore, this function will abort the PIN entry and unlock the PED interface, if the connection disturbes so that it can be used by other connection again. Please note that this function works for a PIN Entry started by 22-03 (Start PIN entry). A PIN entry started with 22-01 (Get PIN) is not considered, but the PED lock is released after the user hast finished the PIN entry. 



## Attributes Documentation

### variable trxLanguage

```cpp
sdi::SdiLanguage trxLanguage;
```


### variable pinType

```cpp
unsigned char pinType;
```


### variable sdiData

```cpp
SDITrxData sdiData;
```


### variable pin_minlen

```cpp
static int pin_minlen;
```


### variable pin_maxlen

```cpp
static int pin_maxlen;
```


### variable pin_bypass_key

```cpp
static int pin_bypass_key;
```


### variable pin_direct_bypass

```cpp
static int pin_direct_bypass;
```


### variable pin_auto_enter

```cpp
static int pin_auto_enter;
```


### variable pin_clear_all

```cpp
static int pin_clear_all;
```


### variable pin_navigator

```cpp
static int pin_navigator;
```


### variable pin_digits

```cpp
static int pin_digits;
```


### variable pin_key

```cpp
static std::vector< unsigned char > * pin_key;
```


### variable mutex

```cpp
static pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable pin_thread

```cpp
static pthread_t pin_thread;
```


### variable pin_handle

```cpp
static void * pin_handle = 0;
```


### variable pin_entry_status

```cpp
static PPIN_ENTRY pin_entry_status = PPIN_IDLE;
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
#include <string.h>
#include <string>
#include <stdlib.h>
#include "unistd.h"
#include "ped.h"
#include "_logf.h"
#include "sys.h"
#include "btlv_helper.h"
#include "ui.h"
#include <pthread.h>
#include "data.h"
#include "sdi_tags.h"
#include "sdi_lang.h"
#include "sdi_text.h"
#include "filesystem.h"
#include "pathutil.h"
#include "config/sdi_sysconfig.h"
#include "pthreadutil.h"
#include "madk_pp_protocol.h"
#include "util.h"

#include "sec/libsec.h"
#include "sys/time.h"

#include "common/checkForTouchCoordinates.h"

/* disable missing-field-initializers, since SDI server uses -Wextra and with this
 * option, the compiler issues a warning for compound inititialization of structs like
 * touch_hs_s sp = {0};
 * Please note that struct initialization is quaranteed by the compiler by standard */
#pragma GCC diagnostic ignored "-Wmissing-field-initializers"

#include <svcsec.h>

using namespace com_verifone_seccmd;
using namespace std;
using namespace config;

extern sdi::SdiLanguage trxLanguage;
extern unsigned char pinType;
extern SDITrxData    sdiData;


enum PPIN_ENTRY
{
  PPIN_IDLE,         // PIN entry is not active
  PPIN_CALLBACK,     // PIN entry using the callback interface is active
  PPIN_POLLING,      // PIN entry using the polling interface is active
  PPIN_POLLING_DONE, // PIN entry using the polling interface is active, PIN entry has finished but INS_PPIN_STOP has not been invoked, yet
};

enum PPIN_RESULT
{
  // first byte
  PPIN_DONE = 0x000000,
  PPIN_COLLECTING = 0x010000,

  // second byte
  PPIN_DIGIT_ENTERED = 0x0100,
  PPIN_BACKSPACE_ENTERED = 0x0800,
  PPIN_OK_ENTERED = 0x0D00,
  PPIN_CANCEL_ENTERED = 0x1B00,

  PPIN_DIGIT_SELECTED = 0xD100,
  PPIN_CANCEL_SELECTED = 0xD200,
  PPIN_BACKSPACE_SELECTED = 0xD300,
  PPIN_OK_SELECTED = 0xDE00,
  PPIN_MULTITOUCH = 0xDF00,

  PPIN_UNDERFLOW = 0xF800,
  PPIN_OVERFLOW = 0xF900,

  // third byte
  PPIN_BYPASS = 0xFC,
  PPIN_CANCEL = 0xFD,
  PPIN_TIMEOUT = 0xFE,
  PPIN_ERROR = 0xFF
};

static int pin_minlen;
static int pin_maxlen;
static int pin_bypass_key;
static int pin_direct_bypass;
static int pin_auto_enter;
static int pin_clear_all;
static int pin_navigator;
static int pin_digits; // number of pin digits or PPIN_RESULT
static std::vector<unsigned char> *pin_key;

// PED functions accessable by SDI main thread only
static void pedEnable(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void pedGetPin(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void pedSetPinTimeout(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void pedSetPinInputParameter(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

// PED functions accessable by both SDI main thread and side connection threads
static void pedStartPin(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void pedPollPin(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void pedStopPin(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

// mutex protecting PED functions
static pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

// thread which has started the PIN entry (set if pin_entry_status!=PPIN_IDLE)
static pthread_t pin_thread;
// connection handle of the pin_thread (required for pedReset())
static void *pin_handle = 0;
// state of the PIN entry
static PPIN_ENTRY pin_entry_status = PPIN_IDLE;

static void setResult(unsigned short response, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  if (rspBufSize < 2)
  {
    return;
  }

  rsp[0] = (response >> 8) & 0xff;
  rsp[1] = response & 0xff;
  *rspSize = 2;
}

//**************************************
//* handlePedCmd                       *
//* documentation see ped.h            *
//**************************************
bool handlePedCmd(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  // clear the response buffer
  memset(rsp, 0x00, rspBufSize);

  // only INS_PED_START_PIN, INS_PED_POLL_PIN and INS_PED_STOP_PIN can be used from side connection
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

  if (proto->isConnectionThread())
  {
    if (msg[1] != INS_PED_START_PIN
        && msg[1] != INS_PED_POLL_PIN
        && msg[1] != INS_PED_STOP_PIN)
    {
      _LOGF_INFO("handlePedCmd(): command [%02x%02x] not allowed as side command (handle=%p)",
                 msg[0], msg[1], proto->get_handle());
      *rspSize = 0;
      return false; // not executed, requires call of dispatch()
    }

    /* PWMADK-3450/3490: PIN entry (22-03) as side command only allowed in headless mode.
     * This is required for PIN entry with ARRS, which is locally processed on Standalone/Countertop only. */
    if (ui_enabled())
    {
      _LOGF_INFO("handlePedCmd(): command [%02x%02x] not allowed as side command %s (handle=%p)",
                 msg[0], msg[1], ui_enabled() ? "with enabled UI mode" : "on main connection", proto->get_handle());
      *rspSize = 0;
      return false; // not executed, requires call of dispatch()
    }
  }

  MutexLock m(&mutex);

  // prevent PIN entry functions can be used by multiple clients (side connections/side commands) at the same time
  if (pin_entry_status != PPIN_IDLE)
  {
    // another connection has started the PIN entry
    if (!pthread_equal(pthread_self(), pin_thread))
    {
      _LOGF_ERROR("handlePedCmd(): command [%02x%02x] declined, PIN entry already running for another connection", msg[0], msg[1]);
      // logic error
      setResult(0x64FD, rspBufSize, rsp, rspSize);
      return true;
    }

    // protocol type D: a second INS_PED_START_PIN even received on main connection is declined
    if (msg[1] == INS_PED_START_PIN && proto->get_protocol_type() == 'D')
    {
      _LOGF_ERROR("handlePedCmd(): command [%02x%02x] declined for protocol type D, PIN entry already started on this connection", msg[0], msg[1]);
      // logic error
      setResult(0x64FD, rspBufSize, rsp, rspSize);
      return true;
    }

    // keep old behavior for protocol types B/C and restart the PIN entry for them
  }

  // prevent mixing of different PIN entry variantes
  if (((msg[1] == INS_PED_ENABLE || msg[1] == INS_PED_GET_PIN || msg[1] == INS_SET_PIN_TIMEOUT) && pin_entry_status != PPIN_IDLE)
      || ((msg[1] == INS_PED_START_PIN || msg[1] == INS_PED_POLL_PIN || msg[1] == INS_PED_STOP_PIN) && pin_entry_status == PPIN_CALLBACK))
  {
    _LOGF_ERROR("handlePedCmd(): command [%02x%02x] declined, not allowed to use different PIN entry variantes at the same time (pin_entry_status=%d)", msg[0], msg[1], pin_entry_status);
    // logic error
    setResult(0x64FD, rspBufSize, rsp, rspSize);
    return true;
  }

  switch (msg[1])
  {
    case INS_PED_ENABLE:
    {
      pedEnable(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_PED_GET_PIN:
    {
      _LOGF_INFO("INS_PED_GET_PIN");
      pin_entry_status = PPIN_CALLBACK;
      pin_thread = pthread_self();
      pin_handle = 0; // pedReset() not working for pedGetPIN
      m.unlock();
      pedGetPin(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      m.lock();
      pin_entry_status = PPIN_IDLE;
      break;
    }

    case INS_SET_PIN_TIMEOUT:
    {
      pedSetPinTimeout(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    // pin_entry_status is handled inside pedStart/Poll/StopPin()
    case INS_PED_START_PIN:
    {
      pedStartPin(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_PED_POLL_PIN:
    {
      pedPollPin(rspBufSize, rsp, rspSize);
      break;
    }

    case INS_PED_STOP_PIN:
    {
      pedStopPin(rspBufSize, rsp, rspSize);

      if (pin_key)
      {
        pin_key->clear();
      }

      break;
    }

    case INS_SET_PIN_INPUT_PARAM:
    {
      pedSetPinInputParameter(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    default:
    {
      // unknown INS
      setResult(0x6D00, rspBufSize, rsp, rspSize);
    }
  }

  return true;
}

static void pedEnable(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) msgSize;
  (void) rspBufSize;

  // Enable or Disable the PED
  if (msgSize > 2 && msg[3] == 0x00)
  {
    _LOGF_INFO("pedEnable: called to enable the IPP");

    rsp[0] = 0x90;
    rsp[1] = 0x00;
    *rspSize = 2;
  }
  else
  {
    _LOGF_INFO("pedEnable: called to disable the IPP");

    rsp[0] = 0x90;
    rsp[1] = 0x00;
    *rspSize = 2;
  }
}

static void pedGetPin(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;
  _LOGF_INFO("%s: start", __FUNCTION__);

  struct BTLVRootNode xBtlv;
  int result = RESULT_OK;
  /* be compatible to previous SDI versions: use defaults for PIN entry timeout and PIN clear behaviour (with backspace)
   * from system configuration, which was set with PED Set PIN Timeout (22-02) and PED Set PIN Input Parameter (22-06) */
  unsigned short pinTimeout = SdiSysConfig::instance().getPinTimeout();
  unsigned char pinClearAll = SdiSysConfig::instance().getPinClearKey();
  unsigned char  pinBypass = 0; // default: 0 (disabled)
  sdi::Language  pinTextLanguage = trxLanguage.getLanguageId(); // default: transaction language
  char *touchCoordinates = NULL;
  unsigned char nbrTouchButtons = 0;
  unsigned char minPINLength = 4;
  unsigned char maxPINLength = 12;
  int pin_echo_char = '*';
  unsigned pin_ichar_tout = 0; // PIN interchar timeout disabled
  vfigui::stringmap value;
  unsigned options = PIN_ClearOnReturn; // always clear screen, if PIN entry has been finished
  unsigned char  cardTec = 0;

  // init for pedSetExtButton
  pin_navigator = 0; // navigator mode disabled

  if ((sdiData.get_cardTechnology(&cardTec) == true) && (cardTec == 1)) // CTS_CHIP
  {
    // Check for card removal for a chip transaction during PIN entry
    options |= PIN_AbortOnCardRemove;
  }

  // Check for additional input parameters (otherwise use defaults)
  if (msgSize > 4)
  {
    struct BTLVNode *node = NULL;

    // import TLV stream
    if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) < 0)
    {
      _LOGF_ERROR("%s: No valid TLV strem received!", __FUNCTION__);
      result = RESULT_TAG_ERROR;
      goto done;
    }

    // Check for Total PIN Timeout TAG
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA005_TIMEOUT_SEC))) != NULL)
    {
      if ((node->uSize == 2) &&
          ((pinTimeout = (node->pucData[0] * 0x100) + node->pucData[1]) <= 300))
      {
        _LOGF_INFO("%s: Total PIN timeout = %d seconds", __FUNCTION__, pinTimeout);
      }
      else
      {
        _LOGF_ERROR("%s: Wrong Total PIN Timeout Tag received!", __FUNCTION__);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }
    }

    // Check for PIN Bypass TAG
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA104_PIN_BYPASS))) != NULL)
    {
      if (node->uSize != 1)
      {
        _LOGF_ERROR("%s: Wrong PIN Bypass Tag received!", __FUNCTION__);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      if (node->pucData[0] & (~PINBypass_MaskAllowed))
      {
        _LOGF_ERROR("%s: Wrong value %d for PIN bypass received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      pinBypass = node->pucData[0];
      _LOGF_INFO("%s: PIN bypass: %d", __FUNCTION__, pinBypass);
    }

    // Check for Touch coordinates TAG in headless mode
    if (!ui_enabled())
    {
      result = common::checkForTouchCoordinates(&xBtlv, &touchCoordinates, &nbrTouchButtons);

      if (RESULT_FAIL == result)
      {
        _LOGF_ERROR("%s: Wrong Touch coordinates TAG received!", __FUNCTION__);
        goto done;
      }

      if ((node = pxBTLVFindTag(&xBtlv,
                                NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA,
                                           SDI_TAG_DFA025_NAVIGATOR_MODE))) != NULL)
      {
        if (node->uSize != 1 || node->pucData[0] > 2)
        {
          _LOGF_ERROR("%s: Wrong tag navigator mode received!", __FUNCTION__);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        if (node->pucData[0] == 1)
        {
          options |= PIN_NavigatorMode_1;
          // set for pedSetExtButton
          pin_navigator = 1;
        }
        else if (node->pucData[0] == 2)
        {
          options |= PIN_NavigatorMode_2;
          // set for pedSetExtButton
          pin_navigator = 2;
        }

        // else 0: disabled
        _LOGF_INFO("%s: Navigator mode: %d", __FUNCTION__, node->pucData[0]);
      }
    }

    // Check for PIN minimum length TAG
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02B_PIN_MIN_LENGTH))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] < 4 || node->pucData[0] > 12)
      {
        _LOGF_ERROR("%s: Wrong value for minimum number of PIN digits received!", __FUNCTION__);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      minPINLength = node->pucData[0];
      _LOGF_INFO("%s: minPINLength: %d", __FUNCTION__, minPINLength);
    }

    // Check for PIN maximum length TAG
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02C_PIN_MAX_LENGTH))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] < 4 || node->pucData[0] > 12)
      {
        _LOGF_ERROR("%s: Wrong value for maximal number of PIN digits received!", __FUNCTION__);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      maxPINLength = node->pucData[0];
      _LOGF_INFO("%s: maxPINLength: %d", __FUNCTION__, maxPINLength);
    }

    // Check if maxPINLength is greater than minPINLength
    if (minPINLength > maxPINLength)
    {
      _LOGF_ERROR("%s: minPINLength (%d) is greater than maxPINLength (%d)", __FUNCTION__, minPINLength, maxPINLength);
      result = RESULT_PARAMETER_ERROR;
      goto done;
    }

    // PIN clear behaviour with backspace key
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02F_PIN_CLEAR_ALL))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] > 1)
      {
        _LOGF_ERROR("%s: Wrong value %d for PIN clear key behaviour received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      // overwrite system configuration default
      pinClearAll = node->pucData[0];
    }

    // PIN interchar timeout
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA035_PIN_INTERCHAR_TIMEOUT))) != NULL)
    {
      if (node->uSize < 1 || node->uSize > 4)
      {
        _LOGF_ERROR("%s: Wrong length %d for PIN interchar timeout received!", __FUNCTION__, node->uSize);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      pin_ichar_tout = 0;

      for (unsigned i = 0; i < node->uSize; i++)
      {
        pin_ichar_tout = (pin_ichar_tout << 8) | node->pucData[i];
      }
    }

    // PIN Auto Enter
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02E_PIN_AUTO_ENTER))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] > 1)
      {
        _LOGF_ERROR("%s: Wrong value %d for PIN Auto Enter received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      // apply to dialog options
      if (node->pucData[0] == 1)
      {
        options |= PIN_AutoEnter;
      }
    }

#ifndef HEADLESS /* process parameters supported for UI only */

    if (ui_enabled())
    {
      UICatalog cat(pinTextLanguage); // required to format amount below

      // Check for Text Language TAG
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA008_TEXT_LANGUAGE))) != NULL)
      {
        sdi::Language lang = sdi::LANG_NO_LANG;

        if (node->uSize != 1)
        {
          _LOGF_ERROR("%s: Tag DFA008 (language) has invalid length %u!", __FUNCTION__, node->uSize);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        lang = sdi::languageSupported(node->pucData[0]);

        if (lang == sdi::LANG_NO_LANG)
        {
          _LOGF_ERROR("%s: Tag DFA008 contains invalid language 0x%02X!", __FUNCTION__, node->pucData[0]);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        // adjust catalog to new language
        if (!cat.set(lang))
        {
          _LOGF_ERROR("%s: Cannot apply language 0x%02X to catalog: %s", __FUNCTION__, lang, cat.error().c_str());
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        pinTextLanguage = lang;
        _LOGF_INFO("%s: Text Language: %02X", __FUNCTION__, pinTextLanguage);
      }

      short curr = 0;

      // currency (mandatory in case of available amount)
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "5F2A"))) != NULL && node -> uSize == 2)
      {
        curr = (node->pucData[0] << 8) + node->pucData[1];
      }

      // amount (optional)
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "9F02"))) != NULL)
      {
        string amountStr, dsep, tsep;
        const char *currency;

        if (node->uSize != 6)
        {
          _LOGF_ERROR("%s: Wrong length %u for tag 9F02 (amount) received!", __FUNCTION__, node->uSize);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        if (curr == 0)
        {
          _LOGF_ERROR("%s: Tag 5F2A (currency) is wrong or missing!", __FUNCTION__);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        // format amount for the display

        dsep = cat.getText(sdi::TXT_DECIMAL_SEPARATOR, "N/A");

        if (dsep == "N/A")
        {
          dsep = ".";
        }

        tsep = cat.getText(sdi::TXT_THOUSAND_SEPARATOR, "N/A");

        if (tsep == "N/A")
        {
          tsep.clear();
        }

        short currExp = getCurrencyExponent(curr);

        if (currExp < 0)
        {
          _LOGF_ERROR("%s: currency exponent invalid", __FUNCTION__);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        amountStr = bcdToAmountStr(node->pucData, 6, (dsep.empty() ? 0 : (unsigned)currExp), dsep, tsep);

        if (amountStr.empty())
        {
          _LOGF_ERROR("%s: amount format error", __FUNCTION__);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        currency = getCurrencyName(curr);

        if (!currency || strlen(currency) == 0)
        {
          _LOGF_ERROR("%s: Tag 5F2A (currency) contains invalid value 0x%04X!", __FUNCTION__, curr);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        // set amount and currency for the display
        value["amount"] = amountStr;
        value["curr"] = currency;
      }

      // card application label
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA037_PIN_CARD_APP_LABEL))) != NULL
          && node -> uSize > 0)
      {
        value["prefname"] = vfigui::uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // PIN dialog options
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA13D_DIALOG_OPTIONS))) != NULL)
      {
        if (node->uSize < 1 || node->uSize > 4)
        {
          _LOGF_ERROR("%s: Wrong length %d for tag DFA13D (PIN dialog) options received!", __FUNCTION__, node->uSize);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        unsigned opts = 0;

        for (unsigned i = 0; i < node->uSize; i++)
        {
          opts = (opts << 8) | node->pucData[i];
        }

        // filter allowed options only (and ignore others)
        opts &= PIN_AllowedExtOptions;

        // add additional external options
        options |= opts;
      }

      // PIN dialog header label
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA143_DIALOG_HEADER_LABEL))) != NULL
          && node->uSize > 0)
      {
        value["header_text"] = vfigui::uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      // PIN echo character
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA036_PIN_ECHO_CHARACTER))) != NULL)
      {
        if (node->uSize < 1 || node->uSize > 4)
        {
          _LOGF_ERROR("%s: Wrong length %d for tag DFA036 (PIN echo character) received!", __FUNCTION__, node->uSize);
          result = RESULT_PARAMETER_ERROR;
          goto done;
        }

        pin_echo_char = 0;

        for (unsigned i = 0; i < node->uSize; i++)
        {
          pin_echo_char = (pin_echo_char << 8) | node->pucData[i];
        }
      }
    }  // ui_enabled()

#endif  // !HEADLESS
  }

  // apply to dialog options
  if (pinClearAll == 1)
  {
    options |= PIN_ClearAllDigits;
  }

  // Enter PIN
  result = ui_EnterPin(pinTextLanguage, pinTimeout, &pinBypass, options, minPINLength, maxPINLength,
                       pin_ichar_tout, &value, pin_echo_char, touchCoordinates, nbrTouchButtons);

  if (touchCoordinates)
  {
    // Free the allocated memory for the touch buttons
    free(touchCoordinates);
  }

done:

  switch (result)
  {
    case RESULT_OK:
    {
      if (pinBypass != 0)
      {
        // *** pin bypassed ***
        rsp[0] = 0x90;
        rsp[1] = 0x70;
        *rspSize = 2;

        // add DFA038 with the bypass key
        if (pinBypass == 2) // only in case of clear was pressed
        {
          vBTLVClear(&xBtlv);
          pxBTLVWriteTag(&xBtlv, SDI_TAG_DFA038_PIN_BYPASS_KEY, &pinBypass, 1);
          int r = iBTLVExport(&xBtlv, rsp + 2, rspBufSize - 2);

          if (r <= 0)
          {
            _LOGF_ERROR("%s: TLV buffer couldn't created and added! (r=%d)", __FUNCTION__, r);
            // execution error
            rsp[0] = 0x64;
            rsp[1] = 0x00;
            *rspSize = 2;
            break;
          }

          *rspSize += r;
        }

        break;
      }

      // *** pin entered ***
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case RESULT_USER_CANCEL:
    {
      // Cancellation by user
      rsp[0] = 0x64;
      rsp[1] = 0x05;
      *rspSize = 2;
      break;
    }

    case RESULT_TIMEOUT:
    {
      // Timeout error
      rsp[0] = 0x64;
      rsp[1] = 0x0C;
      *rspSize = 2;
      break;
    }

    case RESULT_INTERCHAR_TIMEOUT:
    {
      // Interchar Timeout error
      rsp[0] = 0x64;
      rsp[1] = 0xF8;
      *rspSize = 2;
      break;
    }

    case RESULT_MOBILE_ABORT:
    {
      // Abort from host device
      rsp[0] = 0x65;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case RESULT_NO_LINK:
    {
      // Set ExtServer into idle state
      setDevice2Idle();
      *rspSize = 0;
      break;
    }

    case RESULT_EXCESSIVE_PIN_REQUESTS:
    {
      // Excessive PIN requestes
      rsp[0] = 0x6F;
      rsp[1] = 0xC0;
      *rspSize = 2;
      break;
    }

    case RESULT_TAG_ERROR:
    {
      rsp[0] = 0x62; // Tag error
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case RESULT_PARAMETER_ERROR:
    {
      rsp[0] = 0x64;
      rsp[1] = 0xFE; // Parameter error
      *rspSize = 2;
      break;
    }

    case RESULT_FAIL:
    default:
    {
      // *** error ***
      rsp[0] = 0x64;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }
  }
}

static void pedSetPinTimeout(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  _LOGF_INFO("%s: called to set the PIN entry timeout", __FUNCTION__);

  if (msgSize != 6)
  {
    _LOGF_ERROR("%s: Wrong command length: %d", __FUNCTION__, msgSize);

    rsp[0] = 0x67;
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }

  unsigned short helpTimeout = 0;

  // Attention!!!
  // Specification of e105 Application protocol differs from implementation in e105 source code.
  // The coding here is taken over from e105 source code where the timeout is expected in seconds.
  // Necessary corrections requested with Jira case iJES-76

  helpTimeout = (msg[4] * 0x100) + (msg[5]);

  if (helpTimeout > 300)
  {
    _LOGF_ERROR("%s: Timeout too big, return error!", __FUNCTION__);

    rsp[0] = 0x64;
    rsp[1] = 0x00;
    *rspSize = 2;
    return;
  }

  _LOGF_INFO("%s: Set global timeout for PIN entry, timeout value = %d",  __FUNCTION__, helpTimeout);

  rsp[0] = 0x90;
  rsp[1] = 0x00;
  *rspSize = 2;

  if (!SdiSysConfig::instance().setPinTimeout(helpTimeout))
  {
    rsp[0] = 0x64;  // Execution error
    _LOGF_INFO("%s: SdiSysConfig.setPinTimeout() failed",  __FUNCTION__);
  }
}

static void pedSetPinInputParameter(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  (void) rspBufSize;

  int result = RESULT_TAG_ERROR; // no tag received
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  /* save parameter to restore in case of write error.
   * This is required to do one write operation for all parameters */
  unsigned char pinCLearKey = SdiSysConfig::instance().getPinClearKey();
#ifndef HEADLESS
  unsigned char pinBypassCfg = SdiSysConfig::instance().getPinBypassConfig();
  unsigned char pinMinLength = SdiSysConfig::instance().getPinMinLength();
  unsigned char pinMaxLength = SdiSysConfig::instance().getPinMaxLength();
  unsigned pinDlgOptions = SdiSysConfig::instance().getPinDialogOptions();
  string pinDlgHeaderLabel = SdiSysConfig::instance().getPinDialogHeaderLabel();
  unsigned pinInterCharTout = SdiSysConfig::instance().getPinInterCharTimeout();
  unsigned char pinAutoEnter = SdiSysConfig::instance().getPinAutoEnter();
  unsigned pinEchoChar = SdiSysConfig::instance().getPinEchoChar();
#endif

  if (msgSize <= 4)
  {
    _LOGF_ERROR("%s: Wrong command length!", __FUNCTION__);
    result = RESULT_FAIL;
    goto done;
  }

  // import TLV stream
  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    _LOGF_ERROR("%s: No valid TLV stream received!", __FUNCTION__);
    result = RESULT_TAG_ERROR;
    goto done;
  }

  /* PIN clear key behaviour -> keep compatibility and supported this parameter for headless mode,
   * since it will provide default for Get Pin (22-01). */
  if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02F_PIN_CLEAR_ALL))) != NULL)
  {
    if (node->uSize != 1 || node->pucData[0] > 1)
    {
      _LOGF_ERROR("%s: Wrong value %d for PIN clear key behaviour received!", __FUNCTION__, node->pucData[0]);
      result = RESULT_PARAMETER_ERROR;
      goto done;
    }

    SdiSysConfig::instance().setPinClearKey(node->pucData[0], false); // not persistant (see write() below)
    _LOGF_INFO("%s: New value for PIN clear key behaviour = %d", __FUNCTION__, node->pucData[0]);
    result = RESULT_OK;
  }

#ifndef HEADLESS

  if (ui_enabled())
  {
    // PIN bypass config
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA104_PIN_BYPASS))) != NULL)
    {
      if (node->uSize != 1)
      {
        _LOGF_ERROR("%s: Wrong PIN Bypass Tag received!", __FUNCTION__);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      if (node->pucData[0] & (~PINBypass_MaskAllowed))
      {
        _LOGF_ERROR("%s: Wrong value %d for PIN bypass received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      SdiSysConfig::instance().setPinBypassConfig(node->pucData[0], false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for PIN bypass = %d", __FUNCTION__, node->pucData[0]);
      result = RESULT_OK;
    }

    // PIN minimal length
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02B_PIN_MIN_LENGTH))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] < 4 || node->pucData[0] > 12)
      {
        _LOGF_ERROR("%s: Wrong value %d for minmal PIN length received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      SdiSysConfig::instance().setPinMinLength(node->pucData[0], false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for minmal PIN length = %d", __FUNCTION__, node->pucData[0]);
      result = RESULT_OK;
    }

    // PIN maximal length
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02C_PIN_MAX_LENGTH))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] < 4 || node->pucData[0] > 12)
      {
        _LOGF_ERROR("%s: Wrong value %d for maximal PIN length received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      SdiSysConfig::instance().setPinMaxLength(node->pucData[0], false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for maximal PIN length = %d", __FUNCTION__, node->pucData[0]);
      result = RESULT_OK;
    }

    // validate minimal against maximal PIN length
    if (SdiSysConfig::instance().getPinMinLength() > SdiSysConfig::instance().getPinMaxLength())
    {
      _LOGF_ERROR("%s: Minimal PIN length is greater than maximal PIN length (%d>%d)!", __FUNCTION__,
                  SdiSysConfig::instance().getPinMinLength(), SdiSysConfig::instance().getPinMaxLength());
      result = RESULT_PARAMETER_ERROR;
      goto done;
    }

    // PIN dialog options
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA13D_DIALOG_OPTIONS))) != NULL)
    {
      if (node->uSize < 1 || node->uSize > 4)
      {
        _LOGF_ERROR("%s: Wrong length %d for PIN dialog options received!", __FUNCTION__, node->uSize);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      unsigned opts = 0;

      for (unsigned i = 0; i < node->uSize; i++)
      {
        opts = (opts << 8) | node->pucData[i];
      }

      // filter allowed options only (and ignore others)
      opts &= PIN_AllowedExtOptions;

      SdiSysConfig::instance().setPinDialogOptions(opts, false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for PIN dialog options = %u (0x%08X)", __FUNCTION__, opts, opts);
      result = RESULT_OK;
    }

    // PIN dialog header label
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA143_DIALOG_HEADER_LABEL))) != NULL)
    {
      string label;

      if (node->uSize > 0) // an empty TLV tag will reset the header label
      {
        label = vfigui::uiPrint("%S", string((const char *)node->pucData, node->uSize).c_str());
      }

      SdiSysConfig::instance().setPinDialogHeaderLabel(label, false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for PIN dialog header label = '%s'", __FUNCTION__, label.c_str());
      result = RESULT_OK;
    }

    // PIN interchar timeout
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA035_PIN_INTERCHAR_TIMEOUT))) != NULL)
    {
      if (node->uSize < 1 || node->uSize > 4)
      {
        _LOGF_ERROR("%s: Wrong length %d for PIN interchar timeout received!", __FUNCTION__, node->uSize);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      unsigned tout = 0;

      for (unsigned i = 0; i < node->uSize; i++)
      {
        tout = (tout << 8) | node->pucData[i];
      }

      SdiSysConfig::instance().setPinInterCharTimeout(tout, false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for PIN interchar timeout = %u", __FUNCTION__, tout);
      result = RESULT_OK;
    }

    // PIN Auto Enter
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02E_PIN_AUTO_ENTER))) != NULL)
    {
      if (node->uSize != 1 || node->pucData[0] > 1)
      {
        _LOGF_ERROR("%s: Wrong value %d for PIN Auto Enter received!", __FUNCTION__, node->pucData[0]);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      SdiSysConfig::instance().setPinAutoEnter(node->pucData[0], false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for PIN Auto Enter = %d", __FUNCTION__, node->pucData[0]);
      result = RESULT_OK;
    }

    // PIN echo character
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA036_PIN_ECHO_CHARACTER))) != NULL)
    {
      if (node->uSize < 1 || node->uSize > 4)
      {
        _LOGF_ERROR("%s: Wrong length %d for PIN echo character received!", __FUNCTION__, node->uSize);
        result = RESULT_PARAMETER_ERROR;
        goto done;
      }

      unsigned echo_char = 0;

      for (unsigned i = 0; i < node->uSize; i++)
      {
        echo_char = (echo_char << 8) | node->pucData[i];
      }

      SdiSysConfig::instance().setPinEchoChar(echo_char, false); // not persistant (see write() below)
      _LOGF_INFO("%s: New value for PIN echo character = %u (0x%08X)", __FUNCTION__, echo_char, echo_char);
      result = RESULT_OK;
    }
  }

#endif  // HEADLESS

  if (result != RESULT_OK)
  {
    _LOGF_ERROR("%s: No PIN entry parameter tag received!", __FUNCTION__);
    result = RESULT_TAG_ERROR;
    goto done;
  }

  // write PIN entry parameters persistent to flash
  if (!SdiSysConfig::instance().write())
  {
    _LOGF_ERROR("%s: Failed to write PIN entry parameter to flash!", __FUNCTION__);
    result = RESULT_FAIL;
  }

done:

  if (result != RESULT_OK)
  {
    // restore old configuration
    SdiSysConfig::instance().setPinClearKey(pinCLearKey, false);
#ifndef HEADLESS
    SdiSysConfig::instance().setPinBypassConfig(pinBypassCfg, false);
    SdiSysConfig::instance().setPinMinLength(pinMinLength, false);
    SdiSysConfig::instance().setPinMaxLength(pinMaxLength, false);
    SdiSysConfig::instance().setPinDialogOptions(pinDlgOptions, false);
    SdiSysConfig::instance().setPinDialogHeaderLabel(pinDlgHeaderLabel, false);
    SdiSysConfig::instance().setPinInterCharTimeout(pinInterCharTout, false);
    SdiSysConfig::instance().setPinAutoEnter(pinAutoEnter, false);
    SdiSysConfig::instance().setPinEchoChar(pinEchoChar, false);
#endif
  }

  switch (result)
  {
    case RESULT_OK:
    {
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case RESULT_TAG_ERROR:
    {
      rsp[0] = 0x62; // Tag error
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }

    case RESULT_PARAMETER_ERROR:
    {
      rsp[0] = 0x64;
      rsp[1] = 0xFE; // Parameter error
      *rspSize = 2;
      break;
    }

    case RESULT_FAIL:
    default:
    {
      rsp[0] = 0x64; // Execution error
      rsp[1] = 0x00;
      *rspSize = 2;
      break;
    }
  }
}

static unsigned getUnsigned(BTLVNode *node, const char *tag, unsigned default_value)
{
  node = pxBTLVFindTag(node, tag);

  if (!node)
  {
    return default_value;
  }

  unsigned r = 0;

  for (unsigned i = 0; i < node->uSize; i++)
  {
    r = (r << 8) | node->pucData[i];
  }

  return r;
}

static void getVector(std::vector<unsigned char> &v, BTLVNode *node, const char *tag)
{
  v.clear();
  node = pxBTLVFindTag(node, tag);

  if (!node || !node->uSize)
  {
    return;
  }

  v.assign(node->pucData, node->pucData + node->uSize);
}

/* send PIN result
pinstatus: 3 bytes result (three lower bytes in unsigned)

first byte:  0x00 PIN entry completed
             0x01 PIN entry ongoing

second byte: 0x00 no key entered or selected
             0x01 digit entered
             0x08 backspace entered
             0x0D OK entered
             0x1B cancel enterd
             0xD1 numeric key selected
             0xD2 cancel selected
             0xD3 backspace selected
             0xDE OK selected
             0xDF multiple touches
             0xF8 underflow
             0xF9 overflow

third byte:  0x00-0x0C number of digits
             0xFC bypass
             0xFD cancel
             0xFE timeout
             0xFF error
*/
static void setResultPIN(unsigned short response, unsigned pinstatus, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  if (rspBufSize < 2)
  {
    return;
  }

  rsp[0] = (response >> 8) & 0xff;
  rsp[1] = response & 0xff;
  *rspSize = 2;

  struct BTLVRootNode tlv;
  struct BTLVNode *node;

  if ((node = pxBTLVAppendTag(&tlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0)))
  {
    unsigned char out[3] = {(unsigned char)((pinstatus >> 16) & 0xff),
                            (unsigned char)((pinstatus >> 8) & 0xff),
                            (unsigned char)(pinstatus & 0xff)
                           };
    pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, out, 3);
    *rspSize += iBTLVExport(&tlv, rsp + 2, rspBufSize - 2);
  }
}


static unsigned short startPin()
{
  pin_digits = 0;
  PINPARAMETER p = {0, 0, 0, 0, 0};
  p.ucMin = (unsigned char)pin_minlen;
  p.ucMax = (unsigned char)pin_maxlen;
  p.ucEchoChar = 0x20;
  p.ucDefChar = 0x20;

  int r;

  if ((r = iPS_SelectPINAlgo(EMV_PIN)))
  {
    _LOGF_ERROR("iPS_SelectPINAlgo() failed: %d\n", r);
    return 0x6400;
  }

  // set bypass key to default: enter key
  if ((r = iPS_SetPinBypassKey(13)))
  {
    _LOGF_ERROR("iPS_SetPINBypassKey() failed: %d\n", r);
    return 0x6400;
  }

  if (pin_auto_enter)
  {
    p.ucOption |= (1 << 0);  // bit 0: auto enter
  }

  if (!pin_clear_all)
  {
    p.ucOption |= (1 << 3);  // bit 3: enable backspace
  }

  switch (pin_bypass_key)
  {
    default:
      break; // bypass disabled

    case 27: // escape key
      p.ucOption |= (1 << 1); // bit 1: enable bypass

      if ((r = iPS_SetPinBypassKey(27))) // set escape as bypass key
      {
        _LOGF_ERROR("iPS_SetPINBypassKey() failed with %d!\n", r);
        return 0x6400;
      }

      _LOGF_TRACE("Bypass key: CANCEL\n");
      break;

    case 8:  // backspace/clear key
      p.ucOption |= (1 << 4); // bit 4: enable bypass for clear key
      _LOGF_TRACE("Bypass key: CLEAR\n");
      break;

    case 13: // enter key
      p.ucOption |= (1 << 1); // bit 1: enable bypass
      _LOGF_TRACE("Bypass key: ENTER\n");
      break;
  }

  if (pin_navigator)
  {
    p.ucOption |= 1 << 2;  // signal navigator mode
  }

  if (pin_navigator == 2)
  {
    p.ucOption |= 1 << 7;  // use confirmation button instead of double tap
  }

  if ((r = iPS_SetPINParameter(&p)))
  {
    _LOGF_ERROR("iPS_SetPINParameter() failed: %d\n", r);
    return 0x6400;
  }

  if (pin_key && pin_key->size())
  {
    touch_hs_s sp = {0};
    sp.num_hotspots = pin_key->size() / 9;

    if (sp.num_hotspots > MAX_NUM_HOTSPOTS)
    {
      sp.num_hotspots = MAX_NUM_HOTSPOTS;
    }

    for (int i = 0; i < sp.num_hotspots; i++)
    {
      sp.touch_spot[i].x1 = ((*pin_key)[9 * i  ] << 8) + (*pin_key)[9 * i + 1];
      sp.touch_spot[i].y1 = ((*pin_key)[9 * i + 2] << 8) + (*pin_key)[9 * i + 3];
      sp.touch_spot[i].x2 = sp.touch_spot[i].x1 + ((*pin_key)[9 * i + 4] << 8) + (*pin_key)[9 * i + 5];
      sp.touch_spot[i].y2 = sp.touch_spot[i].y1 + ((*pin_key)[9 * i + 6] << 8) + (*pin_key)[9 * i + 7];
      sp.touch_spot[i].result = (*pin_key)[9 * i + 8];
    }

    setSecurePINDisplayParameters(&sp, 0);
    _LOGF_INFO("setSecurePINDisplayParameters - num_hotspots %d\n", sp.num_hotspots);
  }

  unsigned char dummy[20] = {0};

  if ((r = iPS_RequestPINEntry(0, dummy)))
  {
    _LOGF_ERROR("iPS_RequestPINEntry() failed with %d!\n", r);

    if (r == (int) E_KM_ACCESS_DENIED)
    {
      return 0x6FC0;  // excessife PIN requests
    }
    else
    {
      return 0x6400;
    }
  }

  return 0x9000;
}

static void pedStartPin(unsigned short, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  if (pin_entry_status != PPIN_IDLE)
  {
    pedStopPin(rspBufSize, rsp, rspSize);
  }

  unsigned short result = 0x9000;
  struct BTLVRootNode tlv;

  if (msgSize < 4 || iBTLVImport(&tlv, &msg[4], msgSize - 4, NULL, NULL) != 0)
  {
    result = 0x64fe;
    goto done;
  }

  pin_minlen    = getUnsigned(&tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02B_PIN_MIN_LENGTH), 4);
  pin_maxlen    = getUnsigned(&tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02C_PIN_MAX_LENGTH), 12);

  pin_bypass_key = getUnsigned(&tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02D_PIN_BYPASS_KEY), 0);
  pin_direct_bypass = (pin_bypass_key > 255);
  pin_bypass_key &= 0xff;

  pin_auto_enter = getUnsigned(&tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02E_PIN_AUTO_ENTER), 0);
  pin_clear_all = getUnsigned(&tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA02F_PIN_CLEAR_ALL), 0);
  pin_navigator = getUnsigned(&tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA025_NAVIGATOR_MODE), 0);

  if (!pin_key)
  {
    pin_key = new std::vector<unsigned char>;
  }

  getVector(*pin_key, &tlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA024_TOUCH_COORDINATES));

  if (pin_minlen < 4 || pin_maxlen > 12 || pin_auto_enter > 1 || pin_clear_all > 1 || pin_navigator > 2 || pin_minlen > pin_maxlen)
  {
    result = 0x64fe; // parameter error
    goto done;
  }

  result = startPin();

  if (result == 0x9000)
  {
    pin_entry_status = PPIN_POLLING;
    pin_thread = pthread_self();
    pin_handle = mADK_PP_Prot::getInstance()->get_handle();
  }

done:
  setResult(result, rspBufSize, rsp, rspSize);
}


static void pedPollPin(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  if (pin_entry_status == PPIN_POLLING_DONE)
  {
    setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
    return;
  }

  if (pin_entry_status != PPIN_POLLING)
  {
    setResult(0x6400, rspBufSize, rsp, rspSize);
    return;
  }

  int status = 0;
  PINRESULT pinresult = {0};
  int r = iPS_GetPINResponse(&status, &pinresult);

  _LOGF_TRACE("iPS_GetPINResponse() r=%d status=%d digits=%d encPinBlock[0]=0x%02x\n", r, status, pinresult.nbPinDigits, pinresult.encPinBlock[0]);

  if (r != 0)
  {
    _LOGF_ERROR("iPS_GetPINResponse() failed: %d\n", r);
    setResult(0x6400, rspBufSize, rsp, rspSize);
    return;
  }

  switch (status)
  {
    case 0:
      pin_entry_status = PPIN_POLLING_DONE;
      pin_digits = pinresult.nbPinDigits;
      setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
      return;

    case 2:
    {
      unsigned result = PPIN_COLLECTING;

      switch (pinresult.encPinBlock[0])
      {
        case 0x00:
          if (pin_digits != pinresult.nbPinDigits)
          {
            result += PPIN_DIGIT_ENTERED;
          }

          break;

        case 0x08:
          result += PPIN_BACKSPACE_ENTERED;
          break;

        case 0x0D:
          result += PPIN_UNDERFLOW;
          break; // OK was pressed but PIN entry did not finish, i.e. underflow

        case 0xF9:
          result += PPIN_OVERFLOW;
          break;

        case 0x1B:
          result += PPIN_CANCEL_ENTERED;
          break;

        case 0xD1:
          result += PPIN_DIGIT_SELECTED;
          break;

        case 0xD2:
          result += PPIN_CANCEL_SELECTED;
          break;

        case 0xD3:
          result += PPIN_BACKSPACE_SELECTED;
          break;

        case 0xDE:
          result += PPIN_OK_SELECTED;
          break;

        case 0xDF:
          result += PPIN_MULTITOUCH;
          break;
      }

      pin_digits = pinresult.nbPinDigits;
      result += pin_digits;

      setResultPIN(0x9000, result, rspBufSize, rsp, rspSize);
      return;
    }

    case 5:
      pin_entry_status = PPIN_POLLING_DONE;
      pin_digits = PPIN_CANCEL;
      setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
      return;

    case 6:
      if (pin_bypass_key == 0 && pin_direct_bypass)
      {
        // enter has been set as bypass key and only
        // direct bypass has been allowed and a digit has been pressed in between:
        // restart pin entry without bypass key
        pin_direct_bypass = 0;
        startPin();
        setResultPIN(0x9000, PPIN_COLLECTING + PPIN_OK_ENTERED + pin_digits, rspBufSize, rsp, rspSize);
        return;
      }

      pin_entry_status = PPIN_POLLING_DONE;
      pin_digits = PPIN_BYPASS;
      setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
      return;

    case 0x0A:
      if (pin_bypass_key == 0 && pin_direct_bypass)
      {
        // clear has been set as bypass key and only
        // direct bypass has been allowed and a digit has been pressed in between:
        // restart pin entry without bypass key
        pin_direct_bypass = 0;
        startPin();
        setResultPIN(0x9000, PPIN_COLLECTING + PPIN_CANCEL_ENTERED + pin_digits, rspBufSize, rsp, rspSize);
        return;
      }

      pin_entry_status = PPIN_POLLING_DONE;
      pin_digits = PPIN_BYPASS;
      setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
      return;

    case 0x0C:
      pin_entry_status = PPIN_POLLING_DONE;
      pin_digits = PPIN_TIMEOUT;
      setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
      return;

    case 1:
    default:
      pin_entry_status = PPIN_POLLING_DONE;
      pin_digits = PPIN_ERROR;
      setResultPIN(0x9000, PPIN_DONE + pin_digits, rspBufSize, rsp, rspSize);
      _LOGF_ERROR("iPS_GetPINResponse(): Error: status=%d\n", status);
      return;
  }
}

static void pedStopPin(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  unsigned short result = 0x9000;

  if (pin_entry_status == PPIN_POLLING)
  {
    iPS_CancelPIN();
    pin_entry_status = PPIN_POLLING_DONE;
  }

  if (pin_entry_status == PPIN_POLLING_DONE || pin_entry_status == PPIN_IDLE)
  {
    pin_entry_status = PPIN_IDLE;
  }
  else
  {
    result = 0x64FD;
  }

  setResult(result, rspBufSize, rsp, rspSize);
}

bool pedSetExtButton()
{
#if defined (_VOS2) || defined __ANDROID__
  MutexLock m(&mutex);

  /* Since PWMADK-3450 we allow sysExtButton (20-20) from a different connection than
   * the PIN entry connection. This is required by applications, which want to use
   * it simultaneously, while ARRS is doing the PIN entry on Android. In addition,
   * we invoke iPS_ConfirmTouchSelection() directly for active PED Get PIN (22-01). */
  if ((pin_entry_status == PPIN_POLLING || pin_entry_status == PPIN_CALLBACK) && pin_navigator == 2)
  {
    // PIN entry using the polling interface is active and Navigator Mode 2 is set
    // Forward External button press to VAULT to confirm the selected touch button
    iPS_ConfirmTouchSelection();
    return true;
  }

#endif
  return false;
}

void pedReset(void *handle)
{
  MutexLock m(&mutex);

  // if PIN entry wasn't started with 22-03 (Start PIN entry)
  if (pin_entry_status != PPIN_POLLING)
  {
    return;
  }

  // if PIN entry wasn't started by this thread, do nothing
  if (handle != pin_handle)
  {
    return;
  }

  unsigned short rspSize;
  unsigned char rsp[2];
  pedStopPin(2, rsp, &rspSize);
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

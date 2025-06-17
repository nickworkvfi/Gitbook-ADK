---
title: evt/src/libevt.h

---

# evt/src/libevt.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Event](struct_event.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[OSEvents](libevt_8h.md#enum-osevents)** { OS_NOP = 0, OS_EVT_TIMER, OS_EVT_DOCK, OS_EVT_UNDOCK, OS_EVT_SHUTDOWN} |
| enum| **[WaitPolicy](libevt_8h.md#enum-waitpolicy)** { WAIT_ANY, WAIT_ALL} |
| enum| **[EvtSide](libevt_8h.md#enum-evtside)** { SIDE_RAISER = 0, SIDE_WAITER, SIDE_BOTH} |
| enum| **[EvtOptions](libevt_8h.md#enum-evtoptions)** { EVT_OPT_DEFAULT = 0, EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC = 0x1 << 0} |
| typedef unsigned long int | **[WaiterHandle](libevt_8h.md#typedef-waiterhandle)** <br>Waiting handle type.  |
| typedef uint64_t | **[UID](libevt_8h.md#typedef-uid)** <br>Unique ID of [Event](struct_event.md).  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [EVT_API](libevt_8h.md#define-evt-api)[UID](libevt_8h.md#typedef-uid) | **[evt_make_uid](libevt_8h.md#function-evt-make-uid)**(uint16_t componentID, uint16_t eventID)<br>Creates UID based on componentID and eventID.  |
| [EVT_API](libevt_8h.md#define-evt-api)[UID](libevt_8h.md#typedef-uid) | **[evt_make_uid_os](libevt_8h.md#function-evt-make-uid-os)**(uint16_t componentID, [OSEvents](libevt_8h.md#enum-osevents) osEvent)<br>Creates UID based on componentID and OS [Event](struct_event.md).  |
| [EVT_API](libevt_8h.md#define-evt-api) uint16_t | **[evt_get_component_id](libevt_8h.md#function-evt-get-component-id)**([UID](libevt_8h.md#typedef-uid) )<br>Returns componentID part of UID.  |
| [EVT_API](libevt_8h.md#define-evt-api) long | **[evt_start_timer](libevt_8h.md#function-evt-start-timer)**(uint32_t timeout)<br>Starts a new timer.  |
| [EVT_API](libevt_8h.md#define-evt-api) void | **[evt_stop_timer](libevt_8h.md#function-evt-stop-timer)**(long handle)<br>Deletes a timer.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_init](libevt_8h.md#function-evt-init)**([EvtSide](libevt_8h.md#enum-evtside) side, uint16_t componentID, uint8_t capacity)<br>Initialize EVT library.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_destroy](libevt_8h.md#function-evt-destroy)**()<br>De-initialize EVT library.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_wait](libevt_8h.md#function-evt-wait)**([Event](struct_event.md) * event, int timeout)<br>Wait for a single event.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_wait_group](libevt_8h.md#function-evt-wait-group)**([Event](struct_event.md) * events, uint32_t count, int timeout, [WaitPolicy](libevt_8h.md#enum-waitpolicy) policy)<br>Wait for a group of events.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_raise](libevt_8h.md#function-evt-raise)**([Event](struct_event.md) * event)<br>Raise an event.  |
| [EVT_API](libevt_8h.md#define-evt-api)[WaiterHandle](libevt_8h.md#typedef-waiterhandle) | **[evt_init_waiter](libevt_8h.md#function-evt-init-waiter)**([Event](struct_event.md) * events, uint32_t count)<br>Initialize asynchronous waiter for a group of events.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_get_by_handle](libevt_8h.md#function-evt-get-by-handle)**([WaiterHandle](libevt_8h.md#typedef-waiterhandle) waiter, [Event](struct_event.md) * events, uint32_t count)<br>Get events so far collected by asynchronous waiter.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_peek_by_handle](libevt_8h.md#function-evt-peek-by-handle)**([WaiterHandle](libevt_8h.md#typedef-waiterhandle) waiter, [Event](struct_event.md) * events, uint32_t count)<br>Peek events so far collected by asynchronous waiter.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_wait_by_handle](libevt_8h.md#function-evt-wait-by-handle)**([WaiterHandle](libevt_8h.md#typedef-waiterhandle) handle, int timeout, [WaitPolicy](libevt_8h.md#enum-waitpolicy) policy)<br>Blocks thread execution until waiter receive an event or timeout occurs.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_destroy_waiter](libevt_8h.md#function-evt-destroy-waiter)**([WaiterHandle](libevt_8h.md#typedef-waiterhandle) waiter)<br>Stops and destroys the asynchronous waiter.  |
| [EVT_API](libevt_8h.md#define-evt-api) void | **[evt_set_options](libevt_8h.md#function-evt-set-options)**(int options)<br>Set options changing behavior of ADK-EVT engine.  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[evt_get_options](libevt_8h.md#function-evt-get-options)**()<br>Get options.  |
| const [EVT_API](libevt_8h.md#define-evt-api) char * | **[evt_getVersion](libevt_8h.md#function-evt-getversion)**()<br>get version of a library  |
| [EVT_API](libevt_8h.md#define-evt-api) int | **[get_dock_sts](libevt_8h.md#function-get-dock-sts)**()<br>Returns unit dock status.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const long | **[EVT_ANY_HANDLE](libevt_8h.md#variable-evt-any-handle)** <br>Timer [Event](struct_event.md) mask that allow to receive all timer events.  |
| const [WaiterHandle](libevt_8h.md#typedef-waiterhandle) | **[EVT_INVALID_HANDLE](libevt_8h.md#variable-evt-invalid-handle)** <br>Invalid WaiterHandle value.  |
| const int | **[EVT_INFINITE_WAIT](libevt_8h.md#variable-evt-infinite-wait)** <br>Timeout value for infinite wait.  |
| const uint32_t | **[EVT_DATA_SIZE](libevt_8h.md#variable-evt-data-size)** <br>Size of [Event](struct_event.md) additional data.  |
| const uint32_t | **[EVT_MAX_COUNT](libevt_8h.md#variable-evt-max-count)** <br>Maximal event count to wait for.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EVT_API](libevt_8h.md#define-evt-api)**  |

## Types Documentation

### enum OSEvents

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OS_NOP | 0|   |
| OS_EVT_TIMER | |   |
| OS_EVT_DOCK | |   |
| OS_EVT_UNDOCK | |   |
| OS_EVT_SHUTDOWN | |   |




### enum WaitPolicy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| WAIT_ANY | |   |
| WAIT_ALL | | Stop waiting if at least 1 event from group is raised.   |




Waiting policies for event groups. 


### enum EvtSide

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SIDE_RAISER | 0|   |
| SIDE_WAITER | |   |
| SIDE_BOTH | |   |




### enum EvtOptions

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EVT_OPT_DEFAULT | 0|   |
| EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC | 0x1 << 0|   |




EVT engine options 


### typedef WaiterHandle

```cpp
typedef unsigned long int WaiterHandle;
```

Waiting handle type. 

### typedef UID

```cpp
typedef uint64_t UID;
```

Unique ID of [Event](struct_event.md). 


## Functions Documentation

### function evt_make_uid

```cpp
EVT_APIUID evt_make_uid(
    uint16_t componentID,
    uint16_t eventID
)
```

Creates UID based on componentID and eventID. 

**Parameters**: 

  * **componentID** System wide component ID. 
  * **eventID** Component wide event ID. 


**Return**: [Event](struct_event.md) UID. 

UID Creation helper function for user events. 


### function evt_make_uid_os

```cpp
EVT_APIUID evt_make_uid_os(
    uint16_t componentID,
    OSEvents osEvent
)
```

Creates UID based on componentID and OS [Event](struct_event.md). 

**Parameters**: 

  * **componentID** System wide component ID. 
  * **osEvent** OS [Event](struct_event.md). 


**Return**: [Event](struct_event.md) UID. 

UID Creation helper function for OS events. 


### function evt_get_component_id

```cpp
EVT_API uint16_t evt_get_component_id(
    UID 
)
```

Returns componentID part of UID. 

**Parameters**: 

  * **UID** 


**Return**: componentID 

### function evt_start_timer

```cpp
EVT_API long evt_start_timer(
    uint32_t timeout
)
```

Starts a new timer. 

**Parameters**: 

  * **timeout** Timeout in ms. Max value is 24h (86,400,000 ms) 


**Return**: Negative: error with errno value. Non negative: timer handle. 

Schedules an event after a timeout. 


### function evt_stop_timer

```cpp
EVT_API void evt_stop_timer(
    long handle
)
```

Deletes a timer. 

**Parameters**: 

  * **handle** Timer handle acquired by [evt_start_timer()](libevt_8h.md#function-evt-start-timer). 


Stops a timer and free associated resources. 


### function evt_init

```cpp
EVT_API int evt_init(
    EvtSide side,
    uint16_t componentID,
    uint8_t capacity
)
```

Initialize EVT library. 

**Parameters**: 

  * **side** Side to be initialized. 
  * **componentID** System wide component ID. 
  * **capacity** Estimated number of unique events to be processed. 


**Return**: Negative: error with errno value. 0: Library successfully initialized. 

Creates caching structures, sets ignore to SIGPIPE signal (V/OS - raiser side). 


### function evt_destroy

```cpp
EVT_API int evt_destroy()
```

De-initialize EVT library. 

**Return**: Negative: error with errno value. 0: Library successfully de-initialized. 

Destroys caching structures, do cleanup. Make sure all waiters are stopped before this call. 


### function evt_wait

```cpp
EVT_API int evt_wait(
    Event * event,
    int timeout
)
```

Wait for a single event. 

**Parameters**: 

  * **event** An [Event](struct_event.md) to wait for. 
  * **timeout** A valid wait timeout (timeout > 0) in ms. EVT_INFINITE_WAIT - for infinite wait. 


**Return**: Negative: error with errno value. 0: [Event](struct_event.md) successfully received. Positive: ETIME - on timeout. 

Stops thread execution till 'event' is received or time specified by 'timeout' is up. 


### function evt_wait_group

```cpp
EVT_API int evt_wait_group(
    Event * events,
    uint32_t count,
    int timeout,
    WaitPolicy policy
)
```

Wait for a group of events. 

**Parameters**: 

  * **events** Array of Events to wait for. Caller is responsible to provide only unique ID. 
  * **count** Number of events represented in 'events' param. 
  * **timeout** A valid wait timeout (timeout > 0) in ms. EVT_INFINITE_WAIT - for infinite wait. 
  * **policy** WaitPolicy for event group. 


**Return**: Negative: error with errno value. 0: [Event](struct_event.md) successfully received. Positive: ETIME - on timeout. 

Stops thread execution till one or all (see 'policy') 'events' are received or time specified by 'timeout' is up. 


### function evt_raise

```cpp
EVT_API int evt_raise(
    Event * event
)
```

Raise an event. 

**Parameters**: 

  * **event** An [Event](struct_event.md) to raise. 


**Return**: Negative: error with errno value. 0: [Event](struct_event.md) successfully raised. 

Raise an event specified by 'event'. Works synchronously and returns after event is sent. 


### function evt_init_waiter

```cpp
EVT_APIWaiterHandle evt_init_waiter(
    Event * events,
    uint32_t count
)
```

Initialize asynchronous waiter for a group of events. 

**Parameters**: 

  * **events** Array of Events to wait for. Caller is responsible to provide only unique ID. 
  * **count** Number of events represented in 'events' param. 


**Return**: EVT_INVALID_HANDLE on failure or valid WaiterHandle otherwise. 

### function evt_get_by_handle

```cpp
EVT_API int evt_get_by_handle(
    WaiterHandle waiter,
    Event * events,
    uint32_t count
)
```

Get events so far collected by asynchronous waiter. 

**Parameters**: 

  * **waiter** A handle created by [evt_init_waiter()](libevt_8h.md#function-evt-init-waiter). Passing here a destroyed handle cause an undefined behavior. 
  * **events** Array of Events to fill. 
  * **count** Number of events represented in 'events' param. (Must be equal or more as passed to [evt_init_waiter()](libevt_8h.md#function-evt-init-waiter)). 


**Return**: Negative: error with errno value. 0: success but there is no raised event (since last call). Positive: returns number of raised events. Events are copied to 'events' member. 

Function returns immediately. Returns either all or only 'new' events (collected from the last call), depends from EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC compatibility option. 


### function evt_peek_by_handle

```cpp
EVT_API int evt_peek_by_handle(
    WaiterHandle waiter,
    Event * events,
    uint32_t count
)
```

Peek events so far collected by asynchronous waiter. 

**Parameters**: 

  * **waiter** A handle created by [evt_init_waiter()](libevt_8h.md#function-evt-init-waiter). Passing here a destroyed handle cause an undefined behavior. 
  * **events** Array of Events to fill. 
  * **count** Number of events represented in 'events' param. (Must be equal or more as passed to [evt_init_waiter()](libevt_8h.md#function-evt-init-waiter)). 


**Return**: Negative: error with errno value. 0: success but there is no raised event (since last call). Positive: returns number of raised events. Events are copied to 'events' member. 

Function returns immediately. Returns either all or only 'new' events, depends from EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC compatibility option. 


### function evt_wait_by_handle

```cpp
EVT_API int evt_wait_by_handle(
    WaiterHandle handle,
    int timeout,
    WaitPolicy policy
)
```

Blocks thread execution until waiter receive an event or timeout occurs. 

**Parameters**: 

  * **waiter** A handle created by [evt_init_waiter()](libevt_8h.md#function-evt-init-waiter). Passing here a destroyed handle cause an undefined behavior. 
  * **timeout** A valid wait timeout (timeout > 0) in ms. EVT_INFINITE_WAIT - for infinite wait. 
  * **policy** WaitPolicy for event group. 


**Return**: ETIME: timeout occurred 0: event received 

Function returns only if event is received or timeout occurred 


### function evt_destroy_waiter

```cpp
EVT_API int evt_destroy_waiter(
    WaiterHandle waiter
)
```

Stops and destroys the asynchronous waiter. 

**Parameters**: 

  * **waiter** A handle created by [evt_init_waiter()](libevt_8h.md#function-evt-init-waiter). Passing here already destroyed handle cause an undefined behavior. 


**Return**: Negative: error with errno value. 0: on success. 

Send waiter thread an exit signal then join the thread. 


### function evt_set_options

```cpp
EVT_API void evt_set_options(
    int options
)
```

Set options changing behavior of ADK-EVT engine. 

**Parameters**: 

  * **options** The options are coded as bitmasks and can be combined by a logical or operation. All available options are collected in EvtOptions enum. 


### function evt_get_options

```cpp
EVT_API int evt_get_options()
```

Get options. 

**Return**: the options set 

### function evt_getVersion

```cpp
const EVT_API char * evt_getVersion()
```

get version of a library 

**Return**: string with version 

### function get_dock_sts

```cpp
EVT_API int get_dock_sts()
```

Returns unit dock status. 

**Return**: 0: Unit is docked -1: Unit is undocked. 


## Attributes Documentation

### variable EVT_ANY_HANDLE

```cpp
const long EVT_ANY_HANDLE = -1;
```

Timer [Event](struct_event.md) mask that allow to receive all timer events. 

### variable EVT_INVALID_HANDLE

```cpp
const WaiterHandle EVT_INVALID_HANDLE = 0;
```

Invalid WaiterHandle value. 

### variable EVT_INFINITE_WAIT

```cpp
const int EVT_INFINITE_WAIT = -1;
```

Timeout value for infinite wait. 

### variable EVT_DATA_SIZE

```cpp
const uint32_t EVT_DATA_SIZE = 64;
```

Size of [Event](struct_event.md) additional data. 

### variable EVT_MAX_COUNT

```cpp
const uint32_t EVT_MAX_COUNT = 256;
```

Maximal event count to wait for. 


## Macros Documentation

### define EVT_API

```cpp
#define EVT_API 
```


## Source code

```cpp
#ifndef _LIBEVT_H_
#define _LIBEVT_H_

// --------------------------------------------------------------------------------------------------------------------

#include <stdint.h>

#ifndef EVT_API
#define EVT_API
#endif

// --------------------------------------------------------------------------------------------------------------------

typedef unsigned long int WaiterHandle;

const long EVT_ANY_HANDLE = -1;

const WaiterHandle EVT_INVALID_HANDLE = 0;

const int EVT_INFINITE_WAIT = -1;

typedef uint64_t UID;

const uint32_t EVT_DATA_SIZE = 64; // 64 bytes

const uint32_t EVT_MAX_COUNT = 256;
 
// --------------------------------------------------------------------------------------------------------------------

#ifdef __cplusplus
extern "C"
{
#endif

struct Event
{
    UID id;
    long handle;
    // 'raised_' attributes are set by raise side and read by wait side.
    uint64_t raised_timestamp;
    uint16_t raised_version;
    uint8_t raised_flag;
    long raised_handle;
    char raised_data[EVT_DATA_SIZE];
};


enum OSEvents
{
    OS_NOP = 0, /* non OS event */
    OS_EVT_TIMER, /* user-defined timer */
    OS_EVT_DOCK, /* unsupported event */
    OS_EVT_UNDOCK, /* unsupported event */ 
    OS_EVT_SHUTDOWN, /* unsupported event */ 
};

enum WaitPolicy
{
    WAIT_ANY, 
    WAIT_ALL, 
};

enum EvtSide
{
    SIDE_RAISER = 0,
    SIDE_WAITER,
    SIDE_BOTH
};

enum EvtOptions
{
    EVT_OPT_DEFAULT = 0,
    EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC = 0x1 << 0, // ADKEVT-161
};

// --------------------------------------------------------------------------------------------------------------------

EVT_API UID evt_make_uid(uint16_t componentID, uint16_t eventID);

EVT_API UID evt_make_uid_os(uint16_t componentID, OSEvents osEvent);

EVT_API uint16_t evt_get_component_id( UID );

EVT_API long evt_start_timer(uint32_t timeout);

EVT_API void evt_stop_timer(long handle);

EVT_API int evt_init(EvtSide side, uint16_t componentID, uint8_t capacity);

EVT_API int evt_destroy();

EVT_API int evt_wait(Event *event, int timeout);

EVT_API int evt_wait_group(Event *events, uint32_t count, int timeout, WaitPolicy policy);

EVT_API int evt_raise(Event *event);

EVT_API WaiterHandle evt_init_waiter(Event* events, uint32_t count);

EVT_API int evt_get_by_handle(WaiterHandle waiter, Event* events, uint32_t count);

EVT_API int evt_peek_by_handle(WaiterHandle waiter, Event* events, uint32_t count);

EVT_API int evt_wait_by_handle(WaiterHandle handle, int timeout, WaitPolicy policy);

EVT_API int evt_destroy_waiter(WaiterHandle waiter);

EVT_API void evt_set_options(int options);

EVT_API int evt_get_options();

EVT_API const char *evt_getVersion();

EVT_API int get_dock_sts();

#ifdef __cplusplus
} // extern C
#endif

#endif //_LIBEVT_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

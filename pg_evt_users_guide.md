---
title: ADK-EVENT Programmers Guide

---

# ADK-EVENT Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK EVENT framework.


## Audience

This guide provides detailed descriptions of the ADK EVENT framework features, with information on configuring and programming with the ADK EVENT framework, plus use cases for additional support.


## Organization

This guide is organized as follows: 

[Chapter 1, Overview]: Provides an overview of the ADK EVENT framework. 



[Chapter 2, Deployment]: Explains how to deploy ADK EVENT for VOS. 



[Chapter 3, API Overview]: Shows sample APIs for the ADK EVENT framework. 



[Chapter 4, Using ADK EVENT]: Presents common uses for ADK EVENT framework. 



[Chapter 5, Error Handling]: Supplies error handling information. 



[Chapter 6, Troubleshooting]: Gives solutions for possible issues in ADK-EVT.


## Related Documentation

To learn more about the ADK framework, please refer to the following documents: 



* SDI PINPad Interface API Programmers Guide
* ADK EMV Contact Programmers Guide
* ADK EMV Contactless Programmers Guide
* ADK GUI Programmers Guide
* ADK COM Programmers Guide
* ADK Import/Export Utility Programmers Guide
* ADK Information Service Programmers Guide
* ADK IPC Programmers Guide
* ADK LOGGING Programmers Guide
* ADK MSR Programmers Guide
* ADK Printer Programmers Guide
* ADK SEC Programmers Guide
* ADK SYS Programmers Guide
* VHQ Agent Guide


# Acronyms Definition


| Acronym  | Definitions   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Protocol Interface   |
| EVT  | [Event](struct_event.md) |
| ETIME  | Return code for timer expired (timeout)   |
| KBD  | Keyboard   |
| MAG OS  | [Event](struct_event.md) for card swipe   |
| OS  | Operating System   |
| UID  | Unique Identifier   |
| V/OS  | Verifone Operating System   |
| VPN  | Verifone Part Number   |



# Overview

This chapter presents a short introduction to the ADK EVENT framework.


## Event Model

ADK EVENT is the notification mechanism that assumes a two-sided interaction, where one side fires an event and another receives it. [Event](struct_event.md) is an entity that is passed between the sides.

The sides could be:



* Different applications (currently supported on V/OS only)
* Different threads in one application
* OS as a raiser side and the application as a waiting side (OS Events)

Each event has a unique identifier (UID) that enables the notification mechanism to recognize one event type from another. Actual event delivery is possible only when the receiving side is in a waiting state for event with the same UID.

Although the event is intended for notifications purpose only, it could be used to transfer a limited amount of data (please refer to [Event](struct_event.md) structure for additional information).

Events are divided into two groups:



* Regular events or user events - could be both raised and waited by threads or applications
* OS Events - could be only waited (OS poses as a raiser side here), therefore could not transfer data between sides and are used only for notifications

Currently KBD and MAG OS events are not supported


There are no limitations for the number of raising and waiting sides. For example, one event type could be raised in two threads and waited in three threads. In this case each from three waiting sides receives two events (one event per raiser).

Conceptually, ADK EVENT API can be depicted in the following way:

![evt_api.png](.//evt_api.png)Concept EVENT API![evt_api.png](.//evt_api.png)Concept EVENT API

There are both **synchronous** and **asynchronous** modes of using ADK EVENT. For each of these modes, the user can either wait for a single event or a group of events. Lastly, there is a **waiting policy**, which can be applied when waiting for a group of events: either wait for **any** event or all events in a group.


# Deployment

This chapter discusses basic information about libevt library deployment.


## libevt.h

[libevt.h](libevt_8h.md#file-libevt.h) - ADK EVENT API header. You do not need to add any define like `_EVT_API_IMPORT` to compile flags, since `__declspec(dllimport)` is default attribute.


## libevt library

libevt ships in two forms - as a shared object (`libevt.so`) and a static library (`libevt-static.a`).

In order for linker to resolve symbols in a correct manner, path to said libraries has to be put after a path to `libevt-static.a`.


# API Overview

This section provides API samples for the ADK EVENT framework.


## Initializing and Deinitializing the Library

The following functions are to be used for intitializing and deinitializing the library.



```cpp
int evt_init(EvtSide side, uint16_t componentID, uint8_t capacity);
int evt_destroy();
```

`[evt_init()](libevt_8h.md#function-evt-init)` can initialize the library either for the riser side, waiter side or both. Related enum: 

```cpp
enum EvtSide
{
    SIDE_RAISER = 0,
    SIDE_WAITER,
    SIDE_BOTH
};
```

ADK-EVT library's initialization is global for process: each next `[evt_init()](libevt_8h.md#function-evt-init)` function's call will either:

* reinitialize settings if "EvtSide" parameter differs, or
* just return without any effect in case when both calls contain the same "EvtSide" value. So, initial `componentID` will remain.

Please note that timer's starting is considered as timer event rising, so library should be initialized as `SIDE_BOTH` if application want to start timer and wait for timer event.
`componentID` - any unique number of `uint16_t` type.
`capacity` is a reserved parameter for hinting the library as to how many events will be processed.

The same value in `componentID` used to call `[evt_init()](libevt_8h.md#function-evt-init)` should be used for all API calls that accept this parameter. 

[Thread](class_thread.md) that calls [evt_init()](libevt_8h.md#function-evt-init) should exist while app uses ADK-EVT library.


### Event Structure

The following listing shows a definition of [Event](struct_event.md) structure:



```cpp
struct Event
{
    UID id;
    long handle;
    uint64_t raised_timestamp;
    uint16_t raised_version;
    uint8_t raised_flag;
    long raised_handle;
    char raised_data[EVT_DATA_SIZE];
}
```


## Making a UID

The [Event](struct_event.md) is identified by a unique UID, which is comprised of a Component ID (must be system-wide unique), and an [Event](struct_event.md) ID (must be component-wide unique on a per-event basis).

UID is not the only thing that makes OS events unique. Every OS event denotes some kind of hardware device (e.g. MSR, COM), so in the case of OS events, `[Event.handle](struct_event.md#variable-handle)` must be set to [Valid File Descriptors for `Event`.handle].


Before waiting for an event, UIDs have to be assigned to [Event](struct_event.md) structures. The user is responsible for providing IDs according to these rules of uniqueness. This is a common preparation step for both raising and waiting sides. There are two types of events and thus two distinct functions for making UIDs:



```cpp
UID evt_make_uid(uint16_t componentID, uint16_t eventID);
UID evt_make_uid_os(uint16_t componentID, OSEvents_t osEvent);
```

There is an enum defined in a main header `[libevt.h](libevt_8h.md#file-libevt.h)`, which contains a list of OS Events.

It is crucial that a user provides `[evt_make_uid()](libevt_8h.md#function-evt-make-uid)` and `[evt_make_uid_os()](libevt_8h.md#function-evt-make-uid-os)` functions to the very same Component ID used in a call to `[evt_init()](libevt_8h.md#function-evt-init)`.


### OS events list



```cpp
enum OSEvents
{
    OS_NOP = 0, /* non OS event */
    OS_EVT_TIMER, /* user-defined timer */
    OS_EVT_DOCK, /* terminal is docked */
    OS_EVT_UNDOCK, /* terminal is undocked */
    OS_EVT_SHUTDOWN, /* terminal is going to halt */
};
```

`OS_NOP` isn't OS event. It specified here as `"0"` for the internal ADK-EVENT needs.


### Valid File Descriptors for Event.handle



```cpp
//open some random file
int fd = open("/tmp/wait_os_handle_evt", O_RDONLY | O_NONBLOCK);
Event event;
memset(&event, 0, sizeof(event));
const int COMPONENT_ID = 2;
event.id = evt_make_uid_os(COMPONENT_ID, OS_EVT_PIPE);
event.handle = fd;
```

 For the VOS platform, any OS event enum starting from `OS_EVT_KBD` can be used in code snippet above: we just have to create OS type's `id`.

OS events starting from `OS_EVT_KBD` to `OS_EVT_USB` actually are not supported on VOS platform.

Another this type event usage example: [Waiting for communication event]


## Waiting for an Event

ADK EVENT can operate either synchronously or asynchronously. From the API perspective, it means that there are two sets of wait functions:


### Synchronous



```cpp
int evt_wait(Event *event, int timeout);
int evt_wait_group(Event *events, uint32_t count, int timeout, WaitPolicy policy);
```

`[evt_wait()](libevt_8h.md#function-evt-wait)` is pretty self-explanatory: It takes a filled event structure and a timeout as parameters. `[evt_wait_group()](libevt_8h.md#function-evt-wait-group)` takes an array of [Event](struct_event.md) structures, a size of the array, a timeout and a policy, which could be either `WAIT_ANY` or `WAIT_ALL`.


### Asynchronous



```cpp
WaiterHandle evt_init_waiter(Event *events, uint32_t count);
int evt_get_by_handle(WaiterHandle waiter, Event* events, uint32_t count);
int evt_peek_by_handle(WaiterHandle waiter, Event* events, uint32_t count);
int evt_wait_by_handle(WaiterHandle waiter, int timeout, WaitPolicy policy);
int evt_destroy_waiter(WaiterHandle waiter);
```

The `[evt_init_waiter()](libevt_8h.md#function-evt-init-waiter)` function creates a separate thread, which will wait either for one event or a group of events. This function is non-blocking (the caller will be immediately returned a handle), which can later be passed to `[evt_wait_by_handle()](libevt_8h.md#function-evt-wait-by-handle), [evt_get_by_handle()](libevt_8h.md#function-evt-get-by-handle)` or `[evt_peek_by_handle()](libevt_8h.md#function-evt-peek-by-handle)`.



* `[evt_wait_by_handle()](libevt_8h.md#function-evt-wait-by-handle)` blocks thread execution until waiter receives an event or timeout occurs.
* `[evt_get_by_handle()](libevt_8h.md#function-evt-get-by-handle)` is a non-blocking function that returns events collected by async waiter and unmarks them.
* `[evt_peek_by_handle()](libevt_8h.md#function-evt-peek-by-handle)` is a non-blocking function that returns events collected by async waiter and leaves them marked.


### Events count limitation

There is limitation for events count that can be passed to `evt_wait_group`, `evt_init_waiter` and other functions. Defined in `[libevt.h](libevt_8h.md#file-libevt.h)` header: 

```cpp
const uint32_t EVT_MAX_COUNT = 256;
```

 For the `[evt_wait_by_handle()](libevt_8h.md#function-evt-wait-by-handle), [evt_get_by_handle()](libevt_8h.md#function-evt-get-by-handle)` and `[evt_peek_by_handle()](libevt_8h.md#function-evt-peek-by-handle)` functions, count of events should be equal or greater than specified in `[evt_init_waiter()](libevt_8h.md#function-evt-init-waiter)` function, since the events are copied from the internal events array of waiter object.


### Raising an Event

`int`[evt_raise(Event *event)](libevt_8h.md#function-evt-raise);

`[evt_raise()](libevt_8h.md#function-evt-raise)` is used to raise an event.


### Timers

`long`[evt_start_timer(uint32_t timeout)](libevt_8h.md#function-evt-start-timer);

`void`[evt_stop_timer(long handle)](libevt_8h.md#function-evt-stop-timer);

`[evt_start_timer()](libevt_8h.md#function-evt-start-timer)` is a special function for obtaining a handle to a timer as timers are not ''real'' devices, so a user cannot `open()` it, and obtains a file descriptor. The Handle, obtained from a call to `[evt_start_timer()](libevt_8h.md#function-evt-start-timer)`, must be assigned to [Event.handle](struct_event.md#variable-handle). Please refer to the example with the OS event in [Making a UID].

There is also a special case related to timer handles: if `[Event.handle](struct_event.md#variable-handle)` is set to `EVT_ANY_HANDLE`, then the first timer event to expire will be raised.


# Using ADK EVENT

This section covers the most popular use cases of the ADK EVENT framework.


## Permanent asynchronous waiter in thread

One of the ADK EVENT common use-cases is a permanent thread intended to process events. Waiter created only once. Events are processed in a endless loop. This approach allows you not to miss a single event from other thread.



```cpp
{
    const int EVENT_COUNT = 2;

    Event events[EVENT_COUNT];
    memset(events, 0, sizeof(Event) * EVENT_COUNT);

    events[0].id = evt_make_uid(COMPONENTID_ID, FIRST_EVENT);
    events[1].id = evt_make_uid(COMPONENTID_ID, SECOND_EVENT);

    WaiterHandle hdl = evt_init_waiter(events, EVENT_COUNT);

    Event received[EVENT_COUNT];
    memset(received, 0, sizeof(Event) * EVENT_COUNT);

    while (1)
    {
        evt_wait_by_handle(hdl, EVT_INFINITE_WAIT, WAIT_ANY);
        if (exit)
            break;

        int res = evt_get_by_handle(hdl, received, EVENT_COUNT);

        for (int j = 0; j < EVENT_COUNT; j++)
        {
            if (received[j].raised_flag == 1)
            {
                // Process raised event
                ...
            }
        }
    }
    evt_destroy_waiter(hdl);
}
```


## Waiting for Timer Event(s)

Use the following API to implement Wait for Timer [Event(s)](struct_event.md) in ADK EVENT.


### Synchronous



```cpp
Event event;
//structure contains garbage
memset(&event, 0, sizeof(event));
event.id = evt_make_uid_os(1, OS_EVT_TIMER);
//start timer for 25 seconds
long handle1 = evt_start_timer(25000);
// will block for 25 seconds
int res = evt_wait(&event, 40000);
//0 means no error
if(res == 0)
{
if(event.raised_handle == handle1)
printf("Success\n");
}
```


### Asynchronous

This method involves the usage of two framing functions `evt_init_waiter` and `evt_destroy_waiter`.

Please remember to call purge function `evt_destroy_waiter` when events are not needed anymore. 

```cpp
Event events[2];
memset(events, 0, sizeof(events));
event[0].id = evt_make_uid_os(1, OS_EVT_TIMER);
event[1].id = evt_make_uid_os(1, OS_EVT_TIMER);
event[0].handle = evt_start_timer(10000); //10 sec
event[1].handle = evt_start_timer(25000); //25 sec
//will exit immediately
WaiterHandle waiter = evt_init_waiter(events, 2);
printf("Initialized waiter");
someProcessingFunction();
//now we decide to wait (blocking)
//note that EVT_INFINITE_WAIT is passed as a timeout
//this means that we will for the maximum timeout (25 sec)
//WAIT_ANY that first raised event will stop waiting call
int res = evt_wait_by_handle(waiter, EVT_INFINITE_WAIT, WAIT_ALL);
if(res == 0)
{
printf("Event received");
//now we peek event information ( events are left raised )
res = evt_peek_by_handle(waiter, events, 2);
if(res > 0)
{
if(events[0].raised_flag == 1 && events[1].raised_flag == 1)
printf("Success\n");
}
//now we get event information ( events are unmarked )
res = evt_get_by_handle(waiter, events, 2);
if(res > 0)
{
if(events[0].raised_flag == 1 && events[1].raised_flag == 1)
printf("Success\n");
}
}
//Destroy waiter after events are not needed anymore
evt_destroy_waiter(waiter);
```


## Waiting for Any Timer Event to Occur

This section is specific to timer events only. It allows waiting for timers globally (component-wise) without modifying the [Event](struct_event.md) structure every time a new timer is started. In this case you specify not a handle, but a mask - EVT_ANY_HANDLE.



```cpp
Event event;
//structure contains garbage
memset(&event, 0, sizeof(event));
event.id = evt_make_uid_os(1, OS_EVT_TIMER);
//NOTE that we use EVT_ANY_HANDLE for a handle
event.handle = EVT_ANY_HANDLE;
int hdl_10s = evt_start_timer(10000); //10sec
int hdl_3s = evt_start_timer(3000); //3sec
//NOTE that we do not assign any of the handles to event.handle
// will block for 3 seconds first
int res = evt_wait(&event, 40000);
if(res == 0)
//should print equal handles
printf("3 sec handle: %d, fired handle: %d\n", hdl_3s,
event.raised_handle);
// will block for approx. 7 seconds now
res = evt_wait(&event, 40000);
if(res == 0)
//should print equal handles
printf("10 sec handle: %d, fired handle: %d\n", hdl_10s,
event.raised_handle);
```

VOS/VOS2 only: supported wait for multiple events with mask handles - just pass two or more events with mask to wait function. In this case first timer event will not be overwritten by next timer event.


## Waiting for communication event

This code snippet demonstrates ADK-COM and ADK-EVENT components usage for OS communication signal handling.

For the VOS platform, any OS event enum, starting from `OS_EVT_KBD` can be used: we just have to create OS type id.



```cpp
com_ConnectHandle *handle = com_Connect(stIntData.tcpProfileFile, NULL, NULL, 60000, &com_errno);
if(handle)
{
    // ---------------Event part start---------------
    inComHandle = com_ConnectGetFD(handle, &com_errno);
    LOGF_TRACE("inComHandle: %d com_errno: %d", inComHandle, com_errno);

    memset(&event, 0, sizeof(event));
    event.id = evt_make_uid_os(COMPONENT_ID, OS_EVT_COM1);
    event.handle = (long)inComHandle;  //assign com1 handle to event's handle
    inRet = evt_wait(&event, 30000);
    // ---------------Event part end---------------

    LOGF_TRACE("--------Results--------");
    LOGF_TRACE("evt_wait() returned :%d", inRet);
    LOGF_TRACE("raised_handle: %d, should be equal to port handle [%d]", (int) event.raised_handle, inComHandle);
    LOGF_TRACE("raised_flag: %d", event.raised_flag);
    inRet = com_Receive(handle, szReceivedData, sizeof(szReceivedData), &com_errno);
    if(inRet > 0)
    {
        szReceivedData[sizeof(szReceivedData)-1] = 0;
        LOGF_TRACE("received rc: %d, %s", inRet, szReceivedData);
    }
}
```


# Error Handling

This section presents the error handling functions in ADK EVENT.


## ADK EVENT Error Handling

Each API function returns an `int`. There are three return ranges: Errors are negative, OK is zero, other cases (such as a timeout) are positive.



* Negative value indicates a stop, assert-like error (out of memory or file handles, invalid input parameters, etc.). Error codes match `errno` values, but with a negative sign. So, `-22` code value will mean EINVAL. 

```cpp
#define EINVAL      22  /* Invalid argument */
```

* Zero value indicates successful return.
* Positive value indicates a successful return. Value provides more information about return condition (for more info, see description of a concrete function).

Example: `[evt_wait()](libevt_8h.md#function-evt-wait)` could return an `ETIME` in case of timeout as a successful business result.


# Troubleshooting


## Logging

ADK-EVT uses "new" logging method via configuration file in JSON format. Please refer to the ADK-LOG documentation for details.

The logging ID for this component is **"EVT"**.

ADK-EVT uses only two logging level:

* LOGAPI_ERROR for error messages, and
* LOGAPI_WARNING for all other messages. 

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100

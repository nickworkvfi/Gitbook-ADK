---
title: adk_evt_programmers_guide.dox
summary: ADK Event Programmers Guide. 

---

# adk_evt_programmers_guide.dox

ADK [Event](struct_event.md) Programmers Guide.  [More...](#detailed-description)

## Detailed Description

ADK [Event](struct_event.md) Programmers Guide. 

**Date**: Thu Feb 14 14:55:07 2019


This page contains information about the ADK [Event](struct_event.md) architecture and design. 




## Source code

```cpp

    OS_EVT_TIMER, /* user-defined timer */
    OS_EVT_DOCK, /* terminal is docked */
    OS_EVT_UNDOCK, /* terminal is undocked */
    OS_EVT_SHUTDOWN, /* terminal is going to halt */
};
\endcode

\c OS_NOP isn't OS event. It specified here as \c "0" for the internal ADK-EVENT needs.


\subsubsection subsubsec_evt_filedescriptorseventhandle Valid File Descriptors for Event.handle


\code
//open some random file
int fd = open("/tmp/wait_os_handle_evt", O_RDONLY | O_NONBLOCK);
Event event;
memset(&event, 0, sizeof(event));
const int COMPONENT_ID = 2;
event.id = evt_make_uid_os(COMPONENT_ID, OS_EVT_PIPE);
event.handle = fd;
\endcode
For the VOS platform, any OS event enum starting from \c OS_EVT_KBD can be used in code snippet above: we just have to create OS type's \c id.\n
OS events starting from \c OS_EVT_KBD to \c OS_EVT_USB actually are not supported on VOS platform.\n
Another this type event usage example: \ref subsec_evt_waitingforCOMeventtooccur "Waiting for communication event"


\subsection subsec_evt_waitingforanevent Waiting for an Event

ADK EVENT can operate either synchronously or asynchronously. From the API
perspective, it means that there are two sets of wait functions:

\subsubsection subsubsec_evt_waitingforanevent_synchronous Synchronous


\code
int evt_wait(Event *event, int timeout);
int evt_wait_group(Event *events, uint32_t count, int timeout, WaitPolicy policy);
\endcode

\c evt_wait() is pretty self-explanatory: It takes a filled event structure and a
timeout as parameters. \c evt_wait_group() takes an array of Event structures,
a size of the array, a timeout and a policy, which could be either \c WAIT_ANY or
\c WAIT_ALL.


\subsubsection subsubsec_evt_waitingforanevent_asynchronous Asynchronous

\code
WaiterHandle evt_init_waiter(Event *events, uint32_t count);
int evt_get_by_handle(WaiterHandle waiter, Event* events, uint32_t count);
int evt_peek_by_handle(WaiterHandle waiter, Event* events, uint32_t count);
int evt_wait_by_handle(WaiterHandle waiter, int timeout, WaitPolicy policy);
int evt_destroy_waiter(WaiterHandle waiter);
\endcode

The \c evt_init_waiter() function creates a separate thread, which will wait
either for one event or a group of events. This function is non-blocking (the caller
will be immediately returned a handle), which can later be passed to
<c> evt_wait_by_handle(), evt_get_by_handle()</c> or \c evt_peek_by_handle().

+ \c evt_wait_by_handle() blocks thread execution until waiter receives an event
    or timeout occurs.
+ \c evt_get_by_handle() is a non-blocking function that returns events collected
    by async waiter and unmarks them.
+ \c evt_peek_by_handle() is a non-blocking function that returns events collected
    by async waiter and leaves them marked.


\subsubsection subsubsec_evt_eventscountlimitation Events count limitation
There is limitation for events count that can be passed to \c evt_wait_group, \c evt_init_waiter and other functions.
Defined in \c libevt.h header:
\code
const uint32_t EVT_MAX_COUNT = 256;
\endcode
For the
<c> evt_wait_by_handle(), evt_get_by_handle()</c> and \c evt_peek_by_handle()
functions, count of events should be equal or greater than specified in \c evt_init_waiter() function, since the events are copied from the internal events array of waiter object.


\subsubsection subsubsec_evt_raisinganevent Raising an Event

\c int evt_raise(Event *event);

\c evt_raise() is used to raise an event.

\subsubsection subsubsec_evt_timers Timers

\c long evt_start_timer(uint32_t timeout);

\c void evt_stop_timer(long handle);

\c evt_start_timer() is a special function for obtaining a handle to a timer as
timers are not ''real'' devices, so a user cannot \c open() it, and obtains a file
descriptor. The Handle, obtained from a call to \c evt_start_timer(), must be
assigned to Event.handle. Please refer to the example with the OS event in \ref subsec_evt_makingauid.

There is also a special case related to timer handles: if \c Event.handle is set to
\c EVT_ANY_HANDLE, then the first timer event to expire will be raised.

\section sec_evt_usingadkevent Using ADK EVENT

This section covers the most popular use cases of the ADK EVENT framework.

\subsection subsec_evt_permasyncwaiterthread Permanent asynchronous waiter in thread
One of the ADK EVENT common use-cases is a permanent thread intended to process events. Waiter created
only once. Events are processed in a endless loop. This approach allows you not to miss a single event
from other thread.

\code
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
\endcode

\subsection subsec_evt_waitingfortimerevents Waiting for Timer Event(s)

Use the following API to implement Wait for Timer Event(s) in ADK EVENT.

\subsubsection subsubsec_evt_waitingfortimerevents_synchronous Synchronous

\code
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
\endcode


\subsubsection subsubsec_evt_waitingfortimerevents_asynchronous Asynchronous
This method involves the usage of two framing functions \c evt_init_waiter and \c evt_destroy_waiter.\n
Please remember to call purge function \c evt_destroy_waiter when events are not needed anymore.
\code
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
\endcode

\subsection subsec_evt_waitingforanytimereventtooccur Waiting for Any Timer Event to Occur

This section is specific to timer events only. It allows waiting for timers globally
(component-wise) without modifying the Event structure every time a new timer is
started. In this case you specify not a handle, but a mask - EVT_ANY_HANDLE.

\code
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
\endcode

\note VOS/VOS2 only: supported wait for multiple events with mask handles - just pass two or more events with mask to wait function.
In this case first timer event will not be overwritten by next timer event.


\subsection subsec_evt_waitingforCOMeventtooccur Waiting for communication event

This code snippet demonstrates ADK-COM and ADK-EVENT components usage for OS communication signal handling.\n
For the VOS platform, any OS event enum, starting from \c OS_EVT_KBD can be used: we just have to create OS type id.

\code
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
\endcode

\section sec_evt_errorhandling Error Handling

This section presents the error handling functions in ADK EVENT.

\subsection subsec_evt_adkeventerrorhandling ADK EVENT Error Handling

Each API function returns an \c int. There are three return ranges: Errors are
negative, OK is zero, other cases (such as a timeout) are positive.

+ Negative value indicates a stop, assert-like error (out of memory or file
  handles, invalid input parameters, etc.). Error codes match \c errno values, but
  with a negative sign. So, \c -22 code value will mean EINVAL.
\code
#define EINVAL      22  /* Invalid argument */
\endcode

+ Zero value indicates successful return.
+ Positive value indicates a successful return. Value provides more information
  about return condition (for more info, see description of a concrete function).

Example: \c evt_wait() could return an \c ETIME in case of timeout as a successful
business result.


\section sec_evt_Troubleshooting Troubleshooting
\subsection subsec_evt_Logging Logging
ADK-EVT uses "new" logging method via configuration file in JSON format.
Please refer to the ADK-LOG documentation for details.\n
The logging ID for this component is \b "EVT".\n
ADK-EVT uses only two logging level:
- LOGAPI_ERROR for error messages, and
- LOGAPI_WARNING for all other messages.


*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100

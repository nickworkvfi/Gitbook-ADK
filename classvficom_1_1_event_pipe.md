---
title: vficom::EventPipe

---

# vficom::EventPipe






`#include <libcom3.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[EventPipe](classvficom_1_1_event_pipe.md#function-eventpipe)**([event::EventType](namespacevficom_1_1event.md#enum-eventtype) type) |
| | **[~EventPipe](classvficom_1_1_event_pipe.md#function-~eventpipe)**() |
| | **[EventPipe](classvficom_1_1_event_pipe.md#function-eventpipe)**(const [EventPipe](classvficom_1_1_event_pipe.md) & eventPipe) |
| void | **[operator=](classvficom_1_1_event_pipe.md#function-operator=)**(const [EventPipe](classvficom_1_1_event_pipe.md) & eventPipe) |
| enum [status::PipeStatus](namespacevficom_1_1status.md#enum-pipestatus) | **[recv](classvficom_1_1_event_pipe.md#function-recv)**([vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & out, [Milliseconds](classvficom_1_1_milliseconds.md) millis) |
| enum [status::PipeStatus](namespacevficom_1_1status.md#enum-pipestatus) | **[recv](classvficom_1_1_event_pipe.md#function-recv)**([vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & out, [Milliseconds](classvficom_1_1_milliseconds.md) millis, int interruptFD) |

## Public Functions Documentation

### function EventPipe

```cpp
EventPipe(
    event::EventType type
)
```


### function ~EventPipe

```cpp
~EventPipe()
```


### function EventPipe

```cpp
EventPipe(
    const EventPipe & eventPipe
)
```


### function operator=

```cpp
void operator=(
    const EventPipe & eventPipe
)
```


### function recv

```cpp
enum status::PipeStatus recv(
    vfiipc::JSObject & out,
    Milliseconds millis
)
```


**Parameters**: 

  * **out** Response. Will be changed only if return is OK 
  * **millis** [Milliseconds](classvficom_1_1_milliseconds.md) to wait for an event 


**Return**: OK in case of success, else failure code 

Read the next event If the message is interrupted (return code is ERR_USER_INTERRUPT or ERR_TIMEOUT) the [EventPipe](classvficom_1_1_event_pipe.md) is still valid and can be used again.


### function recv

```cpp
enum status::PipeStatus recv(
    vfiipc::JSObject & out,
    Milliseconds millis,
    int interruptFD
)
```


**Parameters**: 

  * **out** Response. Will be changed only if return is OK 
  * **millis** [Milliseconds](classvficom_1_1_milliseconds.md) to wait for an event 
  * **interruptFD** FD to listen for activity. Once activity is detected the function will return with error code ERR_USER_INTERRUPT 


**Return**: OK in case of success, else failure code 

Read the next event If the message is interrupted (return code is ERR_USER_INTERRUPT or ERR_TIMEOUT) the [EventPipe](classvficom_1_1_event_pipe.md) is still valid and can be used again.


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
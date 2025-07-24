---
hidden: true
title: EventPipe Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="libcom3_8h_source.md">libcom3.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [EventPipe](#a18ddfc439046ae3793208e6b2520ca9b) (<a href="namespacevficom_1_1event.md#a2628ea8d12e8b2563c32f05dc7fff6fa">event::EventType</a> type) |
|   | [\~EventPipe](#a244e12b8373d2f228d54fbcc942daece) () |
|   | [EventPipe](#a68974657c4a131a81db2e29ae416a24f) (const <a href="classvficom_1_1_event_pipe.md">EventPipe</a> &eventPipe) |
| void  | [operator=](#a4a5963207604cca0a65ca12ce98bc353) (const <a href="classvficom_1_1_event_pipe.md">EventPipe</a> &eventPipe) |
| enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a>  | [recv](#af780052cc93b5836bc71741f5de5462e) (<a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &out, <a href="classvficom_1_1_milliseconds.md">Milliseconds</a> millis) |
| enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a>  | [recv](#a3e0a5b1a00813716cb5ca6d033c8b9ec) (<a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &out, <a href="classvficom_1_1_milliseconds.md">Milliseconds</a> millis, int interruptFD) |

## Constructor& Destructor Documentation

## EventPipe()\[1/2\] <a href="#a18ddfc439046ae3793208e6b2520ca9b" id="a18ddfc439046ae3793208e6b2520ca9b"></a> {#eventpipe-12}

<p><a href="classvficom_1_1_event_pipe.md">EventPipe</a></p>

## \~EventPipe() <a href="#a244e12b8373d2f228d54fbcc942daece" id="a244e12b8373d2f228d54fbcc942daece"></a>

<p>\~<a href="classvficom_1_1_event_pipe.md">EventPipe</a></p>

## EventPipe()\[2/2\] <a href="#a68974657c4a131a81db2e29ae416a24f" id="a68974657c4a131a81db2e29ae416a24f"></a> {#eventpipe-22}

<p><a href="classvficom_1_1_event_pipe.md">EventPipe</a></p>

## MemberFunction Documentation {#member-function-documentation}

## operator=() <a href="#a4a5963207604cca0a65ca12ce98bc353" id="a4a5963207604cca0a65ca12ce98bc353"></a>

<p>void operator=</p>

## recv()\[1/2\] <a href="#af780052cc93b5836bc71741f5de5462e" id="af780052cc93b5836bc71741f5de5462e"></a> {#recv-12}

<p>enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a> recv</p>

Read the next event If the message is interrupted (return code is ERR_USER_INTERRUPT or ERR_TIMEOUT) the <a href="classvficom_1_1_event_pipe.md">EventPipe</a> is still valid and can be used again.

**Parameters**

\[out\] **out** Response. Will be changed only if return is OK \[in\] **millis** Milliseconds to wait for an event

### Returns

OK in case of success, else failure code

## recv()\[2/2\] <a href="#a3e0a5b1a00813716cb5ca6d033c8b9ec" id="a3e0a5b1a00813716cb5ca6d033c8b9ec"></a> {#recv-22}

<p>enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a> recv</p>

Read the next event If the message is interrupted (return code is ERR_USER_INTERRUPT or ERR_TIMEOUT) the <a href="classvficom_1_1_event_pipe.md">EventPipe</a> is still valid and can be used again.

**Parameters**

\[out\] **out** Response. Will be changed only if return is OK \[in\] **millis** Milliseconds to wait for an event \[in\] **interruptFD** FD to listen for activity. Once activity is detected the function will return with error code ERR_USER_INTERRUPT

### Returns

OK in case of success, else failure code

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- com/src/<a href="libcom3_8h_source.md">libcom3.h</a>

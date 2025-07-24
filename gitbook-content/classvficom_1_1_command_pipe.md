---
hidden: true
title: CommandPipe Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="libcom3_8h_source.md">libcom3.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [CommandPipe](#a34dde696be1c0b7b4eb6e5c79e5d7817) () |
| virtual  | [\~CommandPipe](#a3b4292ebc2730b0df19561c901d25c97) () |
| enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a>  | [sendRecv](#a8a411cbbd1b2731cf83b8d5a688e5f9a) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &in, <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &out, <a href="classvficom_1_1_milliseconds.md">Milliseconds</a> millis) |
| enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a>  | [sendRecv](#a9872da84dfef2c69c0e6fe4fd2e0f221) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &in, <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &out, <a href="classvficom_1_1_milliseconds.md">Milliseconds</a> millis, int interruptFD) |

## Constructor& Destructor Documentation

## CommandPipe() <a href="#a34dde696be1c0b7b4eb6e5c79e5d7817" id="a34dde696be1c0b7b4eb6e5c79e5d7817"></a>

<p><a href="classvficom_1_1_command_pipe.md">CommandPipe</a></p>

## \~CommandPipe() <a href="#a3b4292ebc2730b0df19561c901d25c97" id="a3b4292ebc2730b0df19561c901d25c97"></a>

<p>virtual \~<a href="classvficom_1_1_command_pipe.md">CommandPipe</a></p>

virtual

## MemberFunction Documentation {#member-function-documentation}

## sendRecv()\[1/2\] <a href="#a8a411cbbd1b2731cf83b8d5a688e5f9a" id="a8a411cbbd1b2731cf83b8d5a688e5f9a"></a> {#sendrecv-12}

<p>enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a> sendRecv</p>

Write a message to the ADKCOM service and receive a response. If the message is interrupted (meaning return code is not OK) the <a href="classvficom_1_1_command_pipe.md">CommandPipe</a> is invalid and should be destroyed.

**Parameters**

\[in\] **in** Command to send (See ADKCOM Programmers Guide) \[out\] **out** Response. Will be changed only if return is OK \[in\] **millis** Milliseconds to wait for a response

### Returns

OK in case of success, else failure code

## sendRecv()\[2/2\] <a href="#a9872da84dfef2c69c0e6fe4fd2e0f221" id="a9872da84dfef2c69c0e6fe4fd2e0f221"></a> {#sendrecv-22}

<p>enum <a href="namespacevficom_1_1status.md#ae7ba2f563df916ce3ce6be92a19d2bbc">status::PipeStatus</a> sendRecv</p>

Write a message to the ADKCOM service and receive a response. If the message is interrupted (meaning return code is not OK) the <a href="classvficom_1_1_command_pipe.md">CommandPipe</a> is invalid and MUST be destroyed.

**Parameters**

\[in\] **in** Command to send (See ADKCOM Programmers Guide) \[out\] **out** Response. Will be changed only if return is OK \[in\] **millis** Milliseconds to wait for a response \[in\] **interruptFD** FD to listen for activity. Once activity is detected the function will return with error code ERR_USER_INTERRUPT.

### Returns

OK in case of success, else failure code

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- com/src/<a href="libcom3_8h_source.md">libcom3.h</a>

---
title: vficom::CommandPipe

---

# vficom::CommandPipe






`#include <libcom3.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CommandPipe](classvficom_1_1_command_pipe.md#function-commandpipe)**() |
| virtual | **[~CommandPipe](classvficom_1_1_command_pipe.md#function-~commandpipe)**() |
| enum [status::PipeStatus](namespacevficom_1_1status.md#enum-pipestatus) | **[sendRecv](classvficom_1_1_command_pipe.md#function-sendrecv)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & in, [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & out, [Milliseconds](classvficom_1_1_milliseconds.md) millis) |
| enum [status::PipeStatus](namespacevficom_1_1status.md#enum-pipestatus) | **[sendRecv](classvficom_1_1_command_pipe.md#function-sendrecv)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & in, [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & out, [Milliseconds](classvficom_1_1_milliseconds.md) millis, int interruptFD) |

## Public Functions Documentation

### function CommandPipe

```cpp
CommandPipe()
```


### function ~CommandPipe

```cpp
virtual ~CommandPipe()
```


### function sendRecv

```cpp
enum status::PipeStatus sendRecv(
    const vfiipc::JSObject & in,
    vfiipc::JSObject & out,
    Milliseconds millis
)
```


**Parameters**: 

  * **in** Command to send (See ADKCOM Programmers Guide) 
  * **out** Response. Will be changed only if return is OK 
  * **millis** [Milliseconds](classvficom_1_1_milliseconds.md) to wait for a response 


**Return**: OK in case of success, else failure code 

Write a message to the ADKCOM service and receive a response. If the message is interrupted (meaning return code is not OK) the [CommandPipe](classvficom_1_1_command_pipe.md) is invalid and should be destroyed.


### function sendRecv

```cpp
enum status::PipeStatus sendRecv(
    const vfiipc::JSObject & in,
    vfiipc::JSObject & out,
    Milliseconds millis,
    int interruptFD
)
```


**Parameters**: 

  * **in** Command to send (See ADKCOM Programmers Guide) 
  * **out** Response. Will be changed only if return is OK 
  * **millis** [Milliseconds](classvficom_1_1_milliseconds.md) to wait for a response 
  * **interruptFD** FD to listen for activity. Once activity is detected the function will return with error code ERR_USER_INTERRUPT. 


**Return**: OK in case of success, else failure code 

Write a message to the ADKCOM service and receive a response. If the message is interrupted (meaning return code is not OK) the [CommandPipe](classvficom_1_1_command_pipe.md) is invalid and MUST be destroyed.


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
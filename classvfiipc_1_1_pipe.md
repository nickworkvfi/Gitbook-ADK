---
title: vfiipc::Pipe

---

# vfiipc::Pipe



 [More...](#detailed-description)


`#include <ipc.h>`

Inherits from [IPC](classvfiipc_1_1_i_p_c.md)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PipeConfig](classvfiipc_1_1_pipe.md#enum-pipeconfig)** { PC_None =0, PC_EnableCredentials =1} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Pipe](classvfiipc_1_1_pipe.md#function-pipe)**() |
| | **[Pipe](classvfiipc_1_1_pipe.md#function-pipe)**(int config) |
| | **[~Pipe](classvfiipc_1_1_pipe.md#function-~pipe)**() |
| bool | **[connect](classvfiipc_1_1_pipe.md#function-connect)**(const char * pipe) |
| bool | **[listen](classvfiipc_1_1_pipe.md#function-listen)**(const char * pipe) |
| virtual [IPC](classvfiipc_1_1_i_p_c.md) * | **[accept](classvfiipc_1_1_pipe.md#function-accept)**(int timeout_msec =-1) |
| virtual void | **[close](classvfiipc_1_1_pipe.md#function-close)**() |

## Additional inherited members

**Public Functions inherited from [IPC](classvfiipc_1_1_i_p_c.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~IPC](classvfiipc_1_1_i_p_c.md#function-~ipc)**() |
| virtual bool | **[eof](classvfiipc_1_1_i_p_c.md#function-eof)**() |
| virtual bool | **[error](classvfiipc_1_1_i_p_c.md#function-error)**() |
| virtual bool | **[write](classvfiipc_1_1_i_p_c.md#function-write)**(const void * data, int size) |
| virtual int | **[read](classvfiipc_1_1_i_p_c.md#function-read)**(void * data, int maxsize, int timeout_msec, int timeout_msec2) |
| virtual int | **[read](classvfiipc_1_1_i_p_c.md#function-read)**(void * data, int maxsize, int timeout_msec =-1) |
| int | **[peek](classvfiipc_1_1_i_p_c.md#function-peek)**(void * data, int maxsize, int timeout_msec =-1) |
| virtual bool | **[write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)**(unsigned prefix, int msg_id, const void * msg, int size) |
| virtual bool | **[write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)**(unsigned prefix, int msg_id, const std::vector< unsigned char > & msg) |
| virtual bool | **[write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)**(unsigned prefix, int msg_id, const std::vector< char > & msg) |
| virtual bool | **[read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)**(unsigned prefix, int & msg_id, std::vector< unsigned char > & msg, int size_limit, int timeout_msec =-1) |
| virtual bool | **[read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)**(unsigned prefix, int & msg_id, std::vector< char > & msg, int size_limit, int timeout_msec =-1) |
| virtual bool | **[poll_in](classvfiipc_1_1_i_p_c.md#function-poll-in)**(int timeout_msec =-1) |
| virtual const char * | **[remote_addr](classvfiipc_1_1_i_p_c.md#function-remote-addr)**() const |
| int | **[getFD](classvfiipc_1_1_i_p_c.md#function-getfd)**() const |
| virtual bool | **[set_callback](classvfiipc_1_1_i_p_c.md#function-set-callback)**([ipcCallback](namespacevfiipc.md#typedef-ipccallback) cb, void * data =0) |
| virtual bool | **[write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)**(unsigned prefix, int msg_id, const std::string & msg) |
| virtual bool | **[read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)**(unsigned prefix, int & msg_id, std::string & msg, int size_limit, int timeout_msec =-1) |
| virtual bool | **[is_server](classvfiipc_1_1_i_p_c.md#function-is-server)**() |
| virtual const char * | **[local_addr](classvfiipc_1_1_i_p_c.md#function-local-addr)**() const |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) void | **[set_callback_stacksize](classvfiipc_1_1_i_p_c.md#function-set-callback-stacksize)**(int size =-1) |
| const char * | **[getVersion](classvfiipc_1_1_i_p_c.md#function-getversion)**() |
| const char * | **[ipc_GetVersion](classvfiipc_1_1_i_p_c.md#function-ipc-getversion)**() |

**Protected Functions inherited from [IPC](classvfiipc_1_1_i_p_c.md)**

|                | Name           |
| -------------- | -------------- |
| | **[IPC](classvfiipc_1_1_i_p_c.md#function-ipc)**(IpcPrivate * _d) |
| virtual bool | **[read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)**(unsigned prefix, int & msg_id, IpcBuffer & msg, int size_limit, int timeout_msec =-1) |

**Protected Attributes inherited from [IPC](classvfiipc_1_1_i_p_c.md)**

|                | Name           |
| -------------- | -------------- |
| IpcPrivate * | **[d](classvfiipc_1_1_i_p_c.md#variable-d)**  |


## Detailed Description

```cpp
class vfiipc::Pipe;
```


class for inter process communication via named pipes 

## Public Types Documentation

### enum PipeConfig

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PC_None | =0|  no configuration  |
| PC_EnableCredentials | =1|  deprecated (just for compatibility reasons)  |




[Pipe](classvfiipc_1_1_pipe.md) configuration options (bit mask) 


## Public Functions Documentation

### function Pipe

```cpp
Pipe()
```


default constructor, equals config constructor Pipe(::PC_None) 


### function Pipe

```cpp
Pipe(
    int config
)
```


config constructor 


### function ~Pipe

```cpp
~Pipe()
```


destructor 


### function connect

```cpp
bool connect(
    const char * pipe
)
```


**Parameters**: 

  * **pipe** name of the pipe, which the server has opened before with [Pipe::listen()](classvfiipc_1_1_pipe.md#function-listen)


**Return**: true in case that connection was established successfully, else false 

initiate a connection to an [IPC](classvfiipc_1_1_i_p_c.md) server via a named pipe 


### function listen

```cpp
bool listen(
    const char * pipe
)
```


**Parameters**: 

  * **pipe** name of the pipe used for the listening 


**Return**: true in case that the listen pipe was created successfully, else false 

creates a named pipe for server mode to listen and accept new incomming connections with [Pipe::accept()](classvfiipc_1_1_pipe.md#function-accept). 


### function accept

```cpp
virtual IPC * accept(
    int timeout_msec =-1
)
```


**Parameters**: 

  * **timeout_msec** timeout to wait for a new connection in milliseconds. A negative timeout means wait forever. 


**Return**: pointer to a new [IPC](classvfiipc_1_1_i_p_c.md) object on success, else NULL in case of timeout or error 

**Reimplements**: [vfiipc::IPC::accept](classvfiipc_1_1_i_p_c.md#function-accept)


accepts the first connection on the queue of pending connections on the listen pipe. Please note that [accept()](classvfiipc_1_1_pipe.md#function-accept) only works for [IPC](classvfiipc_1_1_i_p_c.md) object in server mode (see [Pipe::listen()](classvfiipc_1_1_pipe.md#function-listen)). If an incoming connection has been accepted a pointer to an object to this connection is returned that has been allocated using new. The caller takes over ownership for this object and if it is not needed any longer it must be released using delete. 


### function close

```cpp
virtual void close()
```


**Reimplements**: [vfiipc::IPC::close](classvfiipc_1_1_i_p_c.md#function-close)


closes the session and all pipe handles for this object 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
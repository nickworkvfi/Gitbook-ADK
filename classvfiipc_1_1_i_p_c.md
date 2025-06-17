---
title: vfiipc::IPC

---

# vfiipc::IPC



 [More...](#detailed-description)


`#include <ipc.h>`

Inherited by [Pipe](classvfiipc_1_1_pipe.md), [TCP](classvfiipc_1_1_t_c_p.md), [TLS](classvfiipc_1_1_t_l_s.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~IPC](classvfiipc_1_1_i_p_c.md#function-~ipc)**() |
| virtual bool | **[eof](classvfiipc_1_1_i_p_c.md#function-eof)**() |
| virtual bool | **[error](classvfiipc_1_1_i_p_c.md#function-error)**() |
| virtual [IPC](classvfiipc_1_1_i_p_c.md) * | **[accept](classvfiipc_1_1_i_p_c.md#function-accept)**(int timeout_msec =-1) |
| virtual void | **[close](classvfiipc_1_1_i_p_c.md#function-close)**() |
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

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| | **[IPC](classvfiipc_1_1_i_p_c.md#function-ipc)**(IpcPrivate * _d) |
| virtual bool | **[read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)**(unsigned prefix, int & msg_id, IpcBuffer & msg, int size_limit, int timeout_msec =-1) |

## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| IpcPrivate * | **[d](classvfiipc_1_1_i_p_c.md#variable-d)**  |

## Detailed Description

```cpp
class vfiipc::IPC;
```


base class for inter process communication. Both stream and message based operation is supported. For messages the message format is as follows:

<4 bytes prefix> <4 bytes message size> <4 bytes message ID> <message>

All numbers are in big endian format. Size includes the size of the message ID. The prefix is used for checking synchronization of sender and receiver and is used to re-synchronize in case synchonization has been lost: The receiver discards data until a valid prefix has been found. 

## Public Functions Documentation

### function ~IPC

```cpp
virtual ~IPC()
```


destructor 


### function eof

```cpp
virtual bool eof()
```


**Reimplemented by**: [vfiipc::TLS::eof](classvfiipc_1_1_t_l_s.md#function-eof)


returns true, if [IPC](classvfiipc_1_1_i_p_c.md) has indicated an EOF (end of file) and connection was closed. Invoke [close()](classvfiipc_1_1_i_p_c.md#function-close) function for re-use of this [IPC](classvfiipc_1_1_i_p_c.md) object. 


### function error

```cpp
virtual bool error()
```


**Reimplemented by**: [vfiipc::TLS::error](classvfiipc_1_1_t_l_s.md#function-error)


returns true, [IPC](classvfiipc_1_1_i_p_c.md) has indicated an error (e.g. connection is distrubed). Invoke [close()](classvfiipc_1_1_i_p_c.md#function-close) function for re-use of this [IPC](classvfiipc_1_1_i_p_c.md) object. 


### function accept

```cpp
inline virtual IPC * accept(
    int timeout_msec =-1
)
```


**Parameters**: 

  * **timeout_msec** timeout to wait for a new connection in milliseconds. A negative timeout means wait forever. 


**Return**: pointer to a new [IPC](classvfiipc_1_1_i_p_c.md) object on success, else NULL in case of timeout or error 

**Reimplemented by**: [vfiipc::TLS::accept](classvfiipc_1_1_t_l_s.md#function-accept), [vfiipc::TCP::accept](classvfiipc_1_1_t_c_p.md#function-accept), [vfiipc::Pipe::accept](classvfiipc_1_1_pipe.md#function-accept)


accept an incoming connection for _timeout_msec_ milliseconds. A negative value means wait forever. Please note that [accept()](classvfiipc_1_1_i_p_c.md#function-accept) only works for [IPC](classvfiipc_1_1_i_p_c.md) objecst in server mode (e.g. see [TCP::listen()](classvfiipc_1_1_t_c_p.md#function-listen) or [Pipe::listen()](classvfiipc_1_1_pipe.md#function-listen)). If an incoming connection has been accepted a pointer to an object to this connection is returned that has been allocated using new. The caller takes over ownership for this object and if it is not needed any longer it must be released using delete. 


### function close

```cpp
virtual void close()
```


**Reimplemented by**: [vfiipc::TLS::close](classvfiipc_1_1_t_l_s.md#function-close), [vfiipc::TCP::close](classvfiipc_1_1_t_c_p.md#function-close), [vfiipc::Pipe::close](classvfiipc_1_1_pipe.md#function-close)


close any open internal file descriptors 


### function write

```cpp
virtual bool write(
    const void * data,
    int size
)
```


**Parameters**: 

  * **data** data to be written 
  * **size** number of bytes to be written 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::write](classvfiipc_1_1_t_l_s.md#function-write)


write data to the stream 


### function read

```cpp
virtual int read(
    void * data,
    int maxsize,
    int timeout_msec,
    int timeout_msec2
)
```


**Parameters**: 

  * **data** buffer that will receive the read bytes 
  * **maxsize** number of bytes to be read. 
  * **timeout_msec** timeout for reading in milliseconds. A negative timeout means wait forever. 
  * **timeout_msec2** timeout for reading after at least one byte has been read in milliseconds. A negative timeout means wait forever. 


**Return**: number of bytes read. A short read indicates EOF, timeout or error 

**Reimplemented by**: [vfiipc::TLS::read](classvfiipc_1_1_t_l_s.md#function-read)


read data from the stream 


### function read

```cpp
inline virtual int read(
    void * data,
    int maxsize,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **data** buffer that will receive the read bytes 
  * **maxsize** number of bytes to be read. 
  * **timeout_msec** timeout for reading in milliseconds. A negative timeout means wait forever. 


**Return**: number of bytes read. A short read indicates EOF, timeout or error 

read data from the stream 


### function peek

```cpp
int peek(
    void * data,
    int maxsize,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **data** buffer that will receive the read bytes 
  * **maxsize** maximum number of bytes to be read. 
  * **timeout_msec** timeout for reading in milliseconds. A negative timeout means wait forever. 


**Return**: number of bytes read. A short read does not indicate EOF, it just means that there is no more data to look at, 0 means EOF, -1 means error, -2 means timeout. 

**Note**: 

  * Unlike read this function returns as soon as some data is available, it does not try to wait until maxsize bytes can be read. 
  * This is no virtual function to maintain ABI compatibility. 


**Par**: 

read data from the stream without removing it, the eof and error flags are not updated to not break a consecutive read. 


### function write_msg

```cpp
virtual bool write_msg(
    unsigned prefix,
    int msg_id,
    const void * msg,
    int size
)
```


**Parameters**: 

  * **prefix** prefix of the message 
  * **msg_id** message ID 
  * **msg** message to be sent 
  * **size** size of the message 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)


write a message to the stream. The message is prefixed by _prefix_ and the size of the message (including msg_id, big endian) and by 4 bytes message ID. 


### function write_msg

```cpp
inline virtual bool write_msg(
    unsigned prefix,
    int msg_id,
    const std::vector< unsigned char > & msg
)
```


**Parameters**: 

  * **prefix** prefix of the message 
  * **msg_id** message ID 
  * **msg** message to be sent 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)


write a message to the stream. The message is prefixed by _prefix_ and the size of the message (big endian). 


### function write_msg

```cpp
inline virtual bool write_msg(
    unsigned prefix,
    int msg_id,
    const std::vector< char > & msg
)
```


**Parameters**: 

  * **prefix** prefix of the message 
  * **msg_id** message ID 
  * **msg** message to be sent 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)


write a message to the stream. The message is prefixed by _prefix_ and the size of the message (big endian). 


### function read_msg

```cpp
virtual bool read_msg(
    unsigned prefix,
    int & msg_id,
    std::vector< unsigned char > & msg,
    int size_limit,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **prefix** The data stream is checked to start with _prefix_. This is used to re-synchronize on the incoming data stream if required. 
  * **msg_id** message ID 
  * **msg** received message. 
  * **size_limit** size limit to prevent exhaustive memory allocations in case corrupt data has been received. 
  * **timeout_msec** timeout for reading in milliseconds. A negative timeout means wait forever. 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)


read message from the stream. 


### function read_msg

```cpp
virtual bool read_msg(
    unsigned prefix,
    int & msg_id,
    std::vector< char > & msg,
    int size_limit,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **prefix** The data stream is checked to start with _prefix_. This is used to re-synchronize on the incoming data stream if required. 
  * **msg_id** message ID 
  * **msg** received message. 
  * **size_limit** size limit to prevent exhaustive memory allocations in case corrupt data has been received. 
  * **timeout_msec** timeout for reading in milliseconds. A negative timeout means wait forever. 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)


read message from the stream. 


### function poll_in

```cpp
virtual bool poll_in(
    int timeout_msec =-1
)
```


**Parameters**: 

  * **timeout_msec** timeout to wait for available data in milliseconds. A negative timeout means wait forever. 


**Return**: true in case of data is available (or EOF/error), else false 

**Reimplemented by**: [vfiipc::TLS::poll_in](classvfiipc_1_1_t_l_s.md#function-poll-in)


check for availability of incoming data on the stream. In case of an error or an EOF this function also returns true and sets the internal flags for functions [IPC::eof()](classvfiipc_1_1_i_p_c.md#function-eof) and [IPC::error()](classvfiipc_1_1_i_p_c.md#function-error). 


### function remote_addr

```cpp
virtual const char * remote_addr() const
```


**Return**: remote information string or an empty string 

**Reimplemented by**: [vfiipc::TLS::remote_addr](classvfiipc_1_1_t_l_s.md#function-remote-addr)


For IPC::TCP objects: This function always returns the IP address and session port of the connected client or server, string format is: "&lt;IP address>:&lt;port>". For IPC::Pipe objects: This function always returns PID, UID and GID of the remote process (string format: "&lt;pid> &lt;uid> &lt;gid>"). Since credential information is obtained from underlying OS, it is no longer necessary to enable [Pipe::PC_EnableCredentials](classvfiipc_1_1_pipe.md#enumvalue-pc-enablecredentials), which is deprecated since removal of Verix eVo. 


### function getFD

```cpp
int getFD() const
```


**Return**: file descriptor 

obtain the file descriptor used for reading/writing data 


### function set_callback

```cpp
virtual bool set_callback(
    ipcCallback cb,
    void * data =0
)
```


**Parameters**: 

  * **cb** callback function, which is invoked, if has been received. Passing a NULL pointer will unregister the callback. 
  * **data** data pointer, which is passed to callback function _cb_


**Return**: true for success, else callback couldn't be registered/unregistered. 

**Reimplemented by**: [vfiipc::TLS::set_callback](classvfiipc_1_1_t_l_s.md#function-set-callback)


register a callback function for this [IPC](classvfiipc_1_1_i_p_c.md) object, which is invoked, if incoming data is pending and that [IPC](classvfiipc_1_1_i_p_c.md) functions [read()](classvfiipc_1_1_i_p_c.md#function-read) or [read_msg()](classvfiipc_1_1_i_p_c.md#function-read-msg) can be called to read the data. Set cb to NULL to unregister the callback for this [IPC](classvfiipc_1_1_i_p_c.md) object. 


### function write_msg

```cpp
inline virtual bool write_msg(
    unsigned prefix,
    int msg_id,
    const std::string & msg
)
```


**Parameters**: 

  * **prefix** prefix of the message 
  * **msg_id** message ID 
  * **msg** message to be sent 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)


write a message to the stream. The message is prefixed by _prefix_ and the size of the message (big endian). 


### function read_msg

```cpp
virtual bool read_msg(
    unsigned prefix,
    int & msg_id,
    std::string & msg,
    int size_limit,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **prefix** The data stream is checked to start with _prefix_. This is used to re-synchronize on the incoming data stream if required. 
  * **msg_id** message ID 
  * **msg** received message. 
  * **size_limit** size limit to prevent exhaustive memory allocations in case corrupt data has been received. 
  * **timeout_msec** timeout for reading in milliseconds. A negative timeout means wait forever. 


**Return**: true in case of success, else false 

**Reimplemented by**: [vfiipc::TLS::read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)


read message from the stream. 


### function is_server

```cpp
virtual bool is_server()
```


**Reimplemented by**: [vfiipc::TLS::is_server](classvfiipc_1_1_t_l_s.md#function-is-server)


returns true, if this [IPC](classvfiipc_1_1_i_p_c.md) object is a server instance, on which [TCP::listen()](classvfiipc_1_1_t_c_p.md#function-listen) or [Pipe::listen()](classvfiipc_1_1_pipe.md#function-listen) was called. \ return true if this [IPC](classvfiipc_1_1_i_p_c.md) is used as server 


### function local_addr

```cpp
virtual const char * local_addr() const
```


**Return**: local information string or an empty string 

**Reimplemented by**: [vfiipc::TLS::local_addr](classvfiipc_1_1_t_l_s.md#function-local-addr)


For IPC::TCP objects: This function always returns the IP address and session port of the local interface used for the connection, string format is: "&lt;IP address>:&lt;port>". For IPC::Pipe objects: In difference to [IPC::remote_addr()](classvfiipc_1_1_i_p_c.md#function-remote-addr), this function always returns an empty string. Use OS functions to get information for local PID, UID and GID. 


### function set_callback_stacksize

```cpp
static DEPRECATED void set_callback_stacksize(
    int size =-1
)
```


**Parameters**: 

  * **size** stacksize of the thread (in bytes) invoking callback function registered with [IPC::set_callback()](classvfiipc_1_1_i_p_c.md#function-set-callback). Please note that minimal required stacksize depends on the application code that is placed to the callback function. Minimal value is PTHREAD_STACK_MIN and sizes below this limit will set this minmal value. A negative size means the usage of the system default stacksize (default). 


**Note**: 

  * This function is deprecated since removal of Verix eVo. It is not recommended to modify thread stacksizes on other systems! 
  * This function has no effect, if the callback thread was already started by calling [IPC::set_callback()](classvfiipc_1_1_i_p_c.md#function-set-callback). A running callback thread is not restarted with another stacksize. 


callbacks configured with function [IPC::set_callback()](classvfiipc_1_1_i_p_c.md#function-set-callback) are invoked in context of a seperate thread that is started with first invocation of this function. 


### function getVersion

```cpp
static const char * getVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfiipc 


### function ipc_GetVersion

```cpp
static const char * ipc_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfiipc in ADK version string format: <major>.<minor>.<patch>-<build>, e.g. "1.2.3-4" 


## Protected Functions Documentation

### function IPC

```cpp
IPC(
    IpcPrivate * _d
)
```


constructor 


### function read_msg

```cpp
virtual bool read_msg(
    unsigned prefix,
    int & msg_id,
    IpcBuffer & msg,
    int size_limit,
    int timeout_msec =-1
)
```


base function for reading messages 


## Protected Attributes Documentation

### variable d

```cpp
IpcPrivate * d;
```


pointer to private implementation data of class [IPC](classvfiipc_1_1_i_p_c.md)


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: vfiipc::TCP

---

# vfiipc::TCP



 [More...](#detailed-description)


`#include <ipc.h>`

Inherits from [IPC](classvfiipc_1_1_i_p_c.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TCP](classvfiipc_1_1_t_c_p.md#function-tcp)**() |
| | **[~TCP](classvfiipc_1_1_t_c_p.md#function-~tcp)**() |
| bool | **[connect](classvfiipc_1_1_t_c_p.md#function-connect)**(const char * hostname, unsigned short port, int timeout_msec =-1) |
| bool | **[listen](classvfiipc_1_1_t_c_p.md#function-listen)**(unsigned short port, const char * listen_address =0) |
| virtual [IPC](classvfiipc_1_1_i_p_c.md) * | **[accept](classvfiipc_1_1_t_c_p.md#function-accept)**(int timeout_msec =-1) |
| virtual void | **[close](classvfiipc_1_1_t_c_p.md#function-close)**() |
| bool | **[setFD](classvfiipc_1_1_t_c_p.md#function-setfd)**(int socket_fd) |
| bool | **[setKeepalive](classvfiipc_1_1_t_c_p.md#function-setkeepalive)**(int cnt, int interval) |

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
class vfiipc::TCP;
```


class for inter process communication via [TCP](classvfiipc_1_1_t_c_p.md)

## Public Functions Documentation

### function TCP

```cpp
TCP()
```


constructor 


### function ~TCP

```cpp
~TCP()
```


destructor 


### function connect

```cpp
bool connect(
    const char * hostname,
    unsigned short port,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **hostname** name or IP address of the destination host with an optional port number (<name:port> or <[IPV6]:port>) 
  * **port** port of the destination host. If 0, get the port from hostname. 
  * **timeout_msec** connect timeout in milliseconds. A negative timeout means using default OS timeout. 


**Return**: true in case that connection was established successfully, else false 

**Note**: Providing two port numbers, one in _hostname_ and one in _port_ is not supported. 

initiate a connection to a remote [IPC](classvfiipc_1_1_i_p_c.md) server via a [TCP](classvfiipc_1_1_t_c_p.md) socket 


### function listen

```cpp
bool listen(
    unsigned short port,
    const char * listen_address =0
)
```


**Parameters**: 

  * **port** port of the [TCP](classvfiipc_1_1_t_c_p.md) listen socket. If port is 0, then the system chooses one, the application can determine it using [local_addr()](classvfiipc_1_1_i_p_c.md#function-local-addr). 
  * **listen_address** IP address of adapter that should be used to accept the connection Default listen_address=0 means acceptance of connections on all available adapters. Use "127.0.0.1" for local loopback device to avoid that external connections are accepted. 


**Return**: true in case that the [TCP](classvfiipc_1_1_t_c_p.md) listen socket was created successfully, else false 

creates a [TCP](classvfiipc_1_1_t_c_p.md) listen socket for server mode to accept incomming connections with [TCP::accept()](classvfiipc_1_1_t_c_p.md#function-accept). 


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


accepts the first connection on the queue of pending connections on the listen [TCP](classvfiipc_1_1_t_c_p.md) socket. Please note that [accept()](classvfiipc_1_1_t_c_p.md#function-accept) only works for [IPC](classvfiipc_1_1_i_p_c.md) object in server mode (see [TCP::listen()](classvfiipc_1_1_t_c_p.md#function-listen)). If an incoming connection has been accepted a pointer to an object to this connection is returned that has been allocated using new. The caller takes over ownership for this object and if it is not needed any longer it must be released using delete. 


### function close

```cpp
virtual void close()
```


**Reimplements**: [vfiipc::IPC::close](classvfiipc_1_1_i_p_c.md#function-close)


closes the session and all [TCP](classvfiipc_1_1_t_c_p.md) socket sockets for this object 


### function setFD

```cpp
bool setFD(
    int socket_fd
)
```


**Parameters**: 

  * **socket_fd** socket file descriptor 


**Return**: true in case that socket was coupled successful else false 

**Note**: If this [IPC](classvfiipc_1_1_i_p_c.md) object already is using another socket, the old socket is closed and _socket_fd_ is used as new endpoint. Please note that this [IPC](classvfiipc_1_1_i_p_c.md) object takes over the ownership of the socket and application MUST call [IPC::close()](classvfiipc_1_1_i_p_c.md#function-close) to close the socket. In addition, [IPC::remote_addr()](classvfiipc_1_1_i_p_c.md#function-remote-addr) will not provide any remote information for this [IPC](classvfiipc_1_1_i_p_c.md) object (empty string), after IPC::setFD() was invoked. 

Couples an external socket file descriptor to this [IPC](classvfiipc_1_1_i_p_c.md) object. The socket should belong to an active connection. 


### function setKeepalive

```cpp
bool setKeepalive(
    int cnt,
    int interval
)
```


**Parameters**: 

  * **cnt** number of keepalive probes before dropping the connection. 0 disables keepalives 
  * **interval** time in seconds between sending probes 


**Return**: true in case of success, else false 

**Note**: Keepalives are only supported on Linux based platforms. It sets TCP_KEEPCNT=cnt, TCP_KEEPIDLE=TCP_KEEPINTVL=interval and TCP_USER_TIMEOUT=cnt*interval*1000. 

configure keepalives 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
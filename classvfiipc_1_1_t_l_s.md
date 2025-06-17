---
title: vfiipc::TLS

---

# vfiipc::TLS



 [More...](#detailed-description)


`#include <tls.h>`

Inherits from [IPC](classvfiipc_1_1_i_p_c.md)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Error](classvfiipc_1_1_t_l_s.md#enum-error)** { OK, ERR_HOST, ERR_PORT, ERR_SOCKET, ERR_UNKNOWN_HOST, ERR_CONNECT, ERR_TIMEOUT, ERR_AUTHENTICATION, ERR_FAIL} |
| enum| **[CheckConfig](classvfiipc_1_1_t_l_s.md#enum-checkconfig)** { IGNORE_NONE =0, IGNORE_ALL =1, IGNORE_SELF_SIGNED =2, IGNORE_EXPIRED =4, IGNORE_NOT_YET_VALID =8, IGNORE_HOSTNAME =16} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[TLS](classvfiipc_1_1_t_l_s.md#function-tls)**() |
| | **[~TLS](classvfiipc_1_1_t_l_s.md#function-~tls)**() |
| virtual bool | **[eof](classvfiipc_1_1_t_l_s.md#function-eof)**() |
| virtual bool | **[error](classvfiipc_1_1_t_l_s.md#function-error)**() |
| [Error](classvfiipc_1_1_t_l_s.md#enum-error) | **[TLSError](classvfiipc_1_1_t_l_s.md#function-tlserror)**(std::string * err) |
| void | **[setKeyCert](classvfiipc_1_1_t_l_s.md#function-setkeycert)**(const char * key, const char * cert) |
| void | **[addCA](classvfiipc_1_1_t_l_s.md#function-addca)**(const char * filename, const char * path) |
| void | **[setCA](classvfiipc_1_1_t_l_s.md#function-setca)**(const char * filename, const char * path) |
| void | **[addDefaultCA](classvfiipc_1_1_t_l_s.md#function-adddefaultca)**() |
| void | **[setClientAuth](classvfiipc_1_1_t_l_s.md#function-setclientauth)**(bool on) |
| void | **[setCheckConfig](classvfiipc_1_1_t_l_s.md#function-setcheckconfig)**(unsigned check_flags) |
| bool | **[connect](classvfiipc_1_1_t_l_s.md#function-connect)**(const char * hostname, unsigned short port, int timeout_msec =-1) |
| bool | **[listen](classvfiipc_1_1_t_l_s.md#function-listen)**(unsigned short port, const char * listen_address =0) |
| virtual [IPC](classvfiipc_1_1_i_p_c.md) * | **[accept](classvfiipc_1_1_t_l_s.md#function-accept)**(int timeout_msec =-1) |
| virtual void | **[close](classvfiipc_1_1_t_l_s.md#function-close)**() |
| virtual bool | **[write](classvfiipc_1_1_t_l_s.md#function-write)**(const void * data, int size) |
| virtual int | **[read](classvfiipc_1_1_t_l_s.md#function-read)**(void * data, int maxsize, int timeout_msec, int timeout_msec2) |
| virtual bool | **[write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)**(unsigned prefix, int msg_id, const void * msg, int size) |
| virtual bool | **[write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)**(unsigned prefix, int msg_id, const std::vector< unsigned char > & msg) |
| virtual bool | **[write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)**(unsigned prefix, int msg_id, const std::vector< char > & msg) |
| virtual bool | **[write_msg](classvfiipc_1_1_t_l_s.md#function-write-msg)**(unsigned prefix, int msg_id, const std::string & msg) |
| virtual bool | **[read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)**(unsigned prefix, int & msg_id, std::vector< unsigned char > & msg, int size_limit, int timeout_msec =-1) |
| virtual bool | **[read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)**(unsigned prefix, int & msg_id, std::vector< char > & msg, int size_limit, int timeout_msec =-1) |
| virtual bool | **[poll_in](classvfiipc_1_1_t_l_s.md#function-poll-in)**(int timeout_msec =-1) |
| virtual const char * | **[remote_addr](classvfiipc_1_1_t_l_s.md#function-remote-addr)**() const |
| int | **[getFD](classvfiipc_1_1_t_l_s.md#function-getfd)**() const |
| virtual bool | **[set_callback](classvfiipc_1_1_t_l_s.md#function-set-callback)**([ipcCallback](namespacevfiipc.md#typedef-ipccallback) cb, void * data =0) |
| virtual bool | **[read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)**(unsigned prefix, int & msg_id, std::string & msg, int size_limit, int timeout_msec =-1) |
| virtual bool | **[is_server](classvfiipc_1_1_t_l_s.md#function-is-server)**() |
| virtual const char * | **[local_addr](classvfiipc_1_1_t_l_s.md#function-local-addr)**() const |
| bool | **[hasAuthEx](classvfiipc_1_1_t_l_s.md#function-hasauthex)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setLink](classvfiipc_1_1_t_l_s.md#function-setlink)**(void * l) |
| void | **[getAddr](classvfiipc_1_1_t_l_s.md#function-getaddr)**(char *& remote, char *& local) |
| virtual bool | **[read_msg](classvfiipc_1_1_t_l_s.md#function-read-msg)**(unsigned prefix, int & msg_id, IPC::IpcBuffer & msg, int size_limit, int timeout_msec =-1) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[TLSPrivate](classvfiipc_1_1_t_l_s.md#friend-tlsprivate)**  |

## Additional inherited members

**Public Functions inherited from [IPC](classvfiipc_1_1_i_p_c.md)**

|                | Name           |
| -------------- | -------------- |
| virtual | **[~IPC](classvfiipc_1_1_i_p_c.md#function-~ipc)**() |
| int | **[peek](classvfiipc_1_1_i_p_c.md#function-peek)**(void * data, int maxsize, int timeout_msec =-1) |
| [DEPRECATED](libseccmd-comp_8h.md#define-deprecated) void | **[set_callback_stacksize](classvfiipc_1_1_i_p_c.md#function-set-callback-stacksize)**(int size =-1) |
| const char * | **[getVersion](classvfiipc_1_1_i_p_c.md#function-getversion)**() |
| const char * | **[ipc_GetVersion](classvfiipc_1_1_i_p_c.md#function-ipc-getversion)**() |

**Protected Functions inherited from [IPC](classvfiipc_1_1_i_p_c.md)**

|                | Name           |
| -------------- | -------------- |
| | **[IPC](classvfiipc_1_1_i_p_c.md#function-ipc)**(IpcPrivate * _d) |

**Protected Attributes inherited from [IPC](classvfiipc_1_1_i_p_c.md)**

|                | Name           |
| -------------- | -------------- |
| IpcPrivate * | **[d](classvfiipc_1_1_i_p_c.md#variable-d)**  |


## Detailed Description

```cpp
class vfiipc::TLS;
```


Class for inter process communication via SSL/TLS 

## Public Types Documentation

### enum Error

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| OK | |  no error  |
| ERR_HOST | |  invalid host name  |
| ERR_PORT | |  invalid port  |
| ERR_SOCKET | |  failed to allocate socket  |
| ERR_UNKNOWN_HOST | |  unknown host  |
| ERR_CONNECT | |  failed to connect  |
| ERR_TIMEOUT | |  timeout  |
| ERR_AUTHENTICATION | |  failed authentication  |
| ERR_FAIL | |  other error  |




[TLS](classvfiipc_1_1_t_l_s.md) error codes 


### enum CheckConfig

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IGNORE_NONE | =0|  default: all checks are performed  |
| IGNORE_ALL | =1|  disable all server certificate checks  |
| IGNORE_SELF_SIGNED | =2|  allow self-signed server certificates  |
| IGNORE_EXPIRED | =4|  allow expired certificates  |
| IGNORE_NOT_YET_VALID | =8|  allow not yet valid certificates  |
| IGNORE_HOSTNAME | =16|  disable hostname check on the server certificate  |




Certificate checking configuration 


## Public Functions Documentation

### function TLS

```cpp
TLS()
```


constructor 


### function ~TLS

```cpp
~TLS()
```


destructor 


### function eof

```cpp
virtual bool eof()
```


**Reimplements**: [vfiipc::IPC::eof](classvfiipc_1_1_i_p_c.md#function-eof)


returns true, if [IPC](classvfiipc_1_1_i_p_c.md) has indicated an EOF (end of file) and connection was closed. Invoke [close()](classvfiipc_1_1_t_l_s.md#function-close) function for re-use of this [IPC](classvfiipc_1_1_i_p_c.md) object. 


### function error

```cpp
virtual bool error()
```


**Reimplements**: [vfiipc::IPC::error](classvfiipc_1_1_i_p_c.md#function-error)


returns true, [IPC](classvfiipc_1_1_i_p_c.md) has indicated an error (e.g. connection is distrubed). Invoke [close()](classvfiipc_1_1_t_l_s.md#function-close) function for re-use of this [IPC](classvfiipc_1_1_i_p_c.md) object. 


### function TLSError

```cpp
Error TLSError(
    std::string * err
)
```


**Parameters**: 

  * **err** if not NULL, fill in the error description 


**Return**: error code; 

obtain last [TLS](classvfiipc_1_1_t_l_s.md) error 


### function setKeyCert

```cpp
void setKeyCert(
    const char * key,
    const char * cert
)
```


**Parameters**: 

  * **key** file name containing the SSL key or NULL 
  * **cert** file containing the SSL certificate or NULL 


set key and certificate to be used for the connection. 


### function addCA

```cpp
void addCA(
    const char * filename,
    const char * path
)
```


**Parameters**: 

  * **filename** file name containing CA certificates or NULL 
  * **path** directory containing CA certificates or NULL 


**Note**: The CA file may contain more than once CA certificate. 

add CA used for verifying certificates 


### function setCA

```cpp
void setCA(
    const char * filename,
    const char * path
)
```


same as addCA, just provided for backwards compatibility 


### function addDefaultCA

```cpp
void addDefaultCA()
```


add system default CA paths for verifying certificates 


### function setClientAuth

```cpp
void setClientAuth(
    bool on
)
```


**Parameters**: 

  * **on** true to enable, false to disable client authentication 


enable/disable client authentication 


### function setCheckConfig

```cpp
void setCheckConfig(
    unsigned check_flags
)
```


**Parameters**: 

  * **check_flags** bitwise or-ed flags from CheckConfig 


set certificate check configuration 


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

**Note**: 

  * Providing two port numbers, one in _hostname_ and one in _port_ is not supported. 
  * There is a difference in the flow of operation between [TLS](classvfiipc_1_1_t_l_s.md) 1.2 and [TLS](classvfiipc_1_1_t_l_s.md) 1.3 when using client authentication. With [TLS](classvfiipc_1_1_t_l_s.md) up to 1.2 [connect()](classvfiipc_1_1_t_l_s.md#function-connect) fails if a client certificate is missing or is invalid. This is no longer the case with [TLS](classvfiipc_1_1_t_l_s.md) 1.3. With [TLS](classvfiipc_1_1_t_l_s.md) 1.3 [connect()](classvfiipc_1_1_t_l_s.md#function-connect) will return success but successive calls to read/write will fail with an error. This is due to changes in the control flow of the [TLS](classvfiipc_1_1_t_l_s.md) handshake and the failed client certificate check cannot be detected in [connect()](classvfiipc_1_1_t_l_s.md#function-connect). 


**Par**: 

initiate a connection to a remote [IPC](classvfiipc_1_1_i_p_c.md) server via a [TLS](classvfiipc_1_1_t_l_s.md) socket 


### function listen

```cpp
bool listen(
    unsigned short port,
    const char * listen_address =0
)
```


**Parameters**: 

  * **port** port of the [TLS](classvfiipc_1_1_t_l_s.md) listen socket. If port is 0, then the system chooses one, the application can determine it using [local_addr()](classvfiipc_1_1_t_l_s.md#function-local-addr). 
  * **listen_address** IP address of adapter that should be used to accept the connection Default listen_address=0 means acceptance of connections on all available adapters. Use "127.0.0.1" for local loopback device to avoid that external connections are accepted. 


**Return**: true in case that the [TLS](classvfiipc_1_1_t_l_s.md) listen socket was created successfully, else false 

creates a [TLS](classvfiipc_1_1_t_l_s.md) listen socket for server mode to accept incomming connections with [TLS::accept()](classvfiipc_1_1_t_l_s.md#function-accept). 


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


accept an incoming connection for _timeout_msec_ milliseconds. A negative value means wait forever. Please note that [accept()](classvfiipc_1_1_t_l_s.md#function-accept) only works for [IPC](classvfiipc_1_1_i_p_c.md) objecst in server mode (e.g. see [TCP::listen()](classvfiipc_1_1_t_c_p.md#function-listen) or [Pipe::listen()](classvfiipc_1_1_pipe.md#function-listen)). If an incoming connection has been accepted a pointer to an object to this connection is returned that has been allocated using new. The caller takes over ownership for this object and if it is not needed any longer it must be released using delete. 


### function close

```cpp
virtual void close()
```


**Reimplements**: [vfiipc::IPC::close](classvfiipc_1_1_i_p_c.md#function-close)


closes the session and all [TLS](classvfiipc_1_1_t_l_s.md) socket sockets for this object 


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

**Reimplements**: [vfiipc::IPC::write](classvfiipc_1_1_i_p_c.md#function-write)


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

**Reimplements**: [vfiipc::IPC::read](classvfiipc_1_1_i_p_c.md#function-read)


read data from the stream 


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

**Reimplements**: [vfiipc::IPC::write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)


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

**Reimplements**: [vfiipc::IPC::write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)


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

**Reimplements**: [vfiipc::IPC::write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)


write a message to the stream. The message is prefixed by _prefix_ and the size of the message (big endian). 


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

**Reimplements**: [vfiipc::IPC::write_msg](classvfiipc_1_1_i_p_c.md#function-write-msg)


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

**Reimplements**: [vfiipc::IPC::read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)


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

**Reimplements**: [vfiipc::IPC::read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)


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

**Reimplements**: [vfiipc::IPC::poll_in](classvfiipc_1_1_i_p_c.md#function-poll-in)


check for availability of incoming data on the stream. In case of an error or an EOF this function also returns true and sets the internal flags for functions [IPC::eof()](classvfiipc_1_1_i_p_c.md#function-eof) and [IPC::error()](classvfiipc_1_1_i_p_c.md#function-error). 


### function remote_addr

```cpp
virtual const char * remote_addr() const
```


**Return**: remote information string or an empty string 

**Reimplements**: [vfiipc::IPC::remote_addr](classvfiipc_1_1_i_p_c.md#function-remote-addr)


For IPC::TCP objects: This function always returns the IP address and session port of the connected client or server, string format is: "&lt;IP address>:&lt;port>". For IPC::Pipe objects: This function always returns PID, UID and GID of the remote process (string format: "&lt;pid> &lt;uid> &lt;gid>"). Since credential information is obtained from underlying OS, it is no longer necessary to enable [Pipe::PC_EnableCredentials](classvfiipc_1_1_pipe.md#enumvalue-pc-enablecredentials), which is deprecated since removal of Verix eVo. 


### function getFD

```cpp
int getFD() const
```


**Return**: listening file descriptor 

Get file descriptor, only supported when listening for incoming connections 


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

**Reimplements**: [vfiipc::IPC::set_callback](classvfiipc_1_1_i_p_c.md#function-set-callback)


register a callback function for this [IPC](classvfiipc_1_1_i_p_c.md) object, which is invoked, if incoming data is pending and that [IPC](classvfiipc_1_1_i_p_c.md) functions [read()](classvfiipc_1_1_t_l_s.md#function-read) or [read_msg()](classvfiipc_1_1_t_l_s.md#function-read-msg) can be called to read the data. Set cb to NULL to unregister the callback for this [IPC](classvfiipc_1_1_i_p_c.md) object. 


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

**Reimplements**: [vfiipc::IPC::read_msg](classvfiipc_1_1_i_p_c.md#function-read-msg)


read message from the stream. 


### function is_server

```cpp
virtual bool is_server()
```


**Reimplements**: [vfiipc::IPC::is_server](classvfiipc_1_1_i_p_c.md#function-is-server)


returns true, if this [IPC](classvfiipc_1_1_i_p_c.md) object is a server instance, on which [TCP::listen()](classvfiipc_1_1_t_c_p.md#function-listen) or [Pipe::listen()](classvfiipc_1_1_pipe.md#function-listen) was called. \ return true if this [IPC](classvfiipc_1_1_i_p_c.md) is used as server 


### function local_addr

```cpp
virtual const char * local_addr() const
```


**Return**: local information string or an empty string 

**Reimplements**: [vfiipc::IPC::local_addr](classvfiipc_1_1_i_p_c.md#function-local-addr)


For IPC::TCP objects: This function always returns the IP address and session port of the local interface used for the connection, string format is: "&lt;IP address>:&lt;port>". For IPC::Pipe objects: In difference to [IPC::remote_addr()](classvfiipc_1_1_i_p_c.md#function-remote-addr), this function always returns an empty string. Use OS functions to get information for local PID, UID and GID. 


### function hasAuthEx

```cpp
static bool hasAuthEx()
```


**Return**: true if a valid AuthEx key/certificate is available, false if not 

test for valid AuthEx key/certificate 


## Protected Functions Documentation

### function setLink

```cpp
void setLink(
    void * l
)
```


### function getAddr

```cpp
void getAddr(
    char *& remote,
    char *& local
)
```


### function read_msg

```cpp
virtual bool read_msg(
    unsigned prefix,
    int & msg_id,
    IPC::IpcBuffer & msg,
    int size_limit,
    int timeout_msec =-1
)
```


base function for reading messages 


## Friends

### friend TLSPrivate

```cpp
friend class TLSPrivate;
```


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
---
title: mADK_PP_Prot

---

# mADK_PP_Prot



 [More...](#detailed-description)


`#include <madk_pp_protocol.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ProtocolState](classm_a_d_k___p_p___prot.md#enum-protocolstate)** { PS_Stopped = 0, PS_Running = 1, PS_Aborted = 2} |
| enum| **[AbortState](classm_a_d_k___p_p___prot.md#enum-abortstate)** { AS_NotAborted = 0, AS_AbortIdle = 1, AS_ConnectionLost = 2} |
| enum| **[CMDActiveType](classm_a_d_k___p_p___prot.md#enum-cmdactivetype)** { CMD_None = 0, CMD_Active = 1, CMD_Nested = 2} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [mADK_PP_Prot](classm_a_d_k___p_p___prot.md) * | **[getInstance](classm_a_d_k___p_p___prot.md#function-getinstance)**() |
| struct [mADK_PP_Prot_Loader](structm_a_d_k___p_p___prot___loader.md) * | **[loader](classm_a_d_k___p_p___prot.md#function-loader)**() |
| bool | **[poll](classm_a_d_k___p_p___prot.md#function-poll)**(int timeout_msec =-1) |
| bool | **[receive](classm_a_d_k___p_p___prot.md#function-receive)**(std::vector< unsigned char > & cmd, int timeout_msec =-1) |
| bool | **[abort](classm_a_d_k___p_p___prot.md#function-abort)**() |
| bool | **[send](classm_a_d_k___p_p___prot.md#function-send)**(const unsigned char * cmd, unsigned size) |
| bool | **[send](classm_a_d_k___p_p___prot.md#function-send)**(const std::vector< unsigned char > & cmd) |
| bool | **[command](classm_a_d_k___p_p___prot.md#function-command)**(const unsigned char * cmd, unsigned size) |
| bool | **[request](classm_a_d_k___p_p___prot.md#function-request)**(const unsigned char * cmd, unsigned size) |
| bool | **[request](classm_a_d_k___p_p___prot.md#function-request)**(const std::vector< unsigned char > & cmd) |
| bool | **[recv_response](classm_a_d_k___p_p___prot.md#function-recv-response)**(std::vector< unsigned char > & response, int timeout_msec =-1) |
| bool | **[set_busy](classm_a_d_k___p_p___prot.md#function-set-busy)**(bool flag, bool cmd_ctx =true) |
| bool | **[loadAcl](classm_a_d_k___p_p___prot.md#function-loadacl)**() |
| enum [CMDActiveType](classm_a_d_k___p_p___prot.md#enum-cmdactivetype) | **[command_active](classm_a_d_k___p_p___prot.md#function-command-active)**() const |
| bool | **[start](classm_a_d_k___p_p___prot.md#function-start)**() |
| void | **[stop](classm_a_d_k___p_p___prot.md#function-stop)**() |
| void | **[setRecoveryMode](classm_a_d_k___p_p___prot.md#function-setrecoverymode)**(bool on_off) |
| enum [ProtocolState](classm_a_d_k___p_p___prot.md#enum-protocolstate) | **[get_protocol_state](classm_a_d_k___p_p___prot.md#function-get-protocol-state)**() const |
| bool | **[connected](classm_a_d_k___p_p___prot.md#function-connected)**() const |
| bool | **[check_abort](classm_a_d_k___p_p___prot.md#function-check-abort)**() const |
| void | **[set_command](classm_a_d_k___p_p___prot.md#function-set-command)**(void * handle, char * cmd, int size, char protType, unsigned msgId) |
| bool | **[get_status](classm_a_d_k___p_p___prot.md#function-get-status)**(struct ProtStatus * status) const |
| bool | **[get_connection_info](classm_a_d_k___p_p___prot.md#function-get-connection-info)**(struct ConnectInfo * info) const |
| void | **[free_connection_info](classm_a_d_k___p_p___prot.md#function-free-connection-info)**(struct ConnectInfo * info) const |
| void | **[set_com_profile](classm_a_d_k___p_p___prot.md#function-set-com-profile)**(const char * file) const |
| bool | **[trusted_connection](classm_a_d_k___p_p___prot.md#function-trusted-connection)**() |
| bool | **[get_tcp_info](classm_a_d_k___p_p___prot.md#function-get-tcp-info)**(struct TcpInfo * info) |
| bool | **[get_uds_info](classm_a_d_k___p_p___prot.md#function-get-uds-info)**(struct UdsInfo * info) |
| void * | **[get_handle](classm_a_d_k___p_p___prot.md#function-get-handle)**() const |
| char | **[get_protocol_type](classm_a_d_k___p_p___prot.md#function-get-protocol-type)**() const |
| bool | **[isConnectionThread](classm_a_d_k___p_p___prot.md#function-isconnectionthread)**() const |
| bool | **[isMainConnectionThread](classm_a_d_k___p_p___prot.md#function-ismainconnectionthread)**() const |
| int | **[select](classm_a_d_k___p_p___prot.md#function-select)**(int comInterfaces, char ** ComFileName) |
| void | **[reset](classm_a_d_k___p_p___prot.md#function-reset)**() |

## Detailed Description

```cpp
class mADK_PP_Prot;
```


wrapper class for SDI protocol (API of lib_mADK_PP_Prot.so) This class allows to create exactly one object instance (singleton). 

## Public Types Documentation

### enum ProtocolState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PS_Stopped | 0|  protocol stopped  |
| PS_Running | 1|  protocol running  |
| PS_Aborted | 2|  protocol aborted by [stop()](classm_a_d_k___p_p___prot.md#function-stop) function (wait for thread termination)  |




### enum AbortState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| AS_NotAborted | 0|   |
| AS_AbortIdle | 1|  no abort was triggered  |
| AS_ConnectionLost | 2|  abort next call of [receive()](classm_a_d_k___p_p___prot.md#function-receive) in idle loop  |




### enum CMDActiveType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CMD_None | 0|  no command is active, [receive()](classm_a_d_k___p_p___prot.md#function-receive) wasn't called  |
| CMD_Active | 1|  [receive()](classm_a_d_k___p_p___prot.md#function-receive) was called and a command is active  |
| CMD_Nested | 2|  a nested command (within a callback) is active  |




type of active command, returned by command_active 


## Public Functions Documentation

### function getInstance

```cpp
static mADK_PP_Prot * getInstance()
```


**Return**: pointer to [mADK_PP_Prot](classm_a_d_k___p_p___prot.md) singleton object 

creates/returns the protocol instance as singleton object 


### function loader

```cpp
inline struct mADK_PP_Prot_Loader * loader()
```


**Return**: pointer to [mADK_PP_Prot_Loader](structm_a_d_k___p_p___prot___loader.md) object 

function to access the library loader from static function mADK_PP_Prot::run() 


### function poll

```cpp
bool poll(
    int timeout_msec =-1
)
```


**Parameters**: 

  * **timeout_msec** wait timeout in milliseconds A negative value means waiting infinite. 


**Return**: true, if a command is available In case of timeout or abort, false is returned. 

**Note**: This function is not allowed to be used by SDI side connection threads. 

poll for an incomming command on main connection 


### function receive

```cpp
bool receive(
    std::vector< unsigned char > & cmd,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **cmd** received protocol command (empty vector in case of timeout) 
  * **timeout_msec** receive timeout in milliseconds. A negative value means waiting infinite. 


**Return**: true, if the command was received successfully. In case of timeout or abort, false is returned. 

**Note**: This function is not allowed to be used by SDI side connection threads. 

receive a new SDI command from main connection 


### function abort

```cpp
bool abort()
```


**Return**: true in case that SDI main thread was idle and reveive()/poll() was aborted immediatelly, else false (abort flag set for pending abort, when SDI gets idle again). 

**Note**: With successful abort, [receive()](classm_a_d_k___p_p___prot.md#function-receive)/poll() will return false 

If the SDI main thread is waiting in idle loop for incomming commands with function [receive()](classm_a_d_k___p_p___prot.md#function-receive)/poll(), this function can be called from another thread to abort the waiting main thread. If SDI main thread is not idle (e.g. when processing a command), the internal abort flag is set only, which will abort [receive()](classm_a_d_k___p_p___prot.md#function-receive)/poll() at once, when SDI main thread is idle again. In other words, [abort()](classm_a_d_k___p_p___prot.md#function-abort) won't abort [recv_response()](classm_a_d_k___p_p___prot.md#function-recv-response) used to receive responses or nested SDI commands. It affects the idle loop only. 


### function send

```cpp
bool send(
    const unsigned char * cmd,
    unsigned size
)
```


**Parameters**: 

  * **cmd** pointer to command buffer 
  * **size** size of command buffer 


**Return**: true if the command was passed to protocol, false is returned for: -parameter error -no command active -protocol isn't connected to remote device 

**Note**: 

  * This function does not send the response for main connection, if no command is active. 
  * Function is allowed to be used from a SDI side connection thread, which has the same effect as the invocation of _send(). 


send a command response 


### function send

```cpp
inline bool send(
    const std::vector< unsigned char > & cmd
)
```


shortcut for function [send()](classm_a_d_k___p_p___prot.md#function-send) above using a vector 


### function command

```cpp
bool command(
    const unsigned char * cmd,
    unsigned size
)
```


**Parameters**: 

  * **cmd** pointer to command buffer 
  * **size** size of command buffer 


**Return**: true if command was passed to protocol, false is returned for: -parameter error -protocol isn't connected to remote device 

**Note**: 

  * This function always sends the command, disregarding SDI server is recently processing a command or not. 
  * This function is not allowed to be used by SDI side connection threads. 


send a unidirectional command (without receiving a response) over main connection. For commands having a response, please use [request()](classm_a_d_k___p_p___prot.md#function-request) and [recv_response()](classm_a_d_k___p_p___prot.md#function-recv-response). 


### function request

```cpp
bool request(
    const unsigned char * cmd,
    unsigned size
)
```


**Parameters**: 

  * **cmd** pointer to request buffer 
  * **size** size of request buffer 


**Return**: true, if the request was sent successfully. false is returned for -parameter error -no SDI command is active -another request is already active -request type is not supported (unknown request type) -protocol isn't connected to remote device 

**Note**: 

  * This function does not send the request, if no SDI command is active. 
  * This function is not allowed to be used by SDI side connection threads. 


send a request over main connection. Use [recv_response()](classm_a_d_k___p_p___prot.md#function-recv-response) afterwards to receive the request response. Recently supported request types are: 91-xx: EMV callbacks (with response 92-xx) 9B-xx: Control callbacks (with response 9C-xx) 


### function request

```cpp
inline bool request(
    const std::vector< unsigned char > & cmd
)
```


shortcut for function [request()](classm_a_d_k___p_p___prot.md#function-request) above using a vector for request command 


### function recv_response

```cpp
bool recv_response(
    std::vector< unsigned char > & response,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **response** received request response (empty vector in case of error/timeout) 
  * **timeout_msec** receive timeout in milliseconds. A negative value means waiting infinite. 


**Return**: true, if the request response was received successfully. false is returned for: -if no reuqest is recently active (parameter response is empty) -receive error or timeout (parameter response is empty) -message received, but no response for the current request (parameter response contains the received command, which might be processed by SDI server as nested command while the current request is active) 

**Note**: This function is not allowed to be used by SDI side connection threads. 

receive a response on main connection of a pequest previously sent with function [request()](classm_a_d_k___p_p___prot.md#function-request). 


### function set_busy

```cpp
bool set_busy(
    bool flag,
    bool cmd_ctx =true
)
```


set SDI server busy and decline incoming commands with busy response. This is required to get an exclusive lock to decline incoming SDI commands. The lock is applied to both, main connection (type A/B/D) and side connections (type C/D). The type of lock depends on the context from which the function is invoked:

* Set `cmd_ctx` to true (default) if the function is used during processing of an active command, which will set SDI server out of order for a specific time, e.g. a command for a SW update. During duration of this command, SDI server will decline commands on other connections. Only this connection, which belongs to the invoking thread, is able to process further commands.
* Set `cmd_ctx` to false, if this function is used out of a command context, e.g. when entering the UI menu to block all connections and to disallow command processing basically. In the case that another SDI command (type A/B/C/D) is pending or already processed, the exclusive lock is not obtained and the function returns false. The function will return true, if it is invoked at twice to obtain the lock, in this case one function call is required to release the lock again (no recursive locking possible). 

This function uses [get_handle()](classm_a_d_k___p_p___prot.md#function-get-handle) and is allowed to be invoked by both, the SDI main thread and side connection threads. 

flagset to true to obtain the exclusive lock to set SDI server busy. Reset with false to unlock SDI server to accept new commands again, in this case the function return value is always true. 

cmd_ctxset to true, if function is invoked during an active SDI command, set to false for cases to block all connections (e.g. to enter menu). This parameter is ignored, if `flag` is set to false to release the lock. 

true for success, else false (in case that other SDI commands are pending or processed) 


### function loadAcl

```cpp
bool loadAcl()
```


**Return**: true on success, otherwise false 

Load/Reload Access Control List configurations 


### function command_active

```cpp
inline enum CMDActiveType command_active() const
```


SDI server has already called [receive()](classm_a_d_k___p_p___prot.md#function-receive) to process a command from main connection and not yet finished this command with call of [send()](classm_a_d_k___p_p___prot.md#function-send). return active command type, see enum CMDActiveType 


### function start

```cpp
bool start()
```


**Return**: true if the protocol was started or is already running, false for error, if the protocol couldn't be started. 

start (or restart) the protocol (if not running yet or if it was stopped) 


### function stop

```cpp
void stop()
```


**Note**: This function block until the protocol thread terminates. It does nothing, if the protocol wasn't started or already stopped. 

stop the running protocol. 


### function setRecoveryMode

```cpp
void setRecoveryMode(
    bool on_off
)
```


**Parameters**: 

  * **on_off** switch recovery mode on or off 


activate / deactivate recovery mode 


### function get_protocol_state

```cpp
inline enum ProtocolState get_protocol_state() const
```


**Return**: protocol state, see enum ProtocolState 

return current the state of the protocol (stopped, running, aborted) 


### function connected

```cpp
inline bool connected() const
```


**Return**: true, if the connection is alive, else false for disturbed connection or if there is no connection, which belongs to the invoking thread 

**Note**: This function uses [get_handle()](classm_a_d_k___p_p___prot.md#function-get-handle) and is allowed to be invoked by both, the SDI main thread and side connection threads 

check if connection, which belongs to the invoking thread, is still alive. 


### function check_abort

```cpp
inline bool check_abort() const
```


**Return**: true if the device has sent an abort, else false 

**Note**: This flag is reset when sending the command response with [send()](classm_a_d_k___p_p___prot.md#function-send). 

check, if the remote device has sent an abort command 20-02 to cancel the urrent active command. 


### function set_command

```cpp
void set_command(
    void * handle,
    char * cmd,
    int size,
    char protType,
    unsigned msgId
)
```


**Parameters**: 

  * **handle** session handle used to indetify connection 
  * **cmd** pointer to command buffer 
  * **size** size of the command buffer 
  * **protType** protocol type 
  * **msgId** message ID from protocol header type 'D' (or 0, if _protType_ is not 'D') 


**Note**: This function is intented for protocol thread only and must not be used from SDI server directly! 

used by command_callback() to take over the recent received command for processing 


### function get_status

```cpp
bool get_status(
    struct ProtStatus * status
) const
```


read the protocol status, see description of mADK_PP_Prot_GetStatus() 


### function get_connection_info

```cpp
bool get_connection_info(
    struct ConnectInfo * info
) const
```


read the connection information, see description of mADK_PP_Prot_GetConnectInfo() 


### function free_connection_info

```cpp
void free_connection_info(
    struct ConnectInfo * info
) const
```


free the connection information, see description of mADK_PP_Prot_FreeConnectInfo() 


### function set_com_profile

```cpp
void set_com_profile(
    const char * file
) const
```


set/switch to a new ADKCOM profile, see description of mADK_PP_Prot_SelectComProfile() 


### function trusted_connection

```cpp
bool trusted_connection()
```


**Return**: true, if the connection is a local (trusted) connection 

**Note**: This function uses [get_handle()](classm_a_d_k___p_p___prot.md#function-get-handle) and is allowed to be invoked by both, the SDI main thread and side connection threads. 

check if connection, which belongs to the invoking thread, is a local (trusted) connection. 


### function get_tcp_info

```cpp
bool get_tcp_info(
    struct TcpInfo * info
)
```


**Return**: true in case of a TCP/IP connection, else false for error, e.g. the thread serves another type of connection or the connection was already lost. 

**Note**: This function uses [get_handle()](classm_a_d_k___p_p___prot.md#function-get-handle) and is allowed to be invoked by both, the SDI main thread and side connection threads. 

check if connection, which belongs to the invoking thread, is a TCP/IP connection. In this case connection details of the remote TCP/IP client are returned with parameter `info`. 


### function get_uds_info

```cpp
bool get_uds_info(
    struct UdsInfo * info
)
```


**Return**: true in case of an UDS connection, else false for error, e.g. the thread servers another type of connection or the connection was already lost. 

**Note**: This function uses [get_handle()](classm_a_d_k___p_p___prot.md#function-get-handle) and is allowed to be invoked by both, the SDI main thread and side connection threads. 

check if connection, which belongs to the invoking thread, is an UDS connection. In this case connection details of the remote UDS client are returned with parameter `info`. 


### function get_handle

```cpp
void * get_handle() const
```


**Return**: connection handle for invoking thread, NULL if there is no active connection. 

return the connection handle, which belongs to the invoking thread. The SDI main thread (and also other application threads) get the handle of the main connection. Side connection threads get the handle of its side connection. 


### function get_protocol_type

```cpp
char get_protocol_type() const
```


**Return**: 'A', 'B', 'C' or 'D' if a command is active, else 0 

returns the protocol type of the recent command from main connetion or side connection 


### function isConnectionThread

```cpp
bool isConnectionThread() const
```


**Return**: true, if the calling thread is a protocol connection thread 

**Note**: 

  * Don't use this function from inside [mADK_PP_Prot::set_command()](classm_a_d_k___p_p___prot.md#function-set-command), before the handle was set into [ConnectionContext](class_connection_context.md). 
  * This function returns also true, if the connection thread caring about the main connection (and usually serving the SDI main thread) invokes this function. Finally, this is correct, since if a type C or D command is received on the main connection, this command must be handled as a side command and the main connection thread must invoke [process_side_command()](main_8cpp.md#function-process-side-command) instead of providing the SDI command to the SDI main thread. See also function [isMainConnectionThread()](classm_a_d_k___p_p___prot.md#function-ismainconnectionthread) to check, if the connection thread is the thread caring about the main connection 


check if the calling thread is a protocol thread (not SDI main thread or a sibling of it). This is usually the case if [process_side_command()](main_8cpp.md#function-process-side-command) is invoked to process the command as side command asynchronously. 


### function isMainConnectionThread

```cpp
bool isMainConnectionThread() const
```


**Return**: true, if the calling thread is a protocol connection thread, which cares about the main connection. 

**Note**: See also [isConnectionThread()](classm_a_d_k___p_p___prot.md#function-isconnectionthread), which returns true for all protocol connection threads. 

check if the calling thread is a protocol thread, which cares about the main connection, which owns the payment lock. Please note that the function will return false for SDI main thread or a sibling of it. Only a protocol thread usually does asynchronous processing of SDI commands can be the main connection thread. 


### function select

```cpp
int select(
    int comInterfaces,
    char ** ComFileName
)
```


**Parameters**: 

  * **comInterfaces** bitmask of supported COM interfaces (see ADKCOM property COM_PROP_SUPP_INTERFACES) 
  * **ComFileName** new ADKCOM communication profile to be used (C-string). 


**Note**: This function is intented for protocol thread only and must not be used from SDI server directly! 

used by select_cb() to select the COM profile for the protocol 


### function reset

```cpp
void reset()
```


reset the protocol. This will close all active connections and lead to invocation of select_cb() to read new COM settings including COM setup 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
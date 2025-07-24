---
hidden: true
title: mADK_PP_Prot Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods)

`#include <`<a href="madk__pp__protocol_8h_source.md">madk_pp_protocol.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [ProtocolState](#ad77822a0ad67023ae49897b8b80c151d) { [PS_Stopped](#ad77822a0ad67023ae49897b8b80c151dace7d572a2b50123f5244b47996bd39fc) = 0, [PS_Running](#ad77822a0ad67023ae49897b8b80c151da00205e8fcfd4185829a8a89d5378e547) = 1, [PS_Aborted](#ad77822a0ad67023ae49897b8b80c151dae8a4ddbdf955d29d8db6d3a41d2a0512) = 2 } |
| enum   | [AbortState](#a7515c365720349ec545c891978cc2256) { [AS_NotAborted](#a7515c365720349ec545c891978cc2256a7a73ea105cd0404b571f649aa3f10724) = 0, [AS_AbortIdle](#a7515c365720349ec545c891978cc2256a1f666b5421a566da41f5a5787408639d) = 1, [AS_ConnectionLost](#a7515c365720349ec545c891978cc2256ad8a64a57556eada48fb2e36eb447375c) = 2 } |
| enum   | [CMDActiveType](#a698cbe53af5c397dcf4dac14ea8880e6) { [CMD_None](#a698cbe53af5c397dcf4dac14ea8880e6ace0044011316cb536586f52643c5472f) = 0, [CMD_Active](#a698cbe53af5c397dcf4dac14ea8880e6ac70c8919d2f46d48b6123c6c92c39cda) = 1, [CMD_Nested](#a698cbe53af5c397dcf4dac14ea8880e6ad4e03ef5b771a349fb6313d95c13a83f) = 2 } |

|  |  |
|----|----|
| Public Member Functions |  |
| struct <a href="structm_a_d_k___p_p___prot___loader.md">mADK_PP_Prot_Loader</a> \*  | [loader](#aa78a57fb6d6e8185fbfe78a1ff56c200) () |
| bool  | [poll](#a671f8a7fd53920c9532b898a8a26f165) (int timeout_msec=-1) |
| bool  | [receive](#ab2e55bafa77bcbdbeda4258ecadd5357) (std::vector\< unsigned char \> &cmd, int timeout_msec=-1) |
| bool  | [abort](#ae75017b64297bc5a74260a768fb86cf1) () |
| bool  | [send](#a1f13b08d59a38adeb5d755179befa6b8) (const unsigned char \*cmd, unsigned size) |
| bool  | [send](#ab7bb7ccacd456083681bb2ecafac3d77) (const std::vector\< unsigned char \> &cmd) |
| bool  | [command](#a345e47376ab38e76aa77b2bd774b104d) (const unsigned char \*cmd, unsigned size) |
| bool  | [request](#a1630f914c3dbf9ebc62ad6a5c7f9ebd9) (const unsigned char \*cmd, unsigned size) |
| bool  | [request](#addef44d3ee301a4179eb0e143b059024) (const std::vector\< unsigned char \> &cmd) |
| bool  | [recv_response](#a0bb666307a7aa15fc7aae63d454e4394) (std::vector\< unsigned char \> &response, int timeout_msec=-1) |
| bool  | [set_busy](#a5f545ea92dfa23883944cf61437cc189) (bool flag, bool cmd_ctx=true) |
| bool  | [loadAcl](#a06933abaabc7a6dcd0b7bd8882efad9f) () |
| enum [CMDActiveType](#a698cbe53af5c397dcf4dac14ea8880e6)  | [command_active](#af28b6669bc9832ba7a9ad10765341494) () const |
| bool  | [start](#aad5997aaaa2d622f0ca57f8b24a51a7b) () |
| void  | [stop](#a8c528baf37154d347366083f0f816846) () |
| void  | [setRecoveryMode](#ab65e00f98394d90b75bc7406dfa4efe9) (bool on_off) |
| enum [ProtocolState](#ad77822a0ad67023ae49897b8b80c151d)  | [get_protocol_state](#a6d4649d555fb71b605cda7b61162d030) () const |
| bool  | [connected](#aa0fd96bc25e3d509fb54028c2e4b91f6) () const |
| bool  | [check_abort](#aa678c3364670ab6f479de87652ada0b4) () const |
| void  | [set_command](#ab390ac45aaaa013d33bcef40d625f142) (void \*handle, char \*cmd, int size, char protType, unsigned msgId) |
| bool  | [get_status](#ab830518e59100970fe386745510590f5) (struct ProtStatus \*status) const |
| bool  | [get_connection_info](#a5e27866e15dfcacd243894c3271e07e7) (struct ConnectInfo \*info) const |
| void  | [free_connection_info](#ab838213968e74a9456a7eb4dcfc820b6) (struct ConnectInfo \*info) const |
| void  | [set_com_profile](#a66bbb300025687b2648bf12ea355f428) (const char \*file) const |
| bool  | [trusted_connection](#afd80db538f844114879d9a5868f63aca) () |
| bool  | [get_tcp_info](#a67beb232925c781e9e84d7f403c2fbcb) (struct TcpInfo \*info) |
| bool  | [get_uds_info](#a6e7b3567bd0e3561d3f969e6df82233d) (struct UdsInfo \*info) |
| void \*  | [get_handle](#ac4ab6dfcd39150866277c10883e3cc1a) () const |
| char  | [get_protocol_type](#ae0bc09fd8222a3c92e69a59e0ef6b41f) () const |
| bool  | [isConnectionThread](#aa2bd5319e2acc8c8de0b9f1c1395e77c) () const |
| bool  | [isMainConnectionThread](#ab109345afd11af36903830d8d5e06f75) () const |
| int  | [select](#a61541e0bea41735419f0db00c75fff3e) (int comInterfaces, char \*\*ComFileName) |
| void  | [reset](#ad20897c5c8bd47f5d4005989bead0e55) () |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static <a href="classm_a_d_k___p_p___prot.md">mADK_PP_Prot</a> \*  | [getInstance](#a6b7b719a059719a202022830931b241b) () |

## DetailedDescription {#detailed-description}

wrapper class for SDI protocol (API of lib_mADK_PP_Prot.so) This class allows to create exactly one object instance (singleton).

## MemberEnumeration Documentation {#member-enumeration-documentation}

## AbortState <a href="#a7515c365720349ec545c891978cc2256" id="a7515c365720349ec545c891978cc2256"></a>

<p>enum [AbortState](#a7515c365720349ec545c891978cc2256)</p>

| Enumerator |  |
|----|----|
| AS_NotAborted  |  |
| AS_AbortIdle  | <p>no abort was triggered</p> |
| AS_ConnectionLost  | <p>abort next call of [receive()](#ab2e55bafa77bcbdbeda4258ecadd5357) in idle loop</p> |

## CMDActiveType <a href="#a698cbe53af5c397dcf4dac14ea8880e6" id="a698cbe53af5c397dcf4dac14ea8880e6"></a>

<p>enum [CMDActiveType](#a698cbe53af5c397dcf4dac14ea8880e6)</p>

type of active command, returned by command_active

| Enumerator |  |
|----|----|
| CMD_None  | <p>no command is active, [receive()](#ab2e55bafa77bcbdbeda4258ecadd5357) wasn\'t called</p> |
| CMD_Active  | <p>[receive()](#ab2e55bafa77bcbdbeda4258ecadd5357) was called and a command is active</p> |
| CMD_Nested  | <p>a nested command (within a callback) is active</p> |

## ProtocolState <a href="#ad77822a0ad67023ae49897b8b80c151d" id="ad77822a0ad67023ae49897b8b80c151d"></a>

<p>enum [ProtocolState](#ad77822a0ad67023ae49897b8b80c151d)</p>

| Enumerator |  |
|----|----|
| PS_Stopped  | <p>protocol stopped</p> |
| PS_Running  | <p>protocol running</p> |
| PS_Aborted  | <p>protocol aborted by [stop()](#a8c528baf37154d347366083f0f816846) function (wait for thread termination)</p> |

## MemberFunction Documentation {#member-function-documentation}

## abort() <a href="#ae75017b64297bc5a74260a768fb86cf1" id="ae75017b64297bc5a74260a768fb86cf1"></a>

<p>bool abort</p>

If the SDI main thread is waiting in idle loop for incomming commands with function [receive()](#ab2e55bafa77bcbdbeda4258ecadd5357)/poll(), this function can be called from another thread to abort the waiting main thread. If SDI main thread is not idle (e.g. when processing a command), the internal abort flag is set only, which will abort [receive()](#ab2e55bafa77bcbdbeda4258ecadd5357)/poll() at once, when SDI main thread is idle again. In other words, [abort()](#ae75017b64297bc5a74260a768fb86cf1) won\'t abort [recv_response()](#a0bb666307a7aa15fc7aae63d454e4394) used to receive responses or nested SDI commands. It affects the idle loop only.

### Returns

true in case that SDI main thread was idle and reveive()/poll() was aborted immediatelly, else false (abort flag set for pending abort, when SDI gets idle again).


{% hint style="info" %}
With successful abort, [receive()](#ab2e55bafa77bcbdbeda4258ecadd5357)/poll() will return false
{% endhint %}

## check_abort() <a href="#aa678c3364670ab6f479de87652ada0b4" id="aa678c3364670ab6f479de87652ada0b4"></a>

<p>bool check_abort</p>

inline

check, if the remote device has sent an abort command 20-02 to cancel the urrent active command.

### Returns

true if the device has sent an abort, else false


{% hint style="info" %}
This flag is reset when sending the command response with [send()](#a1f13b08d59a38adeb5d755179befa6b8).
{% endhint %}

## command() <a href="#a345e47376ab38e76aa77b2bd774b104d" id="a345e47376ab38e76aa77b2bd774b104d"></a>

<p>bool command</p>

send a unidirectional command (without receiving a response) over main connection. For commands having a response, please use [request()](#a1630f914c3dbf9ebc62ad6a5c7f9ebd9) and [recv_response()](#a0bb666307a7aa15fc7aae63d454e4394).

**Parameters**

\[in\] **cmd** pointer to command buffer \[in\] **size** size of command buffer

### Returns

true if command was passed to protocol, false is returned for: -parameter error -protocol isn\'t connected to remote device


{% hint style="info" %}
This function always sends the command, disregarding SDI server is recently processing a command or not.
This function is not allowed to be used by SDI side connection threads.
{% endhint %}

## command_active() <a href="#af28b6669bc9832ba7a9ad10765341494" id="af28b6669bc9832ba7a9ad10765341494"></a>

<p>enum [CMDActiveType](#a698cbe53af5c397dcf4dac14ea8880e6) command_active</p>

inline

SDI server has already called [receive()](#ab2e55bafa77bcbdbeda4258ecadd5357) to process a command from main connection and not yet finished this command with call of [send()](#a1f13b08d59a38adeb5d755179befa6b8). return active command type, see enum CMDActiveType

## connected() <a href="#aa0fd96bc25e3d509fb54028c2e4b91f6" id="aa0fd96bc25e3d509fb54028c2e4b91f6"></a>

<p>bool connected</p>

inline

check if connection, which belongs to the invoking thread, is still alive.

### Returns

true, if the connection is alive, else false for disturbed connection or if there is no connection, which belongs to the invoking thread


{% hint style="info" %}
This function uses [get_handle()](#ac4ab6dfcd39150866277c10883e3cc1a) and is allowed to be invoked by both, the SDI main thread and side connection threads
{% endhint %}

## free_connection_info() <a href="#ab838213968e74a9456a7eb4dcfc820b6" id="ab838213968e74a9456a7eb4dcfc820b6"></a>

<p>void free_connection_info</p>

free the connection information, see description of mADK_PP_Prot_FreeConnectInfo()

## get_connection_info() <a href="#a5e27866e15dfcacd243894c3271e07e7" id="a5e27866e15dfcacd243894c3271e07e7"></a>

<p>bool get_connection_info</p>

read the connection information, see description of mADK_PP_Prot_GetConnectInfo()

## get_handle() <a href="#ac4ab6dfcd39150866277c10883e3cc1a" id="ac4ab6dfcd39150866277c10883e3cc1a"></a>

<p>void \* get_handle</p>

return the connection handle, which belongs to the invoking thread. The SDI main thread (and also other application threads) get the handle of the main connection. Side connection threads get the handle of its side connection.

### Returns

connection handle for invoking thread, NULL if there is no active connection.

## get_protocol_state() <a href="#a6d4649d555fb71b605cda7b61162d030" id="a6d4649d555fb71b605cda7b61162d030"></a>

<p>enum [ProtocolState](#ad77822a0ad67023ae49897b8b80c151d) get_protocol_state</p>

inline

return current the state of the protocol (stopped, running, aborted)

### Returns

protocol state, see enum ProtocolState

## get_protocol_type() <a href="#ae0bc09fd8222a3c92e69a59e0ef6b41f" id="ae0bc09fd8222a3c92e69a59e0ef6b41f"></a>

<p>char get_protocol_type</p>

returns the protocol type of the recent command from main connetion or side connection

### Returns

\'A\', \'B\', \'C\' or \'D\' if a command is active, else 0

## get_status() <a href="#ab830518e59100970fe386745510590f5" id="ab830518e59100970fe386745510590f5"></a>

<p>bool get_status</p>

read the protocol status, see description of mADK_PP_Prot_GetStatus()

## get_tcp_info() <a href="#a67beb232925c781e9e84d7f403c2fbcb" id="a67beb232925c781e9e84d7f403c2fbcb"></a>

<p>bool get_tcp_info</p>

check if connection, which belongs to the invoking thread, is a TCP/IP connection. In this case connection details of the remote TCP/IP client are returned with parameter `info`.

### Returns

true in case of a TCP/IP connection, else false for error, e.g. the thread serves another type of connection or the connection was already lost.


{% hint style="info" %}
This function uses [get_handle()](#ac4ab6dfcd39150866277c10883e3cc1a) and is allowed to be invoked by both, the SDI main thread and side connection threads.
{% endhint %}

## get_uds_info() <a href="#a6e7b3567bd0e3561d3f969e6df82233d" id="a6e7b3567bd0e3561d3f969e6df82233d"></a>

<p>bool get_uds_info</p>

check if connection, which belongs to the invoking thread, is an UDS connection. In this case connection details of the remote UDS client are returned with parameter `info`.

### Returns

true in case of an UDS connection, else false for error, e.g. the thread servers another type of connection or the connection was already lost.


{% hint style="info" %}
This function uses [get_handle()](#ac4ab6dfcd39150866277c10883e3cc1a) and is allowed to be invoked by both, the SDI main thread and side connection threads.
{% endhint %}

## getInstance() <a href="#a6b7b719a059719a202022830931b241b" id="a6b7b719a059719a202022830931b241b"></a>

<p><a href="classm_a_d_k___p_p___prot.md">mADK_PP_Prot</a> \* getInstance</p>

static

creates/returns the protocol instance as singleton object

### Returns

pointer to <a href="classm_a_d_k___p_p___prot.md">mADK_PP_Prot</a> singleton object

## isConnectionThread() <a href="#aa2bd5319e2acc8c8de0b9f1c1395e77c" id="aa2bd5319e2acc8c8de0b9f1c1395e77c"></a>

<p>bool isConnectionThread</p>

check if the calling thread is a protocol thread (not SDI main thread or a sibling of it). This is usually the case if <a href="main_8cpp.md#a4892e1b795462119ef4d6fa87c860b90">process_side_command()</a> is invoked to process the command as side command asynchronously.

### Returns

true, if the calling thread is a protocol connection thread


{% hint style="info" %}
Don\'t use this function from inside [mADK_PP_Prot::set_command()](#ab390ac45aaaa013d33bcef40d625f142), before the handle was set into <a href="class_connection_context.md">ConnectionContext</a>.
This function returns also true, if the connection thread caring about the main connection (and usually serving the SDI main thread) invokes this function. Finally, this is correct, since if a type C or D command is received on the main connection, this command must be handled as a side command and the main connection thread must invoke <a href="main_8cpp.md#a4892e1b795462119ef4d6fa87c860b90">process_side_command()</a> instead of providing the SDI command to the SDI main thread. See also function [isMainConnectionThread()](#ab109345afd11af36903830d8d5e06f75) to check, if the connection thread is the thread caring about the main connection
{% endhint %}

## isMainConnectionThread() <a href="#ab109345afd11af36903830d8d5e06f75" id="ab109345afd11af36903830d8d5e06f75"></a>

<p>bool isMainConnectionThread</p>

check if the calling thread is a protocol thread, which cares about the main connection, which owns the payment lock. Please note that the function will return false for SDI main thread or a sibling of it. Only a protocol thread usually does asynchronous processing of SDI commands can be the main connection thread.

### Returns

true, if the calling thread is a protocol connection thread, which cares about the main connection.


{% hint style="info" %}
See also [isConnectionThread()](#aa2bd5319e2acc8c8de0b9f1c1395e77c), which returns true for all protocol connection threads.
{% endhint %}

## loadAcl() <a href="#a06933abaabc7a6dcd0b7bd8882efad9f" id="a06933abaabc7a6dcd0b7bd8882efad9f"></a>

<p>bool loadAcl</p>

Load/Reload Access Control List configurations

### Returns

true on success, otherwise false

## loader() <a href="#aa78a57fb6d6e8185fbfe78a1ff56c200" id="aa78a57fb6d6e8185fbfe78a1ff56c200"></a>

<p>struct <a href="structm_a_d_k___p_p___prot___loader.md">mADK_PP_Prot_Loader</a>\* loader</p>

inline

function to access the library loader from static function mADK_PP_Prot::run()

### Returns

pointer to <a href="structm_a_d_k___p_p___prot___loader.md">mADK_PP_Prot_Loader</a> object

## poll() <a href="#a671f8a7fd53920c9532b898a8a26f165" id="a671f8a7fd53920c9532b898a8a26f165"></a>

<p>bool poll</p>

poll for an incomming command on main connection

**Parameters**

\[in\] **timeout_msec** wait timeout in milliseconds A negative value means waiting infinite.

### Returns

true, if a command is available In case of timeout or abort, false is returned.


{% hint style="info" %}
This function is not allowed to be used by SDI side connection threads.
{% endhint %}

## receive() <a href="#ab2e55bafa77bcbdbeda4258ecadd5357" id="ab2e55bafa77bcbdbeda4258ecadd5357"></a>

<p>bool receive</p>

receive a new SDI command from main connection

**Parameters**

\[out\] **cmd** received protocol command (empty vector in case of timeout) \[in\] **timeout_msec** receive timeout in milliseconds. A negative value means waiting infinite.

### Returns

true, if the command was received successfully. In case of timeout or abort, false is returned.


{% hint style="info" %}
This function is not allowed to be used by SDI side connection threads.
{% endhint %}

## recv_response() <a href="#a0bb666307a7aa15fc7aae63d454e4394" id="a0bb666307a7aa15fc7aae63d454e4394"></a>

<p>bool recv_response</p>

receive a response on main connection of a pequest previously sent with function [request()](#a1630f914c3dbf9ebc62ad6a5c7f9ebd9).

**Parameters**

\[out\] **response** received request response (empty vector in case of error/timeout) \[in\] **timeout_msec** receive timeout in milliseconds. A negative value means waiting infinite.

### Returns

true, if the request response was received successfully. false is returned for: -if no reuqest is recently active (parameter response is empty) -receive error or timeout (parameter response is empty) -message received, but no response for the current request (parameter response contains the received command, which might be processed by SDI server as nested command while the current request is active)


{% hint style="info" %}
This function is not allowed to be used by SDI side connection threads.
{% endhint %}

## request()\[1/2\] <a href="#addef44d3ee301a4179eb0e143b059024" id="addef44d3ee301a4179eb0e143b059024"></a> {#request-12}

<p>bool request</p>

inline

shortcut for function [request()](#a1630f914c3dbf9ebc62ad6a5c7f9ebd9) above using a vector for request command

## request()\[2/2\] <a href="#a1630f914c3dbf9ebc62ad6a5c7f9ebd9" id="a1630f914c3dbf9ebc62ad6a5c7f9ebd9"></a> {#request-22}

<p>bool request</p>

send a request over main connection. Use [recv_response()](#a0bb666307a7aa15fc7aae63d454e4394) afterwards to receive the request response. Recently supported request types are: 91-xx: EMV callbacks (with response 92-xx) 9B-xx: Control callbacks (with response 9C-xx)

**Parameters**

\[in\] **cmd** pointer to request buffer \[in\] **size** size of request buffer

### Returns

true, if the request was sent successfully. false is returned for -parameter error -no SDI command is active -another request is already active -request type is not supported (unknown request type) -protocol isn\'t connected to remote device


{% hint style="info" %}
This function does not send the request, if no SDI command is active.
This function is not allowed to be used by SDI side connection threads.
{% endhint %}

## reset() <a href="#ad20897c5c8bd47f5d4005989bead0e55" id="ad20897c5c8bd47f5d4005989bead0e55"></a>

<p>void reset</p>

reset the protocol. This will close all active connections and lead to invocation of select_cb() to read new COM settings including COM setup

## select() <a href="#a61541e0bea41735419f0db00c75fff3e" id="a61541e0bea41735419f0db00c75fff3e"></a>

<p>int select</p>

used by select_cb() to select the COM profile for the protocol

**Parameters**

\[in\] **comInterfaces** bitmask of supported COM interfaces (see ADKCOM property COM_PROP_SUPP_INTERFACES) \[in\] **ComFileName** new ADKCOM communication profile to be used (C-string).


{% hint style="info" %}
This function is intented for protocol thread only and must not be used from SDI server directly!
{% endhint %}

## send()\[1/2\] <a href="#ab7bb7ccacd456083681bb2ecafac3d77" id="ab7bb7ccacd456083681bb2ecafac3d77"></a> {#send-12}

<p>bool send</p>

inline

shortcut for function [send()](#a1f13b08d59a38adeb5d755179befa6b8) above using a vector

## send()\[2/2\] <a href="#a1f13b08d59a38adeb5d755179befa6b8" id="a1f13b08d59a38adeb5d755179befa6b8"></a> {#send-22}

<p>bool send</p>

send a command response

**Parameters**

\[in\] **cmd** pointer to command buffer \[in\] **size** size of command buffer

### Returns

true if the command was passed to protocol, false is returned for: -parameter error -no command active -protocol isn\'t connected to remote device


{% hint style="info" %}
This function does not send the response for main connection, if no command is active.
Function is allowed to be used from a SDI side connection thread, which has the same effect as the invocation of \_send().
{% endhint %}

## set_busy() <a href="#a5f545ea92dfa23883944cf61437cc189" id="a5f545ea92dfa23883944cf61437cc189"></a>

<p>bool set_busy</p>

set SDI server busy and decline incoming commands with busy response. This is required to get an exclusive lock to decline incoming SDI commands. The lock is applied to both, main connection (type A/B/D) and side connections (type C/D). The type of lock depends on the context from which the function is invoked:

- Set `cmd_ctx` to true (default) if the function is used during processing of an active command, which will set SDI server out of order for a specific time, e.g. a command for a SW update. During duration of this command, SDI server will decline commands on other connections. Only this connection, which belongs to the invoking thread, is able to process further commands.

- Set `cmd_ctx` to false, if this function is used out of a command context, e.g. when entering the UI menu to block all connections and to disallow command processing basically.
  {% hint style="info" %}
  In the case that another SDI command (type A/B/C/D) is pending or already processed, the exclusive lock is not obtained and the function returns false. The function will return true, if it is invoked at twice to obtain the lock, in this case one function call is required to release the lock again (no recursive locking possible).
  This function uses [get_handle()](#ac4ab6dfcd39150866277c10883e3cc1a) and is allowed to be invoked by both, the SDI main thread and side connection threads.
  {% endhint %} **Parameters**

  \[in\] **flag** set to true to obtain the exclusive lock to set SDI server busy. Reset with false to unlock SDI server to accept new commands again, in this case the function return value is always true. \[in\] **cmd_ctx** set to true, if function is invoked during an active SDI command, set to false for cases to block all connections (e.g. to enter menu). This parameter is ignored, if flag is set to false to release the lock.

  ### Returns

  true for success, else false (in case that other SDI commands are pending or processed)

## set_com_profile() <a href="#a66bbb300025687b2648bf12ea355f428" id="a66bbb300025687b2648bf12ea355f428"></a>

<p>void set_com_profile</p>

set/switch to a new ADKCOM profile, see description of mADK_PP_Prot_SelectComProfile()

## set_command() <a href="#ab390ac45aaaa013d33bcef40d625f142" id="ab390ac45aaaa013d33bcef40d625f142"></a>

<p>void set_command</p>

used by command_callback() to take over the recent received command for processing

**Parameters**

\[in\] **handle** session handle used to indetify connection \[in\] **cmd** pointer to command buffer \[in\] **size** size of the command buffer \[in\] **protType** protocol type \[in\] **msgId** message ID from protocol header type \'D\' (or 0, if protType is not \'D\')


{% hint style="info" %}
This function is intented for protocol thread only and must not be used from SDI server directly!
{% endhint %}

## setRecoveryMode() <a href="#ab65e00f98394d90b75bc7406dfa4efe9" id="ab65e00f98394d90b75bc7406dfa4efe9"></a>

<p>void setRecoveryMode</p>

activate / deactivate recovery mode

**Parameters**

**on_off** switch recovery mode on or off

## start() <a href="#aad5997aaaa2d622f0ca57f8b24a51a7b" id="aad5997aaaa2d622f0ca57f8b24a51a7b"></a>

<p>bool start</p>

start (or restart) the protocol (if not running yet or if it was stopped)

### Returns

true if the protocol was started or is already running, false for error, if the protocol couldn\'t be started.

## stop() <a href="#a8c528baf37154d347366083f0f816846" id="a8c528baf37154d347366083f0f816846"></a>

<p>void stop</p>

stop the running protocol.

{% hint style="info" %}
This function block until the protocol thread terminates. It does nothing, if the protocol wasn\'t started or already stopped.
{% endhint %}

## trusted_connection() <a href="#afd80db538f844114879d9a5868f63aca" id="afd80db538f844114879d9a5868f63aca"></a>

<p>bool trusted_connection</p>

check if connection, which belongs to the invoking thread, is a local (trusted) connection.

### Returns

true, if the connection is a local (trusted) connection


{% hint style="info" %}
This function uses [get_handle()](#ac4ab6dfcd39150866277c10883e3cc1a) and is allowed to be invoked by both, the SDI main thread and side connection threads.
{% endhint %}

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="madk__pp__protocol_8h_source.md">madk_pp_protocol.h</a>
- sdi/src/<a href="madk__pp__protocol_8cpp.md">madk_pp_protocol.cpp</a>

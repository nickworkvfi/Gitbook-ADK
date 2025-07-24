---
hidden: true
title: IpcServer\< Service \> Class Template Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="ipcserver_8h_source.md">ipcserver.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [IpcServer](#a7477d0bb89e2b8aaa285f8e6525c2051) () |
|   | [\~IpcServer](#a1e1016d19546b3ce68a09a5a9e25b26a) () |
| void  | [set](#a6c71e45e9e2b98bd37d658e079cf45e4) (<a href="classvfiipc_1_1_i_p_c.md">vfiipc::IPC</a> \*ipc) |
| bool  | [run](#a531e20ac2de740026b25f32dd70b16e4) (<a href="classvfiipc_1_1_i_p_c.md">vfiipc::IPC</a> \*ipc, const Service &init_value) |
| bool  | [stop](#ad6c437bd29e6b2ba430750e6d3322055) (void) |

## DetailedDescription {#detailed-description}

### template\<classService\>
class IpcServer\< Service \>

template class for creating a IPC server interface

**Parameters**

\[in\] **Service** Class containing the service that is run on the server. This class must provide the following features:It must have been derived from class Thread so that processing can be started as separate thread.It must have a copy constructor.It must have a method setIO(IPC \*io) that accepts a pointer to an IPC object. This object is used for receiving / sending data from / to the network.It must have a method bool failure(IPC \*io) const that is invoked in case of IPC::accept() returns with an error. The listen IPC object is passed to this function. Function failure() recover the listen IPC object (if required). Function failure() returns true, the server will continue, otherwise with false function run() will return.The destructor must delete the IPC object passed on to setIO().

## Constructor& Destructor Documentation

## IpcServer() <a href="#a7477d0bb89e2b8aaa285f8e6525c2051" id="a7477d0bb89e2b8aaa285f8e6525c2051"></a>

<p><a href="class_ipc_server.md">IpcServer</a></p>

inline

Set up a server that accepts connections on IPC object.

{% hint style="info" %}
<a href="class_ipc_server.md">IpcServer</a> object overtakes ownership and frees the IPC instance in destructor
{% endhint %}

## \~IpcServer() <a href="#a1e1016d19546b3ce68a09a5a9e25b26a" id="a1e1016d19546b3ce68a09a5a9e25b26a"></a>

<p>\~<a href="class_ipc_server.md">IpcServer</a></p>

inline

## MemberFunction Documentation {#member-function-documentation}

## run() <a href="#a531e20ac2de740026b25f32dd70b16e4" id="a531e20ac2de740026b25f32dd70b16e4"></a>

<p>bool run</p>

Run the server synchronously, therefore, the function will block as long as the server is running and not stopped.

**Parameters**

\[in\] **ipc** IPC server object (must be valid as long as server is running). If set() with an IPC object was already invoked, this parameter is ignored. \[in\] **init_value** initialization value for the objects created to handle server requests.

### Returns

false if starting the server failed. true if the server was successfully started and aborted by [stop()](#ad6c437bd29e6b2ba430750e6d3322055) function. After the function has returned, the caller is again responsible for the IPC object. Finally, [set()](#a6c71e45e9e2b98bd37d658e079cf45e4) and [run()](#a531e20ac2de740026b25f32dd70b16e4) can be call with another IPC object.

## set() <a href="#a6c71e45e9e2b98bd37d658e079cf45e4" id="a6c71e45e9e2b98bd37d658e079cf45e4"></a>

<p>void set</p>

inline

set IPC object to use for [run()](#a531e20ac2de740026b25f32dd70b16e4) and [stop()](#ad6c437bd29e6b2ba430750e6d3322055) afterwards

**Parameters**

\[in\] **ipc** IPC server object (must be valid as long as server is running)

## stop() <a href="#ad6c437bd29e6b2ba430750e6d3322055" id="ad6c437bd29e6b2ba430750e6d3322055"></a>

<p>bool stop</p>

Stop the server accepting new connections

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdi/src/<a href="ipcserver_8h_source.md">ipcserver.h</a>

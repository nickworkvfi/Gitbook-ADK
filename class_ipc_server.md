---
title: IpcServer

---

# IpcServer



 [More...](#detailed-description)


`#include <ipcserver.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[IpcServer](class_ipc_server.md#function-ipcserver)**() |
| | **[~IpcServer](class_ipc_server.md#function-~ipcserver)**() |
| void | **[set](class_ipc_server.md#function-set)**([vfiipc::IPC](classvfiipc_1_1_i_p_c.md) * ipc) |
| bool | **[run](class_ipc_server.md#function-run)**([vfiipc::IPC](classvfiipc_1_1_i_p_c.md) * ipc, const Service & init_value) |
| bool | **[stop](class_ipc_server.md#function-stop)**(void ) |

## Detailed Description

```cpp
template <class Service >
class IpcServer;
```


**Parameters**: 

  * **Service** Class containing the service that is run on the server. This class must provide the following features:

* It must have been derived from class [Thread](class_thread.md) so that processing can be started as separate thread.
* It must have a copy constructor.
* It must have a method setIO(IPC *io) that accepts a pointer to an IPC object. This object is used for receiving / sending data from / to the network.
* It must have a method bool failure(IPC *io) const that is invoked in case of IPC::accept() returns with an error. The listen IPC object is passed to this function. Function failure() recover the listen IPC object (if required). Function failure() returns true, the server will continue, otherwise with false function [run()](class_ipc_server.md#function-run) will return.
* The destructor must delete the IPC object passed on to setIO(). 


template class for creating a IPC server interface 

## Public Functions Documentation

### function IpcServer

```cpp
inline IpcServer()
```


**Note**: [IpcServer](class_ipc_server.md) object overtakes ownership and frees the IPC instance in destructor 

Set up a server that accepts connections on IPC object. 


### function ~IpcServer

```cpp
inline ~IpcServer()
```


### function set

```cpp
inline void set(
    vfiipc::IPC * ipc
)
```


**Parameters**: 

  * **ipc** IPC server object (must be valid as long as server is running) 


set IPC object to use for [run()](class_ipc_server.md#function-run) and [stop()](class_ipc_server.md#function-stop) afterwards 


### function run

```cpp
bool run(
    vfiipc::IPC * ipc,
    const Service & init_value
)
```


**Parameters**: 

  * **ipc** IPC server object (must be valid as long as server is running). If [set()](class_ipc_server.md#function-set) with an IPC object was already invoked, this parameter is ignored. 
  * **init_value** initialization value for the objects created to handle server requests. 


**Return**: false if starting the server failed. true if the server was successfully started and aborted by [stop()](class_ipc_server.md#function-stop) function. After the function has returned, the caller is again responsible for the IPC object. Finally, [set()](class_ipc_server.md#function-set) and [run()](class_ipc_server.md#function-run) can be call with another IPC object. 

Run the server synchronously, therefore, the function will block as long as the server is running and not stopped. 


### function stop

```cpp
bool stop(
    void 
)
```


Stop the server accepting new connections 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
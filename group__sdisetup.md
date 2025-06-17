---
title: SDI client setup

---

# SDI client setup



## Functions

|                | Name           |
| -------------- | -------------- |
| | **[SDIClient](group__sdisetup.md#function-sdiclient)**() |
| virtual | **[~SDIClient](group__sdisetup.md#function-~sdiclient)**() |
| void | **[setProtocol](group__sdisetup.md#function-setprotocol)**(ProtocolType proto) |
| void | **[setTrace](group__sdisetup.md#function-settrace)**(void * data, void(*)(void *data, const char *format,...) trace_cb) |
| template <typename R ,typename T \> <br>void | **[setTrace](group__sdisetup.md#function-settrace)**(T * data, R(*)(T *data, const char *format,...) trace) |
| int | **[connect](group__sdisetup.md#function-connect)**(const char * host, unsigned short port =12000) |
| int | **[connect](group__sdisetup.md#function-connect)**([vfiipc::IPC](classvfiipc_1_1_i_p_c.md) * link) |
| bool | **[connected](group__sdisetup.md#function-connected)**() const |
| void | **[close](group__sdisetup.md#function-close)**() |
| void | **[setLogCallbacks](group__sdisetup.md#function-setlogcallbacks)**(void * data, LogCallback error, LogCallback debug) |


## Functions Documentation

### function SDIClient

```
SDIClient()
```


constructor 


### function ~SDIClient

```
virtual ~SDIClient()
```


destructor 


### function setProtocol

```
void setProtocol(
    ProtocolType proto
)
```


**Parameters**: 

  * **proto** protocol type 


set protocol type


### function setTrace

```
void setTrace(
    void * data,
    void(*)(void *data, const char *format,...) trace_cb
)
```


### function setTrace

```
template <typename R ,
typename T >
inline void setTrace(
    T * data,
    R(*)(T *data, const char *format,...) trace
)
```


**Parameters**: 

  * **data** data pointer to be passed to the trace callback 
  * **trace** trace callback function, use NULL to reset the callback 


**Note**: The interface can be used for tracing with fprintf like this: setTrace(stderr,fprintf) 

set trace callback function. The trace callback traces sent and received bytes and can be used for logging 


### function connect

```
int connect(
    const char * host,
    unsigned short port =12000
)
```


**Parameters**: 

  * **host** host name or path name of unix domain socket 
  * **port** TCP port number, ignored in case of unix domain socket 


**Return**: OK in case of success, ERR_NOT_CONNECTED in case of failure 

connect to SDI server 


### function connect

```
int connect(
    vfiipc::IPC * link
)
```


**Parameters**: 

  * **link** already connected IPC object 


**Return**: OK in case of success, ERR_NOT_CONNECTED in case of failure (e.g. link==0) 

**Note**: If successful, ownership is transferred to [SDIClient](classvfisdi_1_1_s_d_i_client.md). The Object will be deleted when invoking [close()](group__sdisetup.md#function-close); 

set up connection to SDI server 


### function connected

```
bool connected() const
```


**Return**: true if a connection exists, false if not. 

check whether a connection to SDI server exists 


### function close

```
void close()
```


close connection to SDI server 


### function setLogCallbacks

```
void setLogCallbacks(
    void * data,
    LogCallback error,
    LogCallback debug
)
```


**Parameters**: 

  * **data** data pointer passed to the log callbacks 
  * **error** error logging callback 
  * **debug** debug logging callback 


set logging callbacks 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
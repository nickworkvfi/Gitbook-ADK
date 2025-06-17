---
title: tmsEventData

---

# tmsEventData



 [More...](#detailed-description)


`#include <svc_tms.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[status](structtms_event_data.md#variable-status)**  |
| int | **[evtType](structtms_event_data.md#variable-evttype)**  |
| int | **[handle](structtms_event_data.md#variable-handle)**  |
| int | **[putFileType](structtms_event_data.md#variable-putfiletype)**  |
| int | **[numFileEntries](structtms_event_data.md#variable-numfileentries)**  |
| unsigned char | **[removeFile](structtms_event_data.md#variable-removefile)**  |
| int | **[appStatus](structtms_event_data.md#variable-appstatus)**  |
| char[MAX_TMS_FILENAME_LENGTH] | **[filename](structtms_event_data.md#variable-filename)**  |
| char[MAX_TMS_FILENAME_LENGTH] | **[filepath](structtms_event_data.md#variable-filepath)**  |
| int | **[eventMask](structtms_event_data.md#variable-eventmask)**  |
| char[MAX_TRANSACTION_TYPE_STR_LEN] | **[transactionType](structtms_event_data.md#variable-transactiontype)**  |
| union tmsEventData::@14 | **[notificationData](structtms_event_data.md#variable-notificationdata)**  |

## Detailed Description

```cpp
struct tmsEventData;
```


The TMS [Event](struct_event.md) structure that needs to be handled by the callback function provided in the applications [tms_registerApplication()](svc__tms_8h.md#function-tms-registerapplication) call. The strcuture has detailed information about the events that the application gets notified of. 

## Public Attributes Documentation

### variable status

```cpp
int status;
```


status of the event 


### variable evtType

```cpp
int evtType;
```


type of event 


### variable handle

```cpp
int handle;
```


a handle that can be used for tracking purposes - gets passed back in certain response functions 


### variable putFileType

```cpp
int putFileType;
```


type of file to process for TMS_EVT_PUT_FILE events 


### variable numFileEntries

```cpp
int numFileEntries;
```


number of entries in a file (applies to TMS_EVT_SET_APP_INFO/TMS_EVT_SET_PARM_LIST response) 


### variable removeFile

```cpp
unsigned char removeFile;
```


whether to remove file after it is received by the agent (applies to TMS_EVT_GET_FILE response) 


### variable appStatus

```cpp
int appStatus;
```


status of application in response to TMS_EVT_SET_APP_STATE request 


### variable filename

```cpp
char[MAX_TMS_FILENAME_LENGTH] filename;
```


filename to process (may be empty) - used for TMS_EVT_GET_FILE, TMS_EVT_PUT_FILE and TMS_EVT_DEL_FILE events 


### variable filepath

```cpp
char[MAX_TMS_FILENAME_LENGTH] filepath;
```


Path where the file will go (may be empty) - used for TMS_EVT_GET_FILE, TMS_EVT_PUT_FILE and TMS_EVT_DEL_FILE events 


### variable eventMask

```cpp
int eventMask;
```


mask of events for TMS_EVT_NOTIFICATION event 


### variable transactionType

```cpp
char[MAX_TRANSACTION_TYPE_STR_LEN] transactionType;
```


type of transaction to perform in TMS_EVT_DO_TRANSACTION event 


### variable notificationData

```cpp
union tmsEventData::@14 notificationData;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
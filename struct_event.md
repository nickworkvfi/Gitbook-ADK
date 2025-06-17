---
title: Event

---

# Event



 [More...](#detailed-description)


`#include <libevt.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [UID](libevt_8h.md#typedef-uid) | **[id](struct_event.md#variable-id)** <br>[Event](struct_event.md) ID. Must be specified by both raise and wait sides.  |
| long | **[handle](struct_event.md#variable-handle)** <br>OS [Event](struct_event.md) handle or EVT_ANY_HANDLE.  |
| uint64_t | **[raised_timestamp](struct_event.md#variable-raised-timestamp)** <br>Timestamp of raised event. Unix time in seconds.  |
| uint16_t | **[raised_version](struct_event.md#variable-raised-version)** <br>[Event](struct_event.md) version. Data is componentID/eventID specific.  |
| uint8_t | **[raised_flag](struct_event.md#variable-raised-flag)** <br>Raising flag. Indicates that [Event](struct_event.md) was successfully received.  |
| long | **[raised_handle](struct_event.md#variable-raised-handle)** <br>OS [Event](struct_event.md) return Handle.  |
| char[EVT_DATA_SIZE] | **[raised_data](struct_event.md#variable-raised-data)** <br>Additional data for received [Event](struct_event.md).  |

## Detailed Description

```cpp
struct Event;
```


ADK [Event](struct_event.md) structure. 

## Public Attributes Documentation

### variable id

```cpp
UID id;
```

[Event](struct_event.md) ID. Must be specified by both raise and wait sides. 

### variable handle

```cpp
long handle;
```

OS [Event](struct_event.md) handle or EVT_ANY_HANDLE. 

### variable raised_timestamp

```cpp
uint64_t raised_timestamp;
```

Timestamp of raised event. Unix time in seconds. 

### variable raised_version

```cpp
uint16_t raised_version;
```

[Event](struct_event.md) version. Data is componentID/eventID specific. 

### variable raised_flag

```cpp
uint8_t raised_flag;
```

Raising flag. Indicates that [Event](struct_event.md) was successfully received. 

### variable raised_handle

```cpp
long raised_handle;
```

OS [Event](struct_event.md) return Handle. 

### variable raised_data

```cpp
char[EVT_DATA_SIZE] raised_data;
```

Additional data for received [Event](struct_event.md). 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
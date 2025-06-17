---
title: tmsReturn

---

# tmsReturn



 [More...](#detailed-description)


`#include <svc_tms.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[status](structtms_return.md#variable-status)**  |
| int | **[handle](structtms_return.md#variable-handle)**  |

## Detailed Description

```cpp
struct tmsReturn;
```


The structure returned in response to some TMS APIs. This structure is returned when communication with the TMS Agent is required and an immediate response may not be available. In these cases, the status field will indicate TMS_STATUS_REQUESTED, and the handle will be used to track the ultimate response from the TMS Agent. When the agent is able to respond to the request, it will send the response in a [tmsEventData](structtms_event_data.md) structure with the handle of that structure set to the same value as the handle returned in this structure. 

## Public Attributes Documentation

### variable status

```cpp
int status;
```


Return state value - TMS_STATUS_REQUESTED indicates the request was successfully made to the TMS Agent 


### variable handle

```cpp
int handle;
```


Handle for tracking purposes - valid handle is > 0 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
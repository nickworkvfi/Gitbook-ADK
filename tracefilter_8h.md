---
title: sdi/src/tracefilter.h

---

# sdi/src/tracefilter.h



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[filterCommand](tracefilter_8h.md#function-filtercommand)**(const unsigned char * cmd, unsigned cmdSize, std::string & out) |
| void | **[filterResponse](tracefilter_8h.md#function-filterresponse)**(const unsigned char * cmd, unsigned cmdSize, const unsigned char * rsp, unsigned rspSize, std::string & out) |


## Functions Documentation

### function filterCommand

```cpp
void filterCommand(
    const unsigned char * cmd,
    unsigned cmdSize,
    std::string & out
)
```


**Parameters**: 

  * **cmd** pointer to SDI command buffer (starting wich class/instruction) 
  * **cmdSize** size of command data in buffer _cmd_
  * **out** hexdump of SDI command as STL string 


**Note**: The size of the hexdump is basically limited by MAX_TRACE_MSG_SIZE in [tracefilter.cpp](tracefilter_8cpp.md#file-tracefilter.cpp). 

Prepare and SDI command for trace and return a hexdump as STL string for it. For release build variants of SDI a trace filter is applied to command data to wipe out values of TLV tags containing sensitive data. For debug build variant the trace filter is disabled by default (use -DTRACE_FILTER to activate). 


### function filterResponse

```cpp
void filterResponse(
    const unsigned char * cmd,
    unsigned cmdSize,
    const unsigned char * rsp,
    unsigned rspSize,
    std::string & out
)
```


**Parameters**: 

  * **cmd** pointer to SDI command buffer (starting wich class/instruction) 
  * **cmdSize** size of command data in buffer _cmd_
  * **rsp** pointer to SDI response buffer (starting wich class/instruction) 
  * **rspSize** size of response data in buffer _rsp_
  * **out** hexdump of SDI response as STL string 


**Note**: The size of the hexdump is basically limited by MAX_TRACE_MSG_SIZE in [tracefilter.cpp](tracefilter_8cpp.md#file-tracefilter.cpp). 

Prepare and SDI response for trace and return a hexdump as STL string for it. For release build variants of SDI a trace filter is applied to response data to wipe out values of TLV tags containing sensitive data. For debug build variant the trace filter is disabled by default (use -DTRACE_FILTER to activate). 




## Source code

```cpp
#ifndef TRACEFILTER_H_20230811
#define TRACEFILTER_H_20230811

#include <string>

void filterCommand(const unsigned char *cmd, unsigned cmdSize, std::string &out);

void filterResponse(const unsigned char *cmd, unsigned cmdSize, const unsigned char *rsp, unsigned rspSize, std::string &out);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

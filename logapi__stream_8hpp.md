---
title: log/include/logapi_stream.hpp

---

# log/include/logapi_stream.hpp



## Namespaces

| Name           |
| -------------- |
| **[LogAPI](namespace_log_a_p_i.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[LOGAPI_STREAM](logapi__stream_8hpp.md#define-logapi-stream)**(level, ...) <br>helper macro  |
|  | **[LOGAPI_TAG_STREAM](logapi__stream_8hpp.md#define-logapi-tag-stream)**(level, tag, ...) <br>helper macro  |
|  | **[LOGS_EMERG](logapi__stream_8hpp.md#define-logs-emerg)**(...)  |
|  | **[LOGS_ALERT](logapi__stream_8hpp.md#define-logs-alert)**(...)  |
|  | **[LOGS_CRIT](logapi__stream_8hpp.md#define-logs-crit)**(...)  |
|  | **[LOGS_ERROR](logapi__stream_8hpp.md#define-logs-error)**(...)  |
|  | **[LOGS_WARN](logapi__stream_8hpp.md#define-logs-warn)**(...)  |
|  | **[LOGS_NOTICE](logapi__stream_8hpp.md#define-logs-notice)**(...)  |
|  | **[LOGS_INFO](logapi__stream_8hpp.md#define-logs-info)**(...)  |
|  | **[LOGS_TRACE](logapi__stream_8hpp.md#define-logs-trace)**(...)  |
|  | **[LOGS_TAG_EMERG](logapi__stream_8hpp.md#define-logs-tag-emerg)**(tag, ...)  |
|  | **[LOGS_TAG_ALERT](logapi__stream_8hpp.md#define-logs-tag-alert)**(tag, ...)  |
|  | **[LOGS_TAG_CRIT](logapi__stream_8hpp.md#define-logs-tag-crit)**(tag, ...)  |
|  | **[LOGS_TAG_ERROR](logapi__stream_8hpp.md#define-logs-tag-error)**(tag, ...)  |
|  | **[LOGS_TAG_WARN](logapi__stream_8hpp.md#define-logs-tag-warn)**(tag, ...)  |
|  | **[LOGS_TAG_NOTICE](logapi__stream_8hpp.md#define-logs-tag-notice)**(tag, ...)  |
|  | **[LOGS_TAG_INFO](logapi__stream_8hpp.md#define-logs-tag-info)**(tag, ...)  |
|  | **[LOGS_TAG_TRACE](logapi__stream_8hpp.md#define-logs-tag-trace)**(tag, ...)  |
|  | **[DBG_STREAM](logapi__stream_8hpp.md#define-dbg-stream)**(...)  |
|  | **[DBGS_EMERG](logapi__stream_8hpp.md#define-dbgs-emerg)**(...)  |
|  | **[DBGS_ALERT](logapi__stream_8hpp.md#define-dbgs-alert)**(...)  |
|  | **[DBGS_CRIT](logapi__stream_8hpp.md#define-dbgs-crit)**(...)  |
|  | **[DBGS_ERROR](logapi__stream_8hpp.md#define-dbgs-error)**(...)  |
|  | **[DBGS_WARN](logapi__stream_8hpp.md#define-dbgs-warn)**(...)  |
|  | **[DBGS_NOTICE](logapi__stream_8hpp.md#define-dbgs-notice)**(...)  |
|  | **[DBGS_INFO](logapi__stream_8hpp.md#define-dbgs-info)**(...)  |
|  | **[DBGS_TRACE](logapi__stream_8hpp.md#define-dbgs-trace)**(...)  |
|  | **[DBG_TAG_STREAM](logapi__stream_8hpp.md#define-dbg-tag-stream)**(...)  |
|  | **[DBGS_TAG_EMERG](logapi__stream_8hpp.md#define-dbgs-tag-emerg)**(...)  |
|  | **[DBGS_TAG_ALERT](logapi__stream_8hpp.md#define-dbgs-tag-alert)**(...)  |
|  | **[DBGS_TAG_CRIT](logapi__stream_8hpp.md#define-dbgs-tag-crit)**(...)  |
|  | **[DBGS_TAG_ERROR](logapi__stream_8hpp.md#define-dbgs-tag-error)**(...)  |
|  | **[DBGS_TAG_WARN](logapi__stream_8hpp.md#define-dbgs-tag-warn)**(...)  |
|  | **[DBGS_TAG_NOTICE](logapi__stream_8hpp.md#define-dbgs-tag-notice)**(...)  |
|  | **[DBGS_TAG_INFO](logapi__stream_8hpp.md#define-dbgs-tag-info)**(...)  |
|  | **[DBGS_TAG_TRACE](logapi__stream_8hpp.md#define-dbgs-tag-trace)**(...)  |




## Macros Documentation

### define LOGAPI_STREAM

```cpp
#define LOGAPI_STREAM(
    level,
    ...
)
    do \
    {\
        if ( int( level ) <= int(LogAPI_GetLevel())) \
        {\
            LogAPI::g_stream.getBuffer().setOpts(level, LOGAPI_FILE, LOGAPI_LINE);\
            LogAPI::g_stream << __VA_ARGS__ << std::flush;\
        }\
    } while (0)
```

helper macro 

**Warning**: Avoid direct use 

### define LOGAPI_TAG_STREAM

```cpp
#define LOGAPI_TAG_STREAM(
    level,
    tag,
    ...
)
    do \
    {\
        if ( int( level ) <= int(LogAPI_GetLevel())) \
        {\
            if ( LogAPI::g_stream.getBuffer().isInFilterList( tag ) )\
            {\
                LogAPI::g_stream.getBuffer().setOpts(level, LOGAPI_FILE, LOGAPI_LINE);\
                LogAPI::g_stream << __VA_ARGS__ << std::flush;\
            }\
        }\
    } while (0)
```

helper macro 

**Warning**: Avoid direct use 

### define LOGS_EMERG

```cpp
#define LOGS_EMERG(
    ...
)
LOGAPI_STREAM( LOGAPI_EMERG, __VA_ARGS__ )
```


### define LOGS_ALERT

```cpp
#define LOGS_ALERT(
    ...
)
LOGAPI_STREAM( LOGAPI_ALERT, __VA_ARGS__ )
```


### define LOGS_CRIT

```cpp
#define LOGS_CRIT(
    ...
)
LOGAPI_STREAM( LOGAPI_CRIT, __VA_ARGS__ )
```


### define LOGS_ERROR

```cpp
#define LOGS_ERROR(
    ...
)
LOGAPI_STREAM( LOGAPI_ERROR, __VA_ARGS__ )
```


### define LOGS_WARN

```cpp
#define LOGS_WARN(
    ...
)
LOGAPI_STREAM( LOGAPI_WARN, __VA_ARGS__ )
```


### define LOGS_NOTICE

```cpp
#define LOGS_NOTICE(
    ...
)
LOGAPI_STREAM( LOGAPI_NOTICE, __VA_ARGS__ )
```


### define LOGS_INFO

```cpp
#define LOGS_INFO(
    ...
)
LOGAPI_STREAM( LOGAPI_INFO, __VA_ARGS__ )
```


### define LOGS_TRACE

```cpp
#define LOGS_TRACE(
    ...
)
LOGAPI_STREAM( LOGAPI_TRACE, __VA_ARGS__ )
```


### define LOGS_TAG_EMERG

```cpp
#define LOGS_TAG_EMERG(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_EMERG, tag, __VA_ARGS__ )
```


### define LOGS_TAG_ALERT

```cpp
#define LOGS_TAG_ALERT(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_ALERT, tag, __VA_ARGS__ )
```


### define LOGS_TAG_CRIT

```cpp
#define LOGS_TAG_CRIT(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_CRIT, tag, __VA_ARGS__ )
```


### define LOGS_TAG_ERROR

```cpp
#define LOGS_TAG_ERROR(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_ERROR, tag, __VA_ARGS__ )
```


### define LOGS_TAG_WARN

```cpp
#define LOGS_TAG_WARN(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_WARN, tag, __VA_ARGS__ )
```


### define LOGS_TAG_NOTICE

```cpp
#define LOGS_TAG_NOTICE(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_NOTICE, tag, __VA_ARGS__ )
```


### define LOGS_TAG_INFO

```cpp
#define LOGS_TAG_INFO(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_INFO, tag, __VA_ARGS__ )
```


### define LOGS_TAG_TRACE

```cpp
#define LOGS_TAG_TRACE(
    tag,
    ...
)
LOGAPI_TAG_STREAM( LOGAPI_TRACE, tag, __VA_ARGS__ )
```


### define DBG_STREAM

```cpp
#define DBG_STREAM(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_EMERG

```cpp
#define DBGS_EMERG(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_ALERT

```cpp
#define DBGS_ALERT(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_CRIT

```cpp
#define DBGS_CRIT(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_ERROR

```cpp
#define DBGS_ERROR(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_WARN

```cpp
#define DBGS_WARN(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_NOTICE

```cpp
#define DBGS_NOTICE(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_INFO

```cpp
#define DBGS_INFO(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TRACE

```cpp
#define DBGS_TRACE(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBG_TAG_STREAM

```cpp
#define DBG_TAG_STREAM(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_EMERG

```cpp
#define DBGS_TAG_EMERG(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_ALERT

```cpp
#define DBGS_TAG_ALERT(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_CRIT

```cpp
#define DBGS_TAG_CRIT(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_ERROR

```cpp
#define DBGS_TAG_ERROR(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_WARN

```cpp
#define DBGS_TAG_WARN(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_NOTICE

```cpp
#define DBGS_TAG_NOTICE(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_INFO

```cpp
#define DBGS_TAG_INFO(
    ...
)
LOGAPI_EMPTYSTMT
```


### define DBGS_TAG_TRACE

```cpp
#define DBGS_TAG_TRACE(
    ...
)
LOGAPI_EMPTYSTMT
```


## Source code

```cpp

/* Public API:
   C++ iostream-like message log
     LOGS_ERROR( right_expr_to_<<_op )
     LOGS_WARN( right_expr_to_<<_op )
     LOGS_INFO( right_expr_to_<<_op )
     LOGS_TRACE( right_expr_to_<<_op )

     DBGS_ERROR( right_expr_to_<<_op )
     DBGS_WARN( right_expr_to_<<_op )
     DBGS_INFO( right_expr_to_<<_op )
     DBGS_TRACE( right_expr_to_<<_op )
*/
#ifndef _LOGAPI_STREAM_H
#define _LOGAPI_STREAM_H

#include "priv/logapi_stream_base.h"

namespace LogAPI
{

#define LOGAPI_STREAM( level, ... ) \
    do \
    {\
        if ( int( level ) <= int(LogAPI_GetLevel())) \
        {\
            LogAPI::g_stream.getBuffer().setOpts(level, LOGAPI_FILE, LOGAPI_LINE);\
            LogAPI::g_stream << __VA_ARGS__ << std::flush;\
        }\
    } while (0)

#define LOGAPI_TAG_STREAM( level, tag, ... ) \
    do \
    {\
        if ( int( level ) <= int(LogAPI_GetLevel())) \
        {\
            if ( LogAPI::g_stream.getBuffer().isInFilterList( tag ) )\
            {\
                LogAPI::g_stream.getBuffer().setOpts(level, LOGAPI_FILE, LOGAPI_LINE);\
                LogAPI::g_stream << __VA_ARGS__ << std::flush;\
            }\
        }\
    } while (0)
 
#   define LOGS_EMERG( ... )  LOGAPI_STREAM( LOGAPI_EMERG, __VA_ARGS__ )
#   define LOGS_ALERT( ... ) LOGAPI_STREAM( LOGAPI_ALERT, __VA_ARGS__ )
#   define LOGS_CRIT( ... ) LOGAPI_STREAM( LOGAPI_CRIT, __VA_ARGS__ )
#   define LOGS_ERROR( ... ) LOGAPI_STREAM( LOGAPI_ERROR, __VA_ARGS__ )
#   define LOGS_WARN( ... ) LOGAPI_STREAM( LOGAPI_WARN, __VA_ARGS__ )
#   define LOGS_NOTICE( ... ) LOGAPI_STREAM( LOGAPI_NOTICE, __VA_ARGS__ )
#   define LOGS_INFO( ... ) LOGAPI_STREAM( LOGAPI_INFO, __VA_ARGS__ )
#   define LOGS_TRACE( ... ) LOGAPI_STREAM( LOGAPI_TRACE, __VA_ARGS__ ) 

#   define LOGS_TAG_EMERG( tag, ... )  LOGAPI_TAG_STREAM( LOGAPI_EMERG, tag, __VA_ARGS__ )
#   define LOGS_TAG_ALERT( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_ALERT, tag, __VA_ARGS__ )
#   define LOGS_TAG_CRIT( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_CRIT, tag, __VA_ARGS__ )
#   define LOGS_TAG_ERROR( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_ERROR, tag, __VA_ARGS__ )
#   define LOGS_TAG_WARN( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_WARN, tag, __VA_ARGS__ )
#   define LOGS_TAG_NOTICE( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_NOTICE, tag, __VA_ARGS__ )
#   define LOGS_TAG_INFO( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_INFO, tag, __VA_ARGS__ )
#   define LOGS_TAG_TRACE( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_TRACE, tag, __VA_ARGS__ ) 

#if defined( LOGAPI_ENABLE_DEBUG )
    #define DBG_STREAM  LOGAPI_STREAM
    #define DBGS_EMERG LOGS_EMERG   
    #define DBGS_ALERT LOGS_ALERT   
    #define DBGS_CRIT LOGS_CRIT 
    #define DBGS_ERROR LOGS_ERROR
    #define DBGS_WARN LOGS_WARN 
    #define DBGS_NOTICE LOGS_NOTICE 
    #define DBGS_INFO LOGS_INFO 
    #define DBGS_TRACE LOGS_TRACE   

    #define DBG_TAG_STREAM  LOGAPI_TAG_STREAM
    #define DBGS_TAG_EMERG LOGS_TAG_EMERG   
    #define DBGS_TAG_ALERT LOGS_TAG_ALERT   
    #define DBGS_TAG_CRIT LOGS_TAG_CRIT 
    #define DBGS_TAG_ERROR LOGS_TAG_ERROR
    #define DBGS_TAG_WARN LOGS_TAG_WARN 
    #define DBGS_TAG_NOTICE LOGS_TAG_NOTICE 
    #define DBGS_TAG_INFO LOGS_TAG_INFO 
    #define DBGS_TAG_TRACE LOGS_TAG_TRACE    
#else
    #define DBG_STREAM(...) LOGAPI_EMPTYSTMT
    #define DBGS_EMERG(...) LOGAPI_EMPTYSTMT    
    #define DBGS_ALERT(...) LOGAPI_EMPTYSTMT    
    #define DBGS_CRIT(...) LOGAPI_EMPTYSTMT 
    #define DBGS_ERROR(...) LOGAPI_EMPTYSTMT
    #define DBGS_WARN(...) LOGAPI_EMPTYSTMT 
    #define DBGS_NOTICE(...) LOGAPI_EMPTYSTMT   
    #define DBGS_INFO(...) LOGAPI_EMPTYSTMT 
    #define DBGS_TRACE(...) LOGAPI_EMPTYSTMT     

    #define DBG_TAG_STREAM(...) LOGAPI_EMPTYSTMT
    #define DBGS_TAG_EMERG(...) LOGAPI_EMPTYSTMT    
    #define DBGS_TAG_ALERT(...) LOGAPI_EMPTYSTMT    
    #define DBGS_TAG_CRIT(...) LOGAPI_EMPTYSTMT 
    #define DBGS_TAG_ERROR(...) LOGAPI_EMPTYSTMT
    #define DBGS_TAG_WARN(...) LOGAPI_EMPTYSTMT 
    #define DBGS_TAG_NOTICE(...) LOGAPI_EMPTYSTMT   
    #define DBGS_TAG_INFO(...) LOGAPI_EMPTYSTMT 
    #define DBGS_TAG_TRACE(...) LOGAPI_EMPTYSTMT    
#endif

} // LogAPI

#endif //_LOGAPI_STREAM_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

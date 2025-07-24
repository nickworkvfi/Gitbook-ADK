---
hidden: true
title: logapi_stream.hpp
---

<a href="logapi__stream_8hpp.md">Go to the documentation of this file.</a>

``` cpp
 1 
 5 /* Public API:
 6  C++ iostream-like message log
 7  LOGS_ERROR( right_expr_to_<<_op )
 8  LOGS_WARN( right_expr_to_<<_op )
 9  LOGS_INFO( right_expr_to_<<_op )
 10  LOGS_TRACE( right_expr_to_<<_op )
 11 
 12  DBGS_ERROR( right_expr_to_<<_op )
 13  DBGS_WARN( right_expr_to_<<_op )
 14  DBGS_INFO( right_expr_to_<<_op )
 15  DBGS_TRACE( right_expr_to_<<_op )
 16 */
 17 #ifndef _LOGAPI_STREAM_H
 18 #define _LOGAPI_STREAM_H
 19 
 20 #include "priv/logapi_stream_base.h"
 21 
 22 namespace LogAPI
 23 {
 24 
 28 #define LOGAPI_STREAM( level, ... ) \
 29  do \
 30  {\
 31  if ( int( level ) <= int(LogAPI_GetLevel())) \
 32  {\
 33  LogAPI::g_stream.getBuffer().setOpts(level, LOGAPI_FILE, LOGAPI_LINE);\
 34  LogAPI::g_stream << __VA_ARGS__ << std::flush;\
 35  }\
 36  } while (0)
 37 
 41 #define LOGAPI_TAG_STREAM( level, tag, ... ) \
 42  do \
 43  {\
 44  if ( int( level ) <= int(LogAPI_GetLevel())) \
 45  {\
 46  if ( LogAPI::g_stream.getBuffer().isInFilterList( tag ) )\
 47  {\
 48  LogAPI::g_stream.getBuffer().setOpts(level, LOGAPI_FILE, LOGAPI_LINE);\
 49  LogAPI::g_stream << __VA_ARGS__ << std::flush;\
 50  }\
 51  }\
 52  } while (0)
 53 
 54 # define LOGS_EMERG( ... ) LOGAPI_STREAM( LOGAPI_EMERG, __VA_ARGS__ )
 55 # define LOGS_ALERT( ... ) LOGAPI_STREAM( LOGAPI_ALERT, __VA_ARGS__ )
 56 # define LOGS_CRIT( ... ) LOGAPI_STREAM( LOGAPI_CRIT, __VA_ARGS__ )
 57 # define LOGS_ERROR( ... ) LOGAPI_STREAM( LOGAPI_ERROR, __VA_ARGS__ )
 58 # define LOGS_WARN( ... ) LOGAPI_STREAM( LOGAPI_WARN, __VA_ARGS__ )
 59 # define LOGS_NOTICE( ... ) LOGAPI_STREAM( LOGAPI_NOTICE, __VA_ARGS__ )
 60 # define LOGS_INFO( ... ) LOGAPI_STREAM( LOGAPI_INFO, __VA_ARGS__ )
 61 # define LOGS_TRACE( ... ) LOGAPI_STREAM( LOGAPI_TRACE, __VA_ARGS__ ) 
 62 
 63 # define LOGS_TAG_EMERG( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_EMERG, tag, __VA_ARGS__ )
 64 # define LOGS_TAG_ALERT( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_ALERT, tag, __VA_ARGS__ )
 65 # define LOGS_TAG_CRIT( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_CRIT, tag, __VA_ARGS__ )
 66 # define LOGS_TAG_ERROR( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_ERROR, tag, __VA_ARGS__ )
 67 # define LOGS_TAG_WARN( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_WARN, tag, __VA_ARGS__ )
 68 # define LOGS_TAG_NOTICE( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_NOTICE, tag, __VA_ARGS__ )
 69 # define LOGS_TAG_INFO( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_INFO, tag, __VA_ARGS__ )
 70 # define LOGS_TAG_TRACE( tag, ... ) LOGAPI_TAG_STREAM( LOGAPI_TRACE, tag, __VA_ARGS__ ) 
 71 
 72 #if defined( LOGAPI_ENABLE_DEBUG )
 73  #define DBG_STREAM LOGAPI_STREAM
 74  #define DBGS_EMERG LOGS_EMERG 
 75  #define DBGS_ALERT LOGS_ALERT 
 76  #define DBGS_CRIT LOGS_CRIT 
 77  #define DBGS_ERROR LOGS_ERROR
 78  #define DBGS_WARN LOGS_WARN 
 79  #define DBGS_NOTICE LOGS_NOTICE 
 80  #define DBGS_INFO LOGS_INFO 
 81  #define DBGS_TRACE LOGS_TRACE 
 82 
 83  #define DBG_TAG_STREAM LOGAPI_TAG_STREAM
 84  #define DBGS_TAG_EMERG LOGS_TAG_EMERG 
 85  #define DBGS_TAG_ALERT LOGS_TAG_ALERT 
 86  #define DBGS_TAG_CRIT LOGS_TAG_CRIT 
 87  #define DBGS_TAG_ERROR LOGS_TAG_ERROR
 88  #define DBGS_TAG_WARN LOGS_TAG_WARN 
 89  #define DBGS_TAG_NOTICE LOGS_TAG_NOTICE 
 90  #define DBGS_TAG_INFO LOGS_TAG_INFO 
 91  #define DBGS_TAG_TRACE LOGS_TAG_TRACE 
 92 #else
 93  #define DBG_STREAM(...) LOGAPI_EMPTYSTMT
 94  #define DBGS_EMERG(...) LOGAPI_EMPTYSTMT 
 95  #define DBGS_ALERT(...) LOGAPI_EMPTYSTMT 
 96  #define DBGS_CRIT(...) LOGAPI_EMPTYSTMT 
 97  #define DBGS_ERROR(...) LOGAPI_EMPTYSTMT
 98  #define DBGS_WARN(...) LOGAPI_EMPTYSTMT 
 99  #define DBGS_NOTICE(...) LOGAPI_EMPTYSTMT 
 100  #define DBGS_INFO(...) LOGAPI_EMPTYSTMT 
 101  #define DBGS_TRACE(...) LOGAPI_EMPTYSTMT 
 102 
 103  #define DBG_TAG_STREAM(...) LOGAPI_EMPTYSTMT
 104  #define DBGS_TAG_EMERG(...) LOGAPI_EMPTYSTMT 
 105  #define DBGS_TAG_ALERT(...) LOGAPI_EMPTYSTMT 
 106  #define DBGS_TAG_CRIT(...) LOGAPI_EMPTYSTMT 
 107  #define DBGS_TAG_ERROR(...) LOGAPI_EMPTYSTMT
 108  #define DBGS_TAG_WARN(...) LOGAPI_EMPTYSTMT 
 109  #define DBGS_TAG_NOTICE(...) LOGAPI_EMPTYSTMT 
 110  #define DBGS_TAG_INFO(...) LOGAPI_EMPTYSTMT 
 111  #define DBGS_TAG_TRACE(...) LOGAPI_EMPTYSTMT 
 112 #endif
 113 
 114 } // LogAPI
 115 
 116 #endif //_LOGAPI_STREAM_H
```

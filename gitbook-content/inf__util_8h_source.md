---
hidden: true
title: inf_util.h
---

<a href="inf__util_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 18 #ifndef INF_UTIL_H_
 19 #define INF_UTIL_H_
 20 
 21 #ifndef INF_UTIL_API
 22 #ifdef _VRXEVO
 23 # ifdef _INF_UTIL_API_EXPORT
 24 # define INF_UTIL_API __declspec(dllexport)
 25 # else
 26 # define INF_UTIL_API __declspec(dllimport)
 27 # endif
 28 #else
 29 # define INF_UTIL_API
 30 #endif // #ifdef _VRXEVO
 31 #endif // #ifndef INF_UTIL_API
 32 
 33 #include "inf_util/types.h"
 38 typedef enum
 39 {
 40  INFO_E_OK = 0,
 41 
 42  // File errors
 43  INFO_E_BAD_DB_SCHEMA_FILE = -1,
 44  INFO_E_BAD_DATA_SCHEMA_FILE = -2,
 45  INFO_E_BAD_DB = -3,
 46  INFO_E_BAD_DATA_FILE = -4,
 47  INFO_E_FILE_IO = -5,
 48 
 49  // Database errors
 50  INFO_E_DB_FAILURE = -10,
 51  INFO_E_DB_INSERT = -11,
 52  INFO_E_DB_READ = -12,
 53  INFO_E_DB_TRANSACTION = -13,
 54  INFO_E_DB_DELETE = -14,
 55 
 56  // Parser errors
 57  INFO_E_PARSE_ERROR = -100,
 58 
 59  // Data processing
 60  INFO_E_NO_MORE = -200,
 61  INFO_E_UNKNOWN = -201,
 62  INFO_E_SKIPPED = -202,
 63 
 64  // Misc
 65  INFO_E_NOT_IMPL = -999,
 66  INFO_E_INTERNAL_ERROR = -1000,
 67  INFO_E_PARAM = -1001,
 68  INFO_E_BACKEND = -1002,
 69  INFO_E_BACKEND_ROLE = -1003,
 70 } ErrorCode;
 71 
 72 
 77 typedef enum
 78 {
 79  INFO_OP_FULL,
 80  INFO_OP_PARTIAL,
 81  INFO_OP_MERGE
 82 }OperationSubType;
 87 typedef struct
 88 {
 89  Operation op;
 90  OperationSubType subop;
 91  int is_conditional;
 92  std::string condition;
 93 } ImExPar;
 94 
 100 typedef struct
 101 {
 102  ErrorCode errorCode;
 103  char* shortMessage;
 104  char* location;
 105  char* extendedMessage;
 106 } ErrorInfo;
 107 
 111 INF_UTIL_API const char *infoutil_getVersion(void);
 112 
 121 INF_UTIL_API void error_info_free(ErrorInfo* error);
 122 
 134 INF_UTIL_API ErrorCode info_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
 135  const char *inputFileName, ErrorInfo* error);
 136 
 149 INF_UTIL_API ErrorCode info_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
 150  const char *inputFileName, const char *condition, ErrorInfo* error);
 151 
 162 INF_UTIL_API ErrorCode info_partial_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
 163  const char *inputFileName, ErrorInfo* error);
 164 
 176 INF_UTIL_API ErrorCode info_partial_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
 177  const char *inputFileName, const char *condition, ErrorInfo* error);
 178 
 189 INF_UTIL_API ErrorCode info_export(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
 190  const char *outputFileName, ErrorInfo* error);
 191 
 192 
 202 INF_UTIL_API ErrorCode info_import_property_db(const char *dbName, const char *inputFileName, ErrorInfo* error);
 203 
 214 INF_UTIL_API ErrorCode info_import_property_db(const char *dbName, const char *inputFileName, const char *condition, ErrorInfo* error);
 215 
 224 INF_UTIL_API ErrorCode info_partial_import_property_db(const char *dbName, const char *inputFileName, ErrorInfo* error);
 225 
 235 INF_UTIL_API ErrorCode info_partial_import_property_db(const char *dbName, const char *inputFileName, const char *condition, ErrorInfo* error);
 236 
 245 INF_UTIL_API ErrorCode info_merge_import_property_db(const char *dbName, const char *inputFileName, ErrorInfo* error);
 246 
 256 INF_UTIL_API ErrorCode info_merge_import_property_db(const char *dbName, const char *inputFileName, const char *condition, ErrorInfo* error);
 257 
 266 INF_UTIL_API ErrorCode info_export_property_db(const char *dbName, const char *outputFileName, ErrorInfo* error);
 267 
 268 #endif /* INF_UTIL_H_ */
```

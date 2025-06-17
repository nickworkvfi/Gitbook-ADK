---
title: inf/include/inf/inf_util.h
summary: Import/Export Utility API. 

---

# inf/include/inf/inf_util.h

Import/Export Utility API. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ImExPar](struct_im_ex_par.md)** <br>Structure to tune up import /export operations.  |
| struct | **[ErrorInfo](struct_error_info.md)** <br>Structure to capture error information.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ErrorCode](group__inf__util__public.md#enum-errorcode)** { INFO_E_OK = 0, INFO_E_BAD_DB_SCHEMA_FILE = -1, INFO_E_BAD_DATA_SCHEMA_FILE = -2, INFO_E_BAD_DB = -3, INFO_E_BAD_DATA_FILE = -4, INFO_E_FILE_IO = -5, INFO_E_DB_FAILURE = -10, INFO_E_DB_INSERT = -11, INFO_E_DB_READ = -12, INFO_E_DB_TRANSACTION = -13, INFO_E_DB_DELETE = -14, INFO_E_PARSE_ERROR = -100, INFO_E_NO_MORE = -200, INFO_E_UNKNOWN = -201, INFO_E_SKIPPED = -202, INFO_E_NOT_IMPL = -999, INFO_E_INTERNAL_ERROR = -1000, INFO_E_PARAM = -1001, INFO_E_BACKEND = -1002, INFO_E_BACKEND_ROLE = -1003}<br>Error codes for the API functions.  |
| enum| **[OperationSubType](group__inf__util__public.md#enum-operationsubtype)** { INFO_OP_FULL, INFO_OP_PARTIAL, INFO_OP_MERGE}<br>Operation sub type.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const [INF_UTIL_API](inf__util_8h.md#define-inf-util-api) char * | **[infoutil_getVersion](inf__util_8h.md#function-infoutil-getversion)**(void )<br>get version of a library  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api) void | **[error_info_free](group__inf__util__public.md#function-error-info-free)**([ErrorInfo](struct_error_info.md) * error)<br>Deallocate resources referenced by a [ErrorInfo](struct_error_info.md) structure.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_import](group__inf__util__public.md#function-info-import)**(const char * dataSchemaFile, const char * dbSchemaFile, const char * dbName, const char * inputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to database.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_import](group__inf__util__public.md#function-info-import)**(const char * dataSchemaFile, const char * dbSchemaFile, const char * dbName, const char * inputFileName, const char * condition, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to database.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_partial_import](group__inf__util__public.md#function-info-partial-import)**(const char * dataSchemaFile, const char * dbSchemaFile, const char * dbName, const char * inputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to database. Data is inserted or updated, depends from destination DB.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_partial_import](group__inf__util__public.md#function-info-partial-import)**(const char * dataSchemaFile, const char * dbSchemaFile, const char * dbName, const char * inputFileName, const char * condition, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to database. Data is inserted or updated, depends from destination DB.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_export](group__inf__util__public.md#function-info-export)**(const char * dataSchemaFile, const char * dbSchemaFile, const char * dbName, const char * outputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Export data from database to datafile.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_import_property_db](group__inf__util__public.md#function-info-import-property-db)**(const char * dbName, const char * inputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to property database.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_import_property_db](group__inf__util__public.md#function-info-import-property-db)**(const char * dbName, const char * inputFileName, const char * condition, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to property database.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_partial_import_property_db](group__inf__util__public.md#function-info-partial-import-property-db)**(const char * dbName, const char * inputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to property database. Data is inserted or updated, depends from destination DB.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_partial_import_property_db](group__inf__util__public.md#function-info-partial-import-property-db)**(const char * dbName, const char * inputFileName, const char * condition, [ErrorInfo](struct_error_info.md) * error)<br>Import data from datafile to property database. Data is inserted or updated, depends from destination DB.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_merge_import_property_db](group__inf__util__public.md#function-info-merge-import-property-db)**(const char * dbName, const char * inputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_merge_import_property_db](group__inf__util__public.md#function-info-merge-import-property-db)**(const char * dbName, const char * inputFileName, const char * condition, [ErrorInfo](struct_error_info.md) * error)<br>Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB.  |
| [INF_UTIL_API](inf__util_8h.md#define-inf-util-api)[ErrorCode](group__inf__util__public.md#enum-errorcode) | **[info_export_property_db](group__inf__util__public.md#function-info-export-property-db)**(const char * dbName, const char * outputFileName, [ErrorInfo](struct_error_info.md) * error)<br>Export data from database to datafile.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INF_UTIL_API](inf__util_8h.md#define-inf-util-api)**  |

## Types Documentation

### enum ErrorCode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_E_OK | 0| No errors.   |
| INFO_E_BAD_DB_SCHEMA_FILE | -1| DB schema file either not found or malformed.   |
| INFO_E_BAD_DATA_SCHEMA_FILE | -2| Data schema file either not found or malformed.   |
| INFO_E_BAD_DB | -3| DB cannot be opened.   |
| INFO_E_BAD_DATA_FILE | -4| Data file is improperly formatted or corrupt.   |
| INFO_E_FILE_IO | -5| File I/O operation failed.   |
| INFO_E_DB_FAILURE | -10| Internal DB failure (e.g. cannot open/close db file)   |
| INFO_E_DB_INSERT | -11| DB insert operation failed.   |
| INFO_E_DB_READ | -12| DB read (select?) operation failed.   |
| INFO_E_DB_TRANSACTION | -13| DB transaction start or finish failed.   |
| INFO_E_DB_DELETE | -14| DB delete operation failed.   |
| INFO_E_PARSE_ERROR | -100| Error occured in parser.   |
| INFO_E_NO_MORE | -200| No more data.   |
| INFO_E_UNKNOWN | -201| An object is not in the schema.   |
| INFO_E_SKIPPED | -202| Node has been skipped.   |
| INFO_E_NOT_IMPL | -999| Not implemented.   |
| INFO_E_INTERNAL_ERROR | -1000| Some internal error.   |
| INFO_E_PARAM | -1001| Invalid arguments to function.   |
| INFO_E_BACKEND | -1002| Backend is unknown.   |
| INFO_E_BACKEND_ROLE | -1003| Backend is used in the wrong role.   |



Error codes for the API functions. 

### enum OperationSubType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INFO_OP_FULL | | delete destination prior operation   |
| INFO_OP_PARTIAL | | update destination   |
| INFO_OP_MERGE | | insert data which not exist in destination   |



Operation sub type. 


## Functions Documentation

### function infoutil_getVersion

```cpp
const INF_UTIL_API char * infoutil_getVersion(
    void 
)
```

get version of a library 

**Return**: string with version 

### function error_info_free

```cpp
INF_UTIL_API void error_info_free(
    ErrorInfo * error
)
```

Deallocate resources referenced by a [ErrorInfo](struct_error_info.md) structure. 

**Parameters**: 

  * **error** address of the structure



This function releases all dynamically allocated strings behind the _error_ structure. Note that it does not deallocate the structure itself. If _error_ is `NULL`, then this function is a no-op. 


### function info_import

```cpp
INF_UTIL_APIErrorCode info_import(
    const char * dataSchemaFile,
    const char * dbSchemaFile,
    const char * dbName,
    const char * inputFileName,
    ErrorInfo * error
)
```

Import data from datafile to database. 

**Parameters**: 

  * **dataSchemaFile** name of XML file containing schema of the data file 
  * **dbSchemaFile** name of XML file containing schema of the database 
  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

**Note**: target tables are deleted before importing data from datafile 

### function info_import

```cpp
INF_UTIL_APIErrorCode info_import(
    const char * dataSchemaFile,
    const char * dbSchemaFile,
    const char * dbName,
    const char * inputFileName,
    const char * condition,
    ErrorInfo * error
)
```

Import data from datafile to database. 

**Parameters**: 

  * **dataSchemaFile** name of XML file containing schema of the data file 
  * **dbSchemaFile** name of XML file containing schema of the database 
  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **condition** string to match 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

**Note**: target tables are deleted before importing data from datafile 

### function info_partial_import

```cpp
INF_UTIL_APIErrorCode info_partial_import(
    const char * dataSchemaFile,
    const char * dbSchemaFile,
    const char * dbName,
    const char * inputFileName,
    ErrorInfo * error
)
```

Import data from datafile to database. Data is inserted or updated, depends from destination DB. 

**Parameters**: 

  * **dataSchemaFile** name of XML file containing schema of the data file 
  * **dbSchemaFile** name of XML file containing schema of the database 
  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file with new/updated records 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_partial_import

```cpp
INF_UTIL_APIErrorCode info_partial_import(
    const char * dataSchemaFile,
    const char * dbSchemaFile,
    const char * dbName,
    const char * inputFileName,
    const char * condition,
    ErrorInfo * error
)
```

Import data from datafile to database. Data is inserted or updated, depends from destination DB. 

**Parameters**: 

  * **dataSchemaFile** name of XML file containing schema of the data file 
  * **dbSchemaFile** name of XML file containing schema of the database 
  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file with new/updated records 
  * **condition** string to match 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_export

```cpp
INF_UTIL_APIErrorCode info_export(
    const char * dataSchemaFile,
    const char * dbSchemaFile,
    const char * dbName,
    const char * outputFileName,
    ErrorInfo * error
)
```

Export data from database to datafile. 

**Parameters**: 

  * **dataSchemaFile** name of XML file containing schema of the data file 
  * **dbSchemaFile** name of XML file containing schema of the database 
  * **dbName** name of a database that contains the data to be exported 
  * **outputFileName** name of data file to be created 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_import_property_db

```cpp
INF_UTIL_APIErrorCode info_import_property_db(
    const char * dbName,
    const char * inputFileName,
    ErrorInfo * error
)
```

Import data from datafile to property database. 

**Parameters**: 

  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

**Note**: target tables are deleted before importing data from datafile 

### function info_import_property_db

```cpp
INF_UTIL_APIErrorCode info_import_property_db(
    const char * dbName,
    const char * inputFileName,
    const char * condition,
    ErrorInfo * error
)
```

Import data from datafile to property database. 

**Parameters**: 

  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **condition** string to match 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

**Note**: target tables are deleted before importing data from datafile 

### function info_partial_import_property_db

```cpp
INF_UTIL_APIErrorCode info_partial_import_property_db(
    const char * dbName,
    const char * inputFileName,
    ErrorInfo * error
)
```

Import data from datafile to property database. Data is inserted or updated, depends from destination DB. 

**Parameters**: 

  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_partial_import_property_db

```cpp
INF_UTIL_APIErrorCode info_partial_import_property_db(
    const char * dbName,
    const char * inputFileName,
    const char * condition,
    ErrorInfo * error
)
```

Import data from datafile to property database. Data is inserted or updated, depends from destination DB. 

**Parameters**: 

  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **condition** string to match 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_merge_import_property_db

```cpp
INF_UTIL_APIErrorCode info_merge_import_property_db(
    const char * dbName,
    const char * inputFileName,
    ErrorInfo * error
)
```

Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB. 

**Parameters**: 

  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_merge_import_property_db

```cpp
INF_UTIL_APIErrorCode info_merge_import_property_db(
    const char * dbName,
    const char * inputFileName,
    const char * condition,
    ErrorInfo * error
)
```

Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB. 

**Parameters**: 

  * **dbName** name of a database to which data will be imported 
  * **inputFileName** name of data file to be loaded 
  * **condition** string to match 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 

### function info_export_property_db

```cpp
INF_UTIL_APIErrorCode info_export_property_db(
    const char * dbName,
    const char * outputFileName,
    ErrorInfo * error
)
```

Export data from database to datafile. 

**Parameters**: 

  * **dbName** name of a database that contains the data to be exported 
  * **outputFileName** name of data file to be created 
  * **error** pointer to struct [ErrorInfo](struct_error_info.md). Note, the initial contents of this structure will be overwritten! 


**Return**: one of [ErrorCode](group__inf__util__public.md#enum-errorcode) values, [INFO_E_OK](group__inf__util__public.md#enumvalue-info-e-ok) on success. The same error code will be duplicated in _error->errorCode_, if _error_ is not `NULL`. 



## Macros Documentation

### define INF_UTIL_API

```cpp
#define INF_UTIL_API 
```


## Source code

```cpp

#ifndef INF_UTIL_H_
#define INF_UTIL_H_

#ifndef INF_UTIL_API
#ifdef _VRXEVO
#   ifdef _INF_UTIL_API_EXPORT
#       define INF_UTIL_API __declspec(dllexport)
#   else
#       define INF_UTIL_API __declspec(dllimport)
#   endif
#else
#   define INF_UTIL_API
#endif // #ifdef _VRXEVO
#endif // #ifndef INF_UTIL_API

#include "inf_util/types.h"
typedef enum
{
    INFO_E_OK = 0,    

    // File errors
    INFO_E_BAD_DB_SCHEMA_FILE = -1,    
    INFO_E_BAD_DATA_SCHEMA_FILE = -2,    
    INFO_E_BAD_DB = -3,    
    INFO_E_BAD_DATA_FILE = -4,    
    INFO_E_FILE_IO = -5,    

    // Database errors
    INFO_E_DB_FAILURE = -10,    
    INFO_E_DB_INSERT = -11,    
    INFO_E_DB_READ = -12,    
    INFO_E_DB_TRANSACTION = -13,    
    INFO_E_DB_DELETE = -14, 

    // Parser errors
    INFO_E_PARSE_ERROR = -100,    

    // Data processing
    INFO_E_NO_MORE = -200,    
    INFO_E_UNKNOWN = -201,    
    INFO_E_SKIPPED = -202,    

    // Misc
    INFO_E_NOT_IMPL = -999,    
    INFO_E_INTERNAL_ERROR = -1000,    
    INFO_E_PARAM = -1001, 
    INFO_E_BACKEND = -1002, 
    INFO_E_BACKEND_ROLE = -1003, 
} ErrorCode;


typedef enum
{
    INFO_OP_FULL,   
    INFO_OP_PARTIAL,
    INFO_OP_MERGE   
}OperationSubType;
typedef struct
{
    Operation           op;             
    OperationSubType    subop;          
    int                 is_conditional; 
    std::string         condition;      
} ImExPar;

typedef struct
{
    ErrorCode errorCode;    
    char* shortMessage;    
    char* location;    
    char* extendedMessage;    
} ErrorInfo;

INF_UTIL_API const char *infoutil_getVersion(void);

INF_UTIL_API void error_info_free(ErrorInfo* error);

INF_UTIL_API ErrorCode info_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
                                  const char *inputFileName, ErrorInfo* error);

INF_UTIL_API ErrorCode info_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
                                  const char *inputFileName, const char *condition, ErrorInfo* error);

INF_UTIL_API ErrorCode  info_partial_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
                                  const char *inputFileName, ErrorInfo* error);

INF_UTIL_API ErrorCode  info_partial_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
                                  const char *inputFileName, const char *condition, ErrorInfo* error);

INF_UTIL_API ErrorCode info_export(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName,
                                  const char *outputFileName, ErrorInfo* error);


INF_UTIL_API ErrorCode info_import_property_db(const char *dbName, const char *inputFileName, ErrorInfo* error);

INF_UTIL_API ErrorCode info_import_property_db(const char *dbName, const char *inputFileName, const char *condition, ErrorInfo* error);

INF_UTIL_API ErrorCode info_partial_import_property_db(const char *dbName, const char *inputFileName, ErrorInfo* error);

INF_UTIL_API ErrorCode info_partial_import_property_db(const char *dbName, const char *inputFileName, const char *condition, ErrorInfo* error);

INF_UTIL_API ErrorCode info_merge_import_property_db(const char *dbName, const char *inputFileName, ErrorInfo* error);

INF_UTIL_API ErrorCode info_merge_import_property_db(const char *dbName, const char *inputFileName, const char *condition, ErrorInfo* error);

INF_UTIL_API ErrorCode info_export_property_db(const char *dbName, const char *outputFileName, ErrorInfo* error);

#endif /* INF_UTIL_H_ */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

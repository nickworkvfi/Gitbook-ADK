---
hidden: true
title: Public APIImport/Export Utility
---

[Files](#files) \| [Data Structures](#nested-classes) \| [Enumerations](#enum-members) \| [Functions](#func-members)

API for the users of the library. [More\...](#details)

Collaboration diagram for Public API:

![](group__inf__util__public.png)

|        |                                                   |
|--------|---------------------------------------------------|
| Files  |                                                   |
| file   | <a href="inf__util_8h.md">inf_util.h</a> |
|        | Import/Export Utility API.<br/>          |

|  |  |
|----|----|
| Data Structures |  |
| struct   | [ImExPar](#struct_im_ex_par) |
|   | Structure to tune up import /export operations. [More\...](#struct_im_ex_par)<br/> |
| struct   | [ErrorInfo](#struct_error_info) |
|   | Structure to capture error information. [More\...](#struct_error_info)<br/> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) {<br/>  [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71) = 0, [INFO_E_BAD_DB_SCHEMA_FILE](#gga59e56af19e754a6aa26a612ebf91d05fa5be3dde74d9d17a8194d3a37b0fb0537) = -1, [INFO_E_BAD_DATA_SCHEMA_FILE](#gga59e56af19e754a6aa26a612ebf91d05fa6e33879c03fd180b25df18ccd52c5cf6) = -2, [INFO_E_BAD_DB](#gga59e56af19e754a6aa26a612ebf91d05fa7f326dd24642867ef8807dbd48d45f43) = -3,<br/>  [INFO_E_BAD_DATA_FILE](#gga59e56af19e754a6aa26a612ebf91d05fada3d517617be644a0d42a0639ad3cda1) = -4, [INFO_E_FILE_IO](#gga59e56af19e754a6aa26a612ebf91d05fae79e3a320f35a2b58cf253ec4fd9621d) = -5, [INFO_E_DB_FAILURE](#gga59e56af19e754a6aa26a612ebf91d05fa858ba6ec9e5cf8d171bed9ba6e09a979) = -10, [INFO_E_DB_INSERT](#gga59e56af19e754a6aa26a612ebf91d05fa087340e75a4ac0fd699b19f1bff2cda8) = -11,<br/>  [INFO_E_DB_READ](#gga59e56af19e754a6aa26a612ebf91d05fa0fdb9d9a09de6fd5ca12f767b1e2cf15) = -12, [INFO_E_DB_TRANSACTION](#gga59e56af19e754a6aa26a612ebf91d05faeeec8af383aa416f8b55ef1dd44df434) = -13, [INFO_E_DB_DELETE](#gga59e56af19e754a6aa26a612ebf91d05fa192bbbf41df3d07b8f860a0d5f4e0597) = -14, [INFO_E_PARSE_ERROR](#gga59e56af19e754a6aa26a612ebf91d05fac4ddc287af5887b0a30f6883573f4a1b) = -100,<br/>  [INFO_E_NO_MORE](#gga59e56af19e754a6aa26a612ebf91d05fa63f25277d2d2de83d84f95e932f3119c) = -200, [INFO_E_UNKNOWN](#gga59e56af19e754a6aa26a612ebf91d05faa37c4ca5dbc0693b88b07f5c83745a9c) = -201, [INFO_E_SKIPPED](#gga59e56af19e754a6aa26a612ebf91d05fa8d2a98de16d6eb4c7d4352f455fcc1a3) = -202, [INFO_E_NOT_IMPL](#gga59e56af19e754a6aa26a612ebf91d05fa9e5197133a18fa013348582a12aee328) = -999,<br/>  [INFO_E_INTERNAL_ERROR](#gga59e56af19e754a6aa26a612ebf91d05fa0962cacbe8f8661cd7784a0b4c07ef8d) = -1000, [INFO_E_PARAM](#gga59e56af19e754a6aa26a612ebf91d05fa9d59c9c4da6e8df9253776ed07a450b8) = -1001, [INFO_E_BACKEND](#gga59e56af19e754a6aa26a612ebf91d05fa7db006c3fb86a536a1142d070e136afe) = -1002, [INFO_E_BACKEND_ROLE](#gga59e56af19e754a6aa26a612ebf91d05fa09dd2684c518a6f846ad808721354903) = -1003<br/>} |
|   | Error codes for the API functions. [More\...](#ga59e56af19e754a6aa26a612ebf91d05f)<br/> |
| enum   | [OperationSubType](#ga436e393d88341728721b3496ededd5a3) { [INFO_OP_FULL](#gga436e393d88341728721b3496ededd5a3ad9c3be77e956290d97cb38ee023f94d3), [INFO_OP_PARTIAL](#gga436e393d88341728721b3496ededd5a3a541723e2d922a2255ea2234e9773981e), [INFO_OP_MERGE](#gga436e393d88341728721b3496ededd5a3a6b373622a755b7cbee3491e97840c764) } |
|   | Operation sub type. [More\...](#ga436e393d88341728721b3496ededd5a3)<br/> |

|  |  |
|----|----|
| Functions |  |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> void  | [error_info_free](#gab01e86686ec39099f98fc710fa1a1cf8) ([ErrorInfo](#struct_error_info) \*error) |
|   | Deallocate resources referenced by a [ErrorInfo](#struct_error_info "Structure to capture error information.") structure. [More\...](#gab01e86686ec39099f98fc710fa1a1cf8)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_import](#gab028dff98150e41fc21c1b3a3f5d336d) (const char \*dataSchemaFile, const char \*dbSchemaFile, const char \*dbName, const char \*inputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to database. [More\...](#gab028dff98150e41fc21c1b3a3f5d336d)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_import](#ga258b17ec88ed2273039e1477c463ba0f) (const char \*dataSchemaFile, const char \*dbSchemaFile, const char \*dbName, const char \*inputFileName, const char \*condition, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to database. [More\...](#ga258b17ec88ed2273039e1477c463ba0f)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_partial_import](#gaa9ed5d1644c56b30f1dcbad90537deb7) (const char \*dataSchemaFile, const char \*dbSchemaFile, const char \*dbName, const char \*inputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to database. Data is inserted or updated, depends from destination DB. [More\...](#gaa9ed5d1644c56b30f1dcbad90537deb7)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_partial_import](#gacc99cea360371439ac165789200eacda) (const char \*dataSchemaFile, const char \*dbSchemaFile, const char \*dbName, const char \*inputFileName, const char \*condition, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to database. Data is inserted or updated, depends from destination DB. [More\...](#gacc99cea360371439ac165789200eacda)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_export](#gacc8c27e963a0deb2af270918ec233f7c) (const char \*dataSchemaFile, const char \*dbSchemaFile, const char \*dbName, const char \*outputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Export data from database to datafile. [More\...](#gacc8c27e963a0deb2af270918ec233f7c)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_import_property_db](#ga188443d652530e5cd3b6c2eac7d3870d) (const char \*dbName, const char \*inputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to property database. [More\...](#ga188443d652530e5cd3b6c2eac7d3870d)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_import_property_db](#gabb79f6feed0203e74b933c0aef3d412e) (const char \*dbName, const char \*inputFileName, const char \*condition, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to property database. [More\...](#gabb79f6feed0203e74b933c0aef3d412e)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_partial_import_property_db](#ga51782a9663512eea89a58503d1b0f8b7) (const char \*dbName, const char \*inputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to property database. Data is inserted or updated, depends from destination DB. [More\...](#ga51782a9663512eea89a58503d1b0f8b7)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_partial_import_property_db](#gad453df8d3bf2a654b35cdba2ac25ec09) (const char \*dbName, const char \*inputFileName, const char \*condition, [ErrorInfo](#struct_error_info) \*error) |
|   | Import data from datafile to property database. Data is inserted or updated, depends from destination DB. [More\...](#gad453df8d3bf2a654b35cdba2ac25ec09)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_merge_import_property_db](#gad27f3e972a4ef344ffdc18a32b1c6e70) (const char \*dbName, const char \*inputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB. [More\...](#gad27f3e972a4ef344ffdc18a32b1c6e70)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_merge_import_property_db](#ga2e1f19af8ac77b89414cb307e7be6ebe) (const char \*dbName, const char \*inputFileName, const char \*condition, [ErrorInfo](#struct_error_info) \*error) |
|   | Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB. [More\...](#ga2e1f19af8ac77b89414cb307e7be6ebe)<br/> |
| <a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)  | [info_export_property_db](#gad68545aeaee0777b75d402be3c239d06) (const char \*dbName, const char \*outputFileName, [ErrorInfo](#struct_error_info) \*error) |
|   | Export data from database to datafile. [More\...](#gad68545aeaee0777b75d402be3c239d06)<br/> |

## DetailedDescription {#detailed-description}

API for the users of the library.

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## ImExPar <a href="#struct_im_ex_par" id="struct_im_ex_par"></a>

<p>struct ImExPar</p>

Structure to tune up import /export operations.

| Data Fields |  |  |
|----|----|----|
| string | condition | Condition to match. |
| int | is_conditional | Condition has been specified. |
| Operation | op | Top-level operation codes. |
| [OperationSubType](#ga436e393d88341728721b3496ededd5a3) | subop | Operation sub type. |

## ErrorInfo <a href="#struct_error_info" id="struct_error_info"></a>

<p>struct ErrorInfo</p>

Structure to capture error information.

This structure can be used by the caller of Info Svc to receive extended error information in the case of error

| Data Fields |  |  |
|----|----|----|
| [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) | errorCode | final error code |
| char \* | extendedMessage | message that provides details of the failure |
| char \* | location | location of the faulty object. Can be file name, file/line, or database table. |
| char \* | shortMessage | short message that can be shown to the end user |

## EnumerationType Documentation {#enumeration-type-documentation}

## ErrorCode <a href="#ga59e56af19e754a6aa26a612ebf91d05f" id="ga59e56af19e754a6aa26a612ebf91d05f"></a>

<p>enum [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f)</p>

Error codes for the API functions.

| Enumerator |  |
|----|----|
| INFO_E_OK  | <p>No errors.</p> |
| INFO_E_BAD_DB_SCHEMA_FILE  | <p>DB schema file either not found or malformed.</p> |
| INFO_E_BAD_DATA_SCHEMA_FILE  | <p>Data schema file either not found or malformed.</p> |
| INFO_E_BAD_DB  | <p>DB cannot be opened.</p> |
| INFO_E_BAD_DATA_FILE  | <p>Data file is improperly formatted or corrupt.</p> |
| INFO_E_FILE_IO  | <p>File I/O operation failed.</p> |
| INFO_E_DB_FAILURE  | <p>Internal DB failure (e.g. cannot open/close db file)</p> |
| INFO_E_DB_INSERT  | <p>DB insert operation failed.</p> |
| INFO_E_DB_READ  | <p>DB read (select?) operation failed.</p> |
| INFO_E_DB_TRANSACTION  | <p>DB transaction start or finish failed.</p> |
| INFO_E_DB_DELETE  | <p>DB delete operation failed.</p> |
| INFO_E_PARSE_ERROR  | <p>Error occured in parser.</p> |
| INFO_E_NO_MORE  | <p>No more data.</p> |
| INFO_E_UNKNOWN  | <p>An object is not in the schema.</p> |
| INFO_E_SKIPPED  | <p>Node has been skipped.</p> |
| INFO_E_NOT_IMPL  | <p>Not implemented.</p> |
| INFO_E_INTERNAL_ERROR  | <p>Some internal error.</p> |
| INFO_E_PARAM  | <p>Invalid arguments to function.</p> |
| INFO_E_BACKEND  | <p>Backend is unknown.</p> |
| INFO_E_BACKEND_ROLE  | <p>Backend is used in the wrong role.</p> |

## OperationSubType <a href="#ga436e393d88341728721b3496ededd5a3" id="ga436e393d88341728721b3496ededd5a3"></a>

<p>enum [OperationSubType](#ga436e393d88341728721b3496ededd5a3)</p>

Operation sub type.

| Enumerator |  |
|----|----|
| INFO_OP_FULL  | <p>delete destination prior operation</p> |
| INFO_OP_PARTIAL  | <p>update destination</p> |
| INFO_OP_MERGE  | <p>insert data which not exist in destination</p> |

## FunctionDocumentation {#function-documentation}

## error_info_free() <a href="#gab01e86686ec39099f98fc710fa1a1cf8" id="gab01e86686ec39099f98fc710fa1a1cf8"></a>

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> void error_info_free</p>

Deallocate resources referenced by a [ErrorInfo](#struct_error_info "Structure to capture error information.") structure.

**Parameters**

\[in\] **error** address of the structure

This function releases all dynamically allocated strings behind the *error* structure. Note that it does not deallocate the structure itself. If *error* is `NULL`, then this function is a no-op.

## info_export() <a href="#gacc8c27e963a0deb2af270918ec233f7c" id="gacc8c27e963a0deb2af270918ec233f7c"></a>

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_export</p>

Export data from database to datafile.

**Parameters**

\[in\] **dataSchemaFile** name of XML file containing schema of the data file \[in\] **dbSchemaFile** name of XML file containing schema of the database \[in\] **dbName** name of a database that contains the data to be exported \[in\] **outputFileName** name of data file to be created \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_export_property_db() <a href="#gad68545aeaee0777b75d402be3c239d06" id="gad68545aeaee0777b75d402be3c239d06"></a>

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_export_property_db</p>

Export data from database to datafile.

**Parameters**

\[in\] **dbName** name of a database that contains the data to be exported \[in\] **outputFileName** name of data file to be created \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_import()\[1/2\] <a href="#ga258b17ec88ed2273039e1477c463ba0f" id="ga258b17ec88ed2273039e1477c463ba0f"></a> {#info_import-12}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_import</p>

Import data from datafile to database.

**Parameters**

\[in\] **dataSchemaFile** name of XML file containing schema of the data file \[in\] **dbSchemaFile** name of XML file containing schema of the database \[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[in\] **condition** string to match \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.


{% hint style="info" %}
target tables are deleted before importing data from datafile
{% endhint %}

## info_import()\[2/2\] <a href="#gab028dff98150e41fc21c1b3a3f5d336d" id="gab028dff98150e41fc21c1b3a3f5d336d"></a> {#info_import-22}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_import</p>

Import data from datafile to database.

**Parameters**

\[in\] **dataSchemaFile** name of XML file containing schema of the data file \[in\] **dbSchemaFile** name of XML file containing schema of the database \[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.


{% hint style="info" %}
target tables are deleted before importing data from datafile
{% endhint %}

## info_import_property_db()\[1/2\] <a href="#gabb79f6feed0203e74b933c0aef3d412e" id="gabb79f6feed0203e74b933c0aef3d412e"></a> {#info_import_property_db-12}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_import_property_db</p>

Import data from datafile to property database.

**Parameters**

\[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[in\] **condition** string to match \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.


{% hint style="info" %}
target tables are deleted before importing data from datafile
{% endhint %}

## info_import_property_db()\[2/2\] <a href="#ga188443d652530e5cd3b6c2eac7d3870d" id="ga188443d652530e5cd3b6c2eac7d3870d"></a> {#info_import_property_db-22}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_import_property_db</p>

Import data from datafile to property database.

**Parameters**

\[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.


{% hint style="info" %}
target tables are deleted before importing data from datafile
{% endhint %}

## info_merge_import_property_db()\[1/2\] <a href="#ga2e1f19af8ac77b89414cb307e7be6ebe" id="ga2e1f19af8ac77b89414cb307e7be6ebe"></a> {#info_merge_import_property_db-12}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_merge_import_property_db</p>

Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB.

**Parameters**

\[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[in\] **condition** string to match \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_merge_import_property_db()\[2/2\] <a href="#gad27f3e972a4ef344ffdc18a32b1c6e70" id="gad27f3e972a4ef344ffdc18a32b1c6e70"></a> {#info_merge_import_property_db-22}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_merge_import_property_db</p>

Merge data from source XML file to destination DB. Data is inserted if not existed in destination DB.

**Parameters**

\[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_partial_import()\[1/2\] <a href="#gacc99cea360371439ac165789200eacda" id="gacc99cea360371439ac165789200eacda"></a> {#info_partial_import-12}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_partial_import</p>

Import data from datafile to database. Data is inserted or updated, depends from destination DB.

**Parameters**

\[in\] **dataSchemaFile** name of XML file containing schema of the data file \[in\] **dbSchemaFile** name of XML file containing schema of the database \[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file with new/updated records \[in\] **condition** string to match \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_partial_import()\[2/2\] <a href="#gaa9ed5d1644c56b30f1dcbad90537deb7" id="gaa9ed5d1644c56b30f1dcbad90537deb7"></a> {#info_partial_import-22}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_partial_import</p>

Import data from datafile to database. Data is inserted or updated, depends from destination DB.

**Parameters**

\[in\] **dataSchemaFile** name of XML file containing schema of the data file \[in\] **dbSchemaFile** name of XML file containing schema of the database \[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file with new/updated records \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_partial_import_property_db()\[1/2\] <a href="#gad453df8d3bf2a654b35cdba2ac25ec09" id="gad453df8d3bf2a654b35cdba2ac25ec09"></a> {#info_partial_import_property_db-12}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_partial_import_property_db</p>

Import data from datafile to property database. Data is inserted or updated, depends from destination DB.

**Parameters**

\[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[in\] **condition** string to match \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

## info_partial_import_property_db()\[2/2\] <a href="#ga51782a9663512eea89a58503d1b0f8b7" id="ga51782a9663512eea89a58503d1b0f8b7"></a> {#info_partial_import_property_db-22}

<p><a href="inf__util_8h.md#a99bc021d4bced3a9a02e9ca8cc5630c5">INF_UTIL_API</a> [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f) info_partial_import_property_db</p>

Import data from datafile to property database. Data is inserted or updated, depends from destination DB.

**Parameters**

\[in\] **dbName** name of a database to which data will be imported \[in\] **inputFileName** name of data file to be loaded \[out\] **error** pointer to struct ErrorInfo. Note, the initial contents of this structure will be overwritten!

### Returns

one of [ErrorCode](#ga59e56af19e754a6aa26a612ebf91d05f "Error codes for the API functions.") values, [INFO_E_OK](#gga59e56af19e754a6aa26a612ebf91d05fae68ba0b1134392f5da641ddee28fbe71 "No errors.") on success. The same error code will be duplicated in *error-\>errorCode*, if *error* is not `NULL`.

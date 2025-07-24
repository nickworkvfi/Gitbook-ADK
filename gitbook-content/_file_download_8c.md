---
hidden: true
title: FileDownload.c File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include <zlib.h>`
`#include <libgen.h>`
`#include <cJSON.h>`
`#include "EventScheduler.h"`
`#include "VHQDebug.h"`
`#include "VHQDownloader.h"`
`#include "VHQManager.h"`
`#include "VHQIo.h"`
`#include "VHQIoInternals.h"`
`#include "VHQSecurity.h"`
`#include "../inc/VHQConfig.h"`
`#include "../inc/VHQFileNames.h"`
`#include "VHQUtils.h"`

|          |                                                      |
|----------|------------------------------------------------------|
| Macros   |                                                      |
| #define  | [MAX_CHAR](#a82acb32225c05e9aa4c524c40bc5852a)   255 |
| #define  | [CHUNK](#a25022864dfc8ec428e7128282e57b136)   16384  |

|  |  |
|----|----|
| Functions |  |
| vhq_result_t  | [VHQMAIN_ProcessParameterUpdate](#aec8b120499ecebf6cb9e2ba1b815e06a) (char \*receiver, char \*pszDest, char \*additional_info, uint32 additional_info_size, dl_file_dl_type_t eType) |
| vhq_result_t  | [DownloadFile](#aa3414fa71d3b4e462fb315c03df25f47) (dl_file_method_t eMethod, char \*pszDest, char \*pszDestFlash, dl_file_hash_algo_t eHashAlgo, char \*pszHash, char \*pszUrl, bool bMaintDl, uint32 filesize, event_set_id_t event_set_id, event_id_t event_id, uint32 \*dl_duration, uint32 \*dl_attempts, bool dl_notify) |
| vhq_result_t  | [ProcessDownloadFile](#ae39de27973e7d48f7dcc630a95b362a6) (char \*user, char \*pszFromDest, char \*pszToDest, dl_file_dl_type_t eType, VHQResponseSendMsg \*response, char \*receiver, event_set_id_t event_set_id, event_id_t event_id, bool compressionEnabled, uint32 \*si_flag_ptr) |

## DetailedDescription {#detailed-description}

Download file given URL

## MacroDefinition Documentation {#macro-definition-documentation}

## CHUNK <a href="#a25022864dfc8ec428e7128282e57b136" id="a25022864dfc8ec428e7128282e57b136"></a>

<p>#define CHUNK   16384</p>

## MAX_CHAR <a href="#a82acb32225c05e9aa4c524c40bc5852a" id="a82acb32225c05e9aa4c524c40bc5852a"></a>

<p>#define MAX_CHAR   255</p>

## FunctionDocumentation {#function-documentation}

## DownloadFile() <a href="#aa3414fa71d3b4e462fb315c03df25f47" id="aa3414fa71d3b4e462fb315c03df25f47"></a>

<p>vhq_result_t DownloadFile</p>

This function calls function to download a file from server and copies file from tmp to flash, if download completed.

**Parameters**

\[in\] **eMethod** = file download method \[in\] **pszDest** = partial download file name(tmp) \[out\] **pszDestFlash** = full download file name(flash) \[in\] **eHashAlgo** = hash algorithm \[in\] **pszHash** = hash value \[in\] **pszUser** = user \[in\] **pszPw** = PW \[in\] **pszUrl** = URL \[in\] **bMaintDl** = TRUE, if maintenance download \[in\] **filesize** = size of file to download \[in\] **event_set_id** = event sed id of event \[in\] **event_id** = event ID of event \[out\] **dl_duration** = download duration \[out\] **dl_attempts** = number of download attempts \[in\] **dl_notify** = Download notifications

### Returns

vhq_result_t VHQ_SUCCESS, if success

## ProcessDownloadFile() <a href="#ae39de27973e7d48f7dcc630a95b362a6" id="ae39de27973e7d48f7dcc630a95b362a6"></a>

<p>vhq_result_t ProcessDownloadFile</p>

This function processes the download file.

**Parameters**

\[in\] **user** = username \[in\] **pszFromDest** = downloaded location \[in\] **pszToDest** = copy to this destination \[in\] **eType** = downloaded file type \[out\] **response** = response to send to server \[in\] **receiver** = receiver name of app \[in\] **event_set_id** = event set ID of event \[in\] **event_id** = event ID of event \[in\] **compressionEnabled** = TRUE, if compression enabled \[out\] **si_flag_ptr** = pointer to SI flag

### Returns

VHQ_SUCCESS, if success; FALSE, otherwise

## VHQMAIN_ProcessParameterUpdate() <a href="#aec8b120499ecebf6cb9e2ba1b815e06a" id="aec8b120499ecebf6cb9e2ba1b815e06a"></a>

<p>vhq_result_t VHQMAIN_ProcessParameterUpdate</p>

This function processes a parameter update for application.

**Parameters**

\[in\] **receiver** = receiver name. \[in\] **pszDest** = downloaded file \[in\] **additional_info** = additional info \[in\] **additional_info_size** = additional info size \[in\] **eType** = type of downloaded file

### Returns

VHQ_SUCCESS, if success.

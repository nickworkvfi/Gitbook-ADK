---
title: netloader/include/zontalk.h

---

# netloader/include/zontalk.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ZonTalkResult](netloader_2include_2zontalk_8h.md#enum-zontalkresult)** { ZT_OK, ZT_RUNNING, ZT_ERROR} |
| enum| **[ZonTalkStatus](netloader_2include_2zontalk_8h.md#enum-zontalkstatus)** { ZT_REBOOT_REQUESTED, ZT_STOP_REQUESTED, ZT_DISPLAY_MESSAGE, ZT_SET_TIME, ZT_DOWNLOAD_FILE =0x10, ZT_INSTALL_FILE, ZT_DOWNLOAD_OK, ZT_DOWNLOAD_ERROR, ZT_INSTALL_OK, ZT_INSTALL_ERROR} |
| enum| **[ZonTalkInstallResult](netloader_2include_2zontalk_8h.md#enum-zontalkinstallresult)** { ZTINST_OK, ZTINST_INVALID_PARAM, ZTINST_NO_SOFTWARE, ZTINST_FAIL} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) enum [ZonTalkResult](netloader_2include_2zontalk_8h.md#enum-zontalkresult) | **[zontalk_start](netloader_2include_2zontalk_8h.md#function-zontalk-start)**(const char * port, const char * download_dir, void(*)(void *data, enum [ZonTalkStatus](netloader_2include_2zontalk_8h.md#enum-zontalkstatus) status, const char *msg, int progress) status_cb, enum [ZonTalkInstallResult](netloader_2include_2zontalk_8h.md#enum-zontalkinstallresult)(*)(void *data, const char **files) install_cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) enum [ZonTalkResult](netloader_2include_2zontalk_8h.md#enum-zontalkresult) | **[zontalk_start_fd](netloader_2include_2zontalk_8h.md#function-zontalk-start-fd)**(int fd, const char * download_dir, void(*)(void *data, enum [ZonTalkStatus](netloader_2include_2zontalk_8h.md#enum-zontalkstatus) status, const char *msg, int progress) status_cb, enum [ZonTalkInstallResult](netloader_2include_2zontalk_8h.md#enum-zontalkinstallresult)(*)(void *data, const char **files) install_cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[zontalk_stop](netloader_2include_2zontalk_8h.md#function-zontalk-stop)**() |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](netloader_2include_2zontalk_8h.md#define-dllspec)**  |

## Types Documentation

### enum ZonTalkResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_OK | |  no error  |
| ZT_RUNNING | |  zontalk server is already running  |
| ZT_ERROR | |  generic error  |




ZonTalk error code 


### enum ZonTalkStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_REBOOT_REQUESTED | |  reboot is requested (msg is empty)  |
| ZT_STOP_REQUESTED | |  stopping the server is requested (msg is empty)  |
| ZT_DISPLAY_MESSAGE | |  display message (msg contains message)  |
| ZT_SET_TIME | |  set date / time, (msg contains date/time)  |
| ZT_DOWNLOAD_FILE | =0x10|  file download (msg contains file name)  |
| ZT_INSTALL_FILE | |  install file (msg contains file name)  |
| ZT_DOWNLOAD_OK | |  download is complete, no installation required (also indicates end of file download, msg contains file name)  |
| ZT_DOWNLOAD_ERROR | |  download failed (also indicates end of file download, msg contains error)  |
| ZT_INSTALL_OK | |  installation done (also indicates end of file download, msg contains file name)  |
| ZT_INSTALL_ERROR | |  installation failed (also indicates end of file download, msg contains error)  |




ZonTalk status for status callback 


### enum ZonTalkInstallResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTINST_OK | |  installation successful  |
| ZTINST_INVALID_PARAM | |  invalid parameters  |
| ZTINST_NO_SOFTWARE | |  no software download file provided  |
| ZTINST_FAIL | |  software installation failed  |




Install callback result 



## Functions Documentation

### function zontalk_start

```cpp
DllSpec enum ZonTalkResult zontalk_start(
    const char * port,
    const char * download_dir,
    void(*)(void *data, enum ZonTalkStatus status, const char *msg, int progress) status_cb,
    enum ZonTalkInstallResult(*)(void *data, const char **files) install_cb,
    void * data
)
```


**Parameters**: 

  * **port** serial port 
  * **download_dir** directory to which files are downloaded 
  * **status_cb** callback for status updates or NULL 
  * **install_cb** callback to be invoked or NULL 
  * **data** data pointer for status_cb and install_cb 
  * **data** data pointer as provided to netloader_set_callback() 
  * **status** netloader status as above 
  * **msg** display message, file name or error code (see [NetLoaderStatus](netloader_2include_2netloader_8h.md#enum-netloaderstatus)) 
  * **progress** progress in % (0..100) for NETLD_DOWN_LOAD_FILE and NETLD_INSTALL_FILE 
  * **data** data pointer as provided to netloader_set_callback() 
  * **files** array of file names to be installed, terminated by NULL pointer 


**Return**: 

  * error code 
  * NETINST_OK or error code 


**Par**: 

  * 

The status_cb callback is invoked with the following parameters: 
  * 

The install_cb callback is invoked for installing files with the following parameters: 


start the zontalk server 


### function zontalk_start_fd

```cpp
DllSpec enum ZonTalkResult zontalk_start_fd(
    int fd,
    const char * download_dir,
    void(*)(void *data, enum ZonTalkStatus status, const char *msg, int progress) status_cb,
    enum ZonTalkInstallResult(*)(void *data, const char **files) install_cb,
    void * data
)
```


**Parameters**: 

  * **fd** open and configured file descriptor to use for zontalk. The file descriptor will be closed when no longer needed. 
  * **download_dir** directory to which files are downloaded 
  * **status_cb** callback for status updates or NULL 
  * **install_cb** callback to be invoked or NULL 
  * **data** data pointer for status_cb and install_cb 
  * **data** data pointer as provided to netloader_set_callback() 
  * **status** netloader status as above 
  * **msg** display message, file name or error code (see [NetLoaderStatus](netloader_2include_2netloader_8h.md#enum-netloaderstatus)) 
  * **progress** progress in % (0..100) for NETLD_DOWN_LOAD_FILE and NETLD_INSTALL_FILE 
  * **data** data pointer as provided to netloader_set_callback() 
  * **files** array of file names to be installed, terminated by NULL pointer 


**Return**: 

  * error code 
  * NETINST_OK or error code 


**Par**: 

  * 

The status_cb callback is invoked with the following parameters: 
  * 

The install_cb callback is invoked for installing files with the following parameters: 


start the zontalk server on an already open port 


### function zontalk_stop

```cpp
DllSpec void zontalk_stop()
```


stop the zontalk server 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef ZONTALKD_H_20221209
#define ZONTALKD_H_20221209

#include <string>
#include <vector>

#if defined _WIN32 && defined ZONTALK_SHARED_EXPORT
#    define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined ZONTALK_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif


#ifdef __cplusplus
extern "C" {
#endif

enum ZonTalkResult {
   ZT_OK,      
   ZT_RUNNING, 
   ZT_ERROR    
};

enum ZonTalkStatus {
   ZT_REBOOT_REQUESTED,   
   ZT_STOP_REQUESTED,     
   ZT_DISPLAY_MESSAGE,    
   ZT_SET_TIME,           
   ZT_DOWNLOAD_FILE=0x10, 
   ZT_INSTALL_FILE,       
   ZT_DOWNLOAD_OK,        
   ZT_DOWNLOAD_ERROR,     
   ZT_INSTALL_OK,         
   ZT_INSTALL_ERROR,      
};

enum ZonTalkInstallResult {
   ZTINST_OK,            
   ZTINST_INVALID_PARAM, 
   ZTINST_NO_SOFTWARE,   
   ZTINST_FAIL           
};


DllSpec enum ZonTalkResult zontalk_start(
   const char *port,
   const char *download_dir,
   void (*status_cb)(void *data,
                     enum ZonTalkStatus status,
                     const char *msg,
                     int progress),
   enum ZonTalkInstallResult (*install_cb)(void *data,
                                           const char **files),
   void *data
);

DllSpec enum ZonTalkResult zontalk_start_fd(
   int fd,
   const char *download_dir,
   void (*status_cb)(void *data,
                     enum ZonTalkStatus status,
                     const char *msg,
                     int progress),
   enum ZonTalkInstallResult (*install_cb)(void *data,
                                           const char **files),
   void *data
);

DllSpec void zontalk_stop();


#ifdef __cplusplus
} // extern "C"
#endif // __cplusplus

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

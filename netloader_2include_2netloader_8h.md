---
title: netloader/include/netloader.h

---

# netloader/include/netloader.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NetLoaderResult](netloader_2include_2netloader_8h.md#enum-netloaderresult)** { NETLD_OK, NETLD_RUNNING, NETLD_ERROR} |
| enum| **[NetLoaderStatus](netloader_2include_2netloader_8h.md#enum-netloaderstatus)** { NETLD_REBOOT_REQUESTED, NETLD_STOP_REQUESTED, NETLD_DISPLAY_MESSAGE, NETLD_SET_TIME, NETLD_DOWNLOAD_FILE =0x10, NETLD_INSTALL_FILE, NETLD_DOWNLOAD_OK, NETLD_DOWNLOAD_ERROR, NETLD_INSTALL_OK, NETLD_INSTALL_ERROR} |
| enum| **[NetLoaderInstallResult](netloader_2include_2netloader_8h.md#enum-netloaderinstallresult)** { NETINST_OK, NETINST_INVALID_PARAM, NETINST_NO_SOFTWARE, NETINST_FAIL} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) enum [NetLoaderResult](netloader_2include_2netloader_8h.md#enum-netloaderresult) | **[netloader_start](netloader_2include_2netloader_8h.md#function-netloader-start)**(const char * download_dir, void(*)(void *data, enum [NetLoaderStatus](netloader_2include_2netloader_8h.md#enum-netloaderstatus) status, const char *msg, int progress) status_cb, enum [NetLoaderInstallResult](netloader_2include_2netloader_8h.md#enum-netloaderinstallresult)(*)(void *data, const char **files) install_cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[netloader_stop](netloader_2include_2netloader_8h.md#function-netloader-stop)**() |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](netloader_2include_2netloader_8h.md#define-dllspec)**  |

## Types Documentation

### enum NetLoaderResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NETLD_OK | |  no error  |
| NETLD_RUNNING | |  netloader server is already running  |
| NETLD_ERROR | |  generic error  |




NetLoader error code 


### enum NetLoaderStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NETLD_REBOOT_REQUESTED | |  reboot is requested (msg is empty)  |
| NETLD_STOP_REQUESTED | |  stopping the server is requested (msg is empty)  |
| NETLD_DISPLAY_MESSAGE | |  display message (msg contains message)  |
| NETLD_SET_TIME | |  set date / time, (msg contains date/time)  |
| NETLD_DOWNLOAD_FILE | =0x10|  file download (msg contains file name)  |
| NETLD_INSTALL_FILE | |  install file (msg contains file name)  |
| NETLD_DOWNLOAD_OK | |  download is complete, no installation required (also indicates end of file download, msg contains file name)  |
| NETLD_DOWNLOAD_ERROR | |  download failed (also indicates end of file download, msg contains error)  |
| NETLD_INSTALL_OK | |  installation done (also indicates end of file download, msg contains file name)  |
| NETLD_INSTALL_ERROR | |  installation failed (also indicates end of file download, msg contains error)  |




NetLoader status for status callback 


### enum NetLoaderInstallResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NETINST_OK | |  installation successful  |
| NETINST_INVALID_PARAM | |  invalid parameters  |
| NETINST_NO_SOFTWARE | |  no software download file provided  |
| NETINST_FAIL | |  software installation failed  |




Install callback result 



## Functions Documentation

### function netloader_start

```cpp
DllSpec enum NetLoaderResult netloader_start(
    const char * download_dir,
    void(*)(void *data, enum NetLoaderStatus status, const char *msg, int progress) status_cb,
    enum NetLoaderInstallResult(*)(void *data, const char **files) install_cb,
    void * data
)
```


**Parameters**: 

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


start the netloader server 


### function netloader_stop

```cpp
DllSpec void netloader_stop()
```


stop the netloader server 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef NETLOADER_H_20220916
#define NETLOADER_H_20220916

#include <string>
#include <vector>

#if defined _WIN32 && defined NETLOADER_SHARED_EXPORT
#    define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined NETLOADER_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif


#ifdef __cplusplus
extern "C" {
#endif

enum NetLoaderResult {
   NETLD_OK,      
   NETLD_RUNNING, 
   NETLD_ERROR    
};

enum NetLoaderStatus {
   NETLD_REBOOT_REQUESTED,   
   NETLD_STOP_REQUESTED,     
   NETLD_DISPLAY_MESSAGE,    
   NETLD_SET_TIME,           
   NETLD_DOWNLOAD_FILE=0x10, 
   NETLD_INSTALL_FILE,       
   NETLD_DOWNLOAD_OK,        
   NETLD_DOWNLOAD_ERROR,     
   NETLD_INSTALL_OK,         
   NETLD_INSTALL_ERROR,      
};

enum NetLoaderInstallResult {
   NETINST_OK,            
   NETINST_INVALID_PARAM, 
   NETINST_NO_SOFTWARE,   
   NETINST_FAIL           
};


DllSpec enum NetLoaderResult netloader_start(
   const char *download_dir,
   void (*status_cb)(void *data,
                     enum NetLoaderStatus status,
                     const char *msg,
                     int progress),
   enum NetLoaderInstallResult (*install_cb)(void *data,
                                             const char **files),
   void *data
);

DllSpec void netloader_stop();

#ifdef __cplusplus
} // extern "C"


class DllSpec NetLoaderClient {
 public:
   enum Result {
      // positive results (check with result < ERR_FAIL)
      OK,           
      OK_DOWNLOAD,  
      OK_EXPANSION, 
      OK_INSTALL,   
      OK_REBOOT,    
      // error results
      ERR_FAIL=0x100, 
      ERR_CONNECT,    
      ERR_READ,       
      ERR_SEND,       
      ERR_NOSPACE,    
      ERR_PARAM,      
      ERR_DOWNLOAD,   
      ERR_INSTALL,     
   };

   struct Bundle {
      std::string name;    
      std::string version; 
      std::string owner;   
      Bundle(const std::string &n, const std::string &v, const std::string &o=std::string()) :name(n),version(v),owner(o) {}
   };

   struct Package {
      std::string name;     
      std::string version;  
      std::string bundle;   
      Package(const std::string &n, const std::string &v, const std::string &b=std::string()) :name(n),version(v),bundle(b) {}
   };

   struct ComponentInfo {
      std::string name;    
      std::string version; 
      ComponentInfo(const std::string &n, const std::string &v) :name(n),version(v) {}
   };

   struct TerminalInfo {
      std::string netloaderVersion; 
      std::string serialNumber;     
      std::string model;            
      std::string softwareRelease;  
      std::string rootFSVersion;    
      std::string partNumber;       
      std::string hwRevision;       
      std::vector<ComponentInfo> component;
      std::string discretionary;    
      std::string keyStatus;        
      std::string msrHTdesStatus;   
   };

 private:

   struct PrivateData;
   PrivateData *d;
 public:
   NetLoaderClient(const std::string &h);

   NetLoaderClient(const NetLoaderClient &)=delete;
   NetLoaderClient &operator=(const NetLoaderClient &)=delete;

   virtual ~NetLoaderClient();

   Result sendFile(const void *data, size_t size, const std::string &dstfilename, unsigned mask,
                   const std::string &user, const std::string &group, int type='P');

   Result sendFile(const std::string &srcfilename, const std::string &dstfilename, unsigned mask,
                   const std::string &user, const std::string &group, int type='P');

   Result reset();

   Result stop();

   Result setDateTime(const std::string &yyyymmddhhmmss);

   Result display(const std::string &message);

   Result getNetLoaderVersion(std::string &version);

   Result getTerminalInfo(TerminalInfo &info);

   Result getSoftwareInfo(std::vector<Bundle> &bundles, std::vector<Package> &packages);
};

#endif // __cplusplus

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

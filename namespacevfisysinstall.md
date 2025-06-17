---
title: vfisysinstall

---

# vfisysinstall

**Module:** **[installation functions](group__vfisysinstall.md)**

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api)[vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[sysAuthenticateFile](namespacevfisysinstall.md#function-sysauthenticatefile)**(const std::string & path) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api)[vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[sysInstall](namespacevfisysinstall.md#function-sysinstall)**(const std::string & path) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api)[vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[sysBaseInstall](namespacevfisysinstall.md#function-sysbaseinstall)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api)[vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[sysFreeResourcesInstall](namespacevfisysinstall.md#function-sysfreeresourcesinstall)**(const std::string & value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api)[vfisysinfo::sysError](namespacevfisysinfo.md#enum-syserror) | **[sysGetInstallStatus](namespacevfisysinstall.md#function-sysgetinstallstatus)**([vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & json) |

## Detailed Description


Verifone vfisysinstall namespace 


## Functions Documentation

### function sysAuthenticateFile

```cpp
SYS_INFO_APIvfisysinfo::sysError sysAuthenticateFile(
    const std::string & path
)
```


**Return**: 

  * SYS_ERR_OK - file is authenticated 
  * SYS_ERR_FAIL - authentication error 


Authenticate file 


### function sysInstall

```cpp
SYS_INFO_APIvfisysinfo::sysError sysInstall(
    const std::string & path
)
```


**Return**: 

  * SYS_ERR_OK - 
  * SYS_ERR_FAIL - authentication error 
  * SYS_ERR_PARAMETER 
  * SYS_ERR_FILE_DOES_NOT_EXIST 
  * SYS_ERR_PERMISSION 
  * SYS_ERR_REBOOT_NEEDED 
  * SYS_ERR_BUNDLE_VERSION - higher version already installed 


**Note**: This API does not remove the installation package. The caller is responsible for removing the installation package. 

Install bundle 


### function sysBaseInstall

```cpp
SYS_INFO_APIvfisysinfo::sysError sysBaseInstall()
```


**Return**: 

  * SYS_ERR_OK 
  * SYS_ERR_FAIL 
  * SYS_ERR_PROP_UNSUPPORTED 
  * SYS_ERR_NOT_DOCKED 
  * SYS_ERR_REBOOT_NEEDED 
  * SYS_ERR_BUNDLE_VERSION - higher version already installed 


Install bundle on base 


### function sysFreeResourcesInstall

```cpp
SYS_INFO_APIvfisysinfo::sysError sysFreeResourcesInstall(
    const std::string & value
)
```


**Return**: 

  * SYS_ERR_OK 
  * SYS_ERR_PARAMETER 
  * SYS_ERR_FILE_DOES_NOT_EXIST 
  * SYS_ERR_PATHNAME_TOO_LONG 
  * SYS_ERR_GET_CWD 
  * SYS_ERR_FAIL 


**Note**: Expect that the caller of this API is killed during installtion. 

 Depending on what action is needed (reboot or restart apps) to extract the packages into the filesystem, the installer will do the needful. The caller upon reboot/restart should call the new status API to find out the status of the installation. (VOS2 only) 

Installs packages from the filepath passed in the function. 


### function sysGetInstallStatus

```cpp
SYS_INFO_APIvfisysinfo::sysError sysGetInstallStatus(
    vfiipc::JSObject & json
)
```


**Return**: 

  * SYS_ERR_OK 
  * SYS_ERR_FAIL 


Get JSON formatted status for the install API [sysFreeResourcesInstall()](namespacevfisysinstall.md#function-sysfreeresourcesinstall) (VOS2 only) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
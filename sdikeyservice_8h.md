---
title: sdi/src/sdikeyservice.h

---

# sdi/src/sdikeyservice.h



## Functions

|                | Name           |
| -------------- | -------------- |
| std::string | **[keyservice_get_libname](sdikeyservice_8h.md#function-keyservice-get-libname)**() |
| std::string | **[keyservice_get_build_date](sdikeyservice_8h.md#function-keyservice-get-build-date)**() |
| std::string | **[keyservice_get_version](sdikeyservice_8h.md#function-keyservice-get-version)**() |
| void | **[keyservice_start](sdikeyservice_8h.md#function-keyservice-start)**() |
| void | **[keyservice_stop](sdikeyservice_8h.md#function-keyservice-stop)**() |
| unsigned short | **[keyservice_read_certificate](sdikeyservice_8h.md#function-keyservice-read-certificate)**(const std::string & refname, std::vector< unsigned char > & certificate) |


## Functions Documentation

### function keyservice_get_libname

```cpp
std::string keyservice_get_libname()
```


**Return**: library name or an empty string, if SDI remote keyservice is not supported for this device type 

returns the library name for the SDI remote keyservice 


### function keyservice_get_build_date

```cpp
std::string keyservice_get_build_date()
```


**Return**: build date or an empty string, if SDI remote keyservice is not supported for this device type 

returns the build date string for the SDI remote keyservice library 


### function keyservice_get_version

```cpp
std::string keyservice_get_version()
```


**Return**: version string or an empty string, if SDI remote keyservice is not supported for this device type 

returns the version string for the SDI remote keyservice library 


### function keyservice_start

```cpp
void keyservice_start()
```


**Note**: This function does nothing, if SDI remote keyservice is not supported for this device type 

starts the SDI remote keyservice 


### function keyservice_stop

```cpp
void keyservice_stop()
```


**Note**: This function does nothing, if SDI remote keyservice is not supported for this device type 

stops the SDI remote keyservice 


### function keyservice_read_certificate

```cpp
unsigned short keyservice_read_certificate(
    const std::string & refname,
    std::vector< unsigned char > & certificate
)
```


**Parameters**: 

  * **refname** reference name used to select the corresponding certificate to be read 
  * **certificate** buffer containing the X.509 certificate 


**Return**: SDI error code: 0x9000 for success 0x64FE for parameter error (reference name not supported) 0x6400 for execution error (certificate not installed or invalid) 

read a X.509 certificate for a corresponding reference name specified by parameter `refname`. As reference name the friendly certificate labels (as specified for Android keystore) are used cross over platforms. Example: "VFI_AUTHN_RSA" to read the Authex certificate "VFI_VRK_RSA" or "VFI_VRK_ECC" to read the certificate for remote keyloading The certificate is returned as second parameter `certificate` in binary DER format. 




## Source code

```cpp
#ifndef _SDI_KEYSERVICE_H_
#define _SDI_KEYSERVICE_H_

#include <string>
#include <vector>

std::string keyservice_get_libname();
std::string keyservice_get_build_date();
std::string keyservice_get_version();
void keyservice_start();
void keyservice_stop();

unsigned short keyservice_read_certificate(const std::string &refname,
    std::vector<unsigned char> &certificate);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

---
title: vfifps

---

# vfifps



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type)** { FPS_RES_SUCCESS = 0, FPS_RES_FAILURE = -1, FPS_RES_NO_PROP = -2, FPS_RES_INFO_NOT_READ = -3} |
| enum| **[FPS_CB_Type](namespacevfifps.md#enum-fps-cb-type)** { FPS_CB_DATA, FPS_CB_ERROR, FPS_CB_INFO_BACKWARD_MOVEMENT, FPS_CB_INFO_BAD_QUALITY, FPS_CB_INFO_CALIB_START, FPS_CB_INFO_CENTER_AND_PRESS_HARDER, FPS_CB_INFO_CLEAN_SENSOR, FPS_CB_INFO_CONSOLIDATION_FAIL, FPS_CB_INFO_CONSOLIDATION_SUCCEED, FPS_CB_INFO_ENROLL_START, FPS_CB_INFO_ENROLL_PROGRESS, FPS_CB_INFO_FINGER_DETECT_START, FPS_CB_INFO_FINGERLEFT, FPS_CB_INFO_FINGERRIGHT, FPS_CB_INFO_FINGERTOP, FPS_CB_INFO_FINGERBOTTOM, FPS_CB_INFO_GOOD_IMAGE, FPS_CB_INFO_GUI_FINISH, FPS_CB_INFO_GUI_FINISH_DETECT_START, FPS_CB_INFO_GUI_FINISH_FAIL, FPS_CB_INFO_GUI_FINISH_SUCCEED, FPS_CB_INFO_IMAGE_PROCESSED, FPS_CB_INFO_JOINT_DETECTED, FPS_CB_INFO_KEEP_FINGER, FPS_CB_INFO_NO_FINGER, FPS_CB_INFO_PROCESSING_IMAGE, FPS_CB_INFO_PUT_FINGER, FPS_CB_INFO_PUT_FINGER2, FPS_CB_INFO_PUT_FINGER3, FPS_CB_INFO_PUT_FINGER4, FPS_CB_INFO_PUT_FINGER5, FPS_CB_INFO_REMOVE_FINGER, FPS_CB_INFO_START, FPS_CB_INFO_SWIPE_IN_PROGRESS, FPS_CB_INFO_TOO_DARK, FPS_CB_INFO_TOO_DRY, FPS_CB_INFO_TOO_FAST, FPS_CB_INFO_TOO_HIGH, FPS_CB_INFO_TOO_LEFT, FPS_CB_INFO_TOO_LIGHT, FPS_CB_INFO_TOO_LOW, FPS_CB_INFO_TOO_RIGHT, FPS_CB_INFO_TOO_SHORT, FPS_CB_INFO_TOO_SKEWED, FPS_CB_INFO_TOO_SMALL, FPS_CB_INFO_TOO_STRANGE, FPS_CB_INFO_TOUCH_SENSOR, FPS_CB_INFO_VERIFY_START, FPS_CB_PICTURE, FPS_CB_ANSI_DATA, FPS_CB_ISO_DATA, FPS_CB_PGM_DATA} |
| enum| **[FPS_PROP_INT_Type](namespacevfifps.md#enum-fps-prop-int-type)** { FPS_PROP_INT_VERSION, FPS_PROP_INT_INFO, FPS_PROP_INT_MINNEXTVERSION, FPS_PROP_INT_VARIANT, FPS_PROP_INT_FUNCTIONALITY, FPS_PROP_INT_CONFIG, FPS_PROP_INT_ID, FPS_PROP_INT_AUTHENTIFYID, FPS_PROP_INT_USAGE, FPS_PROP_INT_SENSORTYPE, FPS_PROP_INT_IMAGEWIDTH, FPS_PROP_INT_IMAGEHEIGHT, FPS_PROP_INT_MAXGRABWINDOW, FPS_PROP_INT_COMPANIONVENDORCODE, FPS_PROP_INT_VERSIONEXT, FPS_PROP_INT_SYSTEMID, FPS_PROP_INT_DATATYPE, FPS_PROP_INT_IMAGE_QUALITY_LAST, FPS_PROP_INT_IMAGE_NUMBER_OF_MINUTIAE_LAST, FPS_PROP_INT_IMAGE_SIZE} |
| enum| **[FPS_PROP_STRING_Type](namespacevfifps.md#enum-fps-prop-string-type)** { FPS_PROP_STRING_EXTINFO, FPS_PROP_STRING_INFO, FPS_PROP_STRING_TYPE, FPS_PROP_STRING_HWINFO, FPS_PROP_STRING_GUID, FPS_PROP_STRING_SYSTEMNAME} |
| enum| **[FPS_IMG_Type](namespacevfifps.md#enum-fps-img-type)** { FPS_IMG_RAW, FPS_IMG_PGM, FPS_IMG_ANSI, FPS_IMG_ISO, FPS_IMG_ALL} |
| typedef void(*)(void *dataptr, FPS_CB_Type msgType, int width, std::vector< unsigned char > rawData) | **[resultCallbackType](namespacevfifps.md#typedef-resultcallbacktype)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) int16_t | **[fps_open](namespacevfifps.md#function-fps-open)**(std::string & device) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_close](namespacevfifps.md#function-fps-close)**(int16_t handle) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_getPropInt](namespacevfifps.md#function-fps-getpropint)**(int16_t handle, [FPS_PROP_INT_Type](namespacevfifps.md#enum-fps-prop-int-type) prop, int & propValue) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_getPropString](namespacevfifps.md#function-fps-getpropstring)**(int16_t handle, [FPS_PROP_STRING_Type](namespacevfifps.md#enum-fps-prop-string-type) prop, std::string & propValue) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_setPropInt](namespacevfifps.md#function-fps-setpropint)**(int16_t handle, [FPS_PROP_INT_Type](namespacevfifps.md#enum-fps-prop-int-type) prop, int & newPropValue) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_setPropString](namespacevfifps.md#function-fps-setpropstring)**(int16_t handle, [FPS_PROP_STRING_Type](namespacevfifps.md#enum-fps-prop-string-type) prop, std::string & newPropValue) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_capture_start](namespacevfifps.md#function-fps-capture-start)**(int16_t handle, [resultCallbackType](namespacevfifps.md#typedef-resultcallbacktype) cb, void * dataptr) |
| [DllSpec](sound_8h.md#define-dllspec)[FPS_RES_Type](namespacevfifps.md#enum-fps-res-type) | **[fps_capture_stop](namespacevfifps.md#function-fps-capture-stop)**(int16_t handle) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[fps_GetVersion](namespacevfifps.md#function-fps-getversion)**() |

## Types Documentation

### enum FPS_RES_Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FPS_RES_SUCCESS | 0|  function was successful  |
| FPS_RES_FAILURE | -1|  function returned with failure  |
| FPS_RES_NO_PROP | -2|  function returned with no such property  |
| FPS_RES_INFO_NOT_READ | -3|  function returned fpsInfo not read  |




enumeration of result types 


### enum FPS_CB_Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FPS_CB_DATA | |  data read successfully  |
| FPS_CB_ERROR | |  error occurred, see details in the data vector of the callback  |
| FPS_CB_INFO_BACKWARD_MOVEMENT | |  backward movement  |
| FPS_CB_INFO_BAD_QUALITY | |  bad quality, try again  |
| FPS_CB_INFO_CALIB_START | |  calib start  |
| FPS_CB_INFO_CENTER_AND_PRESS_HARDER | |  center and press harder  |
| FPS_CB_INFO_CLEAN_SENSOR | |  clean the sensor  |
| FPS_CB_INFO_CONSOLIDATION_FAIL | |  consolidation fail  |
| FPS_CB_INFO_CONSOLIDATION_SUCCEED | |  consolidation succeed  |
| FPS_CB_INFO_ENROLL_START | |  enroll start  |
| FPS_CB_INFO_ENROLL_PROGRESS | |  enroll progress  |
| FPS_CB_INFO_FINGER_DETECT_START | |  detect start  |
| FPS_CB_INFO_FINGERLEFT | |  position finger : exceeding left boundaries  |
| FPS_CB_INFO_FINGERRIGHT | |  position finger : exceeding right boundaries  |
| FPS_CB_INFO_FINGERTOP | |  position finger : exceeding top boundaries  |
| FPS_CB_INFO_FINGERBOTTOM | |  position finger : exceeding bottom boundaries  |
| FPS_CB_INFO_GOOD_IMAGE | |  good image  |
| FPS_CB_INFO_GUI_FINISH | |  gui finish  |
| FPS_CB_INFO_GUI_FINISH_DETECT_START | |  gui finish detect start  |
| FPS_CB_INFO_GUI_FINISH_FAIL | |  gui finish fail  |
| FPS_CB_INFO_GUI_FINISH_SUCCEED | |  gui finished succeed  |
| FPS_CB_INFO_IMAGE_PROCESSED | |  image processed  |
| FPS_CB_INFO_JOINT_DETECTED | |  joint detected  |
| FPS_CB_INFO_KEEP_FINGER | |  keep finger on sensor  |
| FPS_CB_INFO_NO_FINGER | |  no finger  |
| FPS_CB_INFO_PROCESSING_IMAGE | |  processing image  |
| FPS_CB_INFO_PUT_FINGER | |  put finger number 1  |
| FPS_CB_INFO_PUT_FINGER2 | |  put finger number 2  |
| FPS_CB_INFO_PUT_FINGER3 | |  put finger number 3  |
| FPS_CB_INFO_PUT_FINGER4 | |  put finger number 4  |
| FPS_CB_INFO_PUT_FINGER5 | |  put finger number 5  |
| FPS_CB_INFO_REMOVE_FINGER | |  remove finger  |
| FPS_CB_INFO_START | |  start  |
| FPS_CB_INFO_SWIPE_IN_PROGRESS | |  swipe in progress  |
| FPS_CB_INFO_TOO_DARK | |  image too dark  |
| FPS_CB_INFO_TOO_DRY | |  too dry  |
| FPS_CB_INFO_TOO_FAST | |  too fast  |
| FPS_CB_INFO_TOO_HIGH | |  too hight  |
| FPS_CB_INFO_TOO_LEFT | |  too left  |
| FPS_CB_INFO_TOO_LIGHT | |  image too light  |
| FPS_CB_INFO_TOO_LOW | |  too low  |
| FPS_CB_INFO_TOO_RIGHT | |  too right  |
| FPS_CB_INFO_TOO_SHORT | |  too short  |
| FPS_CB_INFO_TOO_SKEWED | |  too skewed  |
| FPS_CB_INFO_TOO_SMALL | |  too small  |
| FPS_CB_INFO_TOO_STRANGE | |  too strange  |
| FPS_CB_INFO_TOUCH_SENSOR | |  touch sensor  |
| FPS_CB_INFO_VERIFY_START | |  verify start  |
| FPS_CB_PICTURE | |  picture in raw data format  |
| FPS_CB_ANSI_DATA | |  picture in ansi format  |
| FPS_CB_ISO_DATA | |  picture in iso format  |
| FPS_CB_PGM_DATA | |  picture in pgm format  |




enumeration of callback types 


### enum FPS_PROP_INT_Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FPS_PROP_INT_VERSION | |  property of version informations  |
| FPS_PROP_INT_INFO | |  property of general informations  |
| FPS_PROP_INT_MINNEXTVERSION | |  property of minimal next version  |
| FPS_PROP_INT_VARIANT | |  property of variant  |
| FPS_PROP_INT_FUNCTIONALITY | |  property of functionality  |
| FPS_PROP_INT_CONFIG | |  property of configuration  |
| FPS_PROP_INT_ID | |  property of id  |
| FPS_PROP_INT_AUTHENTIFYID | |  property of authentify id  |
| FPS_PROP_INT_USAGE | |  property of usage  |
| FPS_PROP_INT_SENSORTYPE | |  property of sensortype  |
| FPS_PROP_INT_IMAGEWIDTH | |  property of max image width  |
| FPS_PROP_INT_IMAGEHEIGHT | |  property of max image height  |
| FPS_PROP_INT_MAXGRABWINDOW | |  property of max grab window  |
| FPS_PROP_INT_COMPANIONVENDORCODE | |  property of companion vendor code  |
| FPS_PROP_INT_VERSIONEXT | |  property of version extension  |
| FPS_PROP_INT_SYSTEMID | |  property of system id  |
| FPS_PROP_INT_DATATYPE | |  property of datatype  |
| FPS_PROP_INT_IMAGE_QUALITY_LAST | |  property of last image quality  |
| FPS_PROP_INT_IMAGE_NUMBER_OF_MINUTIAE_LAST | |  property of number of minutiae in last scan  |
| FPS_PROP_INT_IMAGE_SIZE | |  property of image size for iso/ansi  |




enumeration of integer properties 


### enum FPS_PROP_STRING_Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FPS_PROP_STRING_EXTINFO | |  f.e. extended info from sensor in json format  |
| FPS_PROP_STRING_INFO | |  f.e. raw data from sensor in json format  |
| FPS_PROP_STRING_TYPE | |  f.e. sensor type  |
| FPS_PROP_STRING_HWINFO | |  f.e. extended informations of used hardware  |
| FPS_PROP_STRING_GUID | |  f.e. guid delivered by sensor  |
| FPS_PROP_STRING_SYSTEMNAME | |  f.e. system name delivered by sensor  |




enumeration of string properties 


### enum FPS_IMG_Type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FPS_IMG_RAW | |  Image will be scanned in RAW format of sensor  |
| FPS_IMG_PGM | |  Image will be converted to PGM format  |
| FPS_IMG_ANSI | |  Image will be converted to ANSI format  |
| FPS_IMG_ISO | |  Image will be converted to ISO format  |
| FPS_IMG_ALL | |  All image formats will be delivered in callback  |




enumeration of desired image type, standard is RAW 


### typedef resultCallbackType

```cpp
typedef void(* resultCallbackType) (void *dataptr, FPS_CB_Type msgType, int width, std::vector< unsigned char > rawData);
```


**Parameters**: 

  * **dataptr** - reference to sender 
  * **msgType** - identifies the kind of callback data 
  * **width** - information about the picture width 
  * **[rawData](structraw_data.md)** - raw data of the message delivered as vector of unsigned chars 


callback method of capture_start 



## Functions Documentation

### function fps_open

```cpp
DllSpec int16_t fps_open(
    std::string & device
)
```


**Parameters**: 

  * **device** - device identifier to open. If empty automatic device detection. 


**Return**: handle to opened finger print sensor 

open connection to fingerprint sensor 


### function fps_close

```cpp
DllSpecFPS_RES_Type fps_close(
    int16_t handle
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 


**Return**: success indicator cf. FPS_RES_Type 

close connection to fingerprint sensor 


### function fps_getPropInt

```cpp
DllSpecFPS_RES_Type fps_getPropInt(
    int16_t handle,
    FPS_PROP_INT_Type prop,
    int & propValue
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 
  * **prop** - integer property to read 
  * **propValue** - out variable where the read result is stored 


**Return**: success indicator cf. FPS_RES_Type 

read property of integer type from fingerprint sensor 


### function fps_getPropString

```cpp
DllSpecFPS_RES_Type fps_getPropString(
    int16_t handle,
    FPS_PROP_STRING_Type prop,
    std::string & propValue
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 
  * **prop** - string property to read 
  * **propValue** - out variable where the read result is stored 


**Return**: success indicator cf. FPS_RES_Type 

read property of string type from fingerprint sensor 


### function fps_setPropInt

```cpp
DllSpecFPS_RES_Type fps_setPropInt(
    int16_t handle,
    FPS_PROP_INT_Type prop,
    int & newPropValue
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 
  * **prop** - integer property to write 
  * **newPropValue** - in variable where the data to write is stored 


**Return**: success indicator cf. FPS_RES_Type 

write property of integer type to fingerprint sensor 


### function fps_setPropString

```cpp
DllSpecFPS_RES_Type fps_setPropString(
    int16_t handle,
    FPS_PROP_STRING_Type prop,
    std::string & newPropValue
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 
  * **prop** - string property to write 
  * **newPropValue** - in variable where the data to write is stored 


**Return**: success indicator cf. FPS_RES_Type 

write property of string type from fingerprint sensor 


### function fps_capture_start

```cpp
DllSpecFPS_RES_Type fps_capture_start(
    int16_t handle,
    resultCallbackType cb,
    void * dataptr
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 
  * **cb** - callback for user instruction, results 
  * **dataptr** - ptr to datacontext of caller 


**Return**: success indicator cf. FPS_RES_Type 

start captureing fingerprint from device (asyncron). Install a callback that indicates successful read, errors or user information. 


### function fps_capture_stop

```cpp
DllSpecFPS_RES_Type fps_capture_stop(
    int16_t handle
)
```


**Parameters**: 

  * **handle** - handle to fingerprint sensor object 


**Return**: success indicator cf. FPS_RES_Type 

stop captureing fingerprint from device 


### function fps_GetVersion

```cpp
DllSpec std::string fps_GetVersion()
```


get version of adk library 






-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
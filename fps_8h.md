---
title: fps/src/vfifps/fps.h

---

# fps/src/vfifps/fps.h



## Namespaces

| Name           |
| -------------- |
| **[vfifps](namespacevfifps.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](fps_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef __FPS_H__
#define __FPS_H__

#include <stdint.h>
#include <string>
#include <vector>

#if (defined _VRXEVO || defined _WIN32)
#  if defined VFI_FPS_SHARED_EXPORT
#    define DllSpec __declspec(dllexport)
#  elif defined VFI_FPS_STATIC_EXPORT || defined _WIN32 // dllimport not required for Windows
#    define DllSpec
#  else
#    define DllSpec __declspec(dllimport)
#  endif
#elif defined __GNUC__ && defined VFI_FPS_SHARED_EXPORT
#  define DllSpec __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#if defined VRX_IMPORT
#  define DllSpec __declspec(dllimport)
#endif

namespace vfifps
{
  enum FPS_RES_Type
  {
    FPS_RES_SUCCESS = 0,
    FPS_RES_FAILURE = -1,
    FPS_RES_NO_PROP = -2,
    FPS_RES_INFO_NOT_READ = -3
  };

  enum FPS_CB_Type
  {
    FPS_CB_DATA,
    FPS_CB_ERROR,
    FPS_CB_INFO_BACKWARD_MOVEMENT,
    FPS_CB_INFO_BAD_QUALITY,
    FPS_CB_INFO_CALIB_START,
    FPS_CB_INFO_CENTER_AND_PRESS_HARDER,
    FPS_CB_INFO_CLEAN_SENSOR,
    FPS_CB_INFO_CONSOLIDATION_FAIL,
    FPS_CB_INFO_CONSOLIDATION_SUCCEED,
    FPS_CB_INFO_ENROLL_START,
    FPS_CB_INFO_ENROLL_PROGRESS,
    FPS_CB_INFO_FINGER_DETECT_START,
    FPS_CB_INFO_FINGERLEFT,
    FPS_CB_INFO_FINGERRIGHT,
    FPS_CB_INFO_FINGERTOP,
    FPS_CB_INFO_FINGERBOTTOM,
    FPS_CB_INFO_GOOD_IMAGE,
    FPS_CB_INFO_GUI_FINISH,
    FPS_CB_INFO_GUI_FINISH_DETECT_START,
    FPS_CB_INFO_GUI_FINISH_FAIL,
    FPS_CB_INFO_GUI_FINISH_SUCCEED,
    FPS_CB_INFO_IMAGE_PROCESSED,
    FPS_CB_INFO_JOINT_DETECTED,
    FPS_CB_INFO_KEEP_FINGER,
    FPS_CB_INFO_NO_FINGER,
    FPS_CB_INFO_PROCESSING_IMAGE,
    FPS_CB_INFO_PUT_FINGER,
    FPS_CB_INFO_PUT_FINGER2,
    FPS_CB_INFO_PUT_FINGER3,
    FPS_CB_INFO_PUT_FINGER4,
    FPS_CB_INFO_PUT_FINGER5,
    FPS_CB_INFO_REMOVE_FINGER,
    FPS_CB_INFO_START,
    FPS_CB_INFO_SWIPE_IN_PROGRESS,
    FPS_CB_INFO_TOO_DARK,
    FPS_CB_INFO_TOO_DRY,
    FPS_CB_INFO_TOO_FAST,
    FPS_CB_INFO_TOO_HIGH,
    FPS_CB_INFO_TOO_LEFT,
    FPS_CB_INFO_TOO_LIGHT,
    FPS_CB_INFO_TOO_LOW,
    FPS_CB_INFO_TOO_RIGHT,
    FPS_CB_INFO_TOO_SHORT,
    FPS_CB_INFO_TOO_SKEWED,
    FPS_CB_INFO_TOO_SMALL,
    FPS_CB_INFO_TOO_STRANGE,
    FPS_CB_INFO_TOUCH_SENSOR,
    FPS_CB_INFO_VERIFY_START,
    FPS_CB_PICTURE,
    FPS_CB_ANSI_DATA,
    FPS_CB_ISO_DATA,
    FPS_CB_PGM_DATA
  };

  enum FPS_PROP_INT_Type
  {
    FPS_PROP_INT_VERSION,
    FPS_PROP_INT_INFO,
    FPS_PROP_INT_MINNEXTVERSION,
    FPS_PROP_INT_VARIANT,
    FPS_PROP_INT_FUNCTIONALITY,
    FPS_PROP_INT_CONFIG,
    FPS_PROP_INT_ID,
    FPS_PROP_INT_AUTHENTIFYID,
    FPS_PROP_INT_USAGE,
    FPS_PROP_INT_SENSORTYPE,
    FPS_PROP_INT_IMAGEWIDTH,
    FPS_PROP_INT_IMAGEHEIGHT,
    FPS_PROP_INT_MAXGRABWINDOW,
    FPS_PROP_INT_COMPANIONVENDORCODE,
    FPS_PROP_INT_VERSIONEXT,
    FPS_PROP_INT_SYSTEMID,
    FPS_PROP_INT_DATATYPE,
    FPS_PROP_INT_IMAGE_QUALITY_LAST,
    FPS_PROP_INT_IMAGE_NUMBER_OF_MINUTIAE_LAST,
    FPS_PROP_INT_IMAGE_SIZE
  };

  enum FPS_PROP_STRING_Type
  {
    FPS_PROP_STRING_EXTINFO,
    FPS_PROP_STRING_INFO,
    FPS_PROP_STRING_TYPE,
    FPS_PROP_STRING_HWINFO,
    FPS_PROP_STRING_GUID,
    FPS_PROP_STRING_SYSTEMNAME
  };

  enum FPS_IMG_Type
  {
    FPS_IMG_RAW,
    FPS_IMG_PGM,
    FPS_IMG_ANSI,
    FPS_IMG_ISO,
    FPS_IMG_ALL
  };

  typedef void (*resultCallbackType)(void *dataptr, FPS_CB_Type msgType, int width, std::vector<unsigned char> rawData);


  // normal functions


  DllSpec int16_t fps_open(std::string &device);

  DllSpec FPS_RES_Type fps_close(int16_t handle);

  DllSpec FPS_RES_Type fps_getPropInt(int16_t handle, FPS_PROP_INT_Type prop, int &propValue);

  DllSpec FPS_RES_Type fps_getPropString(int16_t handle, FPS_PROP_STRING_Type prop, std::string &propValue);

  DllSpec FPS_RES_Type fps_setPropInt(int16_t handle, FPS_PROP_INT_Type prop, int &newPropValue);

  DllSpec FPS_RES_Type fps_setPropString(int16_t handle, FPS_PROP_STRING_Type prop, std::string &newPropValue);

  DllSpec FPS_RES_Type fps_capture_start(int16_t handle, resultCallbackType cb, void *dataptr);

  DllSpec FPS_RES_Type fps_capture_stop(int16_t handle);

  DllSpec std::string fps_GetVersion();
};

#endif // __FPS_H__
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

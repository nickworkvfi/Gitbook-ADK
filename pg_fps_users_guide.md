---
title: ADK-FPS Programmers Guide

---

# ADK-FPS Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK-FPS extension.


## Audience

This guide provides information on the usage of the ADK-FPS system.


## Organization

[Chapter 1, Introduction:] Provides a general introduction to ADK-FPS

[Chapter 2, Getting Started:] Presents an introduction in ADK-FPS usage.

[Chapter 3, Programming:] Supplies ADK-FPS programming information.

[Chapter 4, System Setup and Requirements:] Presents environment setup and dependencies.

[Chapter 5, Troubleshooting:] Gives solutions for possible issues in ADK-FPS.


## Prerequisites

**Caution**

* Additional entries in udev configuration file have to be entered in V/OS
* libiengine_ansi_iso is not available on V/OS
* verix close operation is disabled because of missing support from os


# Introduction

ADK-FPS allows to use the functionality of fingerprint sensors in Linux, V/OS, V/OS2 and Verix. At the moment only one sensor is supported by this library.

The driver of the finger print sensor is available via the usb library. On linux, V/OS and V/OS2 it is achieved via library libusb 1.0. Verix uses libusb 0.1.

To reach a homogeneous handling from upper layer applications this driver, usb combination is wrapped from the library libfps.

![fps_001_overview.png](.//fps_001_overview.png)![fps_001_overview.png](.//fps_001_overview.png)


## Concepts


### Platform Independent Application

Platform indepence will be reached by using the wrapping library libfps. Underneath layers have to be ported on new platforms if they are needed.


### Uniform Interface

The platform independent interface of the wrapper interface can be used to integrate new drivers for new applications.

The following commands are supported by the wrapper interface:

* [fps_open]
* [fps_close]
* [fps_capture_start]
* [fps_capture_stop]
* [fps_getPropInt]
* [fps_setPropInt]
* [fps_getPropString]
* [fps_setPropString]

To get feedback from the finger print library the usage of callback is necessary.

The existing callback answers are listed in the enumeration FPS_CB_Type

```cpp

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
  FPS_CB_PICTURE
  //…. More to come …
};
```


# Getting Started

The fps system comes with two sample application that demonstrates system features and provides a starting point for application developers who use the finger print library. It can be found in the _sample_ folder of the sources (src). The file _README.txt_ in this folder gives exact instructions for compiling the example.

The finger print sensor library is provided on different target platforms. The following sections describe how to use the fps sample applications on these platforms. In addition, this chapter gives general information about required components to run ADK FPS (runtime libraries).


## Running ADK-FPS on V/OS

To run the ADK-FPS on V/OS and V/OS2, libusb 1.0 has to be present on the target system. If the sample gui application shall be used too, the ADK-GUI packet needs to be installed with all its requirements.


## Running on Verix

To run the ADK-FPS on Verix, libusb 0.1 has to be present on the target system. If the sample gui application shall be used too, the ADK-GUI packet needs to be installed with all its requirements.

Furthermore, ADK-FPS depends on some libraries coming along with OS and the EOS. Please always use the newest OS and EOS versions available on Verifone DevNet.


## Running on Linux

Following is required:

* libusb 1.0 support


# Programming


## ADK-FPS Deployment Options

The ADK-FPS system provides a single header file (`[fps.h](fps_8h.md#file-fps.h)`) that exports the FPS library API function calls. The current version only supports dynamic linking.


### Headers and binary deliveries

The ADK-FPS system is composed of the following deliveries:


| File  | Purpose   |
|  -------- | -------- |
| **[fps.h](fps_8h.md#file-fps.h)** | FPS function header file with exported definitions/functions.   |
| **libfps.so** | FPS system client library   |
| **libiengine_ansi_iso.so** | FPS image conversion library   |
| **samplegui** | FPS GUI client binary for V/OS, V/OS2, Verix and linux   |
| **sample.bin** | FPS console client binary for V/OS, V/OS2 and linux   |


All header files can be found in the ‘vfifps’ directory.

An application has to be linked with libfps.


### Multi-Application-Controller Resource Subfolder Support

Multi-Application-Controller (MAC) is used to run several applications in parallel on a terminal. Since version 2.5.0 the UI system has added support to lookup resources in a separate subdirectory for each application to avoid resource location conflicts. For this, MAC sets up the environment variable `GUIPRT_APPNAME`, which provides a name for each application that is used for the subfolder `appname:`

```cpp
www/<appname>/<platform>
```

 or 

```cpp
www/<appname>/<width>x<height><color><numkeys><touch>
```

`GUIPRT_APPNAME` is automatically considered during startup of an application so that most of the MAC handling is transparent to the application. Please note that the variable is just used to set up the default values for `UI_PROP_RESOURCE_PATH` and `UI_PROP_RESOURCE_DEFAULT_PATH`. Once an application has set the properties during runtime, value of `GUIPRT_APPNAME` is ignored.

An application can also set GUIPRT_APPNAME by itself to move the default resource folder. For this the environment variable has to be set using `setenv()` before calling any ADKGUI function.

This is also setable via the manifest file of the application with the property app_ressource_dir in the application section.


## Programming examples


### Use of the conversion library for ansi iso

On all platforms, where the fps conversion library is available, the programmers can select whether images should be generated in raw, pgm, ansi or iso format by selecting the general integer property FPS_PROP_INT_DATATYPE. A special case is the format FPS_IMG_ALL because the library delivers all available image formats in own callback calls.

Available are the following return formats:


| Property  | Description   |
|  -------- | -------- |
| **FPS_IMG_RAW** | unmanipulated datastream of sensor   |
| **FPS_IMG_PGM** | gray scale image   |
| **FPS_IMG_ANSI** | image converted to ansi format   |
| **FPS_IMG_ISO** | image converted to iso format   |
| **FPS_IMG_ALL** | image is delivered in all known formats over the callback   |


These format will be returned over the callback after the fps_capture_start method recognizes a fingerprint.

```cpp

void resultCallback(void *dataptr, vfifps::FPS_CB_Type msgType, int width, std::vector<unsigned char> rawData)
{
  int err = 0;
  if(vfifps::FPS_CB_PGM_DATA == msgType ||
    vfifps::FPS_CB_PICTURE == msgType   ||
    vfifps::FPS_CB_ANSI_DATA == msgType ||
    vfifps::FPS_CB_ISO_DATA == msgType)
  {
    // here the different image formats can be parsed and handled
    return;
  }
  else
  {
    // any other case starts here --- normally handling instructions from sensor
  }
}

int main()
{
  std::string key("one-on-one key");
  int16_t fpsHdl = vfifps::fps_open(key);
  // define image format of fingerprint
  int newPropValue = vfifps::FPS_IMG_ISO;
  if(vfifps::FPS_RES_INFO_NOT_READ == vfifps::fps_setPropInt(fpsHdl, vfifps::FPS_PROP_INT_DATATYPE, newPropValue))
  {
    // do some error handling here
    // only if sensor informations had been read out by the fps library
    // properties can be set
    ...
  }
  vfifps::fps_capture_start(fpsHdl, resultCallback, NULL);

  // do something usefull until picture is created
  fps_close(fpsHdl);
}
```


### Use of properties

Most of the existing properties can only be used read-only. They are read out from the sensor and can not be changed by the user. If these values are written over the fpsSetProp methods, this has no effect on the behavior of the sensor.

At the moment the only property, which has an effect on the behavior on the sensor, is the FPS_PROP_INT_DATATYPE property. This property is responsible for the kind of result data which will be delivered over the result callback.

In general, the properties can be read and written as described in the following code example. It is assumed that a handle has been already acquired and that it will be closed after all operations are done.

```cpp

{
  int fpsHdl;
  int readValue;
  ...
  // read out property
  if(FPS_RES_INFO_NOT_READ == fps_getPropInt(fpsHdl, FPS_PROP_INT_IMAGEWIDTH, readValue))
  {
    // some error handling
  }

  // write property
  int writevalue = vfifps::FPS_IMG_RAW;
  if(FPS_RES_INFO_NOT_READ == fps_setPropInt(fpsHdl, FPS_PROP_INT_DATATYPE, writeValue))
  {
    // some error handling
  }
  ...
}
```


## API


### Executing sensor command


### fps_open

_Function prototype_```cpp

int16_t fps_open(std::string devicename);
```

devicename- name of the device in OS (f.e. /dev/input/touchsensor1) 

int16_t- handle to opened connection or -1


fps_open opens connection to finger print sensor with the given name (devicename). All properties of the finger print sensor are read out directly after the connection has been opened. The handle to the open connection will be passed back over the return value of fps_open and shall be used for all following commands.


### fps_close

_Function prototype_```cpp

FPS_RES_Type fps_close(int16_t handle);
```

handle- handle of connection 

FPS_RES_Type - success indicator


fps_close closes the connection to the finger print sensor with the given handle.


### fps_capture_start

_Function prototype_```cpp

FPS_RES_Type fps_capture_start(int16_t handle, resultCallbackType cb, void *dataptr);
```

handle- handle of connection 

cb- callback for user instructions, pictures, errors 

dataptr- context of capture starter 

FPS_RES_Type - success indicator


fps_capture_start starts capturing of finger prints on finger print sensor with the handle. fps_capture_start interrupts all 200ms the capturing process to look for fps_capture_stop signals. The results will be delivered asyncronisly per callback.


### fps_capture_stop

_Function prototype_```cpp

FPS_RES_Type fps_capture stop(int16_t handle);
```

handle- handle of connection 

FPS_RES_Type result of type FPS_RES_Type


fps_capture_stop stops started capturing commands.


### fps_getPropInt

_Function prototype_```cpp

FPS_RES_Type fps_getPropInt(int16_t handle, FPS_ROP_INT_Type propType, int &propValue);
```

handle- handle of connection 

propType- integer property to read 

propValue- reference to variable which will be filled with read value 

FPS_RES_Type result of type FPS_RES_Type


fps_getPropInt gets the property prop from the sensor with the handle in the variable propValue.


### fps_setPropInt

_Function prototype_```cpp

FPS_RES_Type fps_setPropInt(int16_t handle, FPS_PROP_INT_Type propType, int &newPropValue);
```

handle- handle of connection 

propType- integer property to set 

newPropValue- value of property to set 

FPS_RES_Type result of type FPS_RES_Type


fps_setPropInt sets new property value (newPropValue of property(propType) for the sensor identified by handle.


### fps_getPropString

_Function prototype_```cpp

FPS_RES_Type fps_getPropString(int16_t handle, FPS_PROP_STRING_Type propType, std::string &propValue);
```

handle- handle of connection 

propType- string property to read 

propValue- reference to variable which will be filled with read value 

FPS_RES_Type result of type FPS_RES_Type


fps_getPropString reads property(propType) and stores the value(propValue).


### fps_setPropString

_Function prototype_```cpp

FPS_RES_Type fps_setPropString(int16_t handle, FPS_PROP_STRING_Type propType, int &newPropValue);
```

handle- handle of connection 

propType- string property to write 

newPropValue- value of string property to set 

FPS_RES_Type result of type FPS_RES_Type


fps_setPropString sets new property value (newPropValue) of property (propType) for the sensor identified by handle.


### resultCallbackType

_Function prototype_```cpp

typedef void(*resultCallbackType)(void *dataptr, FPS_CB_Type msgType, int width, std::vector<unsigned char> rawData);
```

dataptr- reference to sender 

msgType- identifies the kind of callback data 

width- information about the pricture width 

[rawData](structraw_data.md)- raw data of the message delivered as vector of unsigned char


This callback is used by /ref fps_capture_start to signal capture instructions, capture errors and the picture result to the callback.


# System Setup and Requirements

The following are the hardware and software requirements of the ADK FPS system.


## Hardware Support

The ADK FPS system is hardware platform agnostic and supports installation on V/OS, Raptor, and Verix terminals.

The ADK FPS system is intended to run across the entire hardware portfolio with usb interfaces. The following table list different characteristics of these devices.


| Model  | Touch  | Color  | Resolution  | Keypad  | Function Keys  | Resource Path   |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| Vx520 (B/W)  | No  | No  | 128x64  | 0-9,*,#,CAN,CORR,OK  | 4+4+Alpha  | 128x64M24N   |
| Vx6, Vx8  | Yes  | Yes  | 240x320  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 240x320C15T   |
| Vx675/Vx5 color  | No  | Yes  | 320x240  | 0-9,*,#,CAN,CORR,OK  | 4+4*Cursor+Enter  | 320x240C24N   |
| Mx915  | Yes  | Yes  | 480x272  | 0-9,CAN,CORR,OK  | &mdash; | 480x272C13T   |
| Mx925  | Yes  | Yes  | 800x480  | 0-9,CAN,CORR,OK  | &mdash; | 800x480C13T   |
| Ux100  | No  | No  | 128x64  | 0-9,CAN,CORR,OK,INFO  | 2  | 128x64M16N   |
| e265  | No  | No  | 160x120  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 160x120M15N   |
| e285  | Yes  | Yes  | 240x320  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 240x320C15T   |
| e315/335  | No  | No  | 128x32  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 128x32M15N   |
| e355  | No  | Yes  | 320x240  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x240C15N   |
| Carbon X10  | Yes  | Yes  | 854x480  | &mdash; | &mdash; | 854x480C0T   |
| M400  | Yes  | Yes  | 854x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 854x480C15T   |
| P400/V400  | Yes  | Yes  | 320x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x480C15T   |
| P200/V200c  | No  | Yes  | 240x320  | 0-9,*,#,CAN,CORR,OK  | 2+4*Cursor  | 240x320C21N   |
| V200t/V205c  | No  | Yes  | 320x240  | 0-9,*,#,CAN,CORR,OK  | 2+4*Cursor  | 320x240C21N   |
| V240m/V400m  | Yes  | Yes  | 320x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x480C15T   |
| C680  | Yes  | Yes  | 320x480  | 0-9,*,#,CAN,CORR,OK  | &mdash; | 320x480C15T   |


Users need to take these characteristics into account when designing GUI dialogs with fingerprint support for the different hardware platforms.

C680 has an additional power button, it is not counted as keypad key since it cannot be used for input. 



For a detailed description of the API functions, see .


## Software Requirements

ADK-FPS requires the installation of corresponding platform packages. For details please refer to the release notes.


# Troubleshooting


## Support for ADKLOG

**Logging with liblog**

Since version 2.15.3 ADK-FPS has added support for ADKLOG component. ADKLOG is required to implement the new ADK logging concept, which provides the Logging Control Panel (LCP) used as central instance to configure and enable logging for the several ADK components. For this, LCP uses configuration files (for FPS), which are read by `liblog` library. If installed on the system, `liblog` library will be used by client import libraries (`libvfiguiprt`, `libvfiprt`) and server components (`guiprtserver`, `guiserver`, `prtserver`) to output logging messages. In this case, the logging messages are passed to `liblog` library instead of using console logging mechanism (with EOSLog or stderr), which is described above.

In order to lookup the corresponding configuration files, ADKLOG uses component identifiers, which are reserved for each ADK component. GUI and PRT use the following:


| Component Id  | Configuration file  | Description   |
|  -------- | -------- | -------- |
| `FPS` | `FPS_log.conf` | FPS library related log settings   |


The configuration files contain several settings for logging like output channels, verbosity and a logging mask, which is similar to environment variables `GUI_LOGMASK` and `PRT_LOGMASK`. For more details about configuration settings or logging message formats, please refer to documentation of ADKLOG project.

The environment variable `FPS_LOGMASK` to enable console logging mechanism are still supported. If one of the variables is set, console logging mechanism is preferred and ADKLOG with `liblog` is disabled. Only if the environment variable is unset, FPS will lookup `liblog` library from the system to enable logging via ADKLOG.

Verix OS has several issues with `dlopen()`, therefore, ADKFPS still lacks support for ADKLOG on this platform. The feature is pending unless a new OS will be available, which fixes these issues. 

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100

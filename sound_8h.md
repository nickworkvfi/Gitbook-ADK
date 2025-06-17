---
title: sound/src/sound/sound.h

---

# sound/src/sound/sound.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SNDError](sound_8h.md#enum-snderror)** { SND_OK =0, SND_ERR_FAIL =-1, SND_ERR_PARAMETER =-2, SND_ERR_NOT_FOUND =-3, SND_ERR_MEMORY =-4, SND_ERR_UNSUPPORTED =-5, SND_ERR_READ =-6} |
| typedef struct [SND](sound_8h.md#typedef-snd) | **[SND](sound_8h.md#typedef-snd)**  |
| typedef void(*)(void *data, struct SND *handle, enum SNDError reason) | **[SNDCallback](sound_8h.md#typedef-sndcallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) struct [SND](sound_8h.md#typedef-snd) * | **[sndOpenFile](sound_8h.md#function-sndopenfile)**(const char * filename) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[sndClose](sound_8h.md#function-sndclose)**(struct [SND](sound_8h.md#typedef-snd) * handle) |
| [DllSpec](sound_8h.md#define-dllspec) enum [SNDError](sound_8h.md#enum-snderror) | **[sndStart](sound_8h.md#function-sndstart)**(struct [SND](sound_8h.md#typedef-snd) * handle) |
| [DllSpec](sound_8h.md#define-dllspec) enum [SNDError](sound_8h.md#enum-snderror) | **[sndStop](sound_8h.md#function-sndstop)**(struct [SND](sound_8h.md#typedef-snd) * handle) |
| [DllSpec](sound_8h.md#define-dllspec) enum [SNDError](sound_8h.md#enum-snderror) | **[sndSeek](sound_8h.md#function-sndseek)**(struct [SND](sound_8h.md#typedef-snd) * handle, double pos, int whence) |
| [DllSpec](sound_8h.md#define-dllspec) double | **[sndTell](sound_8h.md#function-sndtell)**(struct [SND](sound_8h.md#typedef-snd) * handle) |
| [DllSpec](sound_8h.md#define-dllspec) double | **[sndLength](sound_8h.md#function-sndlength)**(struct [SND](sound_8h.md#typedef-snd) * handle) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[sndSetCallback](sound_8h.md#function-sndsetcallback)**(struct [SND](sound_8h.md#typedef-snd) * handle, [SNDCallback](sound_8h.md#typedef-sndcallback) cb, void * data) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[sndSoundSupport](sound_8h.md#function-sndsoundsupport)**() |
| [DllSpec](sound_8h.md#define-dllspec) enum [SNDError](sound_8h.md#enum-snderror) | **[sndSetMasterVolume](sound_8h.md#function-sndsetmastervolume)**(int volume_percent) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[sndGetMasterVolume](sound_8h.md#function-sndgetmastervolume)**(void ) |
| [DllSpec](sound_8h.md#define-dllspec) enum [SNDError](sound_8h.md#enum-snderror) | **[sndBeep](sound_8h.md#function-sndbeep)**(int frequency, int duration_ms, int volume) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](sound_8h.md#define-dllspec)**  |

## Types Documentation

### enum SNDError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SND_OK | =0|  no error  |
| SND_ERR_FAIL | =-1|  generic error  |
| SND_ERR_PARAMETER | =-2|  invalid parameters  |
| SND_ERR_NOT_FOUND | =-3|  file not found or cannot be accessed  |
| SND_ERR_MEMORY | =-4|  out of memory  |
| SND_ERR_UNSUPPORTED | =-5|  unsupported format  |
| SND_ERR_READ | =-6|  read error  |




error codes 


### typedef SND

```cpp
typedef struct SND SND;
```


SND handle identifying a sound file 


### typedef SNDCallback

```cpp
typedef void(* SNDCallback) (void *data, struct SND *handle, enum SNDError reason);
```


**Parameters**: 

  * **data** data pointer 
  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)
  * **reason** reason why the callback was invoked: At end of file, this is SND_OK, in case of error it is the error code 


sound callback function 



## Functions Documentation

### function sndOpenFile

```cpp
DllSpec struct SND * sndOpenFile(
    const char * filename
)
```


**Parameters**: 

  * **filename** file name of a sound file. 


**Return**: handle or NULL if the file cannot be found or the file format is not supported or if the sound device cannot be accessed. 

open file and return handle. Playback does not start automatically, use [sndStart()](sound_8h.md#function-sndstart) to start playing the file. 


### function sndClose

```cpp
DllSpec void sndClose(
    struct SND * handle
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)


close the file opened using [sndOpenFile](sound_8h.md#function-sndopenfile)


### function sndStart

```cpp
DllSpec enum SNDError sndStart(
    struct SND * handle
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)


**Return**: error code 

start playback. Playback starts at the current position. 


### function sndStop

```cpp
DllSpec enum SNDError sndStop(
    struct SND * handle
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)


**Return**: error code 

stop playback. Stopping does not reset the current position, i.e. invoking [sndStart()](sound_8h.md#function-sndstart) after [sndStop()](sound_8h.md#function-sndstop) resumes playback at the position when [sndStop()](sound_8h.md#function-sndstop) was invoked. 


### function sndSeek

```cpp
DllSpec enum SNDError sndSeek(
    struct SND * handle,
    double pos,
    int whence
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)
  * **pos** position in seconds 
  * **whence** one of SEEK_SET, SEEK_CUR, SEEK_END to specify whether the position _pos_ is with respect to the file start, the current position or file end. 


**Return**: error code 

change the current position 


### function sndTell

```cpp
DllSpec double sndTell(
    struct SND * handle
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)


**Return**: position in seconds from the file start or error code if less than 0. 

read the current position 


### function sndLength

```cpp
DllSpec double sndLength(
    struct SND * handle
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)


**Return**: estimated length in seconds or error code if less than 0. 

**Note**: The returned length is an estimate only, that can be obtained by reading the header of the file and may not represent the exact length. Obtaining the exact length may not be possible without scanning the whole file (e.g. for MP3). 

read the estimated length of the file 


### function sndSetCallback

```cpp
DllSpec void sndSetCallback(
    struct SND * handle,
    SNDCallback cb,
    void * data
)
```


**Parameters**: 

  * **handle** handle obtained by [sndOpenFile()](sound_8h.md#function-sndopenfile)
  * **cb** function pointer, use NULL to delete callback 
  * **data** data pointer that gets passed on to the callback 


set callback that gets invoked when playback stops due to end of file or due to error. 


### function sndSoundSupport

```cpp
DllSpec int sndSoundSupport()
```


**Return**: 1 if sound support is present, else 0 

check whether the device has sound support for playback of MP3 or WAV files 


### function sndSetMasterVolume

```cpp
DllSpec enum SNDError sndSetMasterVolume(
    int volume_percent
)
```


**Parameters**: 

  * **volume_percent** volume in the range [0..100] return error code 


set master volume in percent 


### function sndGetMasterVolume

```cpp
DllSpec int sndGetMasterVolume(
    void 
)
```


**Return**: volume in percent (range [0..100]) or error code if less than 0. 

read master volume 


### function sndBeep

```cpp
DllSpec enum SNDError sndBeep(
    int frequency,
    int duration_ms,
    int volume
)
```


**Parameters**: 

  * **frequency** frequency in Hz 
  * **duration_ms** duration in milliseconds 
  * **volume** volume in % (0..100) 


**Return**: error code 

**Note**: The beep is played synchronously. 

play a beep tone 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef SOUND_H_20170901
#define SOUND_H_20170901

#include <stdio.h>

#if defined VFI_SOUND_EXPORT  // Export
#  if defined _VRXEVO || defined _WIN32
#    define DllSpec __declspec(dllexport)
#  elif defined __GNUC__
#    define DllSpec  __attribute__((visibility ("default")))
#  else
#    define DllSpec
#  endif
#else                         // Import
#  if defined _VRXEVO
#    define DllSpec __declspec(dllimport)
#  else
#    define DllSpec
#  endif
#endif

#ifdef __cplusplus
extern "C" {
#endif

#if 0 // fix for automatic indentation
}
#endif

struct SND;

typedef struct SND SND;

enum SNDError {
   SND_OK=0,              
   SND_ERR_FAIL=-1,       
   SND_ERR_PARAMETER=-2,  
   SND_ERR_NOT_FOUND=-3,  
   SND_ERR_MEMORY=-4,     
   SND_ERR_UNSUPPORTED=-5,
   SND_ERR_READ=-6        
};


DllSpec struct SND* sndOpenFile(const char *filename);

DllSpec void sndClose(struct SND *handle);

DllSpec enum SNDError sndStart(struct SND *handle);

DllSpec enum SNDError sndStop(struct SND *handle);

DllSpec enum SNDError sndSeek(struct SND *handle, double pos, int whence);

DllSpec double sndTell(struct SND *handle);

DllSpec double sndLength(struct SND *handle);

typedef void (*SNDCallback)(void *data, struct SND *handle, enum SNDError reason);

DllSpec void sndSetCallback(struct SND *handle,
                            SNDCallback cb,
                            void *data);


DllSpec int sndSoundSupport();

DllSpec enum SNDError sndSetMasterVolume(int volume_percent);

DllSpec int sndGetMasterVolume(void);


DllSpec enum SNDError sndBeep(int frequency, int duration_ms, int volume);

#ifdef __cplusplus
}
#endif

#undef DllSpec
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100

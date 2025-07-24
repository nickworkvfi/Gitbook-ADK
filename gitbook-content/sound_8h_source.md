---
hidden: true
title: sound.h
---

<a href="sound_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef SOUND_H_20170901
 2 #define SOUND_H_20170901
 3 
 6 #include <stdio.h>
 7 
 8 #if defined VFI_SOUND_EXPORT // Export
 9 # if defined _VRXEVO || defined _WIN32
 10 # define DllSpec __declspec(dllexport)
 11 # elif defined __GNUC__
 12 # define DllSpec __attribute__((visibility ("default")))
 13 # else
 14 # define DllSpec
 15 # endif
 16 #else // Import
 17 # if defined _VRXEVO
 18 # define DllSpec __declspec(dllimport)
 19 # else
 20 # define DllSpec
 21 # endif
 22 #endif
 23 
 24 #ifdef __cplusplus
 25 extern "C" {
 26 #endif
 27 
 28 #if 0 // fix for automatic indentation
 29 }
 30 #endif
 31 
 32 struct SND;
 33 
 35 typedef struct SND SND;
 36 
 38 enum SNDError {
 39  SND_OK=0,
 40  SND_ERR_FAIL=-1,
 41  SND_ERR_PARAMETER=-2,
 42  SND_ERR_NOT_FOUND=-3,
 43  SND_ERR_MEMORY=-4,
 44  SND_ERR_UNSUPPORTED=-5,
 45  SND_ERR_READ=-6
 46 };
 47 
 48 
 54 DllSpec struct SND* sndOpenFile(const char *filename);
 55 
 59 DllSpec void sndClose(struct SND *handle);
 60 
 65 DllSpec enum SNDError sndStart(struct SND *handle);
 66 
 72 DllSpec enum SNDError sndStop(struct SND *handle);
 73 
 81 DllSpec enum SNDError sndSeek(struct SND *handle, double pos, int whence);
 82 
 87 DllSpec double sndTell(struct SND *handle);
 88 
 96 DllSpec double sndLength(struct SND *handle);
 97 
 103 typedef void (*SNDCallback)(void *data, struct SND *handle, enum SNDError reason);
 104 
 110 DllSpec void sndSetCallback(struct SND *handle,
 111  SNDCallback cb,
 112  void *data);
 113 
 114 
 118 DllSpec int sndSoundSupport();
 119 
 124 DllSpec enum SNDError sndSetMasterVolume(int volume_percent);
 125 
 129 DllSpec int sndGetMasterVolume(void);
 130 
 131 
 139 DllSpec enum SNDError sndBeep(int frequency, int duration_ms, int volume);
 140 
 141 #ifdef __cplusplus
 142 }
 143 #endif
 144 
 145 #undef DllSpec
 146 #endif
```

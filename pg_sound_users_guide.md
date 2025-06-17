---
title: ADK-SOUND Programmers Guide

---

# ADK-SOUND Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK-Sound framework.


## Audience

This guide provides information on the usage of the ADK-Sound system.


## Organization

[Chapter 1: Introduction]

[Chapter 2: Supported Hardware]

[Chapter 3: Getting Started]

[Chapter 4: Programming]

[Chapter 5: System Setup and Requirements]


# Introduction

ADK-Sound allows simple playback of MP3 and WAV files. Playback can be started and stopped and the playback position within the file may be updated.


# Supported Hardware

VOS and VOS2 terminals with speaker are supported. Currently Verix terminals are not supported.


# Getting Started

The following minimal program shows how to play a sound in a loop



```cpp
#include <sound/sound.h>
#include <unistd.h>

void cb(void *data, SND *handle, enum SNDError reason)
{
   if(reason!=SND_OK) return;
   sndSeek(handle,0,SEEK_SET); // rewind to start
   sndStart(handle);           // start playback again
}

int main()
{
   SND *handle=sndOpenFile("sound.mp3");
   sndSetCallback(handle,cb,0); // callback gets invoked when the sound stopped
   sndStart(handle); // start playback
   while(1) sleep(100000); // do nothing, sound plays in background
}
```


# Programming


## Opening and Closing files

To play a sound the file needs to be opened using [sndOpenFile()](sound_8h.md#function-sndopenfile). In case of success a handle is returned, that needs to be provided to the other functions. The handle needs to be closed using [sndClose()](sound_8h.md#function-sndclose) when done to release the allocated resources. When closing the handle, sound playback is stopped automatically, when still playing.


## Starting and Stopping playback

[sndStart()](sound_8h.md#function-sndstart) starts playback at the current position. When the file has just been opened, this is the start of the file. The position can be updated anytime using [sndSeek()](sound_8h.md#function-sndseek). [sndStop()](sound_8h.md#function-sndstop) is used to stop playback. Stopping playback does not reset the current position to the start of the file so that [sndStart()](sound_8h.md#function-sndstart) can be used to resume playback at the position it was stopped.


## Miscellaneous functions

The current position can be read using [sndTell()](sound_8h.md#function-sndtell). The position is given in seconds from the start of the file.

[sndLength()](sound_8h.md#function-sndlength) returns the estimated length of the file. Note that the estimated length may differ from the real length since for MP3 files it may not be possible to determine the real length without scanning the whole file, which may be slow.

If an application needs to know the real length, it can use [sndSeek()](sound_8h.md#function-sndseek) to seek to the end of the file and use [sndTell()](sound_8h.md#function-sndtell) to obtain the position.


## System Setup and Requirements

ADK-Sound uses ALSA for sound output. Therefore, the terminal needs to have ALSA support. By default concurrent playback of several sound sources is not supported. To enable concurrent playback, the ALSA dmix plugin must have been set up as default output device. This plugin mixes several sound sources into one stream that is sent to the sound hardware.

There are two ways of setting up the ALSA dmix plugin:

* global configuration in /etc/asound.conf
* local configuration in ~/.asoundrc

The global configuration needs to be provided by the OS and affects all programs on the terminal. The local configuration can be provided by any application but affects only applications run by the same user. However, if one user still uses the default output and not dmix, this user will use the sound output exclusively.

A starting point for an ALSA configuration looks like this:



```
pcm.snd_card {
        type hw
        card 0
        device 0
}

ctl.snd_card {
        type hw
        card 0
        device 0
}

# Define dmix-Plugin
pcm.dmixer {
    type dmix
    ipc_key 1024
    ipc_perm 0666       # Allow other users to use dmix
    slave.pcm "snd_card"
}

pcm.dsnooper {
    type dsnoop
    ipc_key 2048
    ipc_perm 0666
    slave.pcm "snd_card"
}

pcm.duplex {
    type asym
    playback.pcm "dmixer"
    capture.pcm "dsnooper"
}

pcm.!default {
    type plug
    slave.pcm "duplex"
}
```

For more information check the ALSA documentation. 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

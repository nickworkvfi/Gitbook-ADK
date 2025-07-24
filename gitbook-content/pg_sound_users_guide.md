---
hidden: true
title: ADK-SOUND Programmers Guide
---

# Preface <a href="#snd_preface" id="snd_preface"></a>

This document is for programmers and developers who want to understand and use the ADK-Sound framework.

## Audience <a href="#snd_audience" id="snd_audience"></a>

This guide provides information on the usage of the ADK-Sound system.

## Organization <a href="#snd_organization" id="snd_organization"></a>

[Chapter 1: Introduction](#snd_introduction)

[Chapter 2: Supported Hardware](#snd_hw_support)

[Chapter 3: Getting Started](#snd_getting_started)

[Chapter 4: Programming](#snd_programming)

[Chapter 5: System Setup and Requirements](#snd_setup)

# Introduction <a href="#snd_introduction" id="snd_introduction"></a>

ADK-Sound allows simple playback of MP3 and WAV files. Playback can be started and stopped and the playback position within the file may be updated.

# Supported Hardware <a href="#snd_hw_support" id="snd_hw_support"></a>

VOS and VOS2 terminals with speaker are supported. Currently Verix terminals are not supported.

# Getting Started <a href="#snd_getting_started" id="snd_getting_started"></a>

The following minimal program shows how to play a sound in a loop

``` cpp
#include <sound/sound.h>
#include <unistd.h>
void cb(void *data, SND *handle, enum SNDError reason)
{
   if(reason!=SND_OK) return;
   sndSeek(handle,0,SEEK_SET); // rewind to start
   sndStart(handle); // start playback again
}
int main()
{
   SND *handle=sndOpenFile("sound.mp3");
   sndSetCallback(handle,cb,0); // callback gets invoked when the sound stopped
   sndStart(handle); // start playback
   while(1) sleep(100000); // do nothing, sound plays in background
}
```

# Programming <a href="#snd_programming" id="snd_programming"></a>

## Opening and Closing files <a href="#snd_open_close" id="snd_open_close"></a>

To play a sound the file needs to be opened using <a href="sound_8h.md#a2e0076124852060867cc4039c1719646">sndOpenFile()</a>. In case of success a handle is returned, that needs to be provided to the other functions. The handle needs to be closed using <a href="sound_8h.md#aac877336c270fa31b7396dd9e01a0ee5">sndClose()</a> when done to release the allocated resources. When closing the handle, sound playback is stopped automatically, when still playing.

## Starting and Stopping playback <a href="#snd_start_stop" id="snd_start_stop"></a>

<a href="sound_8h.md#a6074c9bf1534c6e8e10ed0e3c72897cf">sndStart()</a> starts playback at the current position. When the file has just been opened, this is the start of the file. The position can be updated anytime using <a href="sound_8h.md#a8f0945ea304cff2a5b223186b73087f7">sndSeek()</a>. <a href="sound_8h.md#a3fbd83f5f49d41b445b1e9dd8bc82c0f">sndStop()</a> is used to stop playback. Stopping playback does not reset the current position to the start of the file so that <a href="sound_8h.md#a6074c9bf1534c6e8e10ed0e3c72897cf">sndStart()</a> can be used to resume playback at the position it was stopped.

## Miscellaneous functions <a href="#snd_mist" id="snd_mist"></a>

The current position can be read using <a href="sound_8h.md#a701ee6a24c4fcffacf3ec555c92caf97">sndTell()</a>. The position is given in seconds from the start of the file.

<a href="sound_8h.md#ae7e8fbfe734a79cf6648515fb7758f12">sndLength()</a> returns the estimated length of the file. Note that the estimated length may differ from the real length since for MP3 files it may not be possible to determine the real length without scanning the whole file, which may be slow.

If an application needs to know the real length, it can use <a href="sound_8h.md#a8f0945ea304cff2a5b223186b73087f7">sndSeek()</a> to seek to the end of the file and use <a href="sound_8h.md#a701ee6a24c4fcffacf3ec555c92caf97">sndTell()</a> to obtain the position.

## System Setup and Requirements <a href="#snd_setup" id="snd_setup"></a>

ADK-Sound uses ALSA for sound output. Therefore, the terminal needs to have ALSA support. By default concurrent playback of several sound sources is not supported. To enable concurrent playback, the ALSA dmix plugin must have been set up as default output device. This plugin mixes several sound sources into one stream that is sent to the sound hardware.

There are two ways of setting up the ALSA dmix plugin:

- global configuration in /etc/asound.conf
- local configuration in \~/.asoundrc

The global configuration needs to be provided by the OS and affects all programs on the terminal. The local configuration can be provided by any application but affects only applications run by the same user. However, if one user still uses the default output and not dmix, this user will use the sound output exclusively.

A starting point for an ALSA configuration looks like this:

``` fragment
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

---
title: ADK-MSR Programmers Guide

---

# ADK-MSR Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK-MSR.


## Audience

This guide provides all the information required for application developers to integrate and utilize the functionality of the ADK-MSR.


## Organization

This guide is organized as follows:

[Introduction]: Provides a summary of ADK-MSR.

[Getting Started]: Presents an introduction in ADK-MSR usage.

[Programming]: Supplies ADK-MSR programming information.

[System Setup and Requirements]: Supplies information about required dependencies.

[Troubleshooting]: Gives solutions for possible issues in ADK-MSR.

[Appendix]: Links to related documents.


# Introduction

ADK-MSR provides access to the terminals magnetic card reader.

Supported card types (depends also on OS support): 

* ** ISO/IEC 7811 **

 activation by [MSR_DETECT_ISO](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-iso), result given with [MSR_CARD_ISO](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-iso)
* ** JIS II **

 activation by [MSR_DETECT_JIS_II](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-jis-ii), result given with [MSR_CARD_JIS_II](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-jis-ii)
* ** US Driving License (CADL, AAVMA) **

 activation by [MSR_ENABLE_LICENSE_DECODE](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-enable-license-decode)

 Supported on V/OS, but on Engage (VOS2) only for M440


## Components

To make use of the magnetic card reader, you need the following components of ADK-MSR:

* [msr.h](msr_8h.md#file-msr.h)
* [msr_common.h](msr__common_8h.md#file-msr-common.h)
* `libmsr.so`

This is illustrated in the following image: ![msr.svg](.//msr.svg)


## Android

In Android the ADK-MSR is hidden inside SDI. So application has to use the "Card Detection (23-01)" resp. "MSR Read (21-01)" from [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html).


## VOS3

In VOS3 ADK-MSR is accessible through SDI. The ADK-MSR-interface is rebuild in [ADK-SDI-Client Programmers Guide](./pg_sdiclient_users_guide.html).


## Two-Piece Solution

Former Two-Piece Solution with Client/Server architecture for MSR, TEC, ... is not supported anymore. 

 SDI EPP has to be used instead (see [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html)).


# Getting Started


## Sample Application

Link your application with `libmsr.so`.


### Wait until card swipe (blocking/polling API)



```cpp
#include "msr.h"
....
if (MSR_Activate(NULL, NULL) == MSR_OK)
{
  MSR_TrackData tracks;
  MSR_DecodedData data;

  // Wait 10 seconds for a card swipe:
  if (MSR_GetData(10000, &tracks, &data) == MSR_OK)
  {
    // card read successfully
  }
  (void) MSR_Deactivate();
}
....
```

The function [MSR_GetData()](msr_8h.md#function-msr-getdata) blocks until the timeout has elapsed or a card has been swiped. 

 You could also implement a periodic polling (with reduced timeout). 

 So it's possible to e.g. check if the cancel key was pressed. 

 Another option is to poll the [MSR_DataAvailable()](msr_8h.md#function-msr-dataavailable) and (if returned true) call [MSR_GetData()](msr_8h.md#function-msr-getdata) only once with timeout 0.


### Register callback for swipe event



```cpp
#include "msr.h"
....
void callback(void *data)
{
  // card swiped -> read data
  MSR_TrackData tracks;
  MSR_DecodedData data;
  if (MSR_GetData(0, &tracks, &data) == MSR_OK)
  {
    // card read successfully
  }
}

if (MSR_Activate(&callback, NULL) == MSR_OK)
{
  // Do something here until callback has been called....
  while (...)
  {
  }
  (void) MSR_Deactivate();
}
....
```

[MSR_GetData()](msr_8h.md#function-msr-getdata) can be either called within the callback function or (after the callback has been invoked) in another function/thread. 

 But keep in mind that you can obtain any card swipe's data only once.


# Programming


## Programming and API Principles

The API consists of the following functions:



* [MSR_Version()](msr__common_8h.md#function-msr-version)
* [MSR_SetTraceCallback()](msr__common_8h.md#function-msr-settracecallback)
* [MSR_SetOptions()](msr_8h.md#function-msr-setoptions)
* [MSR_Activate()](msr_8h.md#function-msr-activate)
* [MSR_Deactivate()](msr_8h.md#function-msr-deactivate)
* [MSR_DataAvailable()](msr_8h.md#function-msr-dataavailable)
* [MSR_GetData()](msr_8h.md#function-msr-getdata)
* [MSR_GetData2()](msr_8h.md#function-msr-getdata2)
* [MSR_GetData3()](msr_8h.md#function-msr-getdata3)
* [MSR_GetData4()](msr_8h.md#function-msr-getdata4)
* [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata)
* [MSR_SwitchLeds()](msr_8h.md#function-msr-switchleds)


# System Setup and Requirements


## Compiler and Linker Settings

Do the following: 

 include [msr.h](msr_8h.md#file-msr.h) and link `libmsr.so`. Additionally you have to link `libvfisysinfo.so` and `liblog.so` (provided by ADK).


## Hardware

ADK-MSR is hardware platform agnostic and supports installation on V/OS and VOS2 terminals.


## Software

ADK-MSR is designed to be platform agnostic and will be supported on V/OS and VOS2 terminal operating systems.


## Deliverables and Deployment

Packages delivered (x - version number digit):


| Package name  | Description   |
|  -------- | -------- |
| `msr-doc-x.x.x-xx.zip` | Documentation   |
| `msr-vos-dev-x.x.x-xx.zip` | VOS development package, to be installed in PC build environment   |
| `msr-vos2-dev-x.x.x-xx.zip` | VOS2 development package, to be installed in PC build environment   |



# Troubleshooting


## Frequently Asked Questions

Q: Some time ago, upon reviewing our test logs, you pointed out that we should not call the API [MSR_Activate()](msr_8h.md#function-msr-activate) if next we start the selection with the API [cts_StartSelection()](tec_8h.md#function-cts-startselection) because the latter activates the reader by itself. And what about the scenario when we want to establish the MSR callback and then use the selection? Here, [MSR_Activate()](msr_8h.md#function-msr-activate) is the only way to establish such a callback. Is this a legal use case to use simultaneously the MSR callback and the selection which, in turn, may have its own callback?

A: No, this is not a legal use case. You should not establish the MSR callback if you use technology selection. This is confusing and not necessary anyway. If MSR data is available, technology selection will finish, so you get the information from TEC, no need to set MSR callback. If you even call [MSR_GetData()](msr_8h.md#function-msr-getdata) upon receiving MSR callback, TEC would most likely not be able to detect that MSR data is available and continue waiting for technology (TEC calls [MSR_DataAvailable()](msr_8h.md#function-msr-dataavailable) and as soon as [MSR_GetData()](msr_8h.md#function-msr-getdata) is called, the former will return 'no data available'). So please do not do anything like this.


## Logging

You have two options to enable logging, choose one of them (if you think this is helpful, you could actually use both at once):

* Register a trace callback function with [MSR_SetTraceCallback()](msr__common_8h.md#function-msr-settracecallback).
* Use ADK-LOG: You need to install liblog.so and create a configuration file msr_log.conf (this is intended to be done by log control panel provided by ADK-LOG). Be sure that you activate log level LOGAPI_INFO.


# Appendix

Appendix is empty. 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100

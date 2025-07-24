---
hidden: true
title: ADK-MSR Programmers Guide
---

# Preface <a href="#sec_msr_preface" id="sec_msr_preface"></a>

This document is for programmers and developers who want to understand and use the ADK-MSR.

## Audience <a href="#subsec_msr_audience" id="subsec_msr_audience"></a>

This guide provides all the information required for application developers to integrate and utilize the functionality of the ADK-MSR.

## Organization <a href="#subsec_msr_organization" id="subsec_msr_organization"></a>

This guide is organized as follows:

[Introduction](#sec_msr_introduction): Provides a summary of ADK-MSR.

[Getting Started](#sec_msr_getting_started): Presents an introduction in ADK-MSR usage.

[Programming](#sec_msr_programming): Supplies ADK-MSR programming information.

[System Setup and Requirements](#sec_msr_system_setup_and_requirements): Supplies information about required dependencies.

[Troubleshooting](#sec_msr_troubleshooting): Gives solutions for possible issues in ADK-MSR.

[Appendix](#sec_msr_appendix): Links to related documents.

# Introduction <a href="#sec_msr_introduction" id="sec_msr_introduction"></a>

ADK-MSR provides access to the terminals magnetic card reader.

Supported card types (depends also on OS support):

- **ISO/IEC 7811**
  activation by <a href="group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#ga552908ea327761a80fc0557a4f617f97">MSR_DETECT_ISO</a>, result given with <a href="group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#gacd72026476677415eaf482b2fb2e0032">MSR_CARD_ISO</a>
- **JIS II**
  activation by <a href="group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#ga9f84cf93e845a72a46da5530a2f0fda6">MSR_DETECT_JIS_II</a>, result given with <a href="group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#gaf1dad30c2494f4da59022687eb8e9dc1">MSR_CARD_JIS_II</a>
- **US Driving License (CADL, AAVMA)**
  activation by <a href="group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#ga57908026ec7d34ab1eab699f5a01bfdc">MSR_ENABLE_LICENSE_DECODE</a>
  Supported on V/OS, but on Engage (VOS2) only for M440

## Components <a href="#subsec_msr_intro_compos" id="subsec_msr_intro_compos"></a>

To make use of the magnetic card reader, you need the following components of ADK-MSR:

- <a href="msr_8h.md">msr.h</a>
- <a href="msr__common_8h.md">msr_common.h</a>
- `libmsr.so`

This is illustrated in the following image:

## Android <a href="#sec_msr_intro_android" id="sec_msr_intro_android"></a>

In Android the ADK-MSR is hidden inside SDI. So application has to use the \"Card Detection (23-01)\" resp. \"MSR Read (21-01)\" from <a href="./pg_sdi_users_guide.md">ADK-SDI Programmers Guide</a>.

## VOS3 <a href="#sec_msr_intro_vos3" id="sec_msr_intro_vos3"></a>

In VOS3 ADK-MSR is accessible through SDI. The ADK-MSR-interface is rebuild in <a href="./pg_sdiclient_users_guide.md">ADK-SDI-Client Programmers Guide</a>.

## Two-Piece Solution <a href="#sec_msr_intro_2piece" id="sec_msr_intro_2piece"></a>

Former Two-Piece Solution with Client/Server architecture for MSR, TEC, \... is not supported anymore.
SDI EPP has to be used instead (see <a href="./pg_sdi_users_guide.md">ADK-SDI Programmers Guide</a>).

# Getting Started <a href="#sec_msr_getting_started" id="sec_msr_getting_started"></a>

## Sample Application <a href="#sec_msr_sample" id="sec_msr_sample"></a>

Link your application with `libmsr.so`.

### Wait until card swipe (blocking/polling API) <a href="#sec_msr_sample_blocking" id="sec_msr_sample_blocking"></a>

``` cpp
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

The function <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> blocks until the timeout has elapsed or a card has been swiped.
You could also implement a periodic polling (with reduced timeout).
So it\'s possible to e.g. check if the cancel key was pressed.
Another option is to poll the <a href="msr_8h.md#a8096fa193f035eb4b80673260d720477">MSR_DataAvailable()</a> and (if returned true) call <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> only once with timeout 0.

### Register callback for swipe event <a href="#sec_msr_sample_callback" id="sec_msr_sample_callback"></a>

``` cpp
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

<a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> can be either called within the callback function or (after the callback has been invoked) in another function/thread.
But keep in mind that you can obtain any card swipe\'s data only once.

# Programming <a href="#sec_msr_programming" id="sec_msr_programming"></a>

## Programming and API Principles <a href="#subsec_msr_programming_and_api_principles" id="subsec_msr_programming_and_api_principles"></a>

The API consists of the following functions:

- <a href="msr__common_8h.md#a4c82e0afa0ae93bb7a97a03431c202b8">MSR_Version()</a>
- <a href="msr__common_8h.md#ac4fab89b234ae87c7da91fb529b833e0">MSR_SetTraceCallback()</a>
- <a href="msr_8h.md#ac3c6f568aa57690a8b369936fc362c2a">MSR_SetOptions()</a>
- <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a>
- <a href="msr_8h.md#aac28b2c3771f8221fc26a35f0fd6d0f8">MSR_Deactivate()</a>
- <a href="msr_8h.md#a8096fa193f035eb4b80673260d720477">MSR_DataAvailable()</a>
- <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a>
- <a href="msr_8h.md#a1bf2f70013c79b94a09b3504607a0667">MSR_GetData2()</a>
- <a href="msr_8h.md#ab2415e817a7d2a1189897757485ff660">MSR_GetData3()</a>
- <a href="msr_8h.md#a7436a0f6d88d3eb717c10025325b47e8">MSR_GetData4()</a>
- <a href="msr_8h.md#a70fedc4ea5687982f39102e2738d8ef5">MSR_AbortGetData()</a>
- <a href="msr_8h.md#abca7e8953c8430d80f51c867c7699fa6">MSR_SwitchLeds()</a>

# System Setup and Requirements <a href="#sec_msr_system_setup_and_requirements" id="sec_msr_system_setup_and_requirements"></a>

## Compiler and Linker Settings <a href="#subsec_msr_compiler_and_linker_settings" id="subsec_msr_compiler_and_linker_settings"></a>

Do the following:
include <a href="msr_8h.md">msr.h</a> and link `libmsr.so`. Additionally you have to link `libvfisysinfo.so` and `liblog.so` (provided by ADK).

## Hardware <a href="#subsec_msr_hardware" id="subsec_msr_hardware"></a>

ADK-MSR is hardware platform agnostic and supports installation on V/OS and VOS2 terminals.

## Software <a href="#subsec_msr_software" id="subsec_msr_software"></a>

ADK-MSR is designed to be platform agnostic and will be supported on V/OS and VOS2 terminal operating systems.

## Deliverables and Deployment <a href="#subsec_msr_deliverables_and_deployment" id="subsec_msr_deliverables_and_deployment"></a>

Packages delivered (x - version number digit):

| Package name | Description |
|----|----|
| <p>`msr-doc-x.x.x-xx.zip`</p> | <p>Documentation</p> |
| <p>`msr-vos-dev-x.x.x-xx.zip`</p> | <p>VOS development package, to be installed in PC build environment</p> |
| <p>`msr-vos2-dev-x.x.x-xx.zip`</p> | <p>VOS2 development package, to be installed in PC build environment</p> |

# Troubleshooting <a href="#sec_msr_troubleshooting" id="sec_msr_troubleshooting"></a>

## Frequently Asked Questions <a href="#subsec_msr_frequently_asked_questions" id="subsec_msr_frequently_asked_questions"></a>

Q: Some time ago, upon reviewing our test logs, you pointed out that we should not call the API <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a> if next we start the selection with the API <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a> because the latter activates the reader by itself. And what about the scenario when we want to establish the MSR callback and then use the selection? Here, <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a> is the only way to establish such a callback. Is this a legal use case to use simultaneously the MSR callback and the selection which, in turn, may have its own callback?

A: No, this is not a legal use case. You should not establish the MSR callback if you use technology selection. This is confusing and not necessary anyway. If MSR data is available, technology selection will finish, so you get the information from TEC, no need to set MSR callback. If you even call <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> upon receiving MSR callback, TEC would most likely not be able to detect that MSR data is available and continue waiting for technology (TEC calls <a href="msr_8h.md#a8096fa193f035eb4b80673260d720477">MSR_DataAvailable()</a> and as soon as <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> is called, the former will return \'no data available\'). So please do not do anything like this.

## Logging <a href="#subsec_msr_logging" id="subsec_msr_logging"></a>

You have two options to enable logging, choose one of them (if you think this is helpful, you could actually use both at once):

- Register a trace callback function with <a href="msr__common_8h.md#ac4fab89b234ae87c7da91fb529b833e0">MSR_SetTraceCallback()</a>.
- Use ADK-LOG: You need to install liblog.so and create a configuration file msr_log.conf (this is intended to be done by log control panel provided by ADK-LOG). Be sure that you activate log level LOGAPI_INFO.

# Appendix <a href="#sec_msr_appendix" id="sec_msr_appendix"></a>

Appendix is empty.

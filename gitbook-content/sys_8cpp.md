---
hidden: true
title: sys.cpp File Reference
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Functions](#func-members)

`#include <stdio.h>`
`#include <string.h>`
`#include <stdlib.h>`
`#include <pthread.h>`
`#include <vector>`
`#include <`<a href="gui_8h_source.md">html/gui.h</a>`>`
`#include <`<a href="mac_8h_source.md">sysinfo/mac.h</a>`>`
`#include <string>`
`#include <sys/types.h>`
`#include <sys/stat.h>`
`#include <fcntl.h>`
`#include <unistd.h>`
`#include <pwd.h>`
`#include <dlfcn.h>`
`#include <`<a href="libsecins_8h_source.md">libsecins.h</a>`>`
`#include <svcmgr/svc_utility.h>`
`#include "`<a href="sec_8h_source.md">sec.h</a>`"`
`#include "csd.h"`
`#include "csd-version.h"`
`#include <netinet/in.h>`
`#include "epp/counterTop.h"`
`#include <dirent.h>`
`#include <svcsec.h>`
`#include "`<a href="sysinfo_8h_source.md">sysinfo/sysinfo.h</a>`"`
`#include "`<a href="vfisyspm_8h_source.md">sysinfo/vfisyspm.h</a>`"`
`#include "`<a href="sys_8h_source.md">sys.h</a>`"`
`#include "`<a href="sdi_2src_2ped_8h_source.md">ped.h</a>`"`
`#include "`<a href="_e_m_v___c_t___interface_8h_source.md">emv/EMV_CT_Interface.h</a>`"`
`#include "`<a href="_e_m_v___c_t___ser_interface_8h_source.md">emv/EMV_CT_SerInterface.h</a>`"`
`#include "`<a href="_e2_e___e_m_v___c_t___serialize_8h_source.md">emv/E2E_EMV_CT_Serialize.h</a>`"`
`#include "`<a href="_e_m_v___c_t_l_s___interface_8h_source.md">emv/EMV_CTLS_Interface.h</a>`"`
`#include "`<a href="_e_m_v___c_t_l_s___ser_interface_8h_source.md">emv/EMV_CTLS_SerInterface.h</a>`"`
`#include "`<a href="_e2_e___e_m_v___c_t_l_s___serialize_8h_source.md">emv/E2E_EMV_CTLS_Serialize.h</a>`"`
`#include "`<a href="btlv__helper_8h_source.md">btlv_helper.h</a>`"`
`#include "emv.h"`
`#include "emv_ctls.h"`
`#include "version.h"`
`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include "`<a href="disp_8h_source.md">disp.h</a>`"`
`#include "`<a href="msr_8h_source.md">msr.h</a>`"`
`#include "msr/msr.h"`
`#include "`<a href="ui_8h_source.md">ui.h</a>`"`
`#include "`<a href="libsec_8h_source.md">sec/libsec.h</a>`"`
`#include "`<a href="config_8h_source.md">config.h</a>`"`
`#include "config/sdi_sysconfig.h"`
`#include "`<a href="src_2sdi__tags_8h_source.md">sdi_tags.h</a>`"`
`#include "data.h"`
`#include "`<a href="crypt_8h_source.md">crypt.h</a>`"`
`#include "`<a href="loadplugin_8h_source.md">loadplugin.h</a>`"`
`#include "common/respVal.h"`
`#include "`<a href="main_8h_source.md">main.h</a>`"`
`#include "`<a href="madk__pp__protocol_8h_source.md">madk_pp_protocol.h</a>`"`
`#include "`<a href="pthreadutil_8h_source.md">pthreadutil.h</a>`"`
`#include "`<a href="filesystem_8h_source.md">filesystem.h</a>`"`
`#include "`<a href="pathutil_8h_source.md">pathutil.h</a>`"`
`#include "`<a href="sdi_2src_2hexutil_8h_source.md">hexutil.h</a>`"`
`#include "`<a href="sdi_2src_2util_8h_source.md">util.h</a>`"`
`#include "`<a href="sdikeyservice_8h_source.md">sdikeyservice.h</a>`"`
`#include "cardranges.h"`
`#include "filterconfig.h"`
`#include "`<a href="sdi__timer_8h_source.md">sdi_timer.h</a>`"`
`#include "`<a href="sdi__lang_8h_source.md">sdi_lang.h</a>`"`

|  |  |
|----|----|
| Data Structures |  |
| struct   | <a href="struct_update_context.md">UpdateContext</a> |

|  |  |
|----|----|
| Macros |  |
| #define  | [SECINS_FORCE_INSTALL](#ab48015210e330ca6e3f894cb7ac8b35c)   <a href="libsecins_8h.md#a8785304d958ff2afa1a1558426060af6">SECINS_BIT</a>(0) |
| #define  | [SECINS_FORCE_REBOOT](#a7f5afd70f762155ff1036a0a8efde184)   <a href="libsecins_8h.md#a8785304d958ff2afa1a1558426060af6">SECINS_BIT</a>(2) |
| #define  | [SET_RESULT](#ae27eea42be89a6e50555732afafcfb8f)(sw1, sw2)   { rsp\[0\] = sw1; rsp\[1\] = sw2; \*rspSize = 2; } |
| #define  | [MAX_UPLOAD_FILE_SIZE](#a6168c25344a05918f9e55756eac5522e)   255 |

|  |  |
|----|----|
| Functions |  |
| void  | [setSW1SW2](#a2b1e62cbba20fe441f74365bab09c22c) (int result, unsigned char \*rsp) |
| bool  | [sys_internal_android](#a914eb0ad5b455073caeed46e742f3cd2) () |
| bool  | [vos_sys8](#a7109ff8195a9046828f8120509022d76) () |
| bool  | [isHwModelName](#aadbe3a6553fce242b52a2655173897fe) (const char \*targetHwModelName) |
| bool  | [checkBundleInstalled](#a3aeb676c0c19ca74396503eb1267f979) (const char \*bdlname) |
| bool  | [handleSystemCmd](#afe8ab8c8d592d69c0b6d074f03081d3e) (unsigned long msgBufSize, unsigned char \*msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char \*rsp, unsigned short \*rspSize) |
| int  | [check4Interrupt](#af8ff9f4a2125f866eda540eaf867197b) (void) |
| void  | [setInterrupt](#a236d1705a845df2853614cbf8052583b) (enum <a href="sys_8h.md#a0ee277aec4317de742cf8b2bd40af3a9">ExtserverResult</a> r) |
| int  | [isCardRemoved](#a43801947261b861981e5f2c52e878fa0) (void) |
| const char \*  | [errText](#ae05a33a2f7e55688d36a0692fc795ffe) (int err) |
| void  | [setDevice2Idle](#ac28a8edfbaded7c71c0e249ae70aba3b) (void) |
| void  | [sysDisplayIdleScreen](#a968e55dee8f3b0ee8226f93667bb2a53) (unsigned mode, const char \*idletext) |
| bool  | [sysSetIdleScreenFinished](#a02ab2d39fc437b5924aed122a8adb57e) (unsigned long id) |
| void  | [sysSetIdleScreenAdminMenu](#af85581548b99a07d923feb33e0297b5c) (bool on) |
| bool  | [sysSetIdleScreenLocked](#a9dc512dc0654bb4a1b9a113c6cdc9224) (bool lock, bool update_screen) |
| enum <a href="sys_8h.md#acbca865bf1cc550151c765b4bb11dc7e">IdleLockType</a>  | [sysGetIdleScreenLocked](#af826b34d72f2718baf08d472448063bd) () |
| void  | [sysResetUpdateContext](#a6777013b116ca3f41fc511143671ef8e) (void \*handle) |

## MacroDefinition Documentation {#macro-definition-documentation}

## MAX_UPLOAD_FILE_SIZE <a href="#a6168c25344a05918f9e55756eac5522e" id="a6168c25344a05918f9e55756eac5522e"></a>

<p>#define MAX_UPLOAD_FILE_SIZE   255</p>

## SECINS_FORCE_INSTALL <a href="#ab48015210e330ca6e3f894cb7ac8b35c" id="ab48015210e330ca6e3f894cb7ac8b35c"></a>

<p>#define SECINS_FORCE_INSTALL   <a href="libsecins_8h.md#a8785304d958ff2afa1a1558426060af6">SECINS_BIT</a>(0)</p>

Ignore critical section and proceed with the install after killing the user apps.

## SECINS_FORCE_REBOOT <a href="#a7f5afd70f762155ff1036a0a8efde184" id="a7f5afd70f762155ff1036a0a8efde184"></a>

<p>#define SECINS_FORCE_REBOOT   <a href="libsecins_8h.md#a8785304d958ff2afa1a1558426060af6">SECINS_BIT</a>(2)</p>

Directive from caller to reboot system. This directive is ignored in case of errors.

## SET_RESULT <a href="#ae27eea42be89a6e50555732afafcfb8f" id="ae27eea42be89a6e50555732afafcfb8f"></a>

<p>#define SET_RESULT</p>

## FunctionDocumentation {#function-documentation}

## check4Interrupt() <a href="#af8ff9f4a2125f866eda540eaf867197b" id="af8ff9f4a2125f866eda540eaf867197b"></a>

<p>int check4Interrupt</p>

Check if a SysAbort command is received or a Link interruption occurred

### Returns

RESULT_MOBILE_ABORT if a SysAbort is received, RESULT_NO_LINK in case of link interrupt, else RESULT_OK

## checkBundleInstalled() <a href="#a3aeb676c0c19ca74396503eb1267f979" id="a3aeb676c0c19ca74396503eb1267f979"></a>

<p>bool checkBundleInstalled</p>

check for installed bundle with name `bdlname`. String `bdlname` can be a regular expression.

**Parameters**

\[in\] **bdlname** name of the bundle (or regex)

### Returns

true if the bundle is installed, false in case that `bdlname` does not match an installed bundle


{% hint style="info" %}
This function works for VOS/VOS2 only. If invoked on other platforms it returns always false.
{% endhint %}

## errText() <a href="#ae05a33a2f7e55688d36a0692fc795ffe" id="ae05a33a2f7e55688d36a0692fc795ffe"></a>

<p>const char\* errText</p>

Return C-String of error ExtserverResult

### Returns

C-String with error name, \"UNKNOWN\" for unknown error codes

## handleSystemCmd() <a href="#afe8ab8c8d592d69c0b6d074f03081d3e" id="afe8ab8c8d592d69c0b6d074f03081d3e"></a>

<p>bool handleSystemCmd</p>

Dispatch function to handle different system commands

**Parameters**

\[in\] **msgBufSize** size of the input message buffer \[in\] **msg** pointer to the input message buffer \[in\] **msgSize** size of the input message \[in\] **rspBufSize** maximum size of the response buffer \[in,out\] **rsp** pointer to the response buffer \[in,out\] **rspSize** pointer to the response message size

### Returns

true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command.

## isCardRemoved() <a href="#a43801947261b861981e5f2c52e878fa0" id="a43801947261b861981e5f2c52e878fa0"></a>

<p>int isCardRemoved</p>

Check if a Chip Card is removed

### Returns

0 = Card inserted, 1 = Card removed

## isHwModelName() <a href="#aadbe3a6553fce242b52a2655173897fe" id="aadbe3a6553fce242b52a2655173897fe"></a>

<p>bool isHwModelName</p>

Check the Hardware Model Name of the device

**Parameters**

\[in\] **targetHwModelName** target Hardware Model Name

### Returns

true if the Hardware Model Name matches, false if the Hardware Model Name doesn\'t match

## setDevice2Idle() <a href="#ac28a8edfbaded7c71c0e249ae70aba3b" id="ac28a8edfbaded7c71c0e249ae70aba3b"></a>

<p>void setDevice2Idle</p>

Set the device into idle mode

## setInterrupt() <a href="#a236d1705a845df2853614cbf8052583b" id="a236d1705a845df2853614cbf8052583b"></a>

<p>void setInterrupt</p>

Make the check4Interrupt return not RESULT_OK once.

## setSW1SW2() <a href="#a2b1e62cbba20fe441f74365bab09c22c" id="a2b1e62cbba20fe441f74365bab09c22c"></a>

<p>void setSW1SW2</p>

Map result to SW1/SW2

**Parameters**

\[in\] **result** SDI result code \[in,out\] **rsp** pointer to the response buffer

## sys_internal_android() <a href="#a914eb0ad5b455073caeed46e742f3cd2" id="a914eb0ad5b455073caeed46e742f3cd2"></a>

<p>bool sys_internal_android</p>

checks for device types, which run SDI server on Engage and the payment application on the internal Android device. A special internal network is used to connect both devices. Recently these are CM5, M440 and M424. Others like X10 or X8 shall not match, since payment application runs on Engage here.

### Returns

true for internal android with payment application

## sysDisplayIdleScreen() <a href="#a968e55dee8f3b0ee8226f93667bb2a53" id="a968e55dee8f3b0ee8226f93667bb2a53"></a>

<p>void sysDisplayIdleScreen</p>

Display idle screen

**Parameters**

\[in\] **mode** idle screen mode bit mask, see enum IdleScreenMode \[in\] **idletext** optional text used in favor of standard or customer text

## sysGetIdleScreenLocked() <a href="#af826b34d72f2718baf08d472448063bd" id="af826b34d72f2718baf08d472448063bd"></a>

<p>enum <a href="sys_8h.md#acbca865bf1cc550151c765b4bb11dc7e">IdleLockType</a> sysGetIdleScreenLocked</p>

Returns true, if idle screen was locked either by <a href="sys_8h.md#af0f2a2ccba88c6c9f0ee759172febaa0">sysSetIdleScreenLocked()</a> or admin mode w/o admin menu was turned on by <a href="sys_8h.md#af85581548b99a07d923feb33e0297b5c">sysSetIdleScreenAdminMenu()</a>

### Returns

true, if idle screen is locked, else false

## sysResetUpdateContext() <a href="#a6777013b116ca3f41fc511143671ef8e" id="a6777013b116ca3f41fc511143671ef8e"></a>

<p>void sysResetUpdateContext</p>

Reset update context allocated for SW update with 20-14, 20-15, 20-16. The function is invoked by a thread at connection termination to abort a pending update which was started by command 20-14, but not completed with 20-15 and 20-16. SDI server supports multiple connections, which can use the update interface. With a started update with command 20-14 on one connection, the interface is locked for other connections. If a connection terminates, which obtains the update context (lock), the interface would be unaccessable for other connections. Therfore, this function will abort the started update and unlock the update interface, if the connection disturbes so that it can be used by other connection again.

**Parameters**

\[in\] **handle** handle of the terminating connection

## sysSetIdleScreenAdminMenu() <a href="#af85581548b99a07d923feb33e0297b5c" id="af85581548b99a07d923feb33e0297b5c"></a>

<p>void sysSetIdleScreenAdminMenu</p>

Turn on the admin menu, if this was locked by admin mode (enabled by config). Next call of <a href="sys_8h.md#ad2bc24707c477aa4c2cb1c4fb92855df">sysDisplayIdleScreen()</a> with mode Idle_MenuEnabled then will display idle screen with menu/info softkey/keyhelpers.

{% hint style="info" %}
This function has no effect, if admin mode is disabled (not enabled by config).
{% endhint %}

## sysSetIdleScreenFinished() <a href="#a02ab2d39fc437b5924aed122a8adb57e" id="a02ab2d39fc437b5924aed122a8adb57e"></a>

<p>bool sysSetIdleScreenFinished</p>

Function called by idlescreen callback to signal the return of idlescreen

**Parameters**

\[in\] **id** idlescreen ID forwarded by idlescreen callback

### Returns

true, if the last idle screen has display the admin menu, (for active admin mode) else false is returned.

## sysSetIdleScreenLocked() <a href="#a9dc512dc0654bb4a1b9a113c6cdc9224" id="a9dc512dc0654bb4a1b9a113c6cdc9224"></a>

<p>bool sysSetIdleScreenLocked</p>

Lock/Unlock the idle screen and disable/enable softkeys/keyhelpers to access the menu. If locked, further subsequent calls of <a href="sys_8h.md#ad2bc24707c477aa4c2cb1c4fb92855df">sysDisplayIdleScreen()</a> with mode `Idle_MenuEnabled` are suppressed and idle screen is displayed without softkeys/keyhelpers. Parameter `update_screen` (set to true) will replace an existing idle screen by a default idle screen by invoking function <a href="sys_8h.md#ad2bc24707c477aa4c2cb1c4fb92855df">sysDisplayIdleScreen()</a> with or without option Idle_MenuEnabled depending on the new lock state `lock`.

**Parameters**

**lock** new lock state: true/false to lock/unlock the idle screen **update_screen** update an existing idle screen and enable/disable menu according new lock state

### Returns

old lock state (before this function was called): true, if the idlescreen was already locked false, if the idlescreen was already unlocked


{% hint style="info" %}
This function does nothing, if SDI admin mode was enabled by configuration. The admin mode defines another behavior for locking the idle screen (e.g. it must be always unlocked by key combination or touch. Thus, internal calls of this function, will be ignored
{% endhint %}

## vos_sys8() <a href="#a7109ff8195a9046828f8120509022d76" id="a7109ff8195a9046828f8120509022d76"></a>

<p>bool vos_sys8</p>

returns true, if SDI server runs on V/OS as system user sys8

### Returns

true if running as sys8 user

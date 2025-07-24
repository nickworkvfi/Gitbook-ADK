---
hidden: true
title: main.cpp File Reference
---

[Macros](#define-members) \| [Functions](#func-members) \| [Variables](#var-members)

`#include <stdio.h>`
`#include <stdlib.h>`
`#include <string.h>`
`#include <map>`
`#include <string>`
`#include <sys/types.h>`
`#include <sys/stat.h>`
`#include <fcntl.h>`
`#include <unistd.h>`
`#include <signal.h>`
`#include <dirent.h>`
`#include <svcsec.h>`
`#include "`<a href="main_8h_source.md">main.h</a>`"`
`#include "`<a href="madk__pp__protocol_8h_source.md">madk_pp_protocol.h</a>`"`
`#include "`<a href="_e2_e___e_m_v___c_t___serialize_8h_source.md">emv/E2E_EMV_CT_Serialize.h</a>`"`
`#include "`<a href="_e2_e___e_m_v___c_t_l_s___serialize_8h_source.md">emv/E2E_EMV_CTLS_Serialize.h</a>`"`
`#include "`<a href="_e_m_v___c_t___link_8h_source.md">emv/EMV_CT_Link.h</a>`"`
`#include "`<a href="_e_m_v___c_t_l_s___link_8h_source.md">emv/EMV_CTLS_Link.h</a>`"`
`#include "`<a href="btlv__helper_8h_source.md">btlv_helper.h</a>`"`
`#include "epp/counterTop.h"`
`#include "epp/epp.h"`
`#include "pthread.h"`
`#include "emv.h"`
`#include "emv_ctls.h"`
`#include "card_dt.h"`
`#include "cardranges.h"`
`#include "`<a href="sys_8h_source.md">sys.h</a>`"`
`#include "`<a href="sdi_2src_2ped_8h_source.md">ped.h</a>`"`
`#include "`<a href="disp_8h_source.md">disp.h</a>`"`
`#include "`<a href="msr_8h_source.md">msr.h</a>`"`
`#include "`<a href="crypt_8h_source.md">crypt.h</a>`"`
`#include "`<a href="sysinfo_8h_source.md">sysinfo/sysinfo.h</a>`"`
`#include "`<a href="ui__mode_8h_source.md">ui_mode.h</a>`"`
`#include "data.h"`
`#include "`<a href="sec_8h_source.md">sec.h</a>`"`
`#include "`<a href="nfc_8h_source.md">nfc.h</a>`"`
`#include "`<a href="sdi_2src_2prt_8h_source.md">prt.h</a>`"`
`#include "`<a href="vcl__ser_8h_source.md">vcl_ser.h</a>`"`
`#include "vcl_client.h"`
`#include "`<a href="sdi_2src_2hexutil_8h_source.md">hexutil.h</a>`"`
`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include "version.h"`
`#include "msr/msr.h"`
`#include "`<a href="tec_8h_source.md">tec/tec.h</a>`"`
`#include "`<a href="ui_8h_source.md">ui.h</a>`"`
`#include "`<a href="config_8h_source.md">config.h</a>`"`
`#include "config/sdi_sysconfig.h"`
`#include "`<a href="src_2sdi__tags_8h_source.md">sdi_tags.h</a>`"`
`#include "`<a href="loadplugin_8h_source.md">loadplugin.h</a>`"`
`#include "`<a href="pthreadutil_8h_source.md">pthreadutil.h</a>`"`
`#include "`<a href="filesystem_8h_source.md">filesystem.h</a>`"`
`#include "`<a href="libsec_8h_source.md">sec/libsec.h</a>`"`
`#include "csd.h"`
`#include "csd-version.h"`
`#include "`<a href="sdikeyservice_8h_source.md">sdikeyservice.h</a>`"`
`#include "`<a href="tracefilter_8h_source.md">tracefilter.h</a>`"`
`#include "filterconfig.h"`
`#include "emv_common.h"`

|  |  |
|----|----|
| Macros |  |
| #define  | [SET_RESULT](#ae27eea42be89a6e50555732afafcfb8f)(sw1, sw2)   { rsp\[0\] = sw1; rsp\[1\] = sw2; rspSize = 2; } |
| #define  | [CHECK_MAXSIZE](#a3d73028d6db233c7834cca0de7ab7792)(maxsize) |

|  |  |
|----|----|
| Functions |  |
| void  | [sdi_exit](#aeeb65deaf7e0b30961e4cb56c8105b41) (int status) |
| bool  | [pm_criticalSection](#a2640a9e85a15b5c3a3e800e532939c67) () |
| void  | [pm_setCriticalSection](#a11c5a1b173cf19d42db73a73a1ad6d90) (bool enable) |
| void  | [checkLibraryVersion](#adc2d81ce0635e8bfeaae7cb9134309ec) () |
| unsigned short  | [check_mac_decrypt](#a14410a47bc85fc785f5b90cfaaae8c4c) (unsigned char \*cmd, unsigned &cmdSize, vector\< unsigned char \> &out) |
| void  | [dispatch](#a9dbfee7a8a87cdb842e06759f4f2bb40) (vector\< unsigned char \> &cmd) |
| bool  | [process_side_command](#a4892e1b795462119ef4d6fa87c860b90) (unsigned char \*cmd, unsigned size) |
| int  | [main](#a0ddf1224851353fc92bfbff6f499fa97) (int argc, char \*argv\[\]) |

|  |  |
|----|----|
| Variables |  |
| SDITrxData  | [sdiData](#aaaba1a94d121b39429bb3696a654492b) |
| LibLogHandle  | [logHandle](#ab8518ee19337dc0debb1f831ada96dd6) = 0 |
| pthread_mutex_t  | [g_mutexEppSendReceive](#a8680a87737255cae9f7249240818f118) |

## MacroDefinition Documentation {#macro-definition-documentation}

## CHECK_MAXSIZE <a href="#a3d73028d6db233c7834cca0de7ab7792" id="a3d73028d6db233c7834cca0de7ab7792"></a>

<p>#define CHECK_MAXSIZE</p>

**Value:**

``` cpp
  if (size > maxsize) { \
   _LOGF_ERROR("%s(cmd=%p,size=%u): failed, max. message size %lu exceeded", __FUNCTION__, cmd, size, (unsigned long)maxsize); \
   rspSize = 2; \
   if (rsp.size() < rspSize)\
   rsp.resize(rspSize);\
   rsp[0] = 0x64; \
   rsp[1] = 0xFE; \
   break; }
```

## SET_RESULT <a href="#ae27eea42be89a6e50555732afafcfb8f" id="ae27eea42be89a6e50555732afafcfb8f"></a>

<p>#define SET_RESULT</p>

## FunctionDocumentation {#function-documentation}

## check_mac_decrypt() <a href="#a14410a47bc85fc785f5b90cfaaae8c4c" id="a14410a47bc85fc785f5b90cfaaae8c4c"></a>

<p>unsigned short check_mac_decrypt</p>

see <a href="main_8h.md">main.h</a> for details description

## checkLibraryVersion() <a href="#adc2d81ce0635e8bfeaae7cb9134309ec" id="adc2d81ce0635e8bfeaae7cb9134309ec"></a>

<p>void checkLibraryVersion</p>

## dispatch() <a href="#a9dbfee7a8a87cdb842e06759f4f2bb40" id="a9dbfee7a8a87cdb842e06759f4f2bb40"></a>

<p>void dispatch</p>

## main() <a href="#a0ddf1224851353fc92bfbff6f499fa97" id="a0ddf1224851353fc92bfbff6f499fa97"></a>

<p>int main</p>

### Examples

<a href="crdsync-demo_8cpp-example.md#a1">crdsync-demo.cpp</a>, <a href="demo-sysinfo_8cpp-example.md#a4">demo-sysinfo.cpp</a>, <a href="mac_demo1_8cpp-example.md#a4">mac_demo1.cpp</a>, <a href="mac_demo2_8cpp-example.md#a4">mac_demo2.cpp</a>, <a href="mac_demo3_8cpp-example.md#a2">mac_demo3.cpp</a>, and <a href="pm-demo_8cpp-example.md#a9">pm-demo.cpp</a>.

## pm_criticalSection() <a href="#a2640a9e85a15b5c3a3e800e532939c67" id="a2640a9e85a15b5c3a3e800e532939c67"></a>

<p>bool pm_criticalSection</p>

check if SDI has entered critical PM section with <a href="main_8h.md#a11c5a1b173cf19d42db73a73a1ad6d90">pm_setCriticalSection()</a>.

### Returns

true if SDI has entered critical PM section, else false.

## pm_setCriticalSection() <a href="#a11c5a1b173cf19d42db73a73a1ad6d90" id="a11c5a1b173cf19d42db73a73a1ad6d90"></a>

<p>void pm_setCriticalSection</p>

Enter/leave critical section of power management (PM). If true is passed for parameter *enable*, it invokes <a href="namespacevfisyspm.md#ac46060410ba78b557470d51eb9c90feb">sys_CriticalSectionEnter()</a>, in case of false <a href="namespacevfisyspm.md#a1fe354c573d66613fbae37897509cf04">sys_CriticalSectionExit()</a> is called. For more details please refer to documentation of ADKPM.

**Parameters**

\[in\] **enable** true to enter critical PM section false to leave critical PM section

## process_side_command() <a href="#a4892e1b795462119ef4d6fa87c860b90" id="a4892e1b795462119ef4d6fa87c860b90"></a>

<p>bool process_side_command</p>

Function to process a command as a side command, which was triggered by a side connection with protocol type \'C\' asynchronously or by an asynchronous command with protocol type \'D\'. The function is invoked by SDI connection thread (such as invoking <a href="classm_a_d_k___p_p___prot.md#ab390ac45aaaa013d33bcef40d625f142">mADK_PP_Prot::set_command()</a>), thus, these threads are fully decoupled from SDI main thread processing (see function <a href="main_8h.md#afdcd133c96d68afb81d874f88786367e">dispatch()</a>). Subfunctions invoked by <a href="main_8h.md#a4892e1b795462119ef4d6fa87c860b90">process_side_command()</a> are invoked simultaneously, thus, they must be implemented thread-safe!!! If the command is not supported to be executed as a side command, the function returns false, which means that the command requires execution of <a href="main_8h.md#afdcd133c96d68afb81d874f88786367e">dispatch()</a> with the SDI main thread. Side commands just have restricted access to SDI function scope and do not support intermediate messages like requests (callbacks) or aborts, they just use internal function <a href="classm_a_d_k___p_p___prot.md#a1f13b08d59a38adeb5d755179befa6b8">mADK_PP_Prot::send()</a> to reply the command. Therefore, side commands are usually short-term in nature.

{% hint style="info" %}
This function is not allowed to use protocol function like <a href="classm_a_d_k___p_p___prot.md#ab2e55bafa77bcbdbeda4258ecadd5357">mADK_PP_Prot::receive()</a>, <a href="classm_a_d_k___p_p___prot.md#a345e47376ab38e76aa77b2bd774b104d">mADK_PP_Prot::command()</a>, <a href="classm_a_d_k___p_p___prot.md#a1630f914c3dbf9ebc62ad6a5c7f9ebd9">mADK_PP_Prot::request()</a> or <a href="classm_a_d_k___p_p___prot.md#a0bb666307a7aa15fc7aae63d454e4394">mADK_PP_Prot::recv_response()</a>. These APIs are only allowed for SDI application threads (main thread and siblings), which process commands received on the main connection (see function <a href="main_8h.md#afdcd133c96d68afb81d874f88786367e">dispatch()</a>).
{% endhint %} **Parameters**

\[in\] **cmd** pointer to command buffer \[in\] **size** size of command buffer

### Returns

true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command and requires execution of <a href="main_8h.md#afdcd133c96d68afb81d874f88786367e">dispatch()</a> with the SDI main thread.

## sdi_exit() <a href="#aeeb65deaf7e0b30961e4cb56c8105b41" id="aeeb65deaf7e0b30961e4cb56c8105b41"></a>

<p>void sdi_exit</p>

depending on platform SDI must call exit() or \_exit(). This function ensures to use the correct variant, therefore, it shall be used instead of using functions of stdlib directly.

**Parameters**

\[in\] **status** exit code of SDI

## VariableDocumentation {#variable-documentation}

## g_mutexEppSendReceive <a href="#a8680a87737255cae9f7249240818f118" id="a8680a87737255cae9f7249240818f118"></a>

<p>pthread_mutex_t g_mutexEppSendReceive</p>

## logHandle <a href="#ab8518ee19337dc0debb1f831ada96dd6" id="ab8518ee19337dc0debb1f831ada96dd6"></a>

<p>LibLogHandle logHandle = 0</p>

## sdiData <a href="#aaaba1a94d121b39429bb3696a654492b" id="aaaba1a94d121b39429bb3696a654492b"></a>

<p>SDITrxData sdiData</p>

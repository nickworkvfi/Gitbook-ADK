---
title: sdi/src/main.h

---

# sdi/src/main.h



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[dispatch](main_8h.md#function-dispatch)**(std::vector< unsigned char > & cmd) |
| bool | **[process_side_command](main_8h.md#function-process-side-command)**(unsigned char * cmd, unsigned size) |
| unsigned short | **[check_mac_decrypt](main_8h.md#function-check-mac-decrypt)**(unsigned char * cmd, unsigned & cmdSize, std::vector< unsigned char > & out) |
| void | **[pm_setCriticalSection](main_8h.md#function-pm-setcriticalsection)**(bool enable) |
| bool | **[pm_criticalSection](main_8h.md#function-pm-criticalsection)**() |
| void | **[sdi_exit](main_8h.md#function-sdi-exit)**(int status) |


## Functions Documentation

### function dispatch

```cpp
void dispatch(
    std::vector< unsigned char > & cmd
)
```


**Parameters**: 

  * **cmd** vector as buffer storing the command to be processed 


**Note**: SDI connection threads (such as invoking [mADK_PP_Prot::set_command()](classm_a_d_k___p_p___prot.md#function-set-command)) must never invoke function [dispatch()](main_8h.md#function-dispatch), since these threads are fully decoupled from SDI main thread and must use [process_side_command()](main_8h.md#function-process-side-command) instead. Even SDI allows using [dispatch()](main_8h.md#function-dispatch) for asynchronous commands with protocol type 'D' over the main connection, the related connection thread stores the command into command buffer, so that the main thread (calling [mADK_PP_Prot::receive()](classm_a_d_k___p_p___prot.md#function-receive) in idle loop) can take ownership to process the command synchronously. Thus, a second simultaneous protocol type 'D' command on the main connection is declined with a busy response 640A, while the previous command is already processed by the main thread. 

Function to process a command with the SDI main thread synchronously. The function provides the full SDI function scope (e.g. including payment support with ADKEMV, ADKNFC and ADKMSR). Most subfunctions invoked by [dispatch()](main_8h.md#function-dispatch) are CPU bound or might block, e.g. to wait for user input with UI, thus, the are processed by the a working thread, the SDI main thread. Function [dispatch()](main_8h.md#function-dispatch) cannot be invoked by multiple threads simultanously. A second thread invoking it at the same time is blocked by a mutex, which will lead to delayed processing consequently (as long as the previous thread hasn't finshed processing) or finally to a processing timeout. Since the used mutex allowes recursive locking with the same thread, it is possible to use [dispatch()](main_8h.md#function-dispatch) for processing a nested command from within an active SDI callback, if this was invoked by the SDI main thread. Other sibling threads (created by the SDI main thread) will only be able the invoke [dispatch()](main_8h.md#function-dispatch), if the SDI main thread has unlocked the mutex previously (e.g. as implemented for command Card Detection 23-01). 


### function process_side_command

```cpp
bool process_side_command(
    unsigned char * cmd,
    unsigned size
)
```


**Parameters**: 

  * **cmd** pointer to command buffer 
  * **size** size of command buffer 


**Return**: true if command was executed and rsp contains a response, false in case invocation is not allowed by a side command and requires execution of [dispatch()](main_8h.md#function-dispatch) with the SDI main thread. 

**Note**: This function is not allowed to use protocol function like [mADK_PP_Prot::receive()](classm_a_d_k___p_p___prot.md#function-receive), [mADK_PP_Prot::command()](classm_a_d_k___p_p___prot.md#function-command), [mADK_PP_Prot::request()](classm_a_d_k___p_p___prot.md#function-request) or [mADK_PP_Prot::recv_response()](classm_a_d_k___p_p___prot.md#function-recv-response). These APIs are only allowed for SDI application threads (main thread and siblings), which process commands received on the main connection (see function [dispatch()](main_8h.md#function-dispatch)). 

Function to process a command as a side command, which was triggered by a side connection with protocol type 'C' asynchronously or by an asynchronous command with protocol type 'D'. The function is invoked by SDI connection thread (such as invoking [mADK_PP_Prot::set_command()](classm_a_d_k___p_p___prot.md#function-set-command)), thus, these threads are fully decoupled from SDI main thread processing (see function [dispatch()](main_8h.md#function-dispatch)). Subfunctions invoked by [process_side_command()](main_8h.md#function-process-side-command) are invoked simultaneously, thus, they must be implemented thread-safe!!! If the command is not supported to be executed as a side command, the function returns false, which means that the command requires execution of [dispatch()](main_8h.md#function-dispatch) with the SDI main thread. Side commands just have restricted access to SDI function scope and do not support intermediate messages like requests (callbacks) or aborts, they just use internal function [mADK_PP_Prot::send()](classm_a_d_k___p_p___prot.md#function-send) to reply the command. Therefore, side commands are usually short-term in nature. 


### function check_mac_decrypt

```cpp
unsigned short check_mac_decrypt(
    unsigned char * cmd,
    unsigned & cmdSize,
    std::vector< unsigned char > & out
)
```


**Parameters**: 

  * **cmd** pointer to origin incomming command buffer, which might be encrypted or appended with a MAC. Pointer _cmd_ is allowed to point to &out[0], but please note that [out.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size) must be at least _cmdSize_ in this case. 
  * **cmdSize** in: size of the incomming command, cmdSize (size of buffer _cmd_) must be at least 4 bytes! out: size of valid data returned in output vector _out_. Note: The real command size is always provided with _cmdSize_ ([out.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size) might be creater!) 
  * **out** decrypted data, always without MAC For incomming vector with [out.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size) > 0, this size is least kept. This is to keep pre-allocated command vector for [dispatch()](main_8h.md#function-dispatch), which uses this function. 


**Return**: error code 0x9000 if all operations were successful or no security options enabled, else another error code is returned, e.g. 0x6FB9 (decryption error) 

**Note**: Invocation of [check_mac_decrypt()](main_8h.md#function-check-mac-decrypt) was moved to [mADK_PP_Prot::set_command()](classm_a_d_k___p_p___prot.md#function-set-command), otherwise [dispatch()](main_8h.md#function-dispatch) would to it a second time after [process_side_command()](main_8h.md#function-process-side-command), when using protocol type D. See also add_mac_encrypt(), which is invoked by [dispatch()](main_8h.md#function-dispatch) and [process_side_command()](main_8h.md#function-process-side-command) to handle secure responses. 

The function is invoked by SDI connection thread (such as invoking [mADK_PP_Prot::set_command()](classm_a_d_k___p_p___prot.md#function-set-command)) to check for an incomming SDI command, if security options in P1 field were enabled. In case with bit 0x40 set: The function calculates the MAC from incomming command and checks if it equals with MAC appended to command. After successful MAC check, the MAC is removed from command tail and not returned in output vector _out_. IN case with bit 0x80 set: The function decrypts the command and provides the plain text command data in output vector _out_. Both option bits can be combined. 


### function pm_setCriticalSection

```cpp
void pm_setCriticalSection(
    bool enable
)
```


**Parameters**: 

  * **enable** true to enter critical PM section false to leave critical PM section 


Enter/leave critical section of power management (PM). If true is passed for parameter _enable_, it invokes [sys_CriticalSectionEnter()](namespacevfisyspm.md#function-sys-criticalsectionenter), in case of false [sys_CriticalSectionExit()](namespacevfisyspm.md#function-sys-criticalsectionexit) is called. For more details please refer to documentation of ADKPM. 


### function pm_criticalSection

```cpp
bool pm_criticalSection()
```


**Return**: true if SDI has entered critical PM section, else false. 

check if SDI has entered critical PM section with [pm_setCriticalSection()](main_8h.md#function-pm-setcriticalsection). 


### function sdi_exit

```cpp
void sdi_exit(
    int status
)
```


**Parameters**: 

  * **status** exit code of SDI 


depending on platform SDI must call exit() or _exit(). This function ensures to use the correct variant, therefore, it shall be used instead of using functions of stdlib directly. 




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/
#ifndef _MAIN_H_
#define _MAIN_H_

#include <vector>
#include <string>
#include <pthread.h>

void dispatch(std::vector<unsigned char> &cmd);

bool process_side_command(unsigned char *cmd, unsigned size);

unsigned short check_mac_decrypt(unsigned char *cmd, unsigned &cmdSize, std::vector<unsigned char> &out);

void pm_setCriticalSection(bool enable);

bool pm_criticalSection();

void sdi_exit(int status);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

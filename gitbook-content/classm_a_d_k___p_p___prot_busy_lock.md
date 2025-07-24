---
hidden: true
title: mADK_PP_ProtBusyLock Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="madk__pp__protocol_8h_source.md">madk_pp_protocol.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [mADK_PP_ProtBusyLock](#a8d0a9a6f75c9455ee74b21972246b5de) (bool cmd_ctx=true) |
| virtual  | [\~mADK_PP_ProtBusyLock](#a3b9e0a65ce9a6c608d477e985ea1ef4d) () |
| void  | [unlock](#a9278be8203e1c42e2619179882ae4403) () |
| bool  | [locked](#a8b660d2fb225d2dc900e1f7d0b60dadf) () const |

## DetailedDescription {#detailed-description}

helper class to obtain the protocol busy lock and automatic lock release with the object deletion

## Constructor& Destructor Documentation

## mADK_PP_ProtBusyLock() <a href="#a8d0a9a6f75c9455ee74b21972246b5de" id="a8d0a9a6f75c9455ee74b21972246b5de"></a>

<p><a href="classm_a_d_k___p_p___prot_busy_lock.md">mADK_PP_ProtBusyLock</a></p>

inline

constructer to obtain the protocol busy lock

**Parameters**

\[in\] **cmd_ctx** set true, if the lock shall be obtained while processing an active SDI command, see mADK_PP_Prot::set_busy() for more details

## \~mADK_PP_ProtBusyLock() <a href="#a3b9e0a65ce9a6c608d477e985ea1ef4d" id="a3b9e0a65ce9a6c608d477e985ea1ef4d"></a>

<p>virtual \~<a href="classm_a_d_k___p_p___prot_busy_lock.md">mADK_PP_ProtBusyLock</a></p>

inlinevirtual

destructer automatically doing the unlock

## MemberFunction Documentation {#member-function-documentation}

## locked() <a href="#a8b660d2fb225d2dc900e1f7d0b60dadf" id="a8b660d2fb225d2dc900e1f7d0b60dadf"></a>

<p>bool locked</p>

inline

function to check, if the protocol busy lock was successfully obtained after object construction

## unlock() <a href="#a9278be8203e1c42e2619179882ae4403" id="a9278be8203e1c42e2619179882ae4403"></a>

<p>void unlock</p>

inline

function to release the protocol busy lock, if this might be required before object deletion

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdi/src/<a href="madk__pp__protocol_8h_source.md">madk_pp_protocol.h</a>

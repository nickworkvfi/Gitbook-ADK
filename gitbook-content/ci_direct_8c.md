---
hidden: true
title: ciDirect.c File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include <errno.h>`
`#include <fcntl.h>`
`#include <libgen.h>`
`#include <memory.h>`
`#include <pthread.h>`
`#include <signal.h>`
`#include <syslog.h>`
`#include <sys/time.h>`
`#include <sys/wait.h>`
`#include <ucontext.h>`
`#include <unistd.h>`
`#include <svcmgr/svc_net.h>`
`#include <stdarg.h>`
`#include <stdio.h>`
`#include <stdlib.h>`
`#include <svc.h>`
`#include "VHQTypes.h"`
`#include "VHQDebug.h"`
`#include "ComIntf.h"`
`#include "VHQConfig.h"`
`#include "VHQIo.h"`

Include dependency graph for ciDirect.c:

![](ci_direct_8c__incl.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [ARRAY_SIZEOF](#a083b03c5af4ad6035a7b2879c523150c)(x)   (sizeof(x)/sizeof(x\[0\])) |

|  |  |
|----|----|
| Functions |  |
| void  | [CheckAndInitLog](#af8673306bb95c4811b31e9f1dc1a8ca3) () |
| int  | [InitVXComms](#a63a54b0dd95a1b95c327144de73f8e0b) (bool NWIF_start) |
| void  | [StartNetwork](#a14218cafcf8cb7b241304a53c65c98a9) (void) |
| void  | [StartCommEngine](#a4e9cf7d5bfbf9b781773b0f768525a5d) (void) |
| int  | [internal_GetMACAddress](#a07cc05691d9ade5eac44bf6759c347fb) (char \*pszMACAddress, int iMACAddressBufLen) |
| int  | [internal_GetIPAddress](#afb24d619e9278eec2d27a3c03376d1c3) (char \*pszIPAddress, int iIPAddressBufLen) |
| int  | [Direct_init](#aa2fc20b9443dc4d15ab2eba9b01adda5) (char \*pszSettings1, char \*pszSettings2, char \*pszSettings3, char \*pszSettings4) |
| int  | [Direct_deinit](#ab09a84c65f71594a576ecacf8e81d333) (void) |
| int  | [Direct_open](#aa81d23033a1408b30fae9c448bc7531f) (CommOpenData \*pData) |
| int  | [Direct_close](#a7954a2c6c7d3d3efda7cce26fe52209a) (CommOpenData \*pData) |
| int  | [Direct_status](#a0f3afebb197058907fc1612a1d844180) (void \*pData, bool \*bUp, char \*pszIpAddress, char \*pszMacAddr) |
| int  | [Direct_NetConn](#a4c56fad0e52ab28ecc97e80365f24812) (void) |
| int  | [Direct_NetDisconn](#a8b0c66a848f30fe9db652a958cd3fab8) (bool bForceDisconnect) |
| const char \*  | [Direct_ErrString](#a7add574cf5e9636377da0e5ed064b54f) (int err) |

## DetailedDescription {#detailed-description}

File for Direct operating mode connectivity.

## MacroDefinition Documentation {#macro-definition-documentation}

## ARRAY_SIZEOF <a href="#a083b03c5af4ad6035a7b2879c523150c" id="a083b03c5af4ad6035a7b2879c523150c"></a>

<p>#define ARRAY_SIZEOF</p>

## FunctionDocumentation {#function-documentation}

## CheckAndInitLog() <a href="#af8673306bb95c4811b31e9f1dc1a8ca3" id="af8673306bb95c4811b31e9f1dc1a8ca3"></a>

<p>void CheckAndInitLog</p>

## Direct_close() <a href="#a7954a2c6c7d3d3efda7cce26fe52209a" id="a7954a2c6c7d3d3efda7cce26fe52209a"></a>

<p>int Direct_close</p>

## Direct_deinit() <a href="#ab09a84c65f71594a576ecacf8e81d333" id="ab09a84c65f71594a576ecacf8e81d333"></a>

<p>int Direct_deinit</p>

## Direct_ErrString() <a href="#a7add574cf5e9636377da0e5ed064b54f" id="a7add574cf5e9636377da0e5ed064b54f"></a>

<p>const char\* Direct_ErrString</p>

## Direct_init() <a href="#aa2fc20b9443dc4d15ab2eba9b01adda5" id="aa2fc20b9443dc4d15ab2eba9b01adda5"></a>

<p>int Direct_init</p>

## Direct_NetConn() <a href="#a4c56fad0e52ab28ecc97e80365f24812" id="a4c56fad0e52ab28ecc97e80365f24812"></a>

<p>int Direct_NetConn</p>

This function establishes connection to network and set the successful connection type if operating mode is direct.

### Returns

0, if network connect is successful.

## Direct_NetDisconn() <a href="#a8b0c66a848f30fe9db652a958cd3fab8" id="a8b0c66a848f30fe9db652a958cd3fab8"></a>

<p>int Direct_NetDisconn</p>

This function is the disconnect from network if operating mode is direct.

**Parameters**

\[in\] **bForceDisconnect** =TRUE, if force disconnect is active

### Returns

0, if network disconnect is successful.

## Direct_open() <a href="#aa81d23033a1408b30fae9c448bc7531f" id="aa81d23033a1408b30fae9c448bc7531f"></a>

<p>int Direct_open</p>

## Direct_status() <a href="#a0f3afebb197058907fc1612a1d844180" id="a0f3afebb197058907fc1612a1d844180"></a>

<p>int Direct_status</p>

This function returns the IP address and Mac address if connection status is active

**Parameters**

\[in\] **pData** = UNUSED. \[out\] **bUp** = to store status, TRUE if active/IP address is present \[out\] **pszIpAddress** = to store IP Address \[out\] **pszMacAddr** = to store Mac address

### Returns

int -1, if not attached; 0, if connection attached

## InitVXComms() <a href="#a63a54b0dd95a1b95c327144de73f8e0b" id="a63a54b0dd95a1b95c327144de73f8e0b"></a>

<p>int InitVXComms</p>

## internal_GetIPAddress() <a href="#afb24d619e9278eec2d27a3c03376d1c3" id="afb24d619e9278eec2d27a3c03376d1c3"></a>

<p>int internal_GetIPAddress</p>

Function gather the IP address information.

**Parameters**

\[out\] **pszIPAddress** = pointer to IP address \[out\] **iIPAddressBufLen** = IP address buffer length

### Returns

int 0, if success

## internal_GetMACAddress() <a href="#a07cc05691d9ade5eac44bf6759c347fb" id="a07cc05691d9ade5eac44bf6759c347fb"></a>

<p>int internal_GetMACAddress</p>

Function gather the MAC address information.

**Parameters**

\[out\] **pszMACAddress** = pointer to MAC address \[out\] **iMACAddressBufLen** = MAC address buffer length

### Returns

int 0,if success

## StartCommEngine() <a href="#a4e9cf7d5bfbf9b781773b0f768525a5d" id="a4e9cf7d5bfbf9b781773b0f768525a5d"></a>

<p>void StartCommEngine</p>

## StartNetwork() <a href="#a14218cafcf8cb7b241304a53c65c98a9" id="a14218cafcf8cb7b241304a53c65c98a9"></a>

<p>void StartNetwork</p>

---
hidden: true
title: vfinetloader Namespace ReferenceNetloader
---

[Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Enumerations |  |
| enum   | [sysStatus](#a5f296faf43817f74cdc62a57df124574) {<br/>  [SYS_ERR](#a5f296faf43817f74cdc62a57df124574a3ab6be3c1b0fd47ca2fcd2d7363b50f0) = 0, [SYS_MSG](#a5f296faf43817f74cdc62a57df124574a21933eb4e27259f1a267e9fb749a489d) = 1, [SYS_DNLD_FILE](#a5f296faf43817f74cdc62a57df124574ac669b4cc9530e9b8d205cd6c4a41607c) = 2, [SYS_DNLD_DONE](#a5f296faf43817f74cdc62a57df124574a2eb37b39c728843c7f77129bac4f4e59) = 3,<br/>  [SYS_DNLD_ERR](#a5f296faf43817f74cdc62a57df124574a1ea0900fd364c4bad650e83da73855d4) = 4, [SYS_DNLD_INSTALL](#a5f296faf43817f74cdc62a57df124574aa026777c6f5b3cee773aade827188da5) = 5, [SYS_DNLD_INSTALL_DONE](#a5f296faf43817f74cdc62a57df124574ae4aa6c6e56e57aee208fd3edfd0ec096) = 6, [SYS_DNLD_INSTALL_FAIL](#a5f296faf43817f74cdc62a57df124574a196ac998408748267d37a9fc867f276d) = 7,<br/>  [SYS_REBOOT](#a5f296faf43817f74cdc62a57df124574a1621f521ace543fe69dc4fdf31e943a2) = 8, [SYS_FILE_FINISH](#a5f296faf43817f74cdc62a57df124574a5faeb632dd222d6dec15ed7517c00e57) = 9, [SYS_REBOOT_REQUIRED](#a5f296faf43817f74cdc62a57df124574a1d3ebe09ea1b211ab781dbe36db40e9d) = 10, [SYS_BASE_INSTALL_FAIL](#a5f296faf43817f74cdc62a57df124574ad06d637dd93eb8ec348fe3f71f424ddc) = 11,<br/>  [SYS_NETLOADER_READY](#a5f296faf43817f74cdc62a57df124574a4dd35a555c49706006658088a4a353a1) = 100, [SYS_NETLOADER_EXIT](#a5f296faf43817f74cdc62a57df124574aba573103184526a99faf0ff769fbc087) = 200<br/>} |
| enum   | [sysMsgMode](#aed6b03cebf679080000ec2bc8e934436) { [SYS_EXT_MSG_DISABLED](#aed6b03cebf679080000ec2bc8e934436ad1bbcd783f557f7d8f9dee3af5820fc7) = 0, [SYS_EXT_MSG](#aed6b03cebf679080000ec2bc8e934436ada6e7f6d43a0f5efa4f0cc6a80d33ef0) = 1, [SYS_EXT_MSG_1_2](#aed6b03cebf679080000ec2bc8e934436a722c4c0d8e05257102ccdb41180842cd) = 2, [SYS_EXT_MSG_1](#aed6b03cebf679080000ec2bc8e934436a9b4c794232f8f1a26e9edce0fe8a9c0d) = 9 } |
| enum   | [sysReadMode](#a94cc038c7531a6a77b801ea738c8c207) { [SYS_BLOCKING](#a94cc038c7531a6a77b801ea738c8c207a6eb1637d52cb720bad9093a06b3d0ce9) = 0, [SYS_NON_BLOCKING](#a94cc038c7531a6a77b801ea738c8c207aa94ece816839eabaf0167cdb5de9314c) = 1, [SYS_LAST](#a94cc038c7531a6a77b801ea738c8c207a71f587b6099a2f4c5ae573a4d4a5eb5d) = 2, [SYS_CANCEL](#a94cc038c7531a6a77b801ea738c8c207ab87968ad51b944e6b68d2bc38cb2a3cd) = 9 } |

|  |  |
|----|----|
| Functions |  |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderStart](#a242ae7a34df4fc588df0296a73764506) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderStartBase](#a9c618b2b0fc7eeb76f20889cdb3ce902) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderStopBase](#a165fe3f559570c22c65f6eee716d9fe9) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderStop](#a90f91ae17b4e14bd4ce0787a83b2e34a) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderVersion](#a4ae7ef57aab598e83caeb2dae452bdf4) (std::string &version) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderSetMsgMode](#a406deb2a09c387517e831dda0726f3e5) (int type) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [sysNetloaderGetMsg](#a127d1c5998677e041be0271ea9578f20) (std::string &msg, int flags) |

## DetailedDescription {#detailed-description}

Verifone netloader (vfinetloader) namespace

## EnumerationType Documentation {#enumeration-type-documentation}

## sysMsgMode <a href="#aed6b03cebf679080000ec2bc8e934436" id="aed6b03cebf679080000ec2bc8e934436"></a>

<p>enum [sysMsgMode](#aed6b03cebf679080000ec2bc8e934436)</p>

| Enumerator |  |
|----|----|
| SYS_EXT_MSG_DISABLED  | <p>Disable extended messages</p> |
| SYS_EXT_MSG  | <p>Default messages</p> |
| SYS_EXT_MSG_1_2  | <p>Enable extended type 1 and 2 messages</p> |
| SYS_EXT_MSG_1  | <p>Enable extended type 1 and don\'t auto-reboot after install</p> |

## sysReadMode <a href="#a94cc038c7531a6a77b801ea738c8c207" id="a94cc038c7531a6a77b801ea738c8c207"></a>

<p>enum [sysReadMode](#a94cc038c7531a6a77b801ea738c8c207)</p>

| Enumerator        |                                            |
|-------------------|--------------------------------------------|
| SYS_BLOCKING      | <p>Blocking</p>          |
| SYS_NON_BLOCKING  | <p>Non-blocking</p>      |
| SYS_LAST          | <p>Return last event</p> |
| SYS_CANCEL        | <p>Cancel</p>            |

## sysStatus <a href="#a5f296faf43817f74cdc62a57df124574" id="a5f296faf43817f74cdc62a57df124574"></a>

<p>enum [sysStatus](#a5f296faf43817f74cdc62a57df124574)</p>

| Enumerator |  |
|----|----|
| SYS_ERR  | <p>Error return (errno will be non-zero) msg is empty</p> |
| SYS_MSG  | <p>Status message available. msg member is not empty</p> |
| SYS_DNLD_FILE  | <p>\'msg\' member will return the filename of downloading file</p> |
| SYS_DNLD_DONE  | <p>\'msg\' member returns \"DNLD DONE\"</p> |
| SYS_DNLD_ERR  | <p>\'msg\' member returns \"DNLD ERROR\"</p> |
| SYS_DNLD_INSTALL  | <p>\'msg\' member will return the filename of the file being installed</p> |
| SYS_DNLD_INSTALL_DONE  | <p>\'msg\' member returns \"INSTL DONE\"</p> |
| SYS_DNLD_INSTALL_FAIL  | <p>\'msg\' member returns \"INSTL FAIL\"</p> |
| SYS_REBOOT  | <p>\'msg\' member returns \"REBOOT\"</p> |
| SYS_FILE_FINISH  | <p>\'msg\' member will return the filename of the finished file</p> |
| SYS_REBOOT_REQUIRED  | <p>\'msg\' member returns \"REBOOT REQUIRED\"</p> |
| SYS_BASE_INSTALL_FAIL  | <p>\'msg\' member returns \"BASE INSTL FAIL\"</p> |
| SYS_NETLOADER_READY  | <p>\'msg\' member returns \"\", netloader ready to connect on socket I/O</p> |
| SYS_NETLOADER_EXIT  | <p>\'msg\' member returns \"\", netloader stopping and closing socket I/O</p> |

## FunctionDocumentation {#function-documentation}

## sysNetloaderGetMsg() <a href="#a127d1c5998677e041be0271ea9578f20" id="a127d1c5998677e041be0271ea9578f20"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderGetMsg</p>

Read a netloader event.

**Parameters**

\[in\] **flags** flags from sysReadMode enum

### Returns

value from sysStatus enum

## sysNetloaderSetMsgMode() <a href="#a406deb2a09c387517e831dda0726f3e5" id="a406deb2a09c387517e831dda0726f3e5"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderSetMsgMode</p>

Set extended messages

**Parameters**

\[in\] **type** flags from sysMsgMode enum

## sysNetloaderStart() <a href="#a242ae7a34df4fc588df0296a73764506" id="a242ae7a34df4fc588df0296a73764506"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderStart</p>

Start netloader (listen on socket for download request)

## sysNetloaderStartBase() <a href="#a9c618b2b0fc7eeb76f20889cdb3ce902" id="a9c618b2b0fc7eeb76f20889cdb3ce902"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderStartBase</p>

Starts netloader on terminal base

## sysNetloaderStop() <a href="#a90f91ae17b4e14bd4ce0787a83b2e34a" id="a90f91ae17b4e14bd4ce0787a83b2e34a"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderStop</p>

Stop netloader (stop listening on socket for download request)

## sysNetloaderStopBase() <a href="#a165fe3f559570c22c65f6eee716d9fe9" id="a165fe3f559570c22c65f6eee716d9fe9"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderStopBase</p>

Starts netloader on terminal base

## sysNetloaderVersion() <a href="#a4ae7ef57aab598e83caeb2dae452bdf4" id="a4ae7ef57aab598e83caeb2dae452bdf4"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int vfinetloader::sysNetloaderVersion</p>

Get version of netloader service

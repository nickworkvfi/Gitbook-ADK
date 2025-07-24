---
hidden: true
title: Low level message interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [sendMessage](#ga9469453c091c21eb8ea86f57891b7308) (unsigned short cmd, unsigned short p1p2, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &data) |
| int  | [sendMessage](#ga45c151464c9a5da87cec4f15434eac64) (unsigned short cmd, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &data) |
| int  | [receiveMessage](#ga6c1ca6f917bb545fa12b98bafddeb839) (unsigned short &sw1sw2, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &data) |
| int  | [sendReply](#gaf1a6553edbb1cf8a3923c00549aaf322) (unsigned short cmd, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &data) |
| int  | [sendReceiveMessage](#ga6ecd2e2678b30d7eae0dee49978116a0) (unsigned short cmd, unsigned short p1p2, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &sdata, unsigned short &sw1sw2, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &rdata) |
| int  | [sendReceiveMessage](#ga61e51cf697228a812dd47cd53e7ca3b0) (unsigned short cmd, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &sdata, unsigned short &sw1sw2, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &rdata) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## receiveMessage() <a href="#ga6c1ca6f917bb545fa12b98bafddeb839" id="ga6c1ca6f917bb545fa12b98bafddeb839"></a>

<p>int receiveMessage</p>

receive SDI reply with internal handling of SDI callbacks.

**Parameters**

\[out\] **sw1sw2** SW1 SW2 packed into an unsigned short as returned from SDI \[out\] **data** reply data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sendMessage()\[1/2\] <a href="#ga45c151464c9a5da87cec4f15434eac64" id="ga45c151464c9a5da87cec4f15434eac64"></a> {#sendmessage-12}

<p>int sendMessage</p>

inline

send SDI command with P1P2=0x0000

**Parameters**

\[in\] **cmd** class and instruction of the command to be sent \[in\] **data** command data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sendMessage()\[2/2\] <a href="#ga9469453c091c21eb8ea86f57891b7308" id="ga9469453c091c21eb8ea86f57891b7308"></a> {#sendmessage-22}

<p>int sendMessage</p>

send SDI message

**Parameters**

\[in\] **cmd** class and instruction of the command to be sent \[in\] **p1p2** P1 and P2 of the command to be sent \[in\] **data** command data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sendReceiveMessage()\[1/2\] <a href="#ga61e51cf697228a812dd47cd53e7ca3b0" id="ga61e51cf697228a812dd47cd53e7ca3b0"></a> {#sendreceivemessage-12}

<p>int sendReceiveMessage</p>

inline

## sendReceiveMessage()\[2/2\] <a href="#ga6ecd2e2678b30d7eae0dee49978116a0" id="ga6ecd2e2678b30d7eae0dee49978116a0"></a> {#sendreceivemessage-22}

<p>int sendReceiveMessage</p>

send and receive SDI message

**Parameters**

\[in\] **cmd** class and instruction of the command to be sent \[in\] **p1p2** P1 and P2 of the command to be sent \[in\] **sdata** command data \[out\] **sw1sw2** SW1 SW2 packed into an unsigned short as returned from SDI \[out\] **rdata** reply data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## sendReply() <a href="#gaf1a6553edbb1cf8a3923c00549aaf322" id="gaf1a6553edbb1cf8a3923c00549aaf322"></a>

<p>int sendReply</p>

send SDI reply for an SDI callback message

**Parameters**

\[in\] **cmd** class and instruction of the reply to be sent \[in\] **data** command data

### Returns

0 in case of success, -1 in case of failure

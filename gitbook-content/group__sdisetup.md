---
hidden: true
title: SDI client setup
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
|   | [SDIClient](#ga55fe10473f030082d296a204e2cbf0ec) () |
| virtual  | [\~SDIClient](#ga5f736363bff55bdf1e71c8a0fcfc6fae) () |
| void  | [setProtocol](#gab5e31e9de33ab7fcc6694fed46316476) (<a href="classvfisdi_1_1_s_d_i_client.md#a2b99fb4e4914a533566284f2ed3b0186">ProtocolType</a> proto) |
| void  | [setTrace](#gafa075c0e3920b23acdb73134144fa09a) (void \*data, void(\*trace_cb)(void \*data, const char \*format,\...)) |
| template\<typename R , typename T \> |  |
| void  | [setTrace](#ga3b744ccb84fd14d5cc03de91164474df) (T \*data, R(\*trace)(T \*data, const char \*format,\...)) |
| int  | [connect](#gaadabac17c905f50d1379d3ba5fbdd0e6) (const char \*host, unsigned short port=12000) |
| int  | [connect](#ga08726c29f247dc150549abdcd3067090) (<a href="classvfiipc_1_1_i_p_c.md">vfiipc::IPC</a> \*link) |
| bool  | [connected](#gaa0fd96bc25e3d509fb54028c2e4b91f6) () const |
| void  | [close](#ga5ae591df94fc66ccb85cbb6565368bca) () |
| void  | [setLogCallbacks](#gaeefef07c14e42d4a2912f25e0c8c3839) (void \*data, <a href="classvfisdi_1_1_s_d_i_client.md#a1662fee6a6241f5c824ea55bdc1bac92">LogCallback</a> error, <a href="classvfisdi_1_1_s_d_i_client.md#a1662fee6a6241f5c824ea55bdc1bac92">LogCallback</a> debug) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## close() <a href="#ga5ae591df94fc66ccb85cbb6565368bca" id="ga5ae591df94fc66ccb85cbb6565368bca"></a>

<p>void close</p>

close connection to SDI server

## connect()\[1/2\] <a href="#gaadabac17c905f50d1379d3ba5fbdd0e6" id="gaadabac17c905f50d1379d3ba5fbdd0e6"></a> {#connect-12}

<p>int connect</p>

connect to SDI server

**Parameters**

\[in\] **host** host name or path name of unix domain socket \[in\] **port** TCP port number, ignored in case of unix domain socket

### Returns

OK in case of success, ERR_NOT_CONNECTED in case of failure

## connect()\[2/2\] <a href="#ga08726c29f247dc150549abdcd3067090" id="ga08726c29f247dc150549abdcd3067090"></a> {#connect-22}

<p>int connect</p>

set up connection to SDI server

**Parameters**

\[in\] **link** already connected IPC object

### Returns

OK in case of success, ERR_NOT_CONNECTED in case of failure (e.g. link==0)


{% hint style="info" %}
If successful, ownership is transferred to <a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a>. The Object will be deleted when invoking [close()](#ga5ae591df94fc66ccb85cbb6565368bca);
{% endhint %}

## connected() <a href="#gaa0fd96bc25e3d509fb54028c2e4b91f6" id="gaa0fd96bc25e3d509fb54028c2e4b91f6"></a>

<p>bool connected</p>

check whether a connection to SDI server exists

### Returns

true if a connection exists, false if not.

## SDIClient() <a href="#ga55fe10473f030082d296a204e2cbf0ec" id="ga55fe10473f030082d296a204e2cbf0ec"></a>

<p><a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a></p>

constructor

## setLogCallbacks() <a href="#gaeefef07c14e42d4a2912f25e0c8c3839" id="gaeefef07c14e42d4a2912f25e0c8c3839"></a>

<p>void setLogCallbacks</p>

set logging callbacks

**Parameters**

\[in\] **data** data pointer passed to the log callbacks \[in\] **error** error logging callback \[in\] **debug** debug logging callback

## setProtocol() <a href="#gab5e31e9de33ab7fcc6694fed46316476" id="gab5e31e9de33ab7fcc6694fed46316476"></a>

<p>void setProtocol</p>

set protocol type

**Parameters**

\[in\] **proto** protocol type

## setTrace()\[1/2\] <a href="#ga3b744ccb84fd14d5cc03de91164474df" id="ga3b744ccb84fd14d5cc03de91164474df"></a> {#settrace-12}

<p>void setTrace</p>

inline

set trace callback function. The trace callback traces sent and received bytes and can be used for logging

**Parameters**

\[in\] **data** data pointer to be passed to the trace callback \[in\] **trace** trace callback function, use NULL to reset the callback


{% hint style="info" %}
The interface can be used for tracing with fprintf like this: setTrace(stderr,fprintf)
{% endhint %}

## setTrace()\[2/2\] <a href="#gafa075c0e3920b23acdb73134144fa09a" id="gafa075c0e3920b23acdb73134144fa09a"></a> {#settrace-22}

<p>void setTrace</p>

## \~SDIClient() <a href="#ga5f736363bff55bdf1e71c8a0fcfc6fae" id="ga5f736363bff55bdf1e71c8a0fcfc6fae"></a>

<p>virtual \~<a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a></p>

virtual

destructor

---
hidden: true
title: sdiprotocol.h File Reference
---

[Macros](#define-members) \| [Typedefs](#typedef-members) \| [Functions](#func-members)

SDI protocol library interface. [More\...](#details)

<a href="sdiprotocol_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga4de1bdcb5c337f55bd27bff7d78b6fc5">SDI_PROTOCOL_ERR_IO</a>   -1 |
|   | read, write or protocol error <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga4de1bdcb5c337f55bd27bff7d78b6fc5">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga2c14582f53cf96b5d7da98ad7aaec3fa">SDI_PROTOCOL_ERR_CONCURRENT_USE</a>   -2 |
|   | SDI protocol library currently used by another thread, maybe try later. <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga2c14582f53cf96b5d7da98ad7aaec3fa">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga5dfdaf75378fda9eb5b5154f7106d99a">SDI_PROTOCOL_ERR_CONNECT</a>   -3 |
|   | connection establishment to SDI server failed <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga5dfdaf75378fda9eb5b5154f7106d99a">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga6f5fdc2d404fff5ab9a873002e3de41d">SDI_PROTOCOL_ERR_OVERFLOW</a>   -4 |
|   | response buffer too small, response has been dropped <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga6f5fdc2d404fff5ab9a873002e3de41d">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#gadb13d1abf7263afbffbc365e0882b1dc">SDI_PROTOCOL_ERR_PARAM</a>   -5 |
|   | wrong formal parameter like NULL pointer <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#gadb13d1abf7263afbffbc365e0882b1dc">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga6fd8126004df1ac26026fbdb701ff893">SDI_PROTOCOL_ERR_OTHER</a>   -6 |
|   | any other problem like thread creation, memory allocation, etc. <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga6fd8126004df1ac26026fbdb701ff893">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga32009f58520dc4d040c7e577bd452c93">SDI_PROTOCOL_ERR_NO_RECEIVE</a>   -7 |
|   | command is suppressed, therefore, no [SDI_Receive()](#aee8a61a1bccdbe552ecaf1db3e1eacf9 "Receive response from SDI server.") must be called afterwards <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#ga32009f58520dc4d040c7e577bd452c93">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#ga39f86a1acf5041aeb65747c144a78ae1">SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK</a>   0x01 |
|   | trace using the EMV callback <a href="group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#ga39f86a1acf5041aeb65747c144a78ae1">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#gae8bb92331299549acb6d1feed717490c">SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG</a>   0x02 |
|   | use syslog instead of EMV callback for trace <a href="group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#gae8bb92331299549acb6d1feed717490c">More...</a><br/> |
| #define  | <a href="group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#ga388c8eea73c5da8e6453f347ff9bbcac">SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG</a>   0x04 |

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [SDI_DATA_AVAILABLE_CALLBACK_TYPE](#a6abcbebf57233884aede515b9e8d9aa1)) (void \*context) |
|   | callback function type declaration for [SDI_SetDataAvailableCallback()](#ab08218e1215675470afea05b45bdccb9 "Set a callback to be called if a SDI server response is pending.") [More\...](#a6abcbebf57233884aede515b9e8d9aa1)<br/> |
| typedef void(\*  | [SDI_CALLBACK_TYPE](#a279358c02723f5f0fedb5fbc31e10da1)) (unsigned char \*dataIn, unsigned short sizeIn, unsigned char \*dataOut, unsigned short \*sizeOut, void \*context) |
|   | callback function type declaration for [SDI_SetSdiCallback()](#a77a7796fbf67ab1207dd80355dfcc251 "Set a callback function to be called when SDI server sends a callback message.") [More\...](#a279358c02723f5f0fedb5fbc31e10da1)<br/> |
| typedef void(\*  | [CARD_DETECTED_CALLBACK_TYPE](#a7289a1e4c8b54784f131b283f24f2c6f)) (unsigned char \*dataIn, unsigned short sizeIn, void \*context) |
|   | callback function type declaration for [SDI_SetCardDetectedCallback()](#a22d21817e82e46fad2837a0e5ecd5737 "Set a callback function to be called when SDI server sends the Card Detected callback message.") [More\...](#a7289a1e4c8b54784f131b283f24f2c6f)<br/> |
| typedef void(\*  | [EOF_DETECTED_CALLBACK_TYPE](#a32fdd6f1d5d248f6b50c8521ca5d3297)) (void \*context) |
|   | callback function type declaration for [SDI_SetEOFDetectedCallback()](#a367fbca79358a37885bd274761289793 "Set a callback function to be called when the connection to SDI server is closed by EOF.") [More\...](#a32fdd6f1d5d248f6b50c8521ca5d3297)<br/> |

|  |  |
|----|----|
| Functions |  |
| int  | [SDI_ProtocolInit](#abca943173d2f57b9d5aea916fa37d010) (unsigned options, const char \*settings) |
|   | Configure the library, connection setup. [More\...](#abca943173d2f57b9d5aea916fa37d010)<br/> |
| int  | [SDI_Send](#ab3428d0ca92d1516b4efaa2ed7849795) (const unsigned char \*data, int dataLength) |
|   | Send message to SDI server. [More\...](#ab3428d0ca92d1516b4efaa2ed7849795)<br/> |
| int  | [SDI_Receive](#aee8a61a1bccdbe552ecaf1db3e1eacf9) (unsigned char \*responseBuffer, int responseBufferSize) |
|   | Receive response from SDI server. [More\...](#aee8a61a1bccdbe552ecaf1db3e1eacf9)<br/> |
| int  | [SDI_SendReceive](#a4aa2844124e589c89fd41fca774e21fe) (const unsigned char \*data, int dataLength, unsigned char \*responseBuffer, int responseBufferSize) |
|   | Send message to SDI server and receive the response. [More\...](#a4aa2844124e589c89fd41fca774e21fe)<br/> |
| int  | [SDI_Disconnect](#a665e7f44cf329b0222d9ee8b624fc32c) (void) |
|   | Shut down the connection to SDI server. [More\...](#a665e7f44cf329b0222d9ee8b624fc32c)<br/> |
| int  | [SDI_SetDataAvailableCallback](#ab08218e1215675470afea05b45bdccb9) ([SDI_DATA_AVAILABLE_CALLBACK_TYPE](#a6abcbebf57233884aede515b9e8d9aa1) cb, void \*context) |
|   | Set a callback to be called if a SDI server response is pending. [More\...](#ab08218e1215675470afea05b45bdccb9)<br/> |
| int  | [SDI_SetSdiCallback](#a77a7796fbf67ab1207dd80355dfcc251) ([SDI_CALLBACK_TYPE](#a279358c02723f5f0fedb5fbc31e10da1) cb, void \*context) |
|   | Set a callback function to be called when SDI server sends a callback message. [More\...](#a77a7796fbf67ab1207dd80355dfcc251)<br/> |
| int  | [SDI_SetCardDetectedCallback](#a22d21817e82e46fad2837a0e5ecd5737) ([CARD_DETECTED_CALLBACK_TYPE](#a7289a1e4c8b54784f131b283f24f2c6f) cb, void \*context) |
|   | Set a callback function to be called when SDI server sends the Card Detected callback message. [More\...](#a22d21817e82e46fad2837a0e5ecd5737)<br/> |
| void  | [SDI_SendSysAbort](#a7ce1c5445e39ce0a025fe20b1ccfd988) (void) |
|   | Send SYS ABORT command \'20 02\'. [More\...](#a7ce1c5445e39ce0a025fe20b1ccfd988)<br/> |
| void  | [SDI_SendExternalButton](#a56ba57441b1c4f2eb535f5ed8ca58df8) (void) |
|   | Send External Button command \'20 20\' always with P2 = 1 (suppress response) [More\...](#a56ba57441b1c4f2eb535f5ed8ca58df8)<br/> |
| int  | [SDI_SetEOFDetectedCallback](#a367fbca79358a37885bd274761289793) ([EOF_DETECTED_CALLBACK_TYPE](#a32fdd6f1d5d248f6b50c8521ca5d3297) cb, void \*context) |
|   | Set a callback function to be called when the connection to SDI server is closed by EOF. [More\...](#a367fbca79358a37885bd274761289793)<br/> |

## DetailedDescription {#detailed-description}

SDI protocol library interface.

## TypedefDocumentation {#typedef-documentation}

## CARD_DETECTED_CALLBACK_TYPE <a href="#a7289a1e4c8b54784f131b283f24f2c6f" id="a7289a1e4c8b54784f131b283f24f2c6f"></a>

<p>typedef void(\* CARD_DETECTED_CALLBACK_TYPE) (unsigned char \*dataIn, unsigned short sizeIn, void \*context)</p>

callback function type declaration for [SDI_SetCardDetectedCallback()](#a22d21817e82e46fad2837a0e5ecd5737 "Set a callback function to be called when SDI server sends the Card Detected callback message.")

**Parameters**

\[in\] **dataIn** Input data to send to the application: complete SDI Server callback message \[in\] **sizeIn** Length of input data \[out\] **context** Application context data pointer

## EOF_DETECTED_CALLBACK_TYPE <a href="#a32fdd6f1d5d248f6b50c8521ca5d3297" id="a32fdd6f1d5d248f6b50c8521ca5d3297"></a>

<p>typedef void(\* EOF_DETECTED_CALLBACK_TYPE) (void \*context)</p>

callback function type declaration for [SDI_SetEOFDetectedCallback()](#a367fbca79358a37885bd274761289793 "Set a callback function to be called when the connection to SDI server is closed by EOF.")

**Parameters**

\[out\] **context** Application context data pointer

## SDI_CALLBACK_TYPE <a href="#a279358c02723f5f0fedb5fbc31e10da1" id="a279358c02723f5f0fedb5fbc31e10da1"></a>

<p>typedef void(\* SDI_CALLBACK_TYPE) (unsigned char \*dataIn, unsigned short sizeIn, unsigned char \*dataOut, unsigned short \*sizeOut, void \*context)</p>

callback function type declaration for [SDI_SetSdiCallback()](#a77a7796fbf67ab1207dd80355dfcc251 "Set a callback function to be called when SDI server sends a callback message.")

**Parameters**

\[in\] **dataIn** Input data to send to the application: complete SDI Server callback message \[in\] **sizeIn** Length of input data \[out\] **dataOut** TLV stream of output data (callback response) to send back to the SDI Server. Might be NULL pointer for one-way callbacks \[in,out\] **sizeOut** Input: size of dataOut buffer; Output: size of output data. Must be set to zero for one-way callbacks \[out\] **context** Application context data pointer

## SDI_DATA_AVAILABLE_CALLBACK_TYPE <a href="#a6abcbebf57233884aede515b9e8d9aa1" id="a6abcbebf57233884aede515b9e8d9aa1"></a>

<p>typedef void(\* SDI_DATA_AVAILABLE_CALLBACK_TYPE) (void \*context)</p>

callback function type declaration for [SDI_SetDataAvailableCallback()](#ab08218e1215675470afea05b45bdccb9 "Set a callback to be called if a SDI server response is pending.")

## FunctionDocumentation {#function-documentation}

## SDI_Disconnect() <a href="#a665e7f44cf329b0222d9ee8b624fc32c" id="a665e7f44cf329b0222d9ee8b624fc32c"></a>

<p>int SDI_Disconnect</p>

Shut down the connection to SDI server.

Might be called if the connection shall be provided to another process, for shutdown or in case of unrecoverable communication errors.

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_ProtocolInit() <a href="#abca943173d2f57b9d5aea916fa37d010" id="abca943173d2f57b9d5aea916fa37d010"></a>

<p>int SDI_ProtocolInit</p>

Configure the library, connection setup.

See Programer\'s Guide for connection handling

**Parameters**

\[in\] **options** bit mask for configuration flags SDI Protocol Initialization Options \[in\] **settings** configuration parameters JSON string

Settings (all optional/conditional): {\"server\": {\"host\":\<string\>, \"port\":\<integer\>, \"ca\":\<string\|string\[\]\>}}

**Parameters**

**settings.server.host** host IP address or host name **settings.server.port** TCP/IP port **settings.server.ca** For TLS connections, path to Certification Authority PEM file (concatenated) or list of PEM file paths **settings.server.socket** path to Unix Domain Socket (will make other parameters ignored) **settings.server.serial** path to serial device (will make other parameters ignored)

Default values: {\"server\": {\"host\":\"127.0.0.1\", \"port\":12000}}

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_Receive() <a href="#aee8a61a1bccdbe552ecaf1db3e1eacf9" id="aee8a61a1bccdbe552ecaf1db3e1eacf9"></a>

<p>int SDI_Receive</p>

Receive response from SDI server.

For instance uses infinite timeout

**Parameters**

\[in\] **responseBuffer** buffer to take the payload of SDI server response \[in\] **responseBufferSize** length of reponseBuffer

### Returns

length of response in case of success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_Send() <a href="#ab3428d0ca92d1516b4efaa2ed7849795" id="ab3428d0ca92d1516b4efaa2ed7849795"></a>

<p>int SDI_Send</p>

Send message to SDI server.

Will establish connection if necessary

**Parameters**

\[in\] **data** data buffer with payload \[in\] **dataLength** length of payload data

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_SendExternalButton() <a href="#a56ba57441b1c4f2eb535f5ed8ca58df8" id="a56ba57441b1c4f2eb535f5ed8ca58df8"></a>

<p>void SDI_SendExternalButton</p>

Send External Button command \'20 20\' always with P2 = 1 (suppress response)

This command informs the SDI-Server in Headless Mode that the external button is pressed

## SDI_SendReceive() <a href="#a4aa2844124e589c89fd41fca774e21fe" id="a4aa2844124e589c89fd41fca774e21fe"></a>

<p>int SDI_SendReceive</p>

Send message to SDI server and receive the response.

Combines SDI_Send and SDI_Receive

**Parameters**

\[in\] **data** data buffer with payload \[in\] **dataLength** length of payload data \[in\] **responseBuffer** buffer to take the payload of SDI server response \[in\] **responseBufferSize** length of reponseBuffer

### Returns

length of response in case of success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_SendSysAbort() <a href="#a7ce1c5445e39ce0a025fe20b1ccfd988" id="a7ce1c5445e39ce0a025fe20b1ccfd988"></a>

<p>void SDI_SendSysAbort</p>

Send SYS ABORT command \'20 02\'.

This command is available even when SendReceive is in progress. This is useful if a dialog during a callback needs to be aborted.

## SDI_SetCardDetectedCallback() <a href="#a22d21817e82e46fad2837a0e5ecd5737" id="a22d21817e82e46fad2837a0e5ecd5737"></a>

<p>int SDI_SetCardDetectedCallback</p>

Set a callback function to be called when SDI server sends the Card Detected callback message.

The callback function is called in the receiver thread and should not block.

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_SetDataAvailableCallback() <a href="#ab08218e1215675470afea05b45bdccb9" id="ab08218e1215675470afea05b45bdccb9"></a>

<p>int SDI_SetDataAvailableCallback</p>

Set a callback to be called if a SDI server response is pending.

Set a callback that will be invoked the callback when SDIresponse data is pending after [SDI_Send()](#ab3428d0ca92d1516b4efaa2ed7849795 "Send message to SDI server.").

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_SetEOFDetectedCallback() <a href="#a367fbca79358a37885bd274761289793" id="a367fbca79358a37885bd274761289793"></a>

<p>int SDI_SetEOFDetectedCallback</p>

Set a callback function to be called when the connection to SDI server is closed by EOF.

The callback function is called in the receiver thread before termination and should not block.

{% hint style="info" %}
Do not call any API function from inside callback EOF_DETECTED_CALLBACK_TYPE.
{% endhint %}

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

## SDI_SetSdiCallback() <a href="#a77a7796fbf67ab1207dd80355dfcc251" id="a77a7796fbf67ab1207dd80355dfcc251"></a>

<p>int SDI_SetSdiCallback</p>

Set a callback function to be called when SDI server sends a callback message.

The SDI Callback is called in the receiver thread and should not block.

### Returns

0 for success else SDI protocol error code, see <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a>

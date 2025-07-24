---
hidden: true
title: SDI Protocol Error Codes
---

[Macros](#define-members)

SDI protocol error codes. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [SDI_PROTOCOL_ERR_IO](#ga4de1bdcb5c337f55bd27bff7d78b6fc5)   -1 |
|   | read, write or protocol error [More\...](#ga4de1bdcb5c337f55bd27bff7d78b6fc5)<br/> |
| #define  | [SDI_PROTOCOL_ERR_CONCURRENT_USE](#ga2c14582f53cf96b5d7da98ad7aaec3fa)   -2 |
|   | SDI protocol library currently used by another thread, maybe try later. [More\...](#ga2c14582f53cf96b5d7da98ad7aaec3fa)<br/> |
| #define  | [SDI_PROTOCOL_ERR_CONNECT](#ga5dfdaf75378fda9eb5b5154f7106d99a)   -3 |
|   | connection establishment to SDI server failed [More\...](#ga5dfdaf75378fda9eb5b5154f7106d99a)<br/> |
| #define  | [SDI_PROTOCOL_ERR_OVERFLOW](#ga6f5fdc2d404fff5ab9a873002e3de41d)   -4 |
|   | response buffer too small, response has been dropped [More\...](#ga6f5fdc2d404fff5ab9a873002e3de41d)<br/> |
| #define  | [SDI_PROTOCOL_ERR_PARAM](#gadb13d1abf7263afbffbc365e0882b1dc)   -5 |
|   | wrong formal parameter like NULL pointer [More\...](#gadb13d1abf7263afbffbc365e0882b1dc)<br/> |
| #define  | [SDI_PROTOCOL_ERR_OTHER](#ga6fd8126004df1ac26026fbdb701ff893)   -6 |
|   | any other problem like thread creation, memory allocation, etc. [More\...](#ga6fd8126004df1ac26026fbdb701ff893)<br/> |
| #define  | [SDI_PROTOCOL_ERR_NO_RECEIVE](#ga32009f58520dc4d040c7e577bd452c93)   -7 |
|   | command is suppressed, therefore, no <a href="sdiprotocol_8h.md#aee8a61a1bccdbe552ecaf1db3e1eacf9">SDI_Receive()</a> must be called afterwards [More\...](#ga32009f58520dc4d040c7e577bd452c93)<br/> |

## DetailedDescription {#detailed-description}

SDI protocol error codes.

## MacroDefinition Documentation {#macro-definition-documentation}

## SDI_PROTOCOL_ERR_CONCURRENT_USE <a href="#ga2c14582f53cf96b5d7da98ad7aaec3fa" id="ga2c14582f53cf96b5d7da98ad7aaec3fa"></a>

<p>#define SDI_PROTOCOL_ERR_CONCURRENT_USE   -2</p>

SDI protocol library currently used by another thread, maybe try later.

## SDI_PROTOCOL_ERR_CONNECT <a href="#ga5dfdaf75378fda9eb5b5154f7106d99a" id="ga5dfdaf75378fda9eb5b5154f7106d99a"></a>

<p>#define SDI_PROTOCOL_ERR_CONNECT   -3</p>

connection establishment to SDI server failed

## SDI_PROTOCOL_ERR_IO <a href="#ga4de1bdcb5c337f55bd27bff7d78b6fc5" id="ga4de1bdcb5c337f55bd27bff7d78b6fc5"></a>

<p>#define SDI_PROTOCOL_ERR_IO   -1</p>

read, write or protocol error

## SDI_PROTOCOL_ERR_NO_RECEIVE <a href="#ga32009f58520dc4d040c7e577bd452c93" id="ga32009f58520dc4d040c7e577bd452c93"></a>

<p>#define SDI_PROTOCOL_ERR_NO_RECEIVE   -7</p>

command is suppressed, therefore, no <a href="sdiprotocol_8h.md#aee8a61a1bccdbe552ecaf1db3e1eacf9">SDI_Receive()</a> must be called afterwards

returned by <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>: command successfully sent, but response for this

## SDI_PROTOCOL_ERR_OTHER <a href="#ga6fd8126004df1ac26026fbdb701ff893" id="ga6fd8126004df1ac26026fbdb701ff893"></a>

<p>#define SDI_PROTOCOL_ERR_OTHER   -6</p>

any other problem like thread creation, memory allocation, etc.

## SDI_PROTOCOL_ERR_OVERFLOW <a href="#ga6f5fdc2d404fff5ab9a873002e3de41d" id="ga6f5fdc2d404fff5ab9a873002e3de41d"></a>

<p>#define SDI_PROTOCOL_ERR_OVERFLOW   -4</p>

response buffer too small, response has been dropped

## SDI_PROTOCOL_ERR_PARAM <a href="#gadb13d1abf7263afbffbc365e0882b1dc" id="gadb13d1abf7263afbffbc365e0882b1dc"></a>

<p>#define SDI_PROTOCOL_ERR_PARAM   -5</p>

wrong formal parameter like NULL pointer

---
hidden: true
title: sdikeyservice.cpp File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include "`<a href="sdikeyservice_8h_source.md">sdikeyservice.h</a>`"`
`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include "libsdikeyservice.h"`
`#include "epp/counterTop.h"`
`#include "`<a href="sys_8h_source.md">sys.h</a>`"`

Include dependency graph for sdikeyservice.cpp:

![](sdikeyservice_8cpp__incl.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [SDI_KS_LOCALHOST](#a9c5d4c71dc8376183e2a56b4e3912f2c)   \"127.0.0.1\" |
| #define  | [SDI_KS_HOST_INT_ANDROID](#ab2018ee2cc3fdb3ebc9317ed23c3615b)   \"vfi-terminal\" |
| #define  | [SDI_KS_PORT](#aafcd34a5dc43606c57b4b9c8b0cbea11)   12001 |
| #define  | [SDI_KS_LOG_CHANNEL](#afe721ff5529fb139bd8ba375599d500a)   \"SDIKS\" |

|  |  |
|----|----|
| Functions |  |
| string  | [keyservice_get_libname](#ade45a421d3a30912d254dc9fbee2ba2a) () |
| string  | [keyservice_get_build_date](#a5b89ea49a6fdb8f2f7f1821ea9636915) () |
| string  | [keyservice_get_version](#af9ab59e3a46544a91b38f6f458c3dd37) () |
| void  | [keyservice_start](#aff15ff808005686075653f803fad5a00) () |
| void  | [keyservice_stop](#a9e49df21fedb4d23fc8c0ea2f8b6f4e0) () |
| unsigned short  | [keyservice_read_certificate](#a9a4d0843e4abfa130e3cac563376c8e1) (const string &refname, vector\< unsigned char \> &certificate) |

## MacroDefinition Documentation {#macro-definition-documentation}

## SDI_KS_HOST_INT_ANDROID <a href="#ab2018ee2cc3fdb3ebc9317ed23c3615b" id="ab2018ee2cc3fdb3ebc9317ed23c3615b"></a>

<p>#define SDI_KS_HOST_INT_ANDROID   \"vfi-terminal\"</p>

## SDI_KS_LOCALHOST <a href="#a9c5d4c71dc8376183e2a56b4e3912f2c" id="a9c5d4c71dc8376183e2a56b4e3912f2c"></a>

<p>#define SDI_KS_LOCALHOST   \"127.0.0.1\"</p>

## SDI_KS_LOG_CHANNEL <a href="#afe721ff5529fb139bd8ba375599d500a" id="afe721ff5529fb139bd8ba375599d500a"></a>

<p>#define SDI_KS_LOG_CHANNEL   \"SDIKS\"</p>

## SDI_KS_PORT <a href="#aafcd34a5dc43606c57b4b9c8b0cbea11" id="aafcd34a5dc43606c57b4b9c8b0cbea11"></a>

<p>#define SDI_KS_PORT   12001</p>

## FunctionDocumentation {#function-documentation}

## keyservice_get_build_date() <a href="#a5b89ea49a6fdb8f2f7f1821ea9636915" id="a5b89ea49a6fdb8f2f7f1821ea9636915"></a>

<p>string keyservice_get_build_date</p>

returns the build date string for the SDI remote keyservice library

### Returns

build date or an empty string, if SDI remote keyservice is not supported for this device type

## keyservice_get_libname() <a href="#ade45a421d3a30912d254dc9fbee2ba2a" id="ade45a421d3a30912d254dc9fbee2ba2a"></a>

<p>string keyservice_get_libname</p>

returns the library name for the SDI remote keyservice

### Returns

library name or an empty string, if SDI remote keyservice is not supported for this device type

## keyservice_get_version() <a href="#af9ab59e3a46544a91b38f6f458c3dd37" id="af9ab59e3a46544a91b38f6f458c3dd37"></a>

<p>string keyservice_get_version</p>

returns the version string for the SDI remote keyservice library

### Returns

version string or an empty string, if SDI remote keyservice is not supported for this device type

## keyservice_read_certificate() <a href="#a9a4d0843e4abfa130e3cac563376c8e1" id="a9a4d0843e4abfa130e3cac563376c8e1"></a>

<p>unsigned short keyservice_read_certificate</p>

## keyservice_start() <a href="#aff15ff808005686075653f803fad5a00" id="aff15ff808005686075653f803fad5a00"></a>

<p>void keyservice_start</p>

starts the SDI remote keyservice

{% hint style="info" %}
This function does nothing, if SDI remote keyservice is not supported for this device type
{% endhint %}

## keyservice_stop() <a href="#a9e49df21fedb4d23fc8c0ea2f8b6f4e0" id="a9e49df21fedb4d23fc8c0ea2f8b6f4e0"></a>

<p>void keyservice_stop</p>

stops the SDI remote keyservice

{% hint style="info" %}
This function does nothing, if SDI remote keyservice is not supported for this device type
{% endhint %}

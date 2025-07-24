---
hidden: true
title: nfc.cpp File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include <stdio.h>`
`#include <stdlib.h>`
`#include <string.h>`
`#include <stddef.h>`
`#include <pwd.h>`
`#include <algorithm>`
`#include <unistd.h>`
`#include <fcntl.h>`
`#include <errno.h>`
`#include "`<a href="nfc_8h_source.md">nfc.h</a>`"`
`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include "nfc/NFC_Client.h"`
`#include "nfc/NFC_Interface.h"`
`#include "`<a href="sdi_2src_2hexutil_8h_source.md">hexutil.h</a>`"`
`#include "`<a href="btlv__helper_8h_source.md">btlv_helper.h</a>`"`
`#include "`<a href="tec_8h_source.md">tec/tec.h</a>`"`
`#include "`<a href="sys_8h_source.md">sys.h</a>`"`
`#include "`<a href="src_2sdi__tags_8h_source.md">sdi_tags.h</a>`"`
`#include "`<a href="config_8h_source.md">config.h</a>`"`
`#include "`<a href="directory_8h_source.md">directory.h</a>`"`
`#include "epp/counterTop.h"`

Include dependency graph for nfc.cpp:

![](nfc_8cpp__incl.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CLASS](#aeb04f2e0012cb07d68538599161c9693)   0 |
| #define  | [INSTRUCTION](#a3fbaf422cb6aaf4b403d71d972d4bc89)   1 |
| #define  | [P1](#a6c2a9f7efd46f0160f3037869924d6ce)   2 |
| #define  | [P2](#ae00a52dba55d31948c377fa85d385b87)   3 |
| #define  | [NFC_BUFFER_SIZE](#aa6f734d34c6ee0cf731449ef1548acfc)   8192 |
| #define  | [SET_RESULT](#ae27eea42be89a6e50555732afafcfb8f)(sw1, sw2)   { rsp\[0\] = sw1; rsp\[1\] = sw2; \*rspSize = 2; } |

|  |  |
|----|----|
| Functions |  |
| std::vector\< std::string \> &  | [NFC_get_appID_Static](#ac065a52a8673baeae8711309bfc176c6) () |
| std::string &  | [NFC_get_appID_Preload](#ac4a4bf1a760772ae31fe002226cc3a90) () |
| void  | [NFC_deletePreloadFile](#a1cd110adeb746aeac51b38d524be8c99) () |
| bool  | [NFC_getPreloadFileName](#a7bb3be6ba4ceea178891fa7b10367a04) (char \*filename, unsigned buffersize, string appID) |
| void  | [handleNFC](#a0f8dfff45f86ad2e782439e8c60c9694) (unsigned short msgBufSize, unsigned char \*msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char \*rsp, unsigned short \*rspSize) |
| void  | [handleVAS](#aeec5749ee271c67acbe1dad2c9267215) (unsigned short msgBufSize, unsigned char \*msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char \*rsp, unsigned short \*rspSize) |

## MacroDefinition Documentation {#macro-definition-documentation}

## CLASS <a href="#aeb04f2e0012cb07d68538599161c9693" id="aeb04f2e0012cb07d68538599161c9693"></a>

<p>#define CLASS   0</p>

## INSTRUCTION <a href="#a3fbaf422cb6aaf4b403d71d972d4bc89" id="a3fbaf422cb6aaf4b403d71d972d4bc89"></a>

<p>#define INSTRUCTION   1</p>

## NFC_BUFFER_SIZE <a href="#aa6f734d34c6ee0cf731449ef1548acfc" id="aa6f734d34c6ee0cf731449ef1548acfc"></a>

<p>#define NFC_BUFFER_SIZE   8192</p>

## P1 <a href="#a6c2a9f7efd46f0160f3037869924d6ce" id="a6c2a9f7efd46f0160f3037869924d6ce"></a>

<p>#define P1   2</p>

## P2 <a href="#ae00a52dba55d31948c377fa85d385b87" id="ae00a52dba55d31948c377fa85d385b87"></a>

<p>#define P2   3</p>

## SET_RESULT <a href="#ae27eea42be89a6e50555732afafcfb8f" id="ae27eea42be89a6e50555732afafcfb8f"></a>

<p>#define SET_RESULT</p>

## FunctionDocumentation {#function-documentation}

## handleNFC() <a href="#a0f8dfff45f86ad2e782439e8c60c9694" id="a0f8dfff45f86ad2e782439e8c60c9694"></a>

<p>void handleNFC</p>

## handleVAS() <a href="#aeec5749ee271c67acbe1dad2c9267215" id="aeec5749ee271c67acbe1dad2c9267215"></a>

<p>void handleVAS</p>

## NFC_deletePreloadFile() <a href="#a1cd110adeb746aeac51b38d524be8c99" id="a1cd110adeb746aeac51b38d524be8c99"></a>

<p>void NFC_deletePreloadFile</p>

## NFC_get_appID_Preload() <a href="#ac4a4bf1a760772ae31fe002226cc3a90" id="ac4a4bf1a760772ae31fe002226cc3a90"></a>

<p>std::string& NFC_get_appID_Preload</p>

## NFC_get_appID_Static() <a href="#ac065a52a8673baeae8711309bfc176c6" id="ac065a52a8673baeae8711309bfc176c6"></a>

<p>std::vector\<std::string\>& NFC_get_appID_Static</p>

## NFC_getPreloadFileName() <a href="#a7bb3be6ba4ceea178891fa7b10367a04" id="a7bb3be6ba4ceea178891fa7b10367a04"></a>

<p>bool NFC_getPreloadFileName</p>

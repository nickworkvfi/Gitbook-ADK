---
hidden: true
title: SdiLanguage Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="sdi__lang_8h_source.md">sdi_lang.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [SdiLanguage](#abc54ed2510efb580f8711c926aabe00c) () |
|   | [SdiLanguage](#a4c407563d255fd4d430e5c8c9429b728) (Language languageId) |
| Language  | [getLanguageId](#ae5df9397daec6a1bdfcad90944d695f5) () |
| void  | [setLanguageId](#a23dd2f74c3cff798256d8816ad01016c) (Language languageId) |
| void  | [selectLanguage](#aca0270944a7126b2cb3f3ead6ce3b3fb) (unsigned char \*rsp, unsigned short \*rspSize) |

## Constructor& Destructor Documentation

## SdiLanguage()\[1/2\] <a href="#abc54ed2510efb580f8711c926aabe00c" id="abc54ed2510efb580f8711c926aabe00c"></a> {#sdilanguage-12}

<p><a href="classsdi_1_1_sdi_language.md">SdiLanguage</a></p>

default constructor

## SdiLanguage()\[2/2\] <a href="#a4c407563d255fd4d430e5c8c9429b728" id="a4c407563d255fd4d430e5c8c9429b728"></a> {#sdilanguage-22}

<p><a href="classsdi_1_1_sdi_language.md">SdiLanguage</a></p>

explicit

constructor with predefined language id

**Parameters**

**languageId** preset of language id

## MemberFunction Documentation {#member-function-documentation}

## getLanguageId() <a href="#ae5df9397daec6a1bdfcad90944d695f5" id="ae5df9397daec6a1bdfcad90944d695f5"></a>

<p>Language getLanguageId</p>

get language id

### Returns

language id

## selectLanguage() <a href="#aca0270944a7126b2cb3f3ead6ce3b3fb" id="aca0270944a7126b2cb3f3ead6ce3b3fb"></a>

<p>void selectLanguage</p>

select language from response

**Parameters**

**rsp** response **rspSize** size of response

## setLanguageId() <a href="#a23dd2f74c3cff798256d8816ad01016c" id="a23dd2f74c3cff798256d8816ad01016c"></a>

<p>void setLanguageId</p>

set language id

**Parameters**

**languageId** language id to set

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="sdi__lang_8h_source.md">sdi_lang.h</a>
- sdi/src/<a href="sdi__lang_8cpp.md">sdi_lang.cpp</a>

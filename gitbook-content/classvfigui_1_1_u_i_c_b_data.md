---
hidden: true
title: UICBData Class Referenceabstract
---

[Public Member Functions](#pub-methods)

`#include <`<a href="gui_8h_source.md">gui.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
| virtual  | [\~UICBData](#a41b684eb02d27a1827be78fe6465b0de) () |
| virtual int &  | [result](#ad2282158d90aea501e5d62d9eada1cd4) ()=0 |
| virtual int  | [txn_id](#a820f61afc320f6958775da93351db7f7) ()=0 |
| virtual <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &  | [value](#a6a1c0b7b6184ecbb60c360005be6e821) ()=0 |
| virtual std::string &  | [url](#a7d7b46af94e38cf4c6a791e2f2b9629e) ()=0 |
| virtual std::vector\< <a href="structvfigui_1_1_u_i_error_entry.md">UIErrorEntry</a> \> &  | [error](#a2d1c7737e3a8c5dc2640eadcb7e1b94f) ()=0 |
| virtual std::string &  | [script_error](#aa06caf4806113e6418ca08927dcfe489) ()=0 |
| virtual <a href="namespacevfigui.md#structvfigui_1_1_u_i_statistics">UIStatistics</a> &  | [statistics](#a6ecec70544331521b65742e9f8e034f8) ()=0 |

## DetailedDescription {#detailed-description}

class for accessing data of the current transaction

## Constructor& Destructor Documentation

## \~UICBData() <a href="#a41b684eb02d27a1827be78fe6465b0de" id="a41b684eb02d27a1827be78fe6465b0de"></a>

<p>virtual \~<a href="classvfigui_1_1_u_i_c_b_data.md">UICBData</a></p>

inlinevirtual

Destructor

## MemberFunction Documentation {#member-function-documentation}

## error() <a href="#a2d1c7737e3a8c5dc2640eadcb7e1b94f" id="a2d1c7737e3a8c5dc2640eadcb7e1b94f"></a>

<p>virtual std::vector\<<a href="structvfigui_1_1_u_i_error_entry.md">UIErrorEntry</a>\>& error</p>

pure virtual

### Returns

current status of error list

## result() <a href="#ad2282158d90aea501e5d62d9eada1cd4" id="ad2282158d90aea501e5d62d9eada1cd4"></a>

<p>virtual int& result</p>

pure virtual

### Returns

result result code of the dialog or event code in case of custom event

## script_error() <a href="#aa06caf4806113e6418ca08927dcfe489" id="aa06caf4806113e6418ca08927dcfe489"></a>

<p>virtual std::string& script_error</p>

pure virtual

### Returns

script error message

## statistics() <a href="#a6ecec70544331521b65742e9f8e034f8" id="a6ecec70544331521b65742e9f8e034f8"></a>

<p>virtual <a href="namespacevfigui.md#structvfigui_1_1_u_i_statistics">UIStatistics</a>& statistics</p>

pure virtual

### Returns

statistics data

## txn_id() <a href="#a820f61afc320f6958775da93351db7f7" id="a820f61afc320f6958775da93351db7f7"></a>

<p>virtual int txn_id</p>

pure virtual

### Returns

transaction ID

## url() <a href="#a7d7b46af94e38cf4c6a791e2f2b9629e" id="a7d7b46af94e38cf4c6a791e2f2b9629e"></a>

<p>virtual std::string& url</p>

pure virtual

### Returns

url of the dialog as provided by the application.

## value() <a href="#a6a1c0b7b6184ecbb60c360005be6e821" id="a6a1c0b7b6184ecbb60c360005be6e821"></a>

<p>virtual <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a>& value</p>

pure virtual

### Returns

key value map containing data received from the dialog

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- guiprt/src/html/<a href="gui_8h_source.md">gui.h</a>

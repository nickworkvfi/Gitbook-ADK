---
hidden: true
title: js Namespace Reference
---

[Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Enumerations |  |
| enum   | [JSTraceType](#ad20456843dd92e66711a2f7bf92ba403) { [JST_HTTPGET](#ad20456843dd92e66711a2f7bf92ba403a0097858ea2de0d47f1b37c6b59c2877b), [JST_HTTPPOST](#ad20456843dd92e66711a2f7bf92ba403a018b7c186e2e6c565ae2ef1094f11c19), [JST_HTTPRESULT](#ad20456843dd92e66711a2f7bf92ba403a4e9e8cb17cd6cde626775e713559d61b) } |
| enum   | [JSLogLevel](#ab8a0c8e0d128f31e9b6aed5cbcc2a71c) {<br/>  [JSL_EMERGENCY](#ab8a0c8e0d128f31e9b6aed5cbcc2a71ca8bfbb012c5c86c64ad79efdb0261d147) =0, [JSL_ALERT](#ab8a0c8e0d128f31e9b6aed5cbcc2a71cadffafab224bc4e075654d9481e252bc8) =1, [JSL_CRITICAL](#ab8a0c8e0d128f31e9b6aed5cbcc2a71cab221e9c88ce2273731b118be8d1cd3c8) =2, [JSL_ERROR](#ab8a0c8e0d128f31e9b6aed5cbcc2a71cafe102a5d724b8b7a20057d4ec0f8411e) =3,<br/>  [JSL_WARNING](#ab8a0c8e0d128f31e9b6aed5cbcc2a71ca1a1c6e37370cae3caba81e3ab822b0a9) =4, [JSL_NOTICE](#ab8a0c8e0d128f31e9b6aed5cbcc2a71ca8bbd28ebf2d8ab68ea4c034820b83c72) =5, [JSL_INFO](#ab8a0c8e0d128f31e9b6aed5cbcc2a71cacdfefe038aa565f330ed517e52a336ab) =6, [JSL_DEBUG](#ab8a0c8e0d128f31e9b6aed5cbcc2a71caf3f2f3a9bbfe273ade514f6a3cc4a24c) =7<br/>} |

|  |  |
|----|----|
| Functions |  |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> bool  | [jsProcessor](#aed4342f3366822c63467b5ac2cf954a6) (void \*data, const std::string &sourcecode, std::map\< std::string, std::string \> &arg, std::string &out, std::string &err, std::string &exitcode) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> bool  | [jsProcessorExt](#a079799b1c828f53a96eec5af0c7e591e) (void \*data, const std::string &sourcecode, std::map\< std::string, std::string \> &arg, std::string &out, std::string &err, std::string &exitcode, vfihtml::ExtContext \*context) |
| const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char \*  | [jsProcVersion](#ad00023748fe562979f1e0d9927fa8b4c) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsSetHttpProxy](#a93f7e226d11567703ca1af4ad05c74b8) (const char \*proxy) |
| const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char \*  | [jsGetHttpProxy](#aa600eb22cb9b648950a8c9b7336f25a3) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsSetConsole](#ab0b2ef6cebca767dc473a5cbc5a3d3dc) (void(\*cb)(void \*data, const char \*text), void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsGetConsole](#a2873af29ad5c7fb7d1c52623f6c1aa69) (void(\*&cb)(void \*, const char \*), void \*&data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsSetNotify](#a941985c6558b6f4f10bacf7857d5ad6e) (int(\*cb)(void \*data, const char \*to, const char \*notification_id, const char \*json_param, unsigned flags, const char \*from), void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsGetNotify](#a4693926db9182ab2551e72551c7f703e) (int(\*&cb)(void \*data, const char \*to, const char \*notification_id, const char \*json_param, unsigned flags, const char \*from), void \*&data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsSetNotifyAndWait](#ab7a589551714a925a23a39e9c2f86a34) (int(\*cb)(void \*data, const char \*to, const char \*notification_id, const char \*json_param, unsigned flags, const char \*from, const char \*wait_id, std::string &result, int timeout_msec), void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsGetNotifyAndWait](#a4f20de3f3605bf70b48e478b00221a2d) (int(\*&cb)(void \*data, const char \*to, const char \*notification_id, const char \*json_param, unsigned flags, const char \*from, const char \*wait_id, std::string &result, int timeout_msec), void \*&data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsSetTrace](#a671fe746485753d6f9edcc2a4420ef91) (void(\*cb)(void \*data, [JSTraceType](#ad20456843dd92e66711a2f7bf92ba403) type, const std::string &app_id, std::map\< std::string, std::string \> &trace), void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsGetTrace](#acad863333bee2403c9d54b3bd117158c) (void(\*&cb)(void \*data, [JSTraceType](#ad20456843dd92e66711a2f7bf92ba403) type, const std::string &app_id, std::map\< std::string, std::string \> &trace), void \*&data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsSetLog](#aa4e26e9d7af24ac28e26ec47d4ea095c) (void(\*cb)(void \*data, const std::string &app_id, [JSLogLevel](#ab8a0c8e0d128f31e9b6aed5cbcc2a71c) log_level, const std::vector\< std::string \> &msg), void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [jsGetLog](#a34a81ec14c36fc4aa838773ff4b15949) (void(\*&cb)(void \*data, const std::string &app_id, [JSLogLevel](#ab8a0c8e0d128f31e9b6aed5cbcc2a71c) log_level, const std::vector\< std::string \> &msg), void \*&data) |

## EnumerationType Documentation {#enumeration-type-documentation}

## JSLogLevel <a href="#ab8a0c8e0d128f31e9b6aed5cbcc2a71c" id="ab8a0c8e0d128f31e9b6aed5cbcc2a71c"></a>

<p>enum [JSLogLevel](#ab8a0c8e0d128f31e9b6aed5cbcc2a71c)</p>

| Enumerator     |     |
|----------------|-----|
| JSL_EMERGENCY  |     |
| JSL_ALERT      |     |
| JSL_CRITICAL   |     |
| JSL_ERROR      |     |
| JSL_WARNING    |     |
| JSL_NOTICE     |     |
| JSL_INFO       |     |
| JSL_DEBUG      |     |

## JSTraceType <a href="#ad20456843dd92e66711a2f7bf92ba403" id="ad20456843dd92e66711a2f7bf92ba403"></a>

<p>enum [JSTraceType](#ad20456843dd92e66711a2f7bf92ba403)</p>

trace type

| Enumerator |  |
|----|----|
| JST_HTTPGET  | <p>trace of an HTTP GET request, data provided: \"url\"</p> |
| JST_HTTPPOST  | <p>trace of an HTTP POST request, data provided: \"url\"</p> |
| JST_HTTPRESULT  | <p>trace of the HTTP result, data provided: \"status\"<br/></p> |

## FunctionDocumentation {#function-documentation}

## jsGetConsole() <a href="#a2873af29ad5c7fb7d1c52623f6c1aa69" id="a2873af29ad5c7fb7d1c52623f6c1aa69"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsGetConsole</p>

get current setting of callback for console output

**Parameters**

\[out\] **cb** callback function pointer or NULL \[out\] **data** data pointer provided to callback as first parameter

## jsGetHttpProxy() <a href="#aa600eb22cb9b648950a8c9b7336f25a3" id="aa600eb22cb9b648950a8c9b7336f25a3"></a>

<p>const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char\* js::jsGetHttpProxy</p>

Read current proxy setting

### Returns

proxy setting.

## jsGetLog() <a href="#a34a81ec14c36fc4aa838773ff4b15949" id="a34a81ec14c36fc4aa838773ff4b15949"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsGetLog</p>

read logging callback

**Parameters**

\[out\] **cb** callback function pointer or NULL \[out\] **data** data pointer provided to callback as first parameter

## jsGetNotify() <a href="#a4693926db9182ab2551e72551c7f703e" id="a4693926db9182ab2551e72551c7f703e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsGetNotify</p>

get current setting of notification callback

**Parameters**

\[out\] **cb** callback function pointer or NULL \[out\] **data** data pointer provided to callback as first parameter

## jsGetNotifyAndWait() <a href="#a4f20de3f3605bf70b48e478b00221a2d" id="a4f20de3f3605bf70b48e478b00221a2d"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsGetNotifyAndWait</p>

get current setting of notification callback

**Parameters**

\[out\] **cb** callback function pointer or NULL \[out\] **data** data pointer provided to callback as first parameter

## jsGetTrace() <a href="#acad863333bee2403c9d54b3bd117158c" id="acad863333bee2403c9d54b3bd117158c"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsGetTrace</p>

read HTTP trace callback

**Parameters**

\[out\] **cb** callback function pointer or NULL \[out\] **data** data pointer provided to callback as first parameter

## jsProcessor() <a href="#aed4342f3366822c63467b5ac2cf954a6" id="aed4342f3366822c63467b5ac2cf954a6"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> bool js::jsProcessor</p>

Process JavaScript script and return the data sent to stdout and stderr

**Parameters**

\[in\] **data** this parameter is unused, it is just there for compatibility with the ADKGUI scripting interface \[in\] **sourcecode** string containing the Js source code \[in\] **arg** key value map, can be accessed as table \'ARG\' from within the JavaScript script \[out\] **out** data sent to stdout \[out\] **err** data sent to stderr \[out\] **exitcode** parameter that was passed to exit()

### Returns

true if processing was successful, false if not

## jsProcessorExt() <a href="#a079799b1c828f53a96eec5af0c7e591e" id="a079799b1c828f53a96eec5af0c7e591e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> bool js::jsProcessorExt</p>

Process JavaScript script and return the data sent to stdout and stderr. This is the variant with ADKGUI extensions support.

**Parameters**

\[in\] **data** this parameter is unused, it is just there for compatibility with the ADKGUI scripting interface \[in\] **sourcecode** string containing the Js source code \[in\] **arg** key value map, can be accessed as table \'ARG\' from within the JavaScript script \[out\] **out** data sent to stdout \[out\] **err** data sent to stderr \[out\] **exitcode** parameter that was passed to exit() \[in,out\] **context** extended context, if NULL GUI extensions are disabled.

### Returns

true if processing was successful, false if not

## jsProcVersion() <a href="#ad00023748fe562979f1e0d9927fa8b4c" id="ad00023748fe562979f1e0d9927fa8b4c"></a>

<p>const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char\* js::jsProcVersion</p>

### Returns

version information

## jsSetConsole() <a href="#ab0b2ef6cebca767dc473a5cbc5a3d3dc" id="ab0b2ef6cebca767dc473a5cbc5a3d3dc"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsSetConsole</p>

set callback for console output

**Parameters**

\[in\] **cb** callback function pointer or NULL \[in\] **data** data pointer provided to callback as first parameter

The callback takes the following parameters:

**Parameters**

\[in\] **data** data pointer \[in\] **text** string to be sent to console


{% hint style="info" %}
The console callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions.
{% endhint %}

## jsSetHttpProxy() <a href="#a93f7e226d11567703ca1af4ad05c74b8" id="a93f7e226d11567703ca1af4ad05c74b8"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsSetHttpProxy</p>

Set Http-Proxy

**Parameters**

\[in\] **proxy** Proxy setting, e.g. http://localhost:8888 or NULL

## jsSetLog() <a href="#aa4e26e9d7af24ac28e26ec47d4ea095c" id="aa4e26e9d7af24ac28e26ec47d4ea095c"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsSetLog</p>

install logging callback

**Parameters**

\[in\] **cb** callback function pointer or NULL \[in\] **data** data pointer provided to callback as first parameter

The callback takes the following parameters:

**Parameters**

\[in\] **data** data pointer \[in\] **log_level** logging level 0-7 (emergency,alert,critical, \[in\] **app_id** application ID (as found in ARGV\[\"cp_appId\"\]) \[in\] **msg** log message parameters in the order they were provided to log.info()/log.debug(),log.error()


{% hint style="info" %}
The log callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions.
{% endhint %}

## jsSetNotify() <a href="#a941985c6558b6f4f10bacf7857d5ad6e" id="a941985c6558b6f4f10bacf7857d5ad6e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsSetNotify</p>

set callback for sending notifications

**Parameters**

\[in\] **cb** callback function pointer or NULL \[in\] **data** data pointer provided to callback as first parameter

The callback takes the following parameters:

**Parameters**

\[in\] **data** data pointer \[in\] **to** destination address \[in\] **notification_id** notification id \[in\] **json_param** string containing the JSON encoded parameters \[in\] **flags** optional flags \[in\] **from** optional source address, if NULL use default source address

### Returns

0 in case of success or negative error code


{% hint style="info" %}
The notification callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions.
{% endhint %}

## jsSetNotifyAndWait() <a href="#ab7a589551714a925a23a39e9c2f86a34" id="ab7a589551714a925a23a39e9c2f86a34"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsSetNotifyAndWait</p>

set callback for sending notifications

**Parameters**

\[in\] **cb** callback function pointer or NULL \[in\] **data** data pointer provided to callback as first parameter

The callback takes the following parameters:

**Parameters**

\[in\] **data** data pointer \[in\] **to** destination address \[in\] **notification_id** notification id \[in\] **json_param** string containing the JSON encoded parameters \[in\] **flags** optional flags \[in\] **from** optional source address, if NULL use default source address \[in\] **wait_id** wait for notification with this id \[out\] **result** received notification \[in\] **timeout_msec** timeout in milliseconds

### Returns

0 in case of success or negative error code


{% hint style="info" %}
The notification callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions.
{% endhint %}

## jsSetTrace() <a href="#a671fe746485753d6f9edcc2a4420ef91" id="a671fe746485753d6f9edcc2a4420ef91"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void js::jsSetTrace</p>

install HTTP trace callback

**Parameters**

\[in\] **cb** callback function pointer or NULL \[in\] **data** data pointer provided to callback as first parameter

The callback takes the following parameters:

**Parameters**

\[in\] **data** data pointer \[in\] **type** trace type \[in\] **app_id** application ID (as found in ARGV\[\"cp_appId\"\]) \[in\] **trace** key value map containing trace parameters


{% hint style="info" %}
The trace callback is global, only one callback may be set. Setting the callback function is not thread safe, i.e. appropriate actions have to be taken to protect against race conditions.
{% endhint %}

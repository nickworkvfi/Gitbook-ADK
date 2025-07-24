---
hidden: true
title: vfiipc Namespace Referenceinter process communication
---

[Data Structures](#nested-classes) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classvfiipc_1_1_i_p_c.md">IPC</a> |
| class   | <a href="classvfiipc_1_1_j_s_object.md">JSObject</a> |
| class   | <a href="classvfiipc_1_1_pipe.md">Pipe</a> |
| class   | <a href="classvfiipc_1_1_t_c_p.md">TCP</a> |
| class   | <a href="classvfiipc_1_1_t_l_s.md">TLS</a> |

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [ipcCallback](#ad81e4165dd387a02aacdb8a57c4fdd4f)) (void \*data, <a href="classvfiipc_1_1_i_p_c.md">IPC</a> \*ipc) |
| typedef void(\*  | [NotifyCallback](#ab377f9e2a200c707731b1984626d70c9)) (void \*data, const std::string &from, const std::string &to, const std::string &notification_id, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &param, unsigned flags) |
| typedef void(\*  | [NotifyObserver](#a74917bd8d91bec1ff98234834e531071)) (void \*data, const std::string &from, const std::string &to, const std::string &notification_id, unsigned flags) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) {<br/>  [NOTIFY_OK](#a7eda24f6e23d0f36491cc949c16ac4c3ad787ef779aa8d69677c23222002f0bed) =0, [NOTIFY_ERR_SERVER](#a7eda24f6e23d0f36491cc949c16ac4c3a3332b9f23fcc102341e551348f714940) =-1, [NOTIFY_ERR_APP_ID](#a7eda24f6e23d0f36491cc949c16ac4c3a91002612e8cdf73185b9c15f283f4334) =-2, [NOTIFY_ERR_PERMISSION](#a7eda24f6e23d0f36491cc949c16ac4c3acc5931c8ff064376a30c0bf608775174) =-3,<br/>  [NOTIFY_ERR_CONFIG_FILE](#a7eda24f6e23d0f36491cc949c16ac4c3a9d00b7fe7320736555c91922fe04b8d3) =-4, [NOTIFY_ERR_CONFIG_SYNTAX](#a7eda24f6e23d0f36491cc949c16ac4c3a04b9ff1a6a62d1ebbdf6322081a8a963) =-5<br/>} |

|  |  |
|----|----|
| Functions |  |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [ipcSetAppID](#a88455cb389891217791604f188ac0fa5) (const std::string &app_id) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string  | [ipcGetAppID](#a80d9206c7e76f24c2e2176308dbc3e06) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcNotify](#a3ad101cda0c973d26791bd8f194d4b80) (const std::string &to, const std::string &notification_id, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &param, unsigned flags=0, const std::string &from=\"\") |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcRegisterNotificationCB](#a625ae82cd0bc99851ccb8a8ffdcaea1e) (const std::string &notification_id, [NotifyCallback](#ab377f9e2a200c707731b1984626d70c9) cb, void \*data, int priority=0, const std::string &to=\"\") |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcUnregisterNotificationCB](#a3fd5ffbe7bd9aa056c2400bd0a01e142) (const std::string &notification_id, [NotifyCallback](#ab377f9e2a200c707731b1984626d70c9) cb, void \*data=0, const std::string &to=\"\") |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcUnregisterNotificationCB](#a861c0397a3c9754cd574d97e62da4d62) (const std::string &notification_id, const std::string &to=\"\") |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcRegisterUnicastError](#a16b6627aaac4d6edab93696292c8b7a6) ([NotifyCallback](#ab377f9e2a200c707731b1984626d70c9) cb, void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcUnregisterUnicastError](#a1bcfa904cfacfc8687ddca2204b2f778) ([NotifyCallback](#ab377f9e2a200c707731b1984626d70c9) cb, void \*data) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcUnregisterUnicastError](#a0c523049653bf25c7dfae093f75704c8) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcRegisterObserver](#a5cb6705e4d5e2d94225eac66c760e872) ([NotifyObserver](#a74917bd8d91bec1ff98234834e531071) cb, void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcUnregisterObserver](#ab259b3fce42df166ecc267066af9b105) ([NotifyObserver](#a74917bd8d91bec1ff98234834e531071) cb, void \*data) |
| <a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcUnregisterObserver](#a6c2855f19aa443ef85c42b02d296268b) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcNotificationServer](#a1862bc6c0fe6d07d60c677292cbc9619) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)  | [ipcNotificationServer](#a7b8f16e995dfe57edad4cd97676a2eae) (const char \*config_file) |

## DetailedDescription {#detailed-description}

<a href="classvfiipc_1_1_i_p_c.md">IPC</a> namespace

## TypedefDocumentation {#typedef-documentation}

## ipcCallback <a href="#ad81e4165dd387a02aacdb8a57c4fdd4f" id="ad81e4165dd387a02aacdb8a57c4fdd4f"></a>

<p>typedef void(\* ipcCallback) (void \*data, <a href="classvfiipc_1_1_i_p_c.md">IPC</a> \*ipc)</p>

## NotifyCallback <a href="#ab377f9e2a200c707731b1984626d70c9" id="ab377f9e2a200c707731b1984626d70c9"></a>

<p>typedef void(\* NotifyCallback) (void \*data, const std::string &from, const std::string &to, const std::string &notification_id, const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &param, unsigned flags)</p>

Notify callback. The callback gets invoked when a matching notification has been sent.

**Parameters**

\[in\] **data** opaque data pointer that was passed by the application when registering the callback. \[in\] **from** source application ID \[in\] **to** destination application ID that was used to send the notification. This may be used to distinguish the different cases send to application, send to single, send to all. \[in\] **notification_id** notification ID \[in\] **param** parameters to send along the notification \[in\] **flags** optional flags for future extensions


{% hint style="info" %}
All notification and error callbacks are run in separate threads. These are started on demand and terminate when the callback terminates.
{% endhint %}

## NotifyObserver <a href="#a74917bd8d91bec1ff98234834e531071" id="a74917bd8d91bec1ff98234834e531071"></a>

<p>typedef void(\* NotifyObserver) (void \*data, const std::string &from, const std::string &to, const std::string &notification_id, unsigned flags)</p>

Observer callback, will be called for all delivered notifications. If no receiver has been found the callback is called with an empty *to* parameter.

**Parameters**

\[in\] **data** opaque data pointer that was passed by the application when registering the callback. \[in\] **from** source application ID \[in\] **to** resolved destination application ID \[in\] **notification_id** notification ID \[in\] **flags** optional flags for future extensions


{% hint style="info" %}
All observer callbacks are run in separate threads. These are started on demand and terminate when the callback terminates.
{% endhint %}

## EnumerationType Documentation {#enumeration-type-documentation}

## NotifyResult <a href="#a7eda24f6e23d0f36491cc949c16ac4c3" id="a7eda24f6e23d0f36491cc949c16ac4c3"></a>

<p>enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3)</p>

Notify result code

| Enumerator |  |
|----|----|
| NOTIFY_OK  | <p>No error.</p> |
| NOTIFY_ERR_SERVER  | <p>notification server is not running</p> |
| NOTIFY_ERR_APP_ID  | <p>the application ID has not been set yet, use ipcSetAppID to set it</p> |
| NOTIFY_ERR_PERMISSION  | <p>No permission to create the notification pipe</p> |
| NOTIFY_ERR_CONFIG_FILE  | <p>The configuration file could not be opened for reading</p> |
| NOTIFY_ERR_CONFIG_SYNTAX  | <p>The configuration file contained invalid input</p> |

## FunctionDocumentation {#function-documentation}

## ipcGetAppID() <a href="#a80d9206c7e76f24c2e2176308dbc3e06" id="a80d9206c7e76f24c2e2176308dbc3e06"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string vfiipc::ipcGetAppID</p>

read application ID that has been set using ipcSetAppID

### Returns

application ID

## ipcNotificationServer()\[1/2\] <a href="#a1862bc6c0fe6d07d60c677292cbc9619" id="a1862bc6c0fe6d07d60c677292cbc9619"></a> {#ipcnotificationserver-12}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcNotificationServer</p>

start the notification server. Only one notification server may exist in the system. Normally it is started from the multi application controller.

### Returns

error code


{% hint style="info" %}
This function only returns in case of error.
{% endhint %}

## ipcNotificationServer()\[2/2\] <a href="#a7b8f16e995dfe57edad4cd97676a2eae" id="a7b8f16e995dfe57edad4cd97676a2eae"></a> {#ipcnotificationserver-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcNotificationServer</p>

start the notification server. Only one notification server may exist in the system. Normally it is started from the multi application controller. The config_file names a configuration file that contains a whitelist of notifications that may be received from external IP addresses and that may be sent to external ones.

**Parameters**

\[in\] **config_file** name of the configuration file. May be NULL in which case it is identical to ipcNotificationServer().

### Returns

error code


{% hint style="info" %}
This function only returns in case of error.
{% endhint %}
{% hint style="info" %}
If there is a configuration, then the notification server binds to IPADDR_ANY so that notifications from external IP addresses may be accepted depending on the configuration. If config_file is NULL or the configuration is empty, then the notification server binds to localhost so that only connects from localhost are supported.
{% endhint %}
{% hint style="info" %}
On Verix connecting from external IP addresses is not supported, *config_file* is ignored.
{% endhint %}

## ipcNotify() <a href="#a3ad101cda0c973d26791bd8f194d4b80" id="a3ad101cda0c973d26791bd8f194d4b80"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcNotify</p>

Send notification

**Parameters**

\[in\] **to** destination application ID or \'1\' to send notifications to exactly one receiver or \'\*\' to broadcast to all registered receivers \[in\] **notification_id** notification ID \[in\] **param** parameters to send along the notification \[in\] **flags** optional flags for future extensions \[in\] **from** optional source application ID. If empty the application ID set by ipcSetAppID is used. This parameter is only required if a process needs to impersonate as another application, e.g. the multi app controller may use it to send notifications on behalf of CP apps

### Returns

error code

### Examples

<a href="mac_demo2_8cpp-example.md#a12">mac_demo2.cpp</a>, and <a href="pm-demo_8cpp-example.md#a58">pm-demo.cpp</a>.

## ipcRegisterNotificationCB() <a href="#a625ae82cd0bc99851ccb8a8ffdcaea1e" id="a625ae82cd0bc99851ccb8a8ffdcaea1e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcRegisterNotificationCB</p>

Register notification callback. New registrations will overwrite old ones for the same notification ID and destination app ID.

**Parameters**

\[in\] **notification_id** notification ID \[in\] **cb** notification callback to be invoked. If NULL the registration will be discarded \[in\] **data** opaque data pointer passed on to the callback \[in\] **priority** priority of the callback. If several matching callbacks are found and the notification is not sent as a broadcast, then only the callback with the highest priority (highest value) will be called. \[in\] **to** optional destination application ID. If empty then the application ID set by ipcSetAppID is used. This parameter is only required if a process needs to impersonate as another application, e.g. the multi app controller may use it to receive notifications on behalf of CP apps

### Returns

error code

### Examples

<a href="mac_demo1_8cpp-example.md#a15">mac_demo1.cpp</a>, <a href="mac_demo2_8cpp-example.md#a9">mac_demo2.cpp</a>, and <a href="mac_demo3_8cpp-example.md#a5">mac_demo3.cpp</a>.

## ipcRegisterObserver() <a href="#a5cb6705e4d5e2d94225eac66c760e872" id="a5cb6705e4d5e2d94225eac66c760e872"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcRegisterObserver</p>

register notification observer callback. The callback will be invoked for each notification delivered.

**Parameters**

\[in\] **cb** notification callback to be invoked. \[in\] **data** opaque data pointer passed on to the callback

### Returns

error code

## ipcRegisterUnicastError() <a href="#a16b6627aaac4d6edab93696292c8b7a6" id="a16b6627aaac4d6edab93696292c8b7a6"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcRegisterUnicastError</p>

Register error callback. The error callback is invoked if the notification server cannot deliver a unicast notification to any receiver. Broadcast notifications are not considered.

**Parameters**

\[in\] **cb** notification callback to be invoked. \[in\] **data** opaque data pointer passed on to the callback

### Returns

error code


{% hint style="info" %}
In case a receiver process terminates there is some risk that the failure to deliver a notification will go unnoticed: If the process terminates after receiving a notification but before sending an error, this error cannot be detected.
{% endhint %}

## ipcSetAppID() <a href="#a88455cb389891217791604f188ac0fa5" id="a88455cb389891217791604f188ac0fa5"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void vfiipc::ipcSetAppID</p>

application ID that will be used as source address when sending notifications

**Parameters**

\[in\] **app_id** application ID, the app ID should match the application ID used in the manifest.

### Examples

<a href="mac_demo1_8cpp-example.md#a6">mac_demo1.cpp</a>, <a href="mac_demo2_8cpp-example.md#a6">mac_demo2.cpp</a>, <a href="mac_demo3_8cpp-example.md#a4">mac_demo3.cpp</a>, and <a href="pm-demo_8cpp-example.md#a10">pm-demo.cpp</a>.

## ipcUnregisterNotificationCB()\[1/2\] <a href="#a861c0397a3c9754cd574d97e62da4d62" id="a861c0397a3c9754cd574d97e62da4d62"></a> {#ipcunregisternotificationcb-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcUnregisterNotificationCB</p>

inline

unregister a notification callback, shortcut for ipcRegisterNotificationCB(notification_id,0,0,0,to);

**Parameters**

\[in\] **notification_id** notification ID \[in\] **to** optional destination application ID. If null then the application ID set by ipcSetAppID is used. This parameter is only required if a process needs to impersonate as another application, e.g. the multi app controller may use it to receive notifications on behalf of CP apps

### Returns

error code


{% hint style="info" %}
ipcUnregisterNotificationCB cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it.
{% endhint %}

## ipcUnregisterNotificationCB()\[2/2\] <a href="#a3fd5ffbe7bd9aa056c2400bd0a01e142" id="a3fd5ffbe7bd9aa056c2400bd0a01e142"></a> {#ipcunregisternotificationcb-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcUnregisterNotificationCB</p>

unregister a notification callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer.

**Parameters**

\[in\] **notification_id** notification ID, must match the value passed to ipcRegisterNotificationCB \[in\] **cb** notification callback used during registration. If NULL all callbacks registered for the notification ID are discarded. Use with care to not unintentionally discard registrations of other threads or libraries. \[in\] **data** opaque data pointer used during registration. If NULL only cb is checked for finding the matching callback function. \[in\] **to** optional destination application ID. If empty then the application ID set by ipcSetAppID is used, must match the value passed to ipcRegisterNotificationCB.

### Returns

error code


{% hint style="info" %}
ipcUnregisterNotificationCB cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it.
{% endhint %}

## ipcUnregisterObserver()\[1/2\] <a href="#a6c2855f19aa443ef85c42b02d296268b" id="a6c2855f19aa443ef85c42b02d296268b"></a> {#ipcunregisterobserver-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcUnregisterObserver</p>

inline

unregister notification observer callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer.

### Returns

error code


{% hint style="info" %}
ipcUnregisterObserver cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it.
{% endhint %}

## ipcUnregisterObserver()\[2/2\] <a href="#ab259b3fce42df166ecc267066af9b105" id="ab259b3fce42df166ecc267066af9b105"></a> {#ipcunregisterobserver-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcUnregisterObserver</p>

unregister notification observer callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer.

**Parameters**

\[in\] **cb** notification callback used during registration. If NULL all registrations will be discarded \[in\] **data** opaque data pointer passed used during registration. If NULL only cb is checked for finding the matching callback function.

### Returns

error code


{% hint style="info" %}
ipcUnregisterObserver cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it.
{% endhint %}

## ipcUnregisterUnicastError()\[1/2\] <a href="#a0c523049653bf25c7dfae093f75704c8" id="a0c523049653bf25c7dfae093f75704c8"></a> {#ipcunregisterunicasterror-12}

<p><a href="libseccmd-comp_8h.md#ac1e8a42306d8e67cb94ca31c3956ee78">DEPRECATED</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcUnregisterUnicastError</p>

inline

unregister an error callback, shortcut for ipcRegisterUnicastError(0,0);

### Returns

error code


{% hint style="info" %}
ipcUnregisterUnicastError cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it.
{% endhint %}

## ipcUnregisterUnicastError()\[2/2\] <a href="#a1bcfa904cfacfc8687ddca2204b2f778" id="a1bcfa904cfacfc8687ddca2204b2f778"></a> {#ipcunregisterunicasterror-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NotifyResult](#a7eda24f6e23d0f36491cc949c16ac4c3) vfiipc::ipcUnregisterUnicastError</p>

Unregister error callback. When the function returns, it is guaranteed, that the callback has terminated and will not be invoked any longer.

**Parameters**

\[in\] **cb** notification callback used during registration. If NULL all callbacks registered for the notification ID are discarded. Use with care to not unintentionally discard registrations of other threads or libraries. \[in\] **data** opaque data pointer used during registration. If NULL only cb is checked for finding the matching callback function.

### Returns

error code


{% hint style="info" %}
In case a receiver process terminates there is some risk that the failure to deliver a notification will go unnoticed: If the process terminates after receiving a notification but before sending an error, this error cannot be detected.
{% endhint %}
{% hint style="info" %}
ipcUnregisterUnicastError cannot be used within a callback to remove the callback itself: A deadlock occurs since it waits for the callback to terminate before removing it.
{% endhint %}

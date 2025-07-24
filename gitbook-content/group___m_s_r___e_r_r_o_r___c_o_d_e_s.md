---
hidden: true
title: Error codes
---

[Macros](#define-members)

These error codes are returned by the various libmsr functions. [More\...](#details)

|          |                                                           |
|----------|-----------------------------------------------------------|
| Macros   |                                                           |
| #define  | [MSR_OK](#ga56ff5f02000b1dcc767ffeea8f6478a7)   0         |
| #define  | [MSR_ERROR](#ga2754c1ade01b6307220538b6bb3f885a)   -1     |
| #define  | [MSR_TIMEOUT](#ga7748ace924420e05ea909b2944de3ba5)   -2   |
| #define  | [MSR_ABORTED](#ga82fd0492568ada8925a66121a6f03935)   -3   |
| #define  | [MSR_ACTIVE](#ga1c81c696181e8a6201fd677a7b65252a)   -4    |
| #define  | [MSR_PARAM](#gade0e4ea4922a01a559e73f5c3d0e4f03)   -5     |
| #define  | [MSR_PROCESS](#ga2af4877ec63b78f5c2a85d77813bc056)   -6   |
| #define  | [MSR_NO_DEVICE](#gac5b787f430958b4aa763512e00a8a2d0)   -7 |

## DetailedDescription {#detailed-description}

These error codes are returned by the various libmsr functions.

## MacroDefinition Documentation {#macro-definition-documentation}

## MSR_ABORTED <a href="#ga82fd0492568ada8925a66121a6f03935" id="ga82fd0492568ada8925a66121a6f03935"></a>

<p>#define MSR_ABORTED   -3</p>

Aborted by user (returned by <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a>).

## MSR_ACTIVE <a href="#ga1c81c696181e8a6201fd677a7b65252a" id="ga1c81c696181e8a6201fd677a7b65252a"></a>

<p>#define MSR_ACTIVE   -4</p>

Already activated (returned by <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a>).

## MSR_ERROR <a href="#ga2754c1ade01b6307220538b6bb3f885a" id="ga2754c1ade01b6307220538b6bb3f885a"></a>

<p>#define MSR_ERROR   -1</p>

Device error, magnetic card reader not activated, or internal error.

## MSR_NO_DEVICE <a href="#gac5b787f430958b4aa763512e00a8a2d0" id="gac5b787f430958b4aa763512e00a8a2d0"></a>

<p>#define MSR_NO_DEVICE   -7</p>

No MSR hardware available (returned by <a href="msr_8h.md#a1e92fd29720fecbf50da24a30c7b512f">MSR_Activate()</a>)

## MSR_OK <a href="#ga56ff5f02000b1dcc767ffeea8f6478a7" id="ga56ff5f02000b1dcc767ffeea8f6478a7"></a>

<p>#define MSR_OK   0</p>

No error, function executed successfully.

## MSR_PARAM <a href="#gade0e4ea4922a01a559e73f5c3d0e4f03" id="gade0e4ea4922a01a559e73f5c3d0e4f03"></a>

<p>#define MSR_PARAM   -5</p>

Parameter error (returned by <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a>, <a href="msr_8h.md#ac3c6f568aa57690a8b369936fc362c2a">MSR_SetOptions()</a> and <a href="msr_8h.md#abca7e8953c8430d80f51c867c7699fa6">MSR_SwitchLeds()</a>).

## MSR_PROCESS <a href="#ga2af4877ec63b78f5c2a85d77813bc056" id="ga2af4877ec63b78f5c2a85d77813bc056"></a>

<p>#define MSR_PROCESS   -6</p>

Process error (returned by <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a> and <a href="msr_8h.md#a8096fa193f035eb4b80673260d720477">MSR_DataAvailable()</a>).

## MSR_TIMEOUT <a href="#ga7748ace924420e05ea909b2944de3ba5" id="ga7748ace924420e05ea909b2944de3ba5"></a>

<p>#define MSR_TIMEOUT   -2</p>

Timeout occurred (returned by <a href="msr_8h.md#ad00fdde838f486d43be689650ab58d43">MSR_GetData()</a>).

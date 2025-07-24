---
hidden: true
title: input_plugin.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

<a href="input__plugin_8h_source.md">Go to the source code of this file.</a>

|          |                                               |
|----------|-----------------------------------------------|
| Macros   |                                               |
| #define  | [DllSpec](#ad7c2e1cb200073ed64c64285a5f37231) |

|  |  |
|----|----|
| Functions |  |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void \*  | [input_start](#a8036e2b4b69426df4c7ed0ef02618671) (const char \*parameter, char \*\*log_msg) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char \*  | [input_poll](#a7cce0f5ade7700f0ab3ed38bd911e36d) (void \*handle) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [input_end](#a9fb84f242dcf5f00bfde9e01f7da1849) (void \*handle) |

## DetailedDescription {#detailed-description}

Interface for input plugin modules

## MacroDefinition Documentation {#macro-definition-documentation}

## DllSpec <a href="#ad7c2e1cb200073ed64c64285a5f37231" id="ad7c2e1cb200073ed64c64285a5f37231"></a>

<p>#define DllSpec</p>

## FunctionDocumentation {#function-documentation}

## input_end() <a href="#a9fb84f242dcf5f00bfde9e01f7da1849" id="a9fb84f242dcf5f00bfde9e01f7da1849"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void input_end</p>

stop input and release all internal resources

**Parameters**

\[in\] **handle** handle as returned by input_start(). After input_end() returns the handle is no longer valid.

## input_poll() <a href="#a7cce0f5ade7700f0ab3ed38bd911e36d" id="a7cce0f5ade7700f0ab3ed38bd911e36d"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char\* input_poll</p>

poll for input. If input is ready it is returned as string.

**Parameters**

\[in\] **handle** handle as returned by input_start()

### Returns

Input string or NULL if there is no input. The returned input string will be released using free().


{% hint style="info" %}
The format of the returned string is plugin-specific.
{% endhint %}

## input_start() <a href="#a8036e2b4b69426df4c7ed0ef02618671" id="a8036e2b4b69426df4c7ed0ef02618671"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void\* input_start</p>

start the input

**Parameters**

\[in\] **parameter** string containing the parameters for the input plugin \[out\] **log_msg** pointer to log message. If not NULL ADKGUI will log the message at error level and release the returned string using free().

### Returns

handle handle that will be passed to input_poll and input_end or NULL in case of error

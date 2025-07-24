---
hidden: true
title: Timer Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="sdi__timer_8h_source.md">sdi_timer.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Timer](#a6a8bc5014802d569f6d01c4f36121a81) () |
| bool  | [isTimedOut](#a65d221db327e04216437a41d77dfc7b6) () |
| long  | [getRemainingTimeInMs](#a38d4659025d743beb394f95c2fdc96d2) () |
| void  | [disable](#a8cfbbe53c1cf6e3054736daea3044c0f) () |
| bool  | [isEnabled](#a56722b6f1c22da04885bc9853148bb71) () |
| void  | [set](#a639ad993472d4463039cb81156013d3a) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &tout) |
| void  | [set](#a28ea74295a47dd29af35d2382f168d41) (unsigned tout_ms) |

## Constructor& Destructor Documentation

## Timer() <a href="#a6a8bc5014802d569f6d01c4f36121a81" id="a6a8bc5014802d569f6d01c4f36121a81"></a>

<p><a href="classsdi_1_1_timer.md">Timer</a></p>

inline

constructor

## MemberFunction Documentation {#member-function-documentation}

## disable() <a href="#a8cfbbe53c1cf6e3054736daea3044c0f" id="a8cfbbe53c1cf6e3054736daea3044c0f"></a>

<p>void disable</p>

inline

disable this timer

## getRemainingTimeInMs() <a href="#a38d4659025d743beb394f95c2fdc96d2" id="a38d4659025d743beb394f95c2fdc96d2"></a>

<p>long getRemainingTimeInMs</p>

get remaining time in milliseconds

### Returns

remaining time in milliseconds

## isEnabled() <a href="#a56722b6f1c22da04885bc9853148bb71" id="a56722b6f1c22da04885bc9853148bb71"></a>

<p>bool isEnabled</p>

inline

check, if this timer was enabled by [set()](#a639ad993472d4463039cb81156013d3a)

### Returns

true if this timer was enabled else false

## isTimedOut() <a href="#a65d221db327e04216437a41d77dfc7b6" id="a65d221db327e04216437a41d77dfc7b6"></a>

<p>bool isTimedOut</p>

check, if this timer has expired

### Returns

true for timeout else false

## set()\[1/2\] <a href="#a639ad993472d4463039cb81156013d3a" id="a639ad993472d4463039cb81156013d3a"></a> {#set-12}

<p>void set</p>

enables and sets the timeout as <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> object from now

**Parameters**

\[in\] **tout** timeout specified as TimeStamp object

## set()\[2/2\] <a href="#a28ea74295a47dd29af35d2382f168d41" id="a28ea74295a47dd29af35d2382f168d41"></a> {#set-22}

<p>void set</p>

enables and sets the timeout in milliseconds from now

**Parameters**

\[in\] **tout_ms** timeout specified in milliseconds

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="sdi__timer_8h_source.md">sdi_timer.h</a>
- sdi/src/<a href="sdi__timer_8cpp.md">sdi_timer.cpp</a>

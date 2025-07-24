---
hidden: true
title: util.cpp File Reference
---

[Functions](#func-members)

`#include <stdio.h>`
`#include <stdlib.h>`
`#include <string.h>`
`#include <regex.h>`
`#include <`<a href="sdi_2src_2hexutil_8h_source.md">hexutil.h</a>`>`
`#include "`<a href="sdi_2src_2util_8h_source.md">util.h</a>`"`
`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include "`<a href="sys_8h_source.md">sys.h</a>`"`
`#include "config/sdi_sysconfig.h"`

Include dependency graph for util.cpp:

![](util_8cpp__incl.png)

|  |  |
|----|----|
| Functions |  |
| bool  | [getForceCurrAbbr](#ad052d8032bf71a0869d0eccdf4a7c6c5) (unsigned short currency) |
| const char \*  | [getCurrencyName](#af8e537859d3bd237614e1f416351cdbe) (unsigned short currency) |
| short  | [getCurrencyExponent](#a747e0b130dd6c037d12411a173843e0d) (unsigned short currency) |
| int  | [verifyDate](#ab29fd00cd12931bf70c259be8569ed35) (const char \*date, const char \*format) |
| int  | [bcdValid](#a5d38a0b4222458e86fffe40d3101ff4a) (const unsigned char \*a, unsigned size) |
| string  | [bcdToAmountStr](#a41542e6c6f279dab1d218a7f1f66e9b3) (const unsigned char \*bcd, unsigned size, unsigned pos, const string dsep, const string tsep) |
| bool  | [matchRegex](#a38e7c6dca4df24149a7c53b66d62a6ab) (const char \*str, const char \*\_regex) |
| string  | [escapeRegex](#a4c8a23387bc04abfd2451af2f2771bf5) (const string &str) |

## FunctionDocumentation {#function-documentation}

## bcdToAmountStr() <a href="#a41542e6c6f279dab1d218a7f1f66e9b3" id="a41542e6c6f279dab1d218a7f1f66e9b3"></a>

<p>string bcdToAmountStr</p>

## bcdValid() <a href="#a5d38a0b4222458e86fffe40d3101ff4a" id="a5d38a0b4222458e86fffe40d3101ff4a"></a>

<p>int bcdValid</p>

check if data is a valid BCD number

**Parameters**

\[in\] **a** pointer to data \[in\] **size** size of the buffer data points to

### Returns

1 if it is a valid BCD number, 0 else

## escapeRegex() <a href="#a4c8a23387bc04abfd2451af2f2771bf5" id="a4c8a23387bc04abfd2451af2f2771bf5"></a>

<p>string escapeRegex</p>

## getCurrencyExponent() <a href="#a747e0b130dd6c037d12411a173843e0d" id="a747e0b130dd6c037d12411a173843e0d"></a>

<p>short getCurrencyExponent</p>

returns the currency exponent for the corresponding currency code. If the currency code is unknown or not supported, -1 returned.

**Parameters**

\[in\] **currency** currency code

### Returns

currency exponent or -1, if code is unknown

## getCurrencyName() <a href="#af8e537859d3bd237614e1f416351cdbe" id="af8e537859d3bd237614e1f416351cdbe"></a>

<p>const char\* getCurrencyName</p>

returns the currency name for the corresponding currency code. If the currency code is unknown or not supported, an empty string is returned.

**Parameters**

\[in\] **currency** currency code

### Returns

currency name as C-string or an empty string, if code is unknown

## getForceCurrAbbr() <a href="#ad052d8032bf71a0869d0eccdf4a7c6c5" id="ad052d8032bf71a0869d0eccdf4a7c6c5"></a>

<p>bool getForceCurrAbbr</p>

## matchRegex() <a href="#a38e7c6dca4df24149a7c53b66d62a6ab" id="a38e7c6dca4df24149a7c53b66d62a6ab"></a>

<p>bool matchRegex</p>

## verifyDate() <a href="#ab29fd00cd12931bf70c259be8569ed35" id="ab29fd00cd12931bf70c259be8569ed35"></a>

<p>int verifyDate</p>

Verify date

**Parameters**

\[in\] **date** Pointer to date buffer \[in\] **format** Pointer to format buffer

### Returns

1 if date is valid, else 0


{% hint style="info" %}
Two-digit year values are interpreted as 2000\...2099 Four-digit year values must be at least 1776 (the date of the global introduction of the Gregorian calendar)
{% endhint %}

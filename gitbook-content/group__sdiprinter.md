---
hidden: true
title: Printer interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [printSetPropertyString](#ga07602dcd5d2f313db6a92c97cf8081a5) (int property, const std::string &in) |
| int  | [printSetPropertyInt](#ga725f0fdf4822cac026c00aac86d49ce1) (int property, int in) |
| int  | [printGetPropertyString](#gab608770d63d6067562dcaa6c823c0015) (int property, std::string &out) |
| int  | [printGetPropertyInt](#ga92d545bf0f6984fe616d3b14f2ad5c82) (int property, int &out) |
| int  | [printHTML](#gaa8aec9712a3bd4364fe03f3dff2afa67) (const std::string &html, bool landscape=false) |
| int  | [printBitmap](#gaacfff92e849c75e30ca3598694998a9b) (int width, int height, const void \*bitmap, unsigned size) |
| int  | [printBitmap](#ga434d14185df2e148a6e5a1bc3b809471) (int width, int height, const <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &bitmap) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## printBitmap()\[1/2\] <a href="#ga434d14185df2e148a6e5a1bc3b809471" id="ga434d14185df2e148a6e5a1bc3b809471"></a> {#printbitmap-12}

<p>int printBitmap</p>

inline

print bitmap

**Parameters**

\[in\] **width** width of bitmap \[in\] **height** height of bitmap \[in\] **bitmap** bitmap data, set bits represent black pixels, ordering left to right is MSB to LSB.

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## printBitmap()\[2/2\] <a href="#gaacfff92e849c75e30ca3598694998a9b" id="gaacfff92e849c75e30ca3598694998a9b"></a> {#printbitmap-22}

<p>int printBitmap</p>

print bitmap

**Parameters**

\[in\] **width** width of bitmap \[in\] **height** height of bitmap \[in\] **bitmap** bitmap data, set bits represent black pixels, ordering left to right is MSB to LSB. \[in\] **size** size of bitmap in bytes

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## printGetPropertyInt() <a href="#ga92d545bf0f6984fe616d3b14f2ad5c82" id="ga92d545bf0f6984fe616d3b14f2ad5c82"></a>

<p>int printGetPropertyInt</p>

read int property (25-01)

**Parameters**

\[in\] **property** property ID (PrtPropertyInt) \[out\] **out** read property

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## printGetPropertyString() <a href="#gab608770d63d6067562dcaa6c823c0015" id="gab608770d63d6067562dcaa6c823c0015"></a>

<p>int printGetPropertyString</p>

read string property (25-01)

**Parameters**

\[in\] **property** property ID (PrtPropertyString) \[out\] **out** read property

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## printHTML() <a href="#gaa8aec9712a3bd4364fe03f3dff2afa67" id="gaa8aec9712a3bd4364fe03f3dff2afa67"></a>

<p>int printHTML</p>

print HTML document

**Parameters**

\[in\] **html** HTML document \[in\] **landscape** if true print in landscape

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## printSetPropertyInt() <a href="#ga725f0fdf4822cac026c00aac86d49ce1" id="ga725f0fdf4822cac026c00aac86d49ce1"></a>

<p>int printSetPropertyInt</p>

set int property (25-00)

**Parameters**

\[in\] **property** property ID (PrtPropertyInt) \[in\] **in** new property value

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## printSetPropertyString() <a href="#ga07602dcd5d2f313db6a92c97cf8081a5" id="ga07602dcd5d2f313db6a92c97cf8081a5"></a>

<p>int printSetPropertyString</p>

set string property (25-00)

**Parameters**

\[in\] **property** property ID (PrtPropertyString) \[in\] **in** new property value

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

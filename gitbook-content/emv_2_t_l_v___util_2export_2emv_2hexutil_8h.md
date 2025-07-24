---
hidden: true
title: hexutil.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

<a href="emv_2_t_l_v___util_2export_2emv_2hexutil_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [TLVUTIL_4BYTE_TO_UINT32](#a6232dee3449a329883dfd801c98f184d)(bytes)   (((unsigned) (bytes)\[0\] \<\< 24) \| ((unsigned) (bytes)\[1\] \<\< 16) \| ((unsigned) (bytes)\[2\] \<\< 8) \| (unsigned) (bytes)\[3\]) |
| #define  | [TLV_UTIL_INTERFACE](#ae809ada9194252356dbaa46410dfbb39) |

|  |  |
|----|----|
| Functions |  |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int  | [hextobin](#a0370d21865254f90a9cdfe7274f582b9) (unsigned char \*dst, const unsigned char \*src, int srclen) \_\_attribute((deprecated)) |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int  | [TLVUTIL_hextobin](#aef9298881776d9e69374c83acbb821c5) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int  | [TLVUTIL_hexstringtobin](#a6eceabdf898b4d43f7adc546ba808632) (unsigned char \*dst, int dstLength, const unsigned char \*src) |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> void  | [bintohex](#a33ca8c8a481ac6d94909f8f6c31b9d89) (unsigned char \*dst, const unsigned char \*src, int srclen) \_\_attribute((deprecated)) |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> void  | [TLVUTIL_bintohexstring](#aee1c2f576c4e65756d329874940483c5) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> void  | [TLVUTIL_bintohex](#ad787f8b764f6fbc795949f80bf967a23) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| <a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int  | [TLVUTIL_utf8](#a674c09ee2927fde98a61bd0c24e00ebc) (char \*dst, unsigned dstLen, const unsigned char \*src, unsigned srcLenMax, unsigned char codeTableIndex) |

## DetailedDescription {#detailed-description}

Conversion functions Hexdump \<-\> Binary

### Author

: M. Meixner

### Date

Created: 09.09.2005

## MacroDefinition Documentation {#macro-definition-documentation}

## TLV_UTIL_INTERFACE <a href="#ae809ada9194252356dbaa46410dfbb39" id="ae809ada9194252356dbaa46410dfbb39"></a>

<p>#define TLV_UTIL_INTERFACE</p>

## TLVUTIL_4BYTE_TO_UINT32 <a href="#a6232dee3449a329883dfd801c98f184d" id="a6232dee3449a329883dfd801c98f184d"></a>

<p>#define TLVUTIL_4BYTE_TO_UINT32</p>

convert a byte buffer to unsigned long

**Parameters**

\[in\] **bytes** buffer of 4 bytes length in network byte order (const unsigned char\[4\])

### Returns

converted integer of type \"unsigned\" for assigning to \"unsigned long\" on 32 bit and 64 bit architecture

## FunctionDocumentation {#function-documentation}

## bintohex() <a href="#a33ca8c8a481ac6d94909f8f6c31b9d89" id="a33ca8c8a481ac6d94909f8f6c31b9d89"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> void bintohex</p>

convert a binary buffer to ASCII-HEX representation (0-9,A-F)

**Parameters**

\[out\] **dst** destination buffer of size 2\*srclen+1 \[in\] **src** source buffer \[in\] **srclen** length of source data


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

**<a href="deprecated.md#_deprecated000163">Deprecated:</a>** Use prefixed version TLVUTIL_bintohexstring instead

convert a binary buffer to ASCII-HEX representation (0-9,A-F) Please note: A string termination is not appended.

**Parameters**

\[out\] **dst** destination buffer of size 2\*srclen \[in\] **src** source buffer \[in\] **srclen** length of source data


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

## hextobin() <a href="#a0370d21865254f90a9cdfe7274f582b9" id="a0370d21865254f90a9cdfe7274f582b9"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int hextobin</p>

convert an ASCII-HEX buffer to binary

**Parameters**

\[out\] **dst** destination buffer of size srclen/2 \[in\] **src** source buffer \[in\] **srclen** length of source data, must be even!

### Returns

1 if successful, 0 if the input contained invalid characters


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

**<a href="deprecated.md#_deprecated000162">Deprecated:</a>** Use prefixed version TLVUTIL_hextobin or TLVUTIL_hexstringtobin instead

convert an ASCII-HEX buffer to binary

**Parameters**

\[out\] **dst** destination buffer of size srclen/2 \[in\] **src** source buffer \[in\] **srclen** length of source data, must be even!

### Returns

1 if successful, 0 if the input contained invalid characters or parameter error


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

## TLVUTIL_bintohex() <a href="#ad787f8b764f6fbc795949f80bf967a23" id="ad787f8b764f6fbc795949f80bf967a23"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> void TLVUTIL_bintohex</p>

convert a binary buffer to ASCII-HEX representation (0-9,A-F) Please note: A string termination is not appended.

**Parameters**

\[out\] **dst** destination buffer of size 2\*srclen \[in\] **src** source buffer \[in\] **srclen** length of source data


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

## TLVUTIL_bintohexstring() <a href="#aee1c2f576c4e65756d329874940483c5" id="aee1c2f576c4e65756d329874940483c5"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> void TLVUTIL_bintohexstring</p>

convert a binary buffer to ASCII-HEX representation (0-9,A-F)

**Parameters**

\[out\] **dst** destination buffer of size 2\*srclen+1 \[in\] **src** source buffer \[in\] **srclen** length of source data


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

## TLVUTIL_hexstringtobin() <a href="#a6eceabdf898b4d43f7adc546ba808632" id="a6eceabdf898b4d43f7adc546ba808632"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int TLVUTIL_hexstringtobin</p>

convert an ASCII-HEX buffer to binary

**Parameters**

\[out\] **dst** destination buffer \[in\] **dstLength** desitination buffer length \[in\] **src** source buffer with terminated string containing HEX ASCII (blanks between bytes ignored)

### Returns

length of binary data up to dstLength


{% hint style="info" %}
src and dest may be identical
{% endhint %}

## TLVUTIL_hextobin() <a href="#aef9298881776d9e69374c83acbb821c5" id="aef9298881776d9e69374c83acbb821c5"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int TLVUTIL_hextobin</p>

convert an ASCII-HEX buffer to binary

**Parameters**

\[out\] **dst** destination buffer of size srclen/2 \[in\] **src** source buffer \[in\] **srclen** length of source data, must be even!

### Returns

1 if successful, 0 if the input contained invalid characters


{% hint style="info" %}
src and dest may be identical
{% endhint %}

### Author

M. Meixner

### Date

9.9.2005

## TLVUTIL_utf8() <a href="#a674c09ee2927fde98a61bd0c24e00ebc" id="a674c09ee2927fde98a61bd0c24e00ebc"></a>

<p><a href="mem__pool_8h.md#ae809ada9194252356dbaa46410dfbb39">TLV_UTIL_INTERFACE</a> int TLVUTIL_utf8</p>

convert ISO-8859 character sequence to UTF-8

Note: The destination should be bigger than the character count. Very worst case: 3 times. If there is remaining space the result will be terminated by a 0 byte.

**Parameters**

\[out\] **dst** destination buffer for the utf-8 encoded string \[out\] **dstLen** size of destination buffer \[in\] **src** encoded character sequence, usually Application Preferred Name 9F12 \[in\] **srcLenMax** sequence length, if a binary 0 is found in src before the conversion finishes \[in\] **codeTableIndex** part number of ISO-8859, usually Issuer Code Table Index 9F11 \[1..10\]

### Returns

length of converted label, -1 for buffer exceeded, other negative values indicate other errors (RFU)

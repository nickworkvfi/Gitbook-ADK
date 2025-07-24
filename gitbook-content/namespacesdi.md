---
hidden: true
title: sdi Namespace Reference
---

[Namespaces](#namespaces) \| [Data Structures](#nested-classes) \| [Functions](#func-members)

|  |  |
|----|----|
| Namespaces |  |
|   | <a href="namespacesdi_1_1filesystem.md">filesystem</a> |

|  |  |
|----|----|
| Data Structures |  |
| struct   | [MD5_CTX](#structsdi_1_1_m_d5___c_t_x) |
| class   | <a href="classsdi_1_1_sdi_language.md">SdiLanguage</a> |
| class   | <a href="classsdi_1_1_timer.md">Timer</a> |
| class   | <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> |

|  |  |
|----|----|
| Functions |  |
| int  | [hextobin](#aa7fda2cc5788cacfc2e267534b6391cd) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| int  | [hextobin](#a62d4f9a462bed89ebf473e377b7a24ad) (csd::csd_data &dst, const unsigned char \*src, int srclen) |
| void  | [bintohex](#adb43cc15cc5e467d2a32db177abd95ac) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| void  | [bintohexstring](#a451fd8059d3954678d5ad223175cb078) (char \*dst, const unsigned char \*src, int srclen) |
| void  | [bintohexstring](#a13312c8bd33a98c730b4c757e55a5304) (string &dst, const unsigned char \*src, int srclen) |
| void  | [bintohexstring](#a6afe79e222ca1a9079f715b758dc4255) (csd_string &dst, const unsigned char \*src, int srclen) |
| void  | [bintotrack2](#a8da4aa04db98292e03fb0c769642ac4e) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| void  | [bintotrack2string](#a86d21f7d6c1590dfd83b11e0228e6dc4) (csd_string &dst, const unsigned char \*src, int srclen) |
| int  | [track2tobin](#ad7b26a90792d2c2e5486941ed7b4dd7c) (unsigned char \*dst, const unsigned char \*src, int srclen) |
| int  | [track2tobin](#ae42d999b07e327fe3aea4bfe156cef0a) (csd::csd_data &dst, const unsigned char \*src, int srclen) |
| void  | [bintohexstring](#a5e63c92e42e60c105bf33ec9734ccc6f) (std::string &dst, const unsigned char \*src, int srclen) |
| void  | [bintohexstring](#a36bdbba7b034d5eca9058f51ae40bfd1) (csd::csd_string &dst, const unsigned char \*src, int srclen) |
| void  | [bintotrack2string](#a8836d3db59a0107a55d45c6726967973) (csd::csd_string &dst, const unsigned char \*src, int srclen) |
| void  | [MD5Init](#a08e47999152d737f33fda2b8729c4f7c) ([MD5_CTX](#structsdi_1_1_m_d5___c_t_x) \*context) |
| void  | [MD5Update](#a82247df9248c50d1c25809174a84dddd) ([MD5_CTX](#structsdi_1_1_m_d5___c_t_x) \*context, const unsigned char \*input, unsigned int inputLen) |
| void  | [MD5Final](#a9e31b7c8187ca0946de03fde1d9a8e88) (unsigned char digest\[16\], [MD5_CTX](#structsdi_1_1_m_d5___c_t_x) \*context) |
| Language  | [languageSupported](#a4353239935bf1239c84dfa9020272ad3) (unsigned val) |
| const char \*  | [getLanguageIsoCode](#a97211a5500a8f9b7e877624f5330460f) (Language lang_id) |
| unsigned  | [getLanguage](#a41554c6333a616786bb285dc51ab8ba9) (const char \*ISO_639) |
| const std::string  | [getInternalTextKey](#acbe03b26f4cc788074b40c5f8245bc21) (unsigned EmvTextId) |
| <a href="classsdi_1_1_time_stamp.md">TimeStamp</a>  | [operator+](#afc5ba7603df562e3057600548a77ae19) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| <a href="classsdi_1_1_time_stamp.md">TimeStamp</a>  | [operator-](#adf8b527bef1f0f4e433ad88ccae5677c) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| bool  | [operator==](#afde4ee00bda9f6a2e47be84d747b0aa6) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| bool  | [operator!=](#a72b696981a0d47c3988c5d8a3b21771d) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| bool  | [operator\<](#a1826855f2717a1989f0acc9667add7f2) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| bool  | [operator\<=](#ade8cda000c21abf3bba19952338f1ccc) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| bool  | [operator\>](#adbca0ff6b3aab2718e627c9d0936792d) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| bool  | [operator\>=](#a1596310f42ff001cd38ed5cdc9c574ff) (const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &a, const <a href="classsdi_1_1_time_stamp.md">TimeStamp</a> &b) |
| <a href="classsdi_1_1_time_stamp.md">TimeStamp</a>  | [operator\*](#aa4cf2ca6912803ebf18f6a1ef14d6750) (int t, <a href="classsdi_1_1_time_stamp.md#classsdi_1_1_time_stamp_1_1_unit___m_s">TimeStamp::Unit_MS</a>) |
| <a href="classsdi_1_1_time_stamp.md">TimeStamp</a>  | [operator\*](#af58670d8fac6034c267d0445a833cd21) (int t, <a href="classsdi_1_1_time_stamp.md#classsdi_1_1_time_stamp_1_1_unit___s">TimeStamp::Unit_S</a>) |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## sdi::MD5_CTX <a href="#structsdi_1_1_m_d5___c_t_x" id="structsdi_1_1_m_d5___c_t_x"></a>

<p>struct sdi::MD5_CTX</p>

MD5 context.

| Data Fields |  |  |
|----|----|----|
| unsigned char | buffer\[64\] | <p>input buffer</p> |
| uint32_t | count\[2\] | <p>number of bits, modulo 2\^64 (lsb first)</p> |
| uint32_t | state\[4\] | <p>state (ABCD)</p> |

## FunctionDocumentation {#function-documentation}

## bintohex() <a href="#adb43cc15cc5e467d2a32db177abd95ac" id="adb43cc15cc5e467d2a32db177abd95ac"></a>

<p>void bintohex</p>

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

## bintohexstring()\[1/5\] <a href="#a451fd8059d3954678d5ad223175cb078" id="a451fd8059d3954678d5ad223175cb078"></a> {#bintohexstring-15}

<p>void bintohexstring</p>

same as [bintohex()](#adb43cc15cc5e467d2a32db177abd95ac), but adds zero terminator to end of `dst`

**Parameters**

\[out\] **dst** destination buffer of size 2\*srclen+1 \[in\] **src** source buffer \[in\] **srclen** length of source data


{% hint style="info" %}
src and dest may be identical
{% endhint %}

## bintohexstring()\[2/5\] <a href="#a36bdbba7b034d5eca9058f51ae40bfd1" id="a36bdbba7b034d5eca9058f51ae40bfd1"></a> {#bintohexstring-25}

<p>void sdi::bintohexstring</p>

same as [bintohex()](#adb43cc15cc5e467d2a32db177abd95ac), but converts the hexdump into a csd_string

**Parameters**

\[out\] **dst** destination csd_string returned with size 2\*srclen \[in\] **src** source buffer \[in\] **srclen** length of source data

## bintohexstring()\[3/5\] <a href="#a6afe79e222ca1a9079f715b758dc4255" id="a6afe79e222ca1a9079f715b758dc4255"></a> {#bintohexstring-35}

<p>void sdi::bintohexstring</p>

## bintohexstring()\[4/5\] <a href="#a5e63c92e42e60c105bf33ec9734ccc6f" id="a5e63c92e42e60c105bf33ec9734ccc6f"></a> {#bintohexstring-45}

<p>void sdi::bintohexstring</p>

same as [bintohex()](#adb43cc15cc5e467d2a32db177abd95ac), but converts hexdump into a STL string

**Parameters**

\[out\] **dst** destination string returned with size 2\*srclen \[in\] **src** source buffer \[in\] **srclen** length of source data

## bintohexstring()\[5/5\] <a href="#a13312c8bd33a98c730b4c757e55a5304" id="a13312c8bd33a98c730b4c757e55a5304"></a> {#bintohexstring-55}

<p>void sdi::bintohexstring</p>

## bintotrack2() <a href="#a8da4aa04db98292e03fb0c769642ac4e" id="a8da4aa04db98292e03fb0c769642ac4e"></a>

<p>void bintotrack2</p>

convert a binary buffer to ASCII-HEX track2 representation (\'0\'-\'?\') Please note: A string termination is not appended.

**Parameters**

\[out\] **dst** destination buffer of size 2\*srclen \[in\] **src** source buffer \[in\] **srclen** length of source data


{% hint style="info" %}
src and dest may be identical
{% endhint %}

## bintotrack2string()\[1/2\] <a href="#a8836d3db59a0107a55d45c6726967973" id="a8836d3db59a0107a55d45c6726967973"></a> {#bintotrack2string-12}

<p>void sdi::bintotrack2string</p>

same as [bintotrack2()](#a8da4aa04db98292e03fb0c769642ac4e), but converts the binary track 2 into a csd_string

**Parameters**

\[out\] **dst** destination csd_string returned with size 2\*srclen \[in\] **src** source buffer \[in\] **srclen** length of source data

## bintotrack2string()\[2/2\] <a href="#a86d21f7d6c1590dfd83b11e0228e6dc4" id="a86d21f7d6c1590dfd83b11e0228e6dc4"></a> {#bintotrack2string-22}

<p>void sdi::bintotrack2string</p>

## getInternalTextKey() <a href="#acbe03b26f4cc788074b40c5f8245bc21" id="acbe03b26f4cc788074b40c5f8245bc21"></a>

<p>const std::string getInternalTextKey</p>

Get the requested catalog text key corresponding to the EMV text ID.

{% hint style="info" %}
A text for an EMV text ID can be composed additional multiple text keys of the catalog. For more details read describtion of <a href="class_u_i_catalog.md#a9bf11d9db05366a4dc04f6c53a16c2e6">UICatalog::getText()</a>, which is used to lookup texts from the catalogs.
{% endhint %} **Parameters**

\[in\] **EmvTextId** ID of the EMV Text

### Returns

catalog text key or empty string TXT_NO_TXT (if SDI doesn\'t provide one for this EMV text ID)

## getLanguage() <a href="#a41554c6333a616786bb285dc51ab8ba9" id="a41554c6333a616786bb285dc51ab8ba9"></a>

<p>unsigned getLanguage</p>

Get the language corresponding to the ISO 639-1 value

**Parameters**

\[in\] **ISO_639** ISO 639-1 value (e.g. de, en, fr) The buffer must be at least 2 bytes!

### Returns

EMV language ID (use languageValid() afterwards, to check if supported by SDI) For an invalid or unknown ISO string, 0 is returned.

## getLanguageIsoCode() <a href="#a97211a5500a8f9b7e877624f5330460f" id="a97211a5500a8f9b7e877624f5330460f"></a>

<p>const char \* getLanguageIsoCode</p>

Get the ISO 639 value corresponding to the language ID

**Parameters**

\[in\] **lang_id** language ID of enum Language (see lang.h)

### Returns

ISO 639-1 value C-string (two bytes, zero terminated). For LANG_NO_LANG an empty string is returned.

## hextobin()\[1/2\] <a href="#a62d4f9a462bed89ebf473e377b7a24ad" id="a62d4f9a462bed89ebf473e377b7a24ad"></a> {#hextobin-12}

<p>int hextobin</p>

same as [hextobin()](#aa7fda2cc5788cacfc2e267534b6391cd), but converts the result into a csd_data buffer

**Parameters**

\[out\] **dst** destination csd_data buffer with returned size srclen/2 \[in\] **src** source buffer \[in\] **srclen** length of source data, must be even!


{% hint style="info" %}
src and internal buffer of dst may be identical
{% endhint %}

### Returns

1 if successful, 0 if the input contained invalid characters

## hextobin()\[2/2\] <a href="#aa7fda2cc5788cacfc2e267534b6391cd" id="aa7fda2cc5788cacfc2e267534b6391cd"></a> {#hextobin-22}

<p>int hextobin</p>

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

## languageSupported() <a href="#a4353239935bf1239c84dfa9020272ad3" id="a4353239935bf1239c84dfa9020272ad3"></a>

<p>Language languageSupported</p>

check value *val*, if it represents a valid/supported language ID.

**Parameters**

\[in\] **val** potential valid language ID

### Returns

LANG_NO_LANG if value *val* is not valid/supported, else another ID of enum Language (see lang.h)

## MD5Final() <a href="#a9e31b7c8187ca0946de03fde1d9a8e88" id="a9e31b7c8187ca0946de03fde1d9a8e88"></a>

<p>void MD5Final</p>

MD5 finalization. Ends an MD5 message-digest operation, writing the the message digest and zeroizing the context.

**Parameters**

\[out\] **digest** the generated digest \[in\] **context** MD5 context

## MD5Init() <a href="#a08e47999152d737f33fda2b8729c4f7c" id="a08e47999152d737f33fda2b8729c4f7c"></a>

<p>void MD5Init</p>

MD5 initialization. Begins an MD5 operation, writing a new context.

**Parameters**

\[out\] **context** MD5 context

## MD5Update() <a href="#a82247df9248c50d1c25809174a84dddd" id="a82247df9248c50d1c25809174a84dddd"></a>

<p>void MD5Update</p>

MD5 block update operation. Continues an MD5 message-digest operation, processing another message block, and updating the context.

**Parameters**

\[in,out\] **context** MD5 context \[in\] **input** input data \[in\] **inputLen** number of bytes in input

## operator!=() <a href="#a72b696981a0d47c3988c5d8a3b21771d" id="a72b696981a0d47c3988c5d8a3b21771d"></a>

<p>bool sdi::operator!=</p>

inline

compare two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a!=b

## operator\*()\[1/2\] <a href="#aa4cf2ca6912803ebf18f6a1ef14d6750" id="aa4cf2ca6912803ebf18f6a1ef14d6750"></a> {#operator-12}

<p><a href="classsdi_1_1_time_stamp.md">TimeStamp</a> sdi::operator\*</p>

inline

convert int to time value by multiplying with MS unit

**Parameters**

\[in\] **t** time in milliseconds

### Returns

time value

## operator\*()\[2/2\] <a href="#af58670d8fac6034c267d0445a833cd21" id="af58670d8fac6034c267d0445a833cd21"></a> {#operator-22}

<p><a href="classsdi_1_1_time_stamp.md">TimeStamp</a> sdi::operator\*</p>

inline

convert int to time value by multiplying with S unit

**Parameters**

\[in\] **t** time in seconds

### Returns

time value

## operator+() <a href="#afc5ba7603df562e3057600548a77ae19" id="afc5ba7603df562e3057600548a77ae19"></a>

<p><a href="classsdi_1_1_time_stamp.md">TimeStamp</a> operator+</p>

add two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a+b

## operator-() <a href="#adf8b527bef1f0f4e433ad88ccae5677c" id="adf8b527bef1f0f4e433ad88ccae5677c"></a>

<p><a href="classsdi_1_1_time_stamp.md">TimeStamp</a> operator-</p>

substract two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a-b

## operator\<() <a href="#a1826855f2717a1989f0acc9667add7f2" id="a1826855f2717a1989f0acc9667add7f2"></a>

<p>bool sdi::operator\<</p>

inline

compare two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a\<b

## operator\<=() <a href="#ade8cda000c21abf3bba19952338f1ccc" id="ade8cda000c21abf3bba19952338f1ccc"></a>

<p>bool sdi::operator\<=</p>

inline

compare two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a\<=b

## operator==() <a href="#afde4ee00bda9f6a2e47be84d747b0aa6" id="afde4ee00bda9f6a2e47be84d747b0aa6"></a>

<p>bool sdi::operator==</p>

inline

compare two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a==b

## operator\>() <a href="#adbca0ff6b3aab2718e627c9d0936792d" id="adbca0ff6b3aab2718e627c9d0936792d"></a>

<p>bool sdi::operator\></p>

inline

compare two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a\>b

## operator\>=() <a href="#a1596310f42ff001cd38ed5cdc9c574ff" id="a1596310f42ff001cd38ed5cdc9c574ff"></a>

<p>bool sdi::operator\>=</p>

inline

compare two time values

**Parameters**

\[in\] **a** first time value \[in\] **b** second time value

### Returns

result of a\>=b

## track2tobin()\[1/2\] <a href="#ae42d999b07e327fe3aea4bfe156cef0a" id="ae42d999b07e327fe3aea4bfe156cef0a"></a> {#track2tobin-12}

<p>int track2tobin</p>

same as [track2tobin()](#ad7b26a90792d2c2e5486941ed7b4dd7c), but converts the result into a csd_data buffer

**Parameters**

\[out\] **dst** destination csd_data buffer with returned size srclen/2 \[in\] **src** source buffer \[in\] **srclen** length of source data, must be even!

### Returns

1 if successful, 0 if the input contained invalid characters

## track2tobin()\[2/2\] <a href="#ad7b26a90792d2c2e5486941ed7b4dd7c" id="ad7b26a90792d2c2e5486941ed7b4dd7c"></a> {#track2tobin-22}

<p>int track2tobin</p>

convert an track 2 HEX buffer (\'0\'-\'?\') to binary

**Parameters**

\[out\] **dst** destination buffer of size srclen/2 \[in\] **src** source buffer \[in\] **srclen** length of source data, must be even!

### Returns

1 if successful, 0 if the input contained invalid characters


{% hint style="info" %}
src and dest may be identical
{% endhint %}

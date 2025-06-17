---
title: sdi

---

# sdi



## Namespaces

| Name           |
| -------------- |
| **[sdi::filesystem](namespacesdi_1_1filesystem.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[sdi::MD5_CTX](structsdi_1_1_m_d5___c_t_x.md)**  |
| class | **[sdi::SdiLanguage](classsdi_1_1_sdi_language.md)**  |
| class | **[sdi::Timer](classsdi_1_1_timer.md)**  |
| class | **[sdi::TimeStamp](classsdi_1_1_time_stamp.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[hextobin](namespacesdi.md#function-hextobin)**(unsigned char * dst, const unsigned char * src, int srclen) |
| int | **[hextobin](namespacesdi.md#function-hextobin)**(csd::csd_data & dst, const unsigned char * src, int srclen) |
| void | **[bintohex](namespacesdi.md#function-bintohex)**(unsigned char * dst, const unsigned char * src, int srclen) |
| void | **[bintohexstring](namespacesdi.md#function-bintohexstring)**(char * dst, const unsigned char * src, int srclen) |
| void | **[bintohexstring](namespacesdi.md#function-bintohexstring)**(string & dst, const unsigned char * src, int srclen) |
| void | **[bintohexstring](namespacesdi.md#function-bintohexstring)**(csd_string & dst, const unsigned char * src, int srclen) |
| void | **[bintotrack2](namespacesdi.md#function-bintotrack2)**(unsigned char * dst, const unsigned char * src, int srclen) |
| void | **[bintotrack2string](namespacesdi.md#function-bintotrack2string)**(csd_string & dst, const unsigned char * src, int srclen) |
| int | **[track2tobin](namespacesdi.md#function-track2tobin)**(unsigned char * dst, const unsigned char * src, int srclen) |
| int | **[track2tobin](namespacesdi.md#function-track2tobin)**(csd::csd_data & dst, const unsigned char * src, int srclen) |
| void | **[bintohexstring](namespacesdi.md#function-bintohexstring)**(std::string & dst, const unsigned char * src, int srclen) |
| void | **[bintohexstring](namespacesdi.md#function-bintohexstring)**(csd::csd_string & dst, const unsigned char * src, int srclen) |
| void | **[bintotrack2string](namespacesdi.md#function-bintotrack2string)**(csd::csd_string & dst, const unsigned char * src, int srclen) |
| void | **[MD5Transform](namespacesdi.md#function-md5transform)**(uint32_t state[4], const unsigned char block[64]) |
| void | **[Encode](namespacesdi.md#function-encode)**(unsigned char * output, uint32_t * input, unsigned int len) |
| void | **[Decode](namespacesdi.md#function-decode)**(uint32_t * output, const unsigned char * input, unsigned int len) |
| void | **[MD5Init](namespacesdi.md#function-md5init)**([MD5_CTX](structsdi_1_1_m_d5___c_t_x.md) * context) |
| void | **[MD5Update](namespacesdi.md#function-md5update)**([MD5_CTX](structsdi_1_1_m_d5___c_t_x.md) * context, const unsigned char * input, unsigned int inputLen) |
| void | **[MD5Final](namespacesdi.md#function-md5final)**(unsigned char digest[16], [MD5_CTX](structsdi_1_1_m_d5___c_t_x.md) * context) |
| Language | **[languageSupported](namespacesdi.md#function-languagesupported)**(unsigned val) |
| const char * | **[getLanguageIsoCode](namespacesdi.md#function-getlanguageisocode)**(Language lang_id) |
| unsigned | **[getLanguage](namespacesdi.md#function-getlanguage)**(const char * ISO_639) |
| void | **[getTermLangs](namespacesdi.md#function-gettermlangs)**(vector< unsigned char > & termLangs) |
| const std::string | **[getInternalTextKey](namespacesdi.md#function-getinternaltextkey)**(unsigned EmvTextId) |
| [TimeStamp](classsdi_1_1_time_stamp.md) | **[operator+](namespacesdi.md#function-operator+)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| [TimeStamp](classsdi_1_1_time_stamp.md) | **[operator-](namespacesdi.md#function-operator-)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| bool | **[operator==](namespacesdi.md#function-operator==)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| bool | **[operator!=](namespacesdi.md#function-operator!=)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| bool | **[operator<](namespacesdi.md#function-operator<)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| bool | **[operator<=](namespacesdi.md#function-operator<=)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| bool | **[operator>](namespacesdi.md#function-operator>)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| bool | **[operator>=](namespacesdi.md#function-operator>=)**(const [TimeStamp](classsdi_1_1_time_stamp.md) & a, const [TimeStamp](classsdi_1_1_time_stamp.md) & b) |
| [TimeStamp](classsdi_1_1_time_stamp.md) | **[operator*](namespacesdi.md#function-operator*)**(int t, [TimeStamp::Unit_MS](classsdi_1_1_time_stamp_1_1_unit___m_s.md) ) |
| [TimeStamp](classsdi_1_1_time_stamp.md) | **[operator*](namespacesdi.md#function-operator*)**(int t, [TimeStamp::Unit_S](classsdi_1_1_time_stamp_1_1_unit___s.md) ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const char[] | **[conv](namespacesdi.md#variable-conv)**  |
| const unsigned char[64] | **[PADDING](namespacesdi.md#variable-padding)**  |


## Functions Documentation

### function hextobin

```cpp
int hextobin(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 


**Return**: 1 if successful, 0 if the input contained invalid characters or parameter error 

**Author**: M. Meixner 

**Date**: 9.9.2005 

**Note**: src and dest may be identical 

convert an ASCII-HEX buffer to binary 


### function hextobin

```cpp
int hextobin(
    csd::csd_data & dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination csd_data buffer with returned size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 


**Return**: 1 if successful, 0 if the input contained invalid characters 

**Note**: src and internal buffer of dst may be identical 

same as [hextobin()](namespacesdi.md#function-hextobin), but converts the result into a csd_data buffer 


### function bintohex

```cpp
void bintohex(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


**Author**: M. Meixner 

**Date**: 9.9.2005 

**Note**: src and dest may be identical 

convert a binary buffer to ASCII-HEX representation (0-9,A-F) Please note: A string termination is not appended. 


### function bintohexstring

```cpp
void bintohexstring(
    char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size 2*srclen+1 
  * **src** source buffer 
  * **srclen** length of source data 


**Note**: src and dest may be identical 

same as [bintohex()](namespacesdi.md#function-bintohex), but adds zero terminator to end of `dst`


### function bintohexstring

```cpp
void bintohexstring(
    string & dst,
    const unsigned char * src,
    int srclen
)
```


### function bintohexstring

```cpp
void bintohexstring(
    csd_string & dst,
    const unsigned char * src,
    int srclen
)
```


### function bintotrack2

```cpp
void bintotrack2(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


**Note**: src and dest may be identical 

convert a binary buffer to ASCII-HEX track2 representation ('0'-'?') Please note: A string termination is not appended. 


### function bintotrack2string

```cpp
void bintotrack2string(
    csd_string & dst,
    const unsigned char * src,
    int srclen
)
```


### function track2tobin

```cpp
int track2tobin(
    unsigned char * dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination buffer of size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 


**Return**: 1 if successful, 0 if the input contained invalid characters 

**Note**: src and dest may be identical 

convert an track 2 HEX buffer ('0'-'?') to binary 


### function track2tobin

```cpp
int track2tobin(
    csd::csd_data & dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination csd_data buffer with returned size srclen/2 
  * **src** source buffer 
  * **srclen** length of source data, must be even! 


**Return**: 1 if successful, 0 if the input contained invalid characters 

same as [track2tobin()](namespacesdi.md#function-track2tobin), but converts the result into a csd_data buffer 


### function bintohexstring

```cpp
void bintohexstring(
    std::string & dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination string returned with size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


same as [bintohex()](namespacesdi.md#function-bintohex), but converts hexdump into a STL string 


### function bintohexstring

```cpp
void bintohexstring(
    csd::csd_string & dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination csd_string returned with size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


same as [bintohex()](namespacesdi.md#function-bintohex), but converts the hexdump into a csd_string 


### function bintotrack2string

```cpp
void bintotrack2string(
    csd::csd_string & dst,
    const unsigned char * src,
    int srclen
)
```


**Parameters**: 

  * **dst** destination csd_string returned with size 2*srclen 
  * **src** source buffer 
  * **srclen** length of source data 


same as [bintotrack2()](namespacesdi.md#function-bintotrack2), but converts the binary track 2 into a csd_string 


### function MD5Transform

```cpp
static void MD5Transform(
    uint32_t state[4],
    const unsigned char block[64]
)
```


### function Encode

```cpp
static void Encode(
    unsigned char * output,
    uint32_t * input,
    unsigned int len
)
```


### function Decode

```cpp
static void Decode(
    uint32_t * output,
    const unsigned char * input,
    unsigned int len
)
```


### function MD5Init

```cpp
void MD5Init(
    MD5_CTX * context
)
```


**Parameters**: 

  * **context** MD5 context 


MD5 initialization. Begins an MD5 operation, writing a new context. 


### function MD5Update

```cpp
void MD5Update(
    MD5_CTX * context,
    const unsigned char * input,
    unsigned int inputLen
)
```


**Parameters**: 

  * **context** MD5 context 
  * **input** input data 
  * **inputLen** number of bytes in input 


MD5 block update operation. Continues an MD5 message-digest operation, processing another message block, and updating the context. 


### function MD5Final

```cpp
void MD5Final(
    unsigned char digest[16],
    MD5_CTX * context
)
```


**Parameters**: 

  * **digest** the generated digest 
  * **context** MD5 context 


MD5 finalization. Ends an MD5 message-digest operation, writing the the message digest and zeroizing the context. 


### function languageSupported

```cpp
Language languageSupported(
    unsigned val
)
```


**Parameters**: 

  * **val** potential valid language ID 


**Return**: LANG_NO_LANG if value _val_ is not valid/supported, else another ID of enum Language (see lang.h) 

check value _val_, if it represents a valid/supported language ID. 


### function getLanguageIsoCode

```cpp
const char * getLanguageIsoCode(
    Language lang_id
)
```


**Parameters**: 

  * **lang_id** language ID of enum Language (see lang.h) 


**Return**: ISO 639-1 value C-string (two bytes, zero terminated). For LANG_NO_LANG an empty string is returned. 

Get the ISO 639 value corresponding to the language ID 


### function getLanguage

```cpp
unsigned getLanguage(
    const char * ISO_639
)
```


**Parameters**: 

  * **ISO_639** ISO 639-1 value (e.g. de, en, fr) The buffer must be at least 2 bytes! 


**Return**: EMV language ID (use languageValid() afterwards, to check if supported by SDI) For an invalid or unknown ISO string, 0 is returned. 

Get the language corresponding to the ISO 639-1 value 


### function getTermLangs

```cpp
static void getTermLangs(
    vector< unsigned char > & termLangs
)
```


### function getInternalTextKey

```cpp
const std::string getInternalTextKey(
    unsigned EmvTextId
)
```


**Parameters**: 

  * **EmvTextId** ID of the EMV Text 


**Return**: catalog text key or empty string TXT_NO_TXT (if SDI doesn't provide one for this EMV text ID) 

**Note**: A text for an EMV text ID can be composed additional multiple text keys of the catalog. For more details read describtion of [UICatalog::getText()](class_u_i_catalog.md#function-gettext), which is used to lookup texts from the catalogs. 

Get the requested catalog text key corresponding to the EMV text ID. 


### function operator+

```cpp
TimeStamp operator+(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a+b 

add two time values


### function operator-

```cpp
TimeStamp operator-(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a-b 

substract two time values


### function operator==

```cpp
inline bool operator==(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a==b 

compare two time values


### function operator!=

```cpp
inline bool operator!=(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a!=b 

compare two time values


### function operator<

```cpp
inline bool operator<(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a<b 

compare two time values


### function operator<=

```cpp
inline bool operator<=(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a<=b 

compare two time values


### function operator>

```cpp
inline bool operator>(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a>b 

compare two time values


### function operator>=

```cpp
inline bool operator>=(
    const TimeStamp & a,
    const TimeStamp & b
)
```


**Parameters**: 

  * **a** first time value
  * **b** second time value 


**Return**: result of a>=b 

compare two time values


### function operator*

```cpp
inline TimeStamp operator*(
    int t,
    TimeStamp::Unit_MS 
)
```


**Parameters**: 

  * **t** time in milliseconds 


**Return**: time value 

convert int to time value by multiplying with MS unit


### function operator*

```cpp
inline TimeStamp operator*(
    int t,
    TimeStamp::Unit_S 
)
```


**Parameters**: 

  * **t** time in seconds 


**Return**: time value 

convert int to time value by multiplying with S unit



## Attributes Documentation

### variable conv

```cpp
static const char[] conv = "0123456789ABCDEF";
```


### variable PADDING

```cpp
static const unsigned char[64] PADDING =
  {
    0x80, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  };
```





-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
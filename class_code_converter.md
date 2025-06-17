---
title: CodeConverter

---

# CodeConverter






`#include <codeconverter.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Encoding](class_code_converter.md#enum-encoding)** { Enc_None =   0, Enc_Latin1 =   1, Enc_Latin2 =   2, Enc_Latin3 =   3, Enc_Latin4 =   4, Enc_Cyrillic = 5, Enc_Arabic =   6, Enc_Greek =    7, Enc_Hebrew =   8, Enc_Latin5 =   9, Enc_Latin6 =  10, Enc_Last =  11} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CodeConverter](class_code_converter.md#function-codeconverter)**() |
| virtual | **[~CodeConverter](class_code_converter.md#function-~codeconverter)**() |
| std::string | **[string2utf](class_code_converter.md#function-string2utf)**(const std::string & str, enum [Encoding](class_code_converter.md#enum-encoding) enc) |

## Public Types Documentation

### enum Encoding

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Enc_None |   0|  No encoding, can be used to check valid encoding range  |
| Enc_Latin1 |   1|  ISO-8859-1 (latin-1)  |
| Enc_Latin2 |   2|  ISO-8859-2 (latin-2)  |
| Enc_Latin3 |   3|  ISO-8859-3 (latin-3)  |
| Enc_Latin4 |   4|  ISO-8859-4 (latin-4)  |
| Enc_Cyrillic | 5|  ISO-8859-5 (Cyrillic)  |
| Enc_Arabic |   6|  ISO-8859-6 (Arabic)  |
| Enc_Greek |    7|  ISO-8859-7 (Greek)  |
| Enc_Hebrew |   8|  ISO-8859-8 (Hebrew)  |
| Enc_Latin5 |   9|  ISO-8859-9 (latin-5)  |
| Enc_Latin6 |  10|  ISO-8859-10 (latin-6)  |
| Enc_Last |  11|  No encoding, can be used to check valid encoding range  |




## Public Functions Documentation

### function CodeConverter

```cpp
inline CodeConverter()
```


### function ~CodeConverter

```cpp
inline virtual ~CodeConverter()
```


### function string2utf

```cpp
std::string string2utf(
    const std::string & str,
    enum Encoding enc
)
```


**Parameters**: 

  * **str** encoded string 
  * **enc** Encoding of string `str`


**Return**: UTF-8 string, an empty string in case of error (wrong value for `enc`) 

converts an string (encoded with Encoding `enc`) to UTF-8 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
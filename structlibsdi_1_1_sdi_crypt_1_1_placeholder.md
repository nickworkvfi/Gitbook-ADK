---
title: libsdi::SdiCrypt::Placeholder

---

# libsdi::SdiCrypt::Placeholder



 [More...](#detailed-description)


`#include <sdi_if.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::vector< unsigned char > | **[tagList](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md#variable-taglist)** <br>DOL format with length 0 for variable lengths (DF8F30)  |
| std::vector< unsigned char > | **[applicationData](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md#variable-applicationdata)** <br>data that can be referenced in [Placeholder::tagList](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md#variable-taglist) (DFA120)  |
| std::vector< unsigned char > | **[dataOptions](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md#variable-dataoptions)** <br>data formatting options (DFA121) - see SDI programmers guide, getEncData (29-00)  |

## Detailed Description

```cpp
struct libsdi::SdiCrypt::Placeholder;
```


Data descriptor for [getEncData()](classlibsdi_1_1_sdi_crypt.md#function-getencdata), [getEncMsgData()](classlibsdi_1_1_sdi_crypt.md#function-getencmsgdata) and [getMsgSignature()](classlibsdi_1_1_sdi_crypt.md#function-getmsgsignature)

## Public Attributes Documentation

### variable tagList

```cpp
std::vector< unsigned char > tagList;
```

DOL format with length 0 for variable lengths (DF8F30) 

### variable applicationData

```cpp
std::vector< unsigned char > applicationData;
```

data that can be referenced in [Placeholder::tagList](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md#variable-taglist) (DFA120) 

### variable dataOptions

```cpp
std::vector< unsigned char > dataOptions;
```

data formatting options (DFA121) - see SDI programmers guide, getEncData (29-00) 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
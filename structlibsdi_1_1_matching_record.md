---
title: libsdi::MatchingRecord

---

# libsdi::MatchingRecord






`#include <sdi_if.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[MatchingRecord](structlibsdi_1_1_matching_record.md#function-matchingrecord)**(const std::string & _json) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[json](structlibsdi_1_1_matching_record.md#variable-json)**  |
| unsigned char | **[expirycheck_result](structlibsdi_1_1_matching_record.md#variable-expirycheck-result)**  |
| unsigned char | **[luhncheck_result](structlibsdi_1_1_matching_record.md#variable-luhncheck-result)**  |
| unsigned char | **[activationcheck_result](structlibsdi_1_1_matching_record.md#variable-activationcheck-result)**  |

## Public Functions Documentation

### function MatchingRecord

```cpp
inline MatchingRecord(
    const std::string & _json
)
```


## Public Attributes Documentation

### variable json

```cpp
std::string json;
```


### variable expirycheck_result

```cpp
unsigned char expirycheck_result;
```


### variable luhncheck_result

```cpp
unsigned char luhncheck_result;
```


### variable activationcheck_result

```cpp
unsigned char activationcheck_result;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
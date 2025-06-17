---
title: sdi::SdiLanguage

---

# sdi::SdiLanguage






`#include <sdi_lang.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SdiLanguage](classsdi_1_1_sdi_language.md#function-sdilanguage)**() |
| | **[SdiLanguage](classsdi_1_1_sdi_language.md#function-sdilanguage)**(Language languageId) |
| Language | **[getLanguageId](classsdi_1_1_sdi_language.md#function-getlanguageid)**() |
| void | **[setLanguageId](classsdi_1_1_sdi_language.md#function-setlanguageid)**(Language languageId) |
| void | **[selectLanguage](classsdi_1_1_sdi_language.md#function-selectlanguage)**(unsigned char * rsp, unsigned short * rspSize) |

## Public Functions Documentation

### function SdiLanguage

```cpp
SdiLanguage()
```


default constructor 


### function SdiLanguage

```cpp
explicit SdiLanguage(
    Language languageId
)
```


**Parameters**: 

  * **languageId** preset of language id 


constructor with predefined language id 


### function getLanguageId

```cpp
Language getLanguageId()
```


**Return**: language id 

get language id 


### function setLanguageId

```cpp
void setLanguageId(
    Language languageId
)
```


**Parameters**: 

  * **languageId** language id to set 


set language id 


### function selectLanguage

```cpp
void selectLanguage(
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **rsp** response 
  * **rspSize** size of response 


select language from response 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
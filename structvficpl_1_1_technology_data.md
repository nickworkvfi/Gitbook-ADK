---
title: vficpl::TechnologyData

---

# vficpl::TechnologyData






`#include <TransactionDataProvider.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[handle](structvficpl_1_1_technology_data.md#variable-handle)**  |
| [TechnologyType](namespacevficpl.md#enum-technologytype) | **[type](structvficpl_1_1_technology_data.md#variable-type)**  |
| std::string | **[histbytes](structvficpl_1_1_technology_data.md#variable-histbytes)**  |
| std::string | **[appdata](structvficpl_1_1_technology_data.md#variable-appdata)**  |
| std::string | **[aid](structvficpl_1_1_technology_data.md#variable-aid)**  |
| std::string | **[ats](structvficpl_1_1_technology_data.md#variable-ats)**  |

## Public Attributes Documentation

### variable handle

```cpp
std::string handle;
```


A unqiue identifier for this device during this session 


### variable type

```cpp
TechnologyType type;
```


The type of interface used to communicate with this technology 


### variable histbytes

```cpp
std::string histbytes;
```


Mifare historical bytes 


### variable appdata

```cpp
std::string appdata;
```


Mifare application data 


### variable aid

```cpp
std::string aid;
```


Iso7816 AID that was selected on the card 


### variable ats

```cpp
std::string ats;
```


Iso7816 Response from the card answer to select (ATS) the command 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
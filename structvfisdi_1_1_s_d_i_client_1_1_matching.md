---
title: vfisdi::SDIClient::Matching

---

# vfisdi::SDIClient::Matching

**Module:** **[Data interface](group__sdidata.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[record](structvfisdi_1_1_s_d_i_client_1_1_matching.md#variable-record)**  |
| unsigned char | **[expirationCheck](structvfisdi_1_1_s_d_i_client_1_1_matching.md#variable-expirationcheck)**  |
| unsigned char | **[luhnCheck](structvfisdi_1_1_s_d_i_client_1_1_matching.md#variable-luhncheck)**  |
| unsigned char | **[activationCheck](structvfisdi_1_1_s_d_i_client_1_1_matching.md#variable-activationcheck)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::Matching;
```


matching record 

## Public Attributes Documentation

### variable record

```cpp
std::string record;
```


matching record data (DFA12C) 


### variable expirationCheck

```cpp
unsigned char expirationCheck;
```


result of expiration check (DFA12D) 


### variable luhnCheck

```cpp
unsigned char luhnCheck;
```


result of luhn check (DFA12E) 


### variable activationCheck

```cpp
unsigned char activationCheck;
```


result of activation check (DFA132) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
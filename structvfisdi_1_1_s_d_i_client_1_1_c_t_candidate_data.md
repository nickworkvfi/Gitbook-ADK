---
title: vfisdi::SDIClient::CTCandidateData

---

# vfisdi::SDIClient::CTCandidateData

**Module:** **[EMV contact interface](group__sdiemvct.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[api](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-api)**  |
| unsigned char | **[codeTableIndex](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-codetableindex)**  |
| unsigned char[4] | **[iin](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-iin)**  |
| std::string | **[iban](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-iban)**  |
| std::string | **[bic](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-bic)**  |
| unsigned char[2] | **[country2](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-country2)**  |
| unsigned char[3] | **[country3](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-country3)**  |
| unsigned char | **[aidLen](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-aidlen)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[asf](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-asf)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[selData](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md#variable-seldata)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::CTCandidateData;
```


EMV CT candidate data 

## Public Attributes Documentation

### variable api

```cpp
unsigned char api;
```


(87) 


### variable codeTableIndex

```cpp
unsigned char codeTableIndex;
```


(9F11) 


### variable iin

```cpp
unsigned char[4] iin;
```


(42) 


### variable iban

```cpp
std::string iban;
```


(5F33) 


### variable bic

```cpp
std::string bic;
```


(5F54) 


### variable country2

```cpp
unsigned char[2] country2;
```


(5F55) 


### variable country3

```cpp
unsigned char[3] country3;
```


(5F56) 


### variable aidLen

```cpp
unsigned char aidLen;
```


(9F06) 


### variable asf

```cpp
bytevector asf;
```


(DF62) 


### variable selData

```cpp
bytevector selData;
```


(9F0A) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
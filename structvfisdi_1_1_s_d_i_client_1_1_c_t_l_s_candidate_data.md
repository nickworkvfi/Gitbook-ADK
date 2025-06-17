---
title: vfisdi::SDIClient::CTLSCandidateData

---

# vfisdi::SDIClient::CTLSCandidateData

**Module:** **[EMV contactless interface](group__sdiemvctls.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[api](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-api)**  |
| unsigned char[4] | **[iin](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-iin)**  |
| std::string | **[iban](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-iban)**  |
| std::string | **[bic](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-bic)**  |
| unsigned char[2] | **[country2](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-country2)**  |
| unsigned char[3] | **[country3](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-country3)**  |
| unsigned char | **[aidLen](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-aidlen)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[selData](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-seldata)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[discData](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md#variable-discdata)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::CTLSCandidateData;
```


EMV CTLS candidate data 

## Public Attributes Documentation

### variable api

```cpp
unsigned char api;
```


(87) 


### variable iin

```cpp
unsigned char[4] iin;
```


(42) 


### variable iban

```cpp
std::string iban;
```


(5F53) 


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


### variable selData

```cpp
bytevector selData;
```


(9F0A) 


### variable discData

```cpp
bytevector discData;
```


(73) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
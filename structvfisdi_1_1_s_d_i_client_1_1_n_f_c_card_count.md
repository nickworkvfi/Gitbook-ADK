---
title: vfisdi::SDIClient::NFCCardCount

---

# vfisdi::SDIClient::NFCCardCount

**Module:** **[SDI client NFC interface](group__sdinfc.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[totalCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md#variable-totalcount)**  |
| unsigned char | **[cardACount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md#variable-cardacount)**  |
| unsigned char | **[cardBCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md#variable-cardbcount)**  |
| unsigned char | **[cardFCount](structvfisdi_1_1_s_d_i_client_1_1_n_f_c_card_count.md#variable-cardfcount)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::NFCCardCount;
```


NFC card counts 

## Public Attributes Documentation

### variable totalCount

```cpp
unsigned char totalCount;
```


### variable cardACount

```cpp
unsigned char cardACount;
```


total number of cards found (DFDB28) 


### variable cardBCount

```cpp
unsigned char cardBCount;
```


total number of cards of type A found (DFDB29) 


### variable cardFCount

```cpp
unsigned char cardFCount;
```


total number of cards of type B found (DFDB2A) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
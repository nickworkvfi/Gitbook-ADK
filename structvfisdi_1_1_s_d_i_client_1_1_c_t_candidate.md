---
title: vfisdi::SDIClient::CTCandidate

---

# vfisdi::SDIClient::CTCandidate

**Module:** **[EMV contact interface](group__sdiemvct.md)**






`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[aid](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md#variable-aid)**  |
| unsigned char | **[api](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md#variable-api)**  |
| std::string | **[text](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md#variable-text)**  |
| std::string | **[text2](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md#variable-text2)**  |
| unsigned char | **[codeTableIndex](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md#variable-codetableindex)**  |
| unsigned char | **[languagePref](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md#variable-languagepref)**  |

## Public Attributes Documentation

### variable aid

```cpp
bytevector aid;
```


AID returned by the card (4F) 


### variable api

```cpp
unsigned char api;
```


Application priority indicator (87) 


### variable text

```cpp
std::string text;
```


text supplied by app (50) 


### variable text2

```cpp
std::string text2;
```


secondary text field (DF3B) 


### variable codeTableIndex

```cpp
unsigned char codeTableIndex;
```


character code table index (Value '1' - 'A') or 0 = not specified (ISO 8859) (9F11) 

indicator which label went to text: EMVL2_DFLTXT=0x80 for default label EMVL2_APPLBL=0x40 for application preferred name ('9F12') EMVL2_APPLBL=0x20 for application label ('50') 


### variable languagePref

```cpp
unsigned char languagePref;
```


language preference, converted to small letters (5F2D) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100
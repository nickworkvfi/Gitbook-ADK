---
title: vfisdi::EMVTxn::FallbackMSR

---

# vfisdi::EMVTxn::FallbackMSR



 [More...](#detailed-description)


`#include <sdi_emv.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[mid](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md#variable-mid)**  |
| unsigned char[8] | **[specialTX](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md#variable-specialtx)**  |
| unsigned char | **[fallback](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md#variable-fallback)**  |
| unsigned char | **[options](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md#variable-options)**  |

## Detailed Description

```cpp
struct vfisdi::EMVTxn::FallbackMSR;
```


fallback configuration 

## Public Attributes Documentation

### variable mid

```cpp
unsigned char mid;
```


(DF17) 


### variable specialTX

```cpp
unsigned char[8] specialTX;
```


(DF1C) 


### variable fallback

```cpp
unsigned char fallback;
```


(DF18) 


### variable options

```cpp
unsigned char options;
```


(DF3A) 


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
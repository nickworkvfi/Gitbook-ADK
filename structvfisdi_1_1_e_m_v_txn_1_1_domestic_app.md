---
title: vfisdi::EMVTxn::DomesticApp

---

# vfisdi::EMVTxn::DomesticApp



 [More...](#detailed-description)


`#include <sdi_emv.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) | **[aid](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md#variable-aid)**  |
| std::string | **[appLabel](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md#variable-applabel)**  |
| unsigned char | **[asi](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md#variable-asi)**  |
| unsigned char[8] | **[specialTX](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md#variable-specialtx)**  |
| unsigned char | **[noEMVConformSelect](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md#variable-noemvconformselect)**  |

## Detailed Description

```cpp
struct vfisdi::EMVTxn::DomesticApp;
```


domestic application information 

## Public Attributes Documentation

### variable aid

```cpp
bytevector aid;
```


(DF04) 


### variable appLabel

```cpp
std::string appLabel;
```


(50) 


### variable asi

```cpp
unsigned char asi;
```


(DFAB02) 


### variable specialTX

```cpp
unsigned char[8] specialTX;
```


(DF1C) 


### variable noEMVConformSelect

```cpp
unsigned char noEMVConformSelect;
```


(DF6A) 


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
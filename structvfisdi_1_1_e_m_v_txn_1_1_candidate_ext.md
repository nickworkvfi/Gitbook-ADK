---
title: vfisdi::EMVTxn::CandidateExt

---

# vfisdi::EMVTxn::CandidateExt



 [More...](#detailed-description)


`#include <sdi_emv.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) | **[aid](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md#variable-aid)**  |
| std::string | **[appName](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md#variable-appname)**  |
| std::string | **[language](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md#variable-language)**  |
| unsigned | **[kernelID](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md#variable-kernelid)**  |
| unsigned char | **[velocityOrigIdx](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md#variable-velocityorigidx)**  |
| unsigned char | **[velocityProcResult](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md#variable-velocityprocresult)**  |

## Detailed Description

```cpp
struct vfisdi::EMVTxn::CandidateExt;
```


[Candidate](structvfisdi_1_1_e_m_v_txn_1_1_candidate.md) entry in callback 

## Public Attributes Documentation

### variable aid

```cpp
bytevector aid;
```


(DF04) 


### variable appName

```cpp
std::string appName;
```


(50) 


### variable language

```cpp
std::string language;
```


(5F2D) 


### variable kernelID

```cpp
unsigned kernelID;
```


(DFD003) 


### variable velocityOrigIdx

```cpp
unsigned char velocityOrigIdx;
```


(DF60) 


### variable velocityProcResult

```cpp
unsigned char velocityProcResult;
```


(DF63) 


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
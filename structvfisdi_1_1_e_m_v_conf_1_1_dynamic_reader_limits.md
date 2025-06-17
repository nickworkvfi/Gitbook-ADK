---
title: vfisdi::EMVConf::DynamicReaderLimits

---

# vfisdi::EMVConf::DynamicReaderLimits



 [More...](#detailed-description)


`#include <sdi_emv.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) | **[appProgramID](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md#variable-appprogramid)**  |
| [BCD](classvfisdi_1_1_b_c_d.md)< 6 > | **[floorLimit](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md#variable-floorlimit)**  |
| [BCD](classvfisdi_1_1_b_c_d.md)< 6 > | **[transactionLimit](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md#variable-transactionlimit)**  |
| [BCD](classvfisdi_1_1_b_c_d.md)< 6 > | **[CVMRequiredLimit](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md#variable-cvmrequiredlimit)**  |
| unsigned char | **[options](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md#variable-options)**  |

## Detailed Description

```cpp
struct vfisdi::EMVConf::DynamicReaderLimits;
```


dynamic reader limits 

## Public Attributes Documentation

### variable appProgramID

```cpp
bytevector appProgramID;
```


application program ID (9F5A) 


### variable floorLimit

```cpp
BCD< 6 > floorLimit;
```


floor limit (DFAB40) 


### variable transactionLimit

```cpp
BCD< 6 > transactionLimit;
```


transaction limit (DFAB41) 


### variable CVMRequiredLimit

```cpp
BCD< 6 > CVMRequiredLimit;
```


CVM required limit (DFAB42) 


### variable options

```cpp
unsigned char options;
```


dynamic reader options (DFAB49) 


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
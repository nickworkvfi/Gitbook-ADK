---
title: com_verifone_seccmd::DUKPTmask

---

# com_verifone_seccmd::DUKPTmask



 [More...](#detailed-description)


`#include <libseccmd-comp.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| u_char * | **[maskPIN](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md#variable-maskpin)**  |
| u_char * | **[maskMAC](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md#variable-maskmac)**  |
| u_char * | **[maskENC](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md#variable-maskenc)**  |
| u_char | **[sizeP](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md#variable-sizep)**  |
| u_char | **[sizeM](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md#variable-sizem)**  |
| u_char | **[sizeE](structcom__verifone__seccmd_1_1_d_u_k_p_tmask.md#variable-sizee)**  |

## Detailed Description

```cpp
struct com_verifone_seccmd::DUKPTmask;
```


Parameter container for DUKPT Key masking 

## Public Attributes Documentation

### variable maskPIN

```cpp
u_char * maskPIN;
```


mask for PIN 


### variable maskMAC

```cpp
u_char * maskMAC;
```


mask for MAC 


### variable maskENC

```cpp
u_char * maskENC;
```


mask for encryption 


### variable sizeP

```cpp
u_char sizeP;
```


size of mask for PIN 


### variable sizeM

```cpp
u_char sizeM;
```


size of mask for MAC 


### variable sizeE

```cpp
u_char sizeE;
```


size of mask for encryption 


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
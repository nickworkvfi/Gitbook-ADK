---
title: vficpl::CustomerIdentification
summary: Customer identification to be used equivalent to a card pre-dip / pre-swipe. 

---

# vficpl::CustomerIdentification



Customer identification to be used equivalent to a card pre-dip / pre-swipe. 


`#include <Commerce.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::list< std::string > | **[ids](structvficpl_1_1_customer_identification.md#variable-ids)**  |
| std::string | **[par](structvficpl_1_1_customer_identification.md#variable-par)**  |
| std::list< std::string > | **[tokens](structvficpl_1_1_customer_identification.md#variable-tokens)**  |

## Public Attributes Documentation

### variable ids

```cpp
std::list< std::string > ids;
```


A customers identifier(s) unique in the service provider system. 


### variable par

```cpp
std::string par;
```


Payment Account Reference (PAR) represents the Payment Account at the same level that PAN represents the Payment Account. 


### variable tokens

```cpp
std::list< std::string > tokens;
```


Customer token(s) provided by the Verifone tokenization service. 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
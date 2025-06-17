---
title: vfisdi::EMVSpecialTransactions

---

# vfisdi::EMVSpecialTransactions



 [More...](#detailed-description)


`#include <sdi_emv.h>`

Inherits from [Array< 8 >](structvfisdi_1_1_array.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md#function-emvspecialtransactions)**() |
| | **[EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md#function-emvspecialtransactions)**(const unsigned char val[8]) |
| void | **[setReversal](classvfisdi_1_1_e_m_v_special_transactions.md#function-setreversal)**([EMVSpecialReversal](namespacevfisdi.md#enum-emvspecialreversal) r) |
| [EMVSpecialReversal](namespacevfisdi.md#enum-emvspecialreversal) | **[getReversal](classvfisdi_1_1_e_m_v_special_transactions.md#function-getreversal)**() const |
| void | **[setRefund](classvfisdi_1_1_e_m_v_special_transactions.md#function-setrefund)**([EMVSpecialRefund](namespacevfisdi.md#enum-emvspecialrefund) r) |
| [EMVSpecialRefund](namespacevfisdi.md#enum-emvspecialrefund) | **[getRefund](classvfisdi_1_1_e_m_v_special_transactions.md#function-getrefund)**() const |
| void | **[setReservation](classvfisdi_1_1_e_m_v_special_transactions.md#function-setreservation)**([EMVSpecialReservation](namespacevfisdi.md#enum-emvspecialreservation) r) |
| [EMVSpecialReservation](namespacevfisdi.md#enum-emvspecialreservation) | **[getReservation](classvfisdi_1_1_e_m_v_special_transactions.md#function-getreservation)**() const |
| void | **[setTip](classvfisdi_1_1_e_m_v_special_transactions.md#function-settip)**([EMVSpecialTip](namespacevfisdi.md#enum-emvspecialtip) r) |
| [EMVSpecialTip](namespacevfisdi.md#enum-emvspecialtip) | **[getTip](classvfisdi_1_1_e_m_v_special_transactions.md#function-gettip)**() const |
| void | **[setReferral](classvfisdi_1_1_e_m_v_special_transactions.md#function-setreferral)**([EMVSpecialReferral](namespacevfisdi.md#enum-emvspecialreferral) r) |
| [EMVSpecialReferral](namespacevfisdi.md#enum-emvspecialreferral) | **[getReferral](classvfisdi_1_1_e_m_v_special_transactions.md#function-getreferral)**() const |
| void | **[setVoice](classvfisdi_1_1_e_m_v_special_transactions.md#function-setvoice)**([EMVSpecialVoice](namespacevfisdi.md#enum-emvspecialvoice) r) |
| [EMVSpecialVoice](namespacevfisdi.md#enum-emvspecialvoice) | **[getVoice](classvfisdi_1_1_e_m_v_special_transactions.md#function-getvoice)**() const |
| void | **[setFallback](classvfisdi_1_1_e_m_v_special_transactions.md#function-setfallback)**([EMVSpecialFallback](namespacevfisdi.md#enum-emvspecialfallback) r) |
| [EMVSpecialFallback](namespacevfisdi.md#enum-emvspecialfallback) | **[getFallback](classvfisdi_1_1_e_m_v_special_transactions.md#function-getfallback)**() const |
| void | **[setIgnoreCard](classvfisdi_1_1_e_m_v_special_transactions.md#function-setignorecard)**([EMVSpecialIgnoreCard](namespacevfisdi.md#enum-emvspecialignorecard) r) |
| [EMVSpecialIgnoreCard](namespacevfisdi.md#enum-emvspecialignorecard) | **[getIgnoreCard](classvfisdi_1_1_e_m_v_special_transactions.md#function-getignorecard)**() const |

## Additional inherited members

**Public Functions inherited from [Array< 8 >](structvfisdi_1_1_array.md)**

|                | Name           |
| -------------- | -------------- |
| | **[Array](structvfisdi_1_1_array.md#function-array)**() |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(const unsigned char val[N]) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(const char val[N]) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(unsigned long val) |
| | **[Array](structvfisdi_1_1_array.md#function-array)**(int val) |
| void | **[set](structvfisdi_1_1_array.md#function-set)**(const unsigned char val[N]) |
| void | **[set](structvfisdi_1_1_array.md#function-set)**(unsigned long val) |
| void | **[clear](structvfisdi_1_1_array.md#function-clear)**() |
| unsigned | **[size](structvfisdi_1_1_array.md#function-size)**() const |
| unsigned char & | **[operator[]](structvfisdi_1_1_array.md#function-operator[])**(unsigned idx) |
| const unsigned char & | **[operator[]](structvfisdi_1_1_array.md#function-operator[])**(unsigned idx) const |

**Public Attributes inherited from [Array< 8 >](structvfisdi_1_1_array.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned char[N] | **[v](structvfisdi_1_1_array.md#variable-v)**  |


## Detailed Description

```cpp
class vfisdi::EMVSpecialTransactions;
```


EMV special transactions 

## Public Functions Documentation

### function EMVSpecialTransactions

```cpp
inline EMVSpecialTransactions()
```


constructor, initializes all values to 0 


### function EMVSpecialTransactions

```cpp
inline EMVSpecialTransactions(
    const unsigned char val[8]
)
```


**Parameters**: 

  * **val** initialization values 


constructor, initializes special transactions with provided data from byte array, 


### function setReversal

```cpp
inline void setReversal(
    EMVSpecialReversal r
)
```


**Parameters**: 

  * **r** manual reversal configuration 


write manual reversal configuration 


### function getReversal

```cpp
inline EMVSpecialReversal getReversal() const
```


**Return**: manual reversal configuration 

read manual reversal configuration 


### function setRefund

```cpp
inline void setRefund(
    EMVSpecialRefund r
)
```


**Parameters**: 

  * **r** refund configuration 


write refund configuration 


### function getRefund

```cpp
inline EMVSpecialRefund getRefund() const
```


**Return**: refund configuration 

read refund configuration 


### function setReservation

```cpp
inline void setReservation(
    EMVSpecialReservation r
)
```


**Parameters**: 

  * **r** reservation configuration 


write reservation configuration 


### function getReservation

```cpp
inline EMVSpecialReservation getReservation() const
```


**Return**: reservation configuration 

read reservation configuration 


### function setTip

```cpp
inline void setTip(
    EMVSpecialTip r
)
```


**Parameters**: 

  * **r** tip configuration 


write tip configuration 


### function getTip

```cpp
inline EMVSpecialTip getTip() const
```


**Return**: tip configuration 

read tip configuration 


### function setReferral

```cpp
inline void setReferral(
    EMVSpecialReferral r
)
```


**Parameters**: 

  * **r** voice referral configuration 


write voice referral configuration 


### function getReferral

```cpp
inline EMVSpecialReferral getReferral() const
```


**Return**: voice referral configuration 

read voice referral configuration 


### function setVoice

```cpp
inline void setVoice(
    EMVSpecialVoice r
)
```


**Parameters**: 

  * **r** voice authorization configuration 


write voice authorization configuration 


### function getVoice

```cpp
inline EMVSpecialVoice getVoice() const
```


**Return**: voice authorization configuration 

read voice authorization configuration 


### function setFallback

```cpp
inline void setFallback(
    EMVSpecialFallback r
)
```


**Parameters**: 

  * **r** fallback configuration 


write fallback configuration 


### function getFallback

```cpp
inline EMVSpecialFallback getFallback() const
```


**Return**: fallback configuration 

read fallback configuration 


### function setIgnoreCard

```cpp
inline void setIgnoreCard(
    EMVSpecialIgnoreCard r
)
```


**Parameters**: 

  * **r** ignore card configuration 


write ignore card configuration 


### function getIgnoreCard

```cpp
inline EMVSpecialIgnoreCard getIgnoreCard() const
```


**Return**: ignore card configuration 

read ignore card configuration 


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100
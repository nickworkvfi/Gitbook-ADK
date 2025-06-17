---
title: com_adksec_cmd::CTransactionData

---

# com_adksec_cmd::CTransactionData






`#include <CTransactionData.h>`

Inherits from std::map< secIndex_t, CTransactionValue >

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[CTransactionData](classcom__adksec__cmd_1_1_c_transaction_data.md#function-ctransactiondata)**(const std::string & jsonString) |
| | **[CTransactionData](classcom__adksec__cmd_1_1_c_transaction_data.md#function-ctransactiondata)**() |
| virtual | **[~CTransactionData](classcom__adksec__cmd_1_1_c_transaction_data.md#function-~ctransactiondata)**() |
| std::string | **[dump](classcom__adksec__cmd_1_1_c_transaction_data.md#function-dump)**() const |
| void | **[load](classcom__adksec__cmd_1_1_c_transaction_data.md#function-load)**(const std::string & jsonString) |
| bool | **[isAvailable](classcom__adksec__cmd_1_1_c_transaction_data.md#function-isavailable)**(const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) & key) const |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagKeySetID](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagkeysetid)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagIPPUseBinFormat](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagippusebinformat)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagADEEncMode](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagadeencmode)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagBendigoKEKFlag](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagbendigokekflag)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagAS2805Func](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagas2805func)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagVSSDUKPTMaskPIN](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagvssdukptmaskpin)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagVSSDUKPTMaskMAC](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagvssdukptmaskmac)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagVSSDUKPTMaskENC](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagvssdukptmaskenc)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[setDUKPTmasks](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-setdukptmasks)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagHostName](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-taghostname)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagPAN](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagpan)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagCHName](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagchname)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagMID](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagmid)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagPANandCVV](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagpanandcvv)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagTrack1](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagtrack1)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagTrack2](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagtrack2)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagTrack3](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagtrack3)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagAlphaNum](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagalphanum)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagByteArray](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagbytearray)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagCardDataType](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagcarddatatype)** <br>ASCII format expected.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagObfuscatedPAN](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagobfuscatedpan)** <br>ASCII format provided.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagObfuscatedCHName](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagobfuscatedchname)** <br>ASCII format provided.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagObfuscatedTrack1](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagobfuscatedtrack1)** <br>ASCII format provided.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagObfuscatedTrack2](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagobfuscatedtrack2)** <br>ASCII format provided.  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagStan](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagstan)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagTransAmount](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagtransamount)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagVSSPropData](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagvsspropdata)** <br>proprietary data passed to VSS scripts  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagFlagBypassKsnIncr](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagflagbypassksnincr)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagNextKSNState](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagnextksnstate)** <br>int expected  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[Tag0PinBlockRequest](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tag0pinblockrequest)** <br>bool do 0PinBlockRequest  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[_TDindex](classcom__adksec__cmd_1_1_c_transaction_data.md#variable--tdindex)** <br>internally used for secEncryptTransactionData to refer TD-Value to be encrypted  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[_SessionKey](classcom__adksec__cmd_1_1_c_transaction_data.md#variable--sessionkey)** <br>internally used to store SessionKey (MSK)  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagCryptoRWLegacyDecrypt](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagcryptorwlegacydecrypt)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagTrustConn](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagtrustconn)**  |
| const [secIndex_t](namespacecom__adksec__cmd.md#typedef-secindex-t) | **[TagPeerUID](classcom__adksec__cmd_1_1_c_transaction_data.md#variable-tagpeeruid)**  |

## Public Functions Documentation

### function CTransactionData

```cpp
CTransactionData(
    const std::string & jsonString
)
```


### function CTransactionData

```cpp
CTransactionData()
```


### function ~CTransactionData

```cpp
virtual ~CTransactionData()
```


### function dump

```cpp
std::string dump() const
```


### function load

```cpp
void load(
    const std::string & jsonString
)
```


### function isAvailable

```cpp
bool isAvailable(
    const secIndex_t & key
) const
```


## Public Attributes Documentation

### variable TagKeySetID

```cpp
static const secIndex_t TagKeySetID;
```


### variable TagIPPUseBinFormat

```cpp
static const secIndex_t TagIPPUseBinFormat;
```


### variable TagADEEncMode

```cpp
static const secIndex_t TagADEEncMode;
```


### variable TagBendigoKEKFlag

```cpp
static const secIndex_t TagBendigoKEKFlag;
```


### variable TagAS2805Func

```cpp
static const secIndex_t TagAS2805Func;
```


### variable TagVSSDUKPTMaskPIN

```cpp
static const secIndex_t TagVSSDUKPTMaskPIN;
```


### variable TagVSSDUKPTMaskMAC

```cpp
static const secIndex_t TagVSSDUKPTMaskMAC;
```


### variable TagVSSDUKPTMaskENC

```cpp
static const secIndex_t TagVSSDUKPTMaskENC;
```


### variable setDUKPTmasks

```cpp
static const secIndex_t setDUKPTmasks;
```


### variable TagHostName

```cpp
static const secIndex_t TagHostName;
```


### variable TagPAN

```cpp
static const secIndex_t TagPAN;
```

ASCII format expected. 

### variable TagCHName

```cpp
static const secIndex_t TagCHName;
```

ASCII format expected. 

### variable TagMID

```cpp
static const secIndex_t TagMID;
```

ASCII format expected. 

### variable TagPANandCVV

```cpp
static const secIndex_t TagPANandCVV;
```

ASCII format expected. 

### variable TagTrack1

```cpp
static const secIndex_t TagTrack1;
```

ASCII format expected. 

### variable TagTrack2

```cpp
static const secIndex_t TagTrack2;
```

ASCII format expected. 

### variable TagTrack3

```cpp
static const secIndex_t TagTrack3;
```

ASCII format expected. 

### variable TagAlphaNum

```cpp
static const secIndex_t TagAlphaNum;
```

ASCII format expected. 

### variable TagByteArray

```cpp
static const secIndex_t TagByteArray;
```

ASCII format expected. 

### variable TagCardDataType

```cpp
static const secIndex_t TagCardDataType;
```

ASCII format expected. 

### variable TagObfuscatedPAN

```cpp
static const secIndex_t TagObfuscatedPAN;
```

ASCII format provided. 

### variable TagObfuscatedCHName

```cpp
static const secIndex_t TagObfuscatedCHName;
```

ASCII format provided. 

### variable TagObfuscatedTrack1

```cpp
static const secIndex_t TagObfuscatedTrack1;
```

ASCII format provided. 

### variable TagObfuscatedTrack2

```cpp
static const secIndex_t TagObfuscatedTrack2;
```

ASCII format provided. 

### variable TagStan

```cpp
static const secIndex_t TagStan;
```


### variable TagTransAmount

```cpp
static const secIndex_t TagTransAmount;
```


### variable TagVSSPropData

```cpp
static const secIndex_t TagVSSPropData;
```

proprietary data passed to VSS scripts 

### variable TagFlagBypassKsnIncr

```cpp
static const secIndex_t TagFlagBypassKsnIncr;
```


### variable TagNextKSNState

```cpp
static const secIndex_t TagNextKSNState;
```

int expected 

### variable Tag0PinBlockRequest

```cpp
static const secIndex_t Tag0PinBlockRequest;
```

bool do 0PinBlockRequest 

### variable _TDindex

```cpp
static const secIndex_t _TDindex;
```

internally used for secEncryptTransactionData to refer TD-Value to be encrypted 

### variable _SessionKey

```cpp
static const secIndex_t _SessionKey;
```

internally used to store SessionKey (MSK) 

### variable TagCryptoRWLegacyDecrypt

```cpp
static const secIndex_t TagCryptoRWLegacyDecrypt;
```


### variable TagTrustConn

```cpp
static const secIndex_t TagTrustConn;
```


### variable TagPeerUID

```cpp
static const secIndex_t TagPeerUID;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100
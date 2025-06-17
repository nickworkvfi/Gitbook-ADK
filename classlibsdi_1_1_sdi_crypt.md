---
title: libsdi::SdiCrypt

---

# libsdi::SdiCrypt



 [More...](#detailed-description)


`#include <sdi_if.h>`

Inherits from [SdiBase](classlibsdi_1_1_sdi_base.md)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Placeholder](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SdiCrypt](classlibsdi_1_1_sdi_crypt.md#function-sdicrypt)**() |
| | **[~SdiCrypt](classlibsdi_1_1_sdi_crypt.md#function-~sdicrypt)**() |
| bool | **[open](classlibsdi_1_1_sdi_crypt.md#function-open)**(const char * hostName)<br>call SDI Crypto Open (70-00).  |
| bool | **[close](classlibsdi_1_1_sdi_crypt.md#function-close)**()<br>call SDI Crypto Open Close (70-01).  |
| bool | **[isOpen](classlibsdi_1_1_sdi_crypt.md#function-isopen)**() const<br>Check if a crypto handle is present.  |
| uint32_t | **[getCryptoHandle](classlibsdi_1_1_sdi_crypt.md#function-getcryptohandle)**()<br>Read the crypto handle obtained by SDI Crypto Open.  |
| bool | **[encrypt](classlibsdi_1_1_sdi_crypt.md#function-encrypt)**(const std::vector< unsigned char > & data, std::vector< unsigned char > & encrypted)<br>SDI Crypto Encrypt (70-02).  |
| bool | **[decrypt](classlibsdi_1_1_sdi_crypt.md#function-decrypt)**(const std::vector< unsigned char > & encrypted, std::vector< unsigned char > & decrypted)<br>SDI Crypto Decrypt (70-03).  |
| bool | **[sign](classlibsdi_1_1_sdi_crypt.md#function-sign)**(const std::vector< unsigned char > & data, std::vector< unsigned char > & signature)<br>SDI Crypto Sign (70-04).  |
| bool | **[verify](classlibsdi_1_1_sdi_crypt.md#function-verify)**(const std::vector< unsigned char > & data, const std::vector< unsigned char > & signature)<br>SDI Crypto Verify (70-05).  |
| bool | **[updateKey](classlibsdi_1_1_sdi_crypt.md#function-updatekey)**(unsigned char keyType, const std::vector< unsigned char > & keyData, std::vector< unsigned char > * proprietaryData =NULL, const unsigned char AS2805 =0, std::vector< unsigned char > * KCV =NULL)<br>SDI Crypto Update Key (70-06).  |
| bool | **[setKeySetId](classlibsdi_1_1_sdi_crypt.md#function-setkeysetid)**(uint32_t ksid, uint32_t mksid =0, bool asAttribute =false)<br>Set Key Set (70-07) or setter for [getEncData()](), [getEncMsgData()]() and [getMsgSignature()]() depending on parameter `asAttribute`.  |
| bool | **[getEncryptedPin](classlibsdi_1_1_sdi_crypt.md#function-getencryptedpin)**(unsigned char pinBlockFormat, std::vector< unsigned char > & pinBlock, bool requestZeroPinBlock =false)<br>Get encrypted PIN (70-08).  |
| std::string | **[getKeyInventory](classlibsdi_1_1_sdi_crypt.md#function-getkeyinventory)**()<br>Get Key Inventory (70-09).  |
| bool | **[getKeyData](classlibsdi_1_1_sdi_crypt.md#function-getkeydata)**(unsigned char keyType, std::vector< unsigned char > & keyData, unsigned char kekFlag =0)<br>Get Key Data (70-0A).  |
| std::string | **[getStatus](classlibsdi_1_1_sdi_crypt.md#function-getstatus)**()<br>Get Status of security module (70-0B) with handle received by [open()](classlibsdi_1_1_sdi_crypt.md#function-open).  |
| std::string | **[getStatus](classlibsdi_1_1_sdi_crypt.md#function-getstatus)**(std::string hostName)<br>Get Status of security module (70-0B) for given host name or for all security modules.  |
| void | **[setInitialVector](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector)**(const std::vector< unsigned char > & iv)<br>Set Initial Vector for various cipher commands (DFA403)  |
| void | **[getInitialVector](classlibsdi_1_1_sdi_crypt.md#function-getinitialvector)**(std::vector< unsigned char > & iv) const<br>Get Initial Vector returned by various cipher commands.  |
| void | **[getKeySerialNumber](classlibsdi_1_1_sdi_crypt.md#function-getkeyserialnumber)**(std::vector< unsigned char > & ksn) const<br>Get key serial number returned by various cipher commands.  |
| bool | **[getEncData](classlibsdi_1_1_sdi_crypt.md#function-getencdata)**(const [Placeholder](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md) & descriptor, std::vector< unsigned char > & encrypted, bool useStoredData =false, bool incrementKSN =false)<br>Encryption command for card holder sensitive data (29-00).  |
| bool | **[getEncMsgData](classlibsdi_1_1_sdi_crypt.md#function-getencmsgdata)**(const std::vector< unsigned char > & messageTemplate, const std::vector< [Placeholder](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md) > & placeholder, std::vector< unsigned char > & encrypted, bool useStoredData =false, bool incrementKSN =false)<br>Encryption command for card holder sensitive data in host messages (29-01)  |
| bool | **[getMsgSignature](classlibsdi_1_1_sdi_crypt.md#function-getmsgsignature)**(const std::vector< unsigned char > & messageTemplate, const std::vector< [Placeholder](structlibsdi_1_1_sdi_crypt_1_1_placeholder.md) > & placeholder, std::vector< unsigned char > & signature, bool useStoredData =false, bool incrementKSN =false)<br>Singing of host messages (29-04).  |
| bool | **[getEncTrxData](classlibsdi_1_1_sdi_crypt.md#function-getenctrxdata)**(const std::vector< unsigned long > tags, std::vector< unsigned char > & data)<br>Perform the command to get encrypted transaction data for later use (29-07).  |
| bool | **[setEncTrxData](classlibsdi_1_1_sdi_crypt.md#function-setenctrxdata)**(const std::vector< unsigned char > data)<br>Perform the command to send encrypted transaction data back to the SDI Server (29-08).  |
| bool | **[endEncTrxData](classlibsdi_1_1_sdi_crypt.md#function-endenctrxdata)**()<br>Perform the command to finish the encrypted transaction data procedure inside the SDI Server (29-09).  |
| std::string | **[getVersions](classlibsdi_1_1_sdi_crypt.md#function-getversions)**(int & additionalResult)<br>Get versions of SEC ADK components (70-0C).  |

## Additional inherited members

**Public Classes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| struct | **[PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |

**Public Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiBase](classlibsdi_1_1_sdi_base.md#function-sdibase)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12)**() |
| int | **[getAdditionalResultValue](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)**()<br>Access Additional Result Value if returned in SDI response.  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getClientError](classlibsdi_1_1_sdi_base.md#function-getclienterror)**()<br>Access client side error codes.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveSW12](classlibsdi_1_1_sdi_base.md#function-receivesw12)**()<br>Receive SDI server response with no data.  |
| void | **[clear](classlibsdi_1_1_sdi_base.md#function-clear)**()<br>clear result data obtained from SDI communication  |
| void | **[importResults](classlibsdi_1_1_sdi_base.md#function-importresults)**(const [SdiBase](classlibsdi_1_1_sdi_base.md) & intermediate)<br>set result data obtained from intermediate SDI communication  |

**Protected Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[setSdiSw12](classlibsdi_1_1_sdi_base.md#function-setsdisw12)**(enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) s) |
| void | **[setClientError](classlibsdi_1_1_sdi_base.md#function-setclienterror)**(int libsdiprotocol_result) |

**Protected Attributes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[sw12](classlibsdi_1_1_sdi_base.md#variable-sw12)**  |
| int | **[additionalResultValue](classlibsdi_1_1_sdi_base.md#variable-additionalresultvalue)**  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[clientErr](classlibsdi_1_1_sdi_base.md#variable-clienterr)**  |


## Detailed Description

```cpp
class libsdi::SdiCrypt;
```


[SdiCrypt](classlibsdi_1_1_sdi_crypt.md) holding the crypto handle from Crypto Open. General notes for most functions in this class:

* In case of error the SDI server's SW1 SW2 can be read with [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12)
* If present, additional error info can be read with [getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)
* If a Initial Vector is required or received (random mode) it is managed by [getInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-getinitialvector) and [setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector).
* If an KSN has been returned by the SDI server it can be read with [getKeySerialNumber()](classlibsdi_1_1_sdi_crypt.md#function-getkeyserialnumber)

## Public Functions Documentation

### function SdiCrypt

```cpp
SdiCrypt()
```


### function ~SdiCrypt

```cpp
~SdiCrypt()
```


### function open

```cpp
bool open(
    const char * hostName
)
```

call SDI Crypto Open (70-00). 

**Parameters**: 

  * **hostName** host name 


**Return**: true in case of success 

The crypto handle received from SDI server is stored and used inside this object. 


### function close

```cpp
bool close()
```

call SDI Crypto Open Close (70-01). 

**Return**: true in case of success 

**Note**: This funtion is called by [SdiCrypt](classlibsdi_1_1_sdi_crypt.md)'s destructor and [open()](classlibsdi_1_1_sdi_crypt.md#function-open)

### function isOpen

```cpp
bool isOpen() const
```

Check if a crypto handle is present. 

**Return**: false if crypto handle has not been obtain or if close has been called 

### function getCryptoHandle

```cpp
uint32_t getCryptoHandle()
```

Read the crypto handle obtained by SDI Crypto Open. 

**Return**: crypto handle, -1 when [open()](classlibsdi_1_1_sdi_crypt.md#function-open) was not called or failed 

Intended for commands that are not handled by this object. 


### function encrypt

```cpp
bool encrypt(
    const std::vector< unsigned char > & data,
    std::vector< unsigned char > & encrypted
)
```

SDI Crypto Encrypt (70-02). 

**Parameters**: 

  * **data** data for encryption 
  * **encrypted** buffer for encrypted data


**Return**: true in case of success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once

### function decrypt

```cpp
bool decrypt(
    const std::vector< unsigned char > & encrypted,
    std::vector< unsigned char > & decrypted
)
```

SDI Crypto Decrypt (70-03). 

**Parameters**: 

  * **encrypted** encrypted data 
  * **decrypted** buffer for decrypted data


**Return**: true in case of success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once

### function sign

```cpp
bool sign(
    const std::vector< unsigned char > & data,
    std::vector< unsigned char > & signature
)
```

SDI Crypto Sign (70-04). 

**Parameters**: 

  * **data** data to sign 
  * **signature** MAC or signature


**Return**: true in case of success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once

### function verify

```cpp
bool verify(
    const std::vector< unsigned char > & data,
    const std::vector< unsigned char > & signature
)
```

SDI Crypto Verify (70-05). 

**Parameters**: 

  * **data** signed data 
  * **signature** MAC or signature


**Return**: true in case of successful positive verification 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once

### function updateKey

```cpp
bool updateKey(
    unsigned char keyType,
    const std::vector< unsigned char > & keyData,
    std::vector< unsigned char > * proprietaryData =NULL,
    const unsigned char AS2805 =0,
    std::vector< unsigned char > * KCV =NULL
)
```

SDI Crypto Update Key (70-06). 

**Parameters**: 

  * **keyType** SEC ADK key type 
  * **keyData** Key Data or DUKPT Initial Key or 'KSN incrementation' 
  * **proprietaryData** Proprietary Data (e.g. KSN) 
  * **AS2805** AS2805 Tag, possible valid values: 1 ... 255 
  * **KCV** Key Check Value


**Return**: true in case of success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once

### function setKeySetId

```cpp
bool setKeySetId(
    uint32_t ksid,
    uint32_t mksid =0,
    bool asAttribute =false
)
```

Set Key Set (70-07) or setter for [getEncData()](), [getEncMsgData()]() and [getMsgSignature()]() depending on parameter `asAttribute`. 

**Parameters**: 

  * **ksid** Key Set Id (DF409) 
  * **mksid** Master Key Set Id (DFA415) 
  * **asAttribute** key set ids are stored in this object and sent with each [getEncData()](classlibsdi_1_1_sdi_crypt.md#function-getencdata), [getEncMsgData()](classlibsdi_1_1_sdi_crypt.md#function-getencmsgdata) and [getMsgSignature()](classlibsdi_1_1_sdi_crypt.md#function-getmsgsignature). Behavior to be reset by providing zero values. 


**Return**: true in case of success 

### function getEncryptedPin

```cpp
bool getEncryptedPin(
    unsigned char pinBlockFormat,
    std::vector< unsigned char > & pinBlock,
    bool requestZeroPinBlock =false
)
```

Get encrypted PIN (70-08). 

**Parameters**: 

  * **pinBlockFormat** PIN block format, 0:ISO0, 1:ISO1, 2:ISO2, 3:ISO3 
  * **pinBlock** encrypted PIN 
  * **requestZeroPinBlock** true for zero PIN block 


**Return**: true in case of success 

### function getKeyInventory

```cpp
std::string getKeyInventory()
```

Get Key Inventory (70-09). 

**Return**: json string with information about keys of the opened security module. 

### function getKeyData

```cpp
bool getKeyData(
    unsigned char keyType,
    std::vector< unsigned char > & keyData,
    unsigned char kekFlag =0
)
```

Get Key Data (70-0A). 

**Parameters**: 

  * **keyType** Key Type 
  * **keyData** information about key data 
  * **kekFlag** Bendigo KEK Flag 1: KEK1, 2: KEK2 


**Return**: true in case of success 

### function getStatus

```cpp
std::string getStatus()
```

Get Status of security module (70-0B) with handle received by [open()](classlibsdi_1_1_sdi_crypt.md#function-open). 

**Return**: status information as JSON string 

### function getStatus

```cpp
std::string getStatus(
    std::string hostName
)
```

Get Status of security module (70-0B) for given host name or for all security modules. 

**Parameters**: 

  * **hostName** configuration name. Use empty string to address all modules.


**Return**: status information as JSON string 

### function setInitialVector

```cpp
inline void setInitialVector(
    const std::vector< unsigned char > & iv
)
```

Set Initial Vector for various cipher commands (DFA403) 

**Parameters**: 

  * **iv** Initial Vector 


**Note**: Sent once only, that is any call to methods listed above will clear the initial vector.

Setter for [encrypt()](classlibsdi_1_1_sdi_crypt.md#function-encrypt), [decrypt()](classlibsdi_1_1_sdi_crypt.md#function-decrypt), [sign()](classlibsdi_1_1_sdi_crypt.md#function-sign), [verify()](classlibsdi_1_1_sdi_crypt.md#function-verify), [getEncData()](classlibsdi_1_1_sdi_crypt.md#function-getencdata), [getEncMsgData()](classlibsdi_1_1_sdi_crypt.md#function-getencmsgdata) and [getMsgSignature()](classlibsdi_1_1_sdi_crypt.md#function-getmsgsignature)


### function getInitialVector

```cpp
inline void getInitialVector(
    std::vector< unsigned char > & iv
) const
```

Get Initial Vector returned by various cipher commands. 

**Parameters**: 

  * **iv** Initial Vector 


### function getKeySerialNumber

```cpp
inline void getKeySerialNumber(
    std::vector< unsigned char > & ksn
) const
```

Get key serial number returned by various cipher commands. 

**Parameters**: 

  * **ksn** Key Serial Number 


### function getEncData

```cpp
bool getEncData(
    const Placeholder & descriptor,
    std::vector< unsigned char > & encrypted,
    bool useStoredData =false,
    bool incrementKSN =false
)
```

Encryption command for card holder sensitive data (29-00). 

**Parameters**: 

  * **descriptor** Description of data to be encrypted 
  * **encrypted** Encrypted data 
  * **useStoredData** flag for using stored transaction data 
  * **incrementKSN** activate call to [secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn)


**Return**: true for success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once 
[setKeySetId()](classlibsdi_1_1_sdi_crypt.md#function-setkeysetid) (DFA409, DFA415)

### function getEncMsgData

```cpp
bool getEncMsgData(
    const std::vector< unsigned char > & messageTemplate,
    const std::vector< Placeholder > & placeholder,
    std::vector< unsigned char > & encrypted,
    bool useStoredData =false,
    bool incrementKSN =false
)
```

Encryption command for card holder sensitive data in host messages (29-01) 

**Parameters**: 

  * **messageTemplate** Message Template including place holders for sensitive data elements 
  * **placeholder** Descriptions of data to be encrypted 
  * **encrypted** Encrypted data 
  * **useStoredData** flag for using stored transaction data 
  * **incrementKSN** activate call to [secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn)


**Return**: true for success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once 
[setKeySetId()](classlibsdi_1_1_sdi_crypt.md#function-setkeysetid) (DFA409, DFA415)

### function getMsgSignature

```cpp
bool getMsgSignature(
    const std::vector< unsigned char > & messageTemplate,
    const std::vector< Placeholder > & placeholder,
    std::vector< unsigned char > & signature,
    bool useStoredData =false,
    bool incrementKSN =false
)
```

Singing of host messages (29-04). 

**Parameters**: 

  * **messageTemplate** Message Template including place holders for sensitive data elements 
  * **placeholder** Descriptions of data to be encrypted 
  * **signature** Signature 
  * **useStoredData** flag for using stored transaction data 
  * **incrementKSN** activate call to [secIncrementKSN()](namespacecom__verifone__seccmd.md#function-secincrementksn)


**Return**: true for success 

**Par**: Setters

[setInitialVector()](classlibsdi_1_1_sdi_crypt.md#function-setinitialvector) (DFA403) **Note** Will be sent only once 
[setKeySetId()](classlibsdi_1_1_sdi_crypt.md#function-setkeysetid) (DFA409, DFA415)

### function getEncTrxData

```cpp
bool getEncTrxData(
    const std::vector< unsigned long > tags,
    std::vector< unsigned char > & data
)
```

Perform the command to get encrypted transaction data for later use (29-07). 

**Parameters**: 

  * **tags** tag list including all requested data elements 
  * **data** encrypted block containing the requested tags with the transaction data 


**Return**: true in case of success 

### function setEncTrxData

```cpp
bool setEncTrxData(
    const std::vector< unsigned char > data
)
```

Perform the command to send encrypted transaction data back to the SDI Server (29-08). 

**Parameters**: 

  * **data** encrypted block containing the transaction data to be sent to the SDI Server 


**Return**: true in case of success 

### function endEncTrxData

```cpp
bool endEncTrxData()
```

Perform the command to finish the encrypted transaction data procedure inside the SDI Server (29-09). 

**Return**: true in case of success 

### function getVersions

```cpp
static std::string getVersions(
    int & additionalResult
)
```

Get versions of SEC ADK components (70-0C). 

**Parameters**: 

  * **additionalResult** SDI Additional Result Value in case of error 


**Return**: version information 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100
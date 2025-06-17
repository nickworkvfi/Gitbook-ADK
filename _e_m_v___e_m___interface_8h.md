---
title: emv/EMV_Encryption_Manager/export/EMV_EM_Interface.h
summary: Interface of EMV Encryption Manager. 

---

# emv/EMV_Encryption_Manager/export/EMV_EM_Interface.h

Interface of EMV Encryption Manager. 

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[EMV_EM_OUTCOME](_e_m_v___e_m___interface_8h.md#enum-emv-em-outcome)** { EM_BLOCKED = 13, EM_SENSTIVE_ENCRYPTED = 12, EM_SENSTIVE_FORMAT_PRESERVING = 11, EM_NOT_SENSITIVE = 10, EM_ATTRIBUTE =  9, EM_OK =  0, EM_PARAM_ERROR = -1, EM_FAILURE = -2}<br>possible returns of the Encryption Manager  |
| typedef enum [EMV_EM_OUTCOME](_e_m_v___e_m___interface_8h.md#enum-emv-em-outcome) | **[EMV_EM_OUTCOME_TYPE](_e_m_v___e_m___interface_8h.md#typedef-emv-em-outcome-type)** <br>possible returns of the Encryption Manager  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_EMC](_e_m_v___e_m___interface_8h.md#define-dll-emc) int | **[EMV_EM_Init](_e_m_v___e_m___interface_8h.md#function-emv-em-init)**(const unsigned char * TxnRelatedData, unsigned dataLen)<br>Initialize the Encryption Manager.  |
| [DLL_EMC](_e_m_v___e_m___interface_8h.md#define-dll-emc) int | **[EMV_EM_IsTagSensitive](_e_m_v___e_m___interface_8h.md#function-emv-em-istagsensitive)**(unsigned long RequestedTag, const unsigned long ** Mapping, unsigned * LengthMapping)<br>Find out if a tag is considered sensitive in the payment system environment.  |
| const [DLL_EMC](_e_m_v___e_m___interface_8h.md#define-dll-emc) unsigned char * | **[EMV_EM_Encrypt](_e_m_v___e_m___interface_8h.md#function-emv-em-encrypt)**(unsigned long RequestedTag, const unsigned char * DataIn, unsigned DataInLength, unsigned * DataOutLength)<br>Encrypt a sensitive tag.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DLL_EMC](_e_m_v___e_m___interface_8h.md#define-dll-emc)**  |
|  | **[EMV_ENCRYPTION_MANAGER_VERSION](_e_m_v___e_m___interface_8h.md#define-emv-encryption-manager-version)** <br>Version of EMV Encryption Manager.  |
|  | **[ENCRYPTION_MANAGER_TAGS_BASE](_e_m_v___e_m___interface_8h.md#define-encryption-manager-tags-base)** <br>starting TLV tag for special information exchange between application and ecryption manager  |

## Types Documentation

### enum EMV_EM_OUTCOME

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EM_BLOCKED | 13| Requested tag is blocked and must not be delivered at the API.   |
| EM_SENSTIVE_ENCRYPTED | 12| Requested tag is considered sensitive, not format pre-serving.   |
| EM_SENSTIVE_FORMAT_PRESERVING | 11| Requested tag is considered sensitive but format pre-serving, e.g. tokenization.   |
| EM_NOT_SENSITIVE | 10| Requested tag is NOT considered sensitive.   |
| EM_ATTRIBUTE |  9| Requested tag is an EM owned attribue/meta data like KSN for DUKPT.   |
| EM_OK |  0| Command successfully executed.   |
| EM_PARAM_ERROR | -1| Bad arguments.   |
| EM_FAILURE | -2| Failure reported by underlaying encryption system.   |



possible returns of the Encryption Manager 

### typedef EMV_EM_OUTCOME_TYPE

```cpp
typedef enum EMV_EM_OUTCOME EMV_EM_OUTCOME_TYPE;
```

possible returns of the Encryption Manager 


## Functions Documentation

### function EMV_EM_Init

```cpp
DLL_EMC int EMV_EM_Init(
    const unsigned char * TxnRelatedData,
    unsigned dataLen
)
```

Initialize the Encryption Manager. 

**Parameters**: 

  * **TxnRelatedData** transaction related data for specific encryption evaluation 
  * **dataLen** valid data length of TxnRelatedData


**Return**: [EM_OK](_e_m_v___e_m___interface_8h.md#enumvalue-em-ok), [EM_PARAM_ERROR](_e_m_v___e_m___interface_8h.md#enumvalue-em-param-error)

**Author**: GSS R&D Germany

The Encryption manager needs to be intialized for each transaction You need to pass transaction related data here if there is a need of scheme specific encryption or if there is a need for BIN Range checking for example. This data is evaluated during any subsequent encryption process and based on the decision of the transaction data any requested EMV tag is considered to be sensitive or not. This transaction specfifc configuration allows to activate exceptions in the encryption/tokenization of sensitive data. Use Case 1: 5F24 (Expiry Date) is considered to be sensitive per default, for American Express it shall be available for the customer app. Adding the AID to the Init allows to differ in between the schemes. Use Case 2: track 2 data of fleetcards are allowed to be forwarded to the application. Adding the PAN of the current transaction allows to check if the BIN table in the security module to check this. Example for AID and PAN: TxnRelatedData = 9F 06 07 A0 00 00 00 00 03 10 10 5A 08 40 00 50 00 60 00 70 00 (VISA AID and PAN) All configuration data is forwarded in EMV TLV format (EMV book 3, Annex B), e.g. 5F240221220 or 5A0Axxxxxxxxxxxxxxxxxxxx


### function EMV_EM_IsTagSensitive

```cpp
DLL_EMC int EMV_EM_IsTagSensitive(
    unsigned long RequestedTag,
    const unsigned long ** Mapping,
    unsigned * LengthMapping
)
```

Find out if a tag is considered sensitive in the payment system environment. 

**Parameters**: 

  * **RequestedTag** tag to be checked if seinsitvie or not 
  * **Mapping** mapping of this tag to another tag or a tag list 
  * **LengthMapping** length of the mapping info stream


**Return**: [EM_SENSTIVE_ENCRYPTED](_e_m_v___e_m___interface_8h.md#enumvalue-em-senstive-encrypted), [EM_SENSTIVE_FORMAT_PRESERVING](_e_m_v___e_m___interface_8h.md#enumvalue-em-senstive-format-preserving), [EM_NOT_SENSITIVE](_e_m_v___e_m___interface_8h.md#enumvalue-em-not-sensitive)

**Author**: GSS R&D Germany

The Encryption Manager hands over the information of the encryption engine considers a specific tag (or template) as sensitive data. If transaction spefific data have been configured during the intialization process of the Encryption manager this data is part of the evaluation. This allows scheme specific and BIN range specific encryption information. There are 3 possible outcomes: tag not sensitive, tag is senstive but format-preserving (e.g. tokenization) or tag is senstive encrypted (e.g. DUKPT encrypted) The out parameter is either NULL (this is used if a tag holds the plain, encrypted or tokenized data itself), a different tag (this is used if a tag shall be mapped to another tag, e.g. if an encryption is not format preserving) or a tag list (this is used if the requested tag represents a specifc template, e.g. BMP 55 template, which includes multiple sensitive data encrypted in a template). Example 1: requested tag 57 is senstive but format pre-serving (tokeneized for example): requested tag 57, return: EM_SENSTIVE_FORMAT_PRESERVING, mapped tags(s): NULL Example 2: requested tag DF8357 is senstive not format preserving and includes the original tag 57 encrypted, return: EM_SENSTIVE_ENCRYPTED, mapped tag(s): 57


### function EMV_EM_Encrypt

```cpp
const DLL_EMC unsigned char * EMV_EM_Encrypt(
    unsigned long RequestedTag,
    const unsigned char * DataIn,
    unsigned DataInLength,
    unsigned * DataOutLength
)
```

Encrypt a sensitive tag. 

**Parameters**: 

  * **RequestedTag** tag or template to be encrypted 
  * **DataIn** data to encrypted 
  * **DataInLength** length of data to encrypted 
  * **DataOutLength** length of encrypted data


**Return**: pointer to encrypted or tokenized or plain data, NULL if encryption engine fails to encrypt the data 

**Author**: GSS R&D Germany

This function encrpyts any sensitive data provided if the tag (or template) is sensitive by the means of the encryption engine It returns a pointer to the encrypted data. If the requested tag or template is not sensitive it returns a pointer to the unencrypted data. If the data can not be encrypted by the underlying encrpytion engine it returns a NULL pointer. The encryption itself, the key injection for the encryption engine and the configuration of the encryption engine (RSA/DES/DUPKT/TOKENS, tags to be considered sensitive, scheme specific checks) is out of scope of the Encryption Manager interface. This configuration interface needs to be provided by the underlying encryption engine.




## Macros Documentation

### define DLL_EMC

```cpp
#define DLL_EMC __attribute__((visibility ("default")))
```


### define EMV_ENCRYPTION_MANAGER_VERSION

```cpp
#define EMV_ENCRYPTION_MANAGER_VERSION "0.0.1-developer"
```

Version of EMV Encryption Manager. 

### define ENCRYPTION_MANAGER_TAGS_BASE

```cpp
#define ENCRYPTION_MANAGER_TAGS_BASE 0xDFD900
```

starting TLV tag for special information exchange between application and ecryption manager 

## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     Interface definitions and functions
****************************************************************************/

#ifndef _EMV_EM_INTERFACE_H_   /* avoid double interface-includes */
#define _EMV_EM_INTERFACE_H_

#ifdef __cplusplus
extern "C" {
#endif

#define DLL_EMC __attribute__((visibility ("default")))

#define EMV_ENCRYPTION_MANAGER_VERSION  "0.0.1-developer"  


// ========================================================================================================
// === COMMON PART ===
// ========================================================================================================
#define ENCRYPTION_MANAGER_TAGS_BASE 0xDFD900 

typedef enum EMV_EM_OUTCOME
{
    EM_BLOCKED                    = 13,           
    EM_SENSTIVE_ENCRYPTED         = 12,           
    EM_SENSTIVE_FORMAT_PRESERVING = 11,           
    EM_NOT_SENSITIVE              = 10,           
    EM_ATTRIBUTE                  =  9,           
    EM_OK                         =  0,           
    EM_PARAM_ERROR                = -1,           
    EM_FAILURE                    = -2            
} EMV_EM_OUTCOME_TYPE;


/*****************************************************************************
*  EMV_EM_Init
*****************************************************************************/
DLL_EMC int EMV_EM_Init(const unsigned char* TxnRelatedData, unsigned dataLen);


/*****************************************************************************
*  EMV_EM_IsTagSensitive
*****************************************************************************/
DLL_EMC int EMV_EM_IsTagSensitive(unsigned long RequestedTag, const unsigned long** Mapping, unsigned* LengthMapping);


/*****************************************************************************
*  EMV_EM_Encrypt
*****************************************************************************/
DLL_EMC const unsigned char* EMV_EM_Encrypt(unsigned long RequestedTag, const unsigned char* DataIn, unsigned DataInLength, unsigned* DataOutLength);

#ifdef __cplusplus
}
#endif

#endif // _EMV_EM_INTERFACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100

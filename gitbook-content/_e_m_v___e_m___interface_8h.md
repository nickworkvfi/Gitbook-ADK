---
hidden: true
title: EMV_EM_Interface.h File Reference
---

[Macros](#define-members) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

Interface of EMV Encryption Manager. [More\...](#details)

<a href="_e_m_v___e_m___interface_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4)   <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((visibility (\"default\"))) |
| #define  | [EMV_ENCRYPTION_MANAGER_VERSION](#afba641b27a765441e711a5911be28237)   \"0.0.1-developer\" |
|   | Version of EMV Encryption Manager. [More\...](#afba641b27a765441e711a5911be28237)<br/> |
| #define  | [ENCRYPTION_MANAGER_TAGS_BASE](#a90750ca20d2ab2da21d35aacf916d864)   0xDFD900 |
|   | starting TLV tag for special information exchange between application and ecryption manager [More\...](#a90750ca20d2ab2da21d35aacf916d864)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef enum [EMV_EM_OUTCOME](#a78c621aa7637de09eabc74b9ac450cba)  | [EMV_EM_OUTCOME_TYPE](#a70b4dff05b0d45f6f5a6eea201885405) |
|   | possible returns of the Encryption Manager [More\...](#a70b4dff05b0d45f6f5a6eea201885405)<br/> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [EMV_EM_OUTCOME](#a78c621aa7637de09eabc74b9ac450cba) {<br/>  [EM_BLOCKED](#a78c621aa7637de09eabc74b9ac450cbaa8881632fec5d793d9b3381c8d8ee803a) = 13, [EM_SENSTIVE_ENCRYPTED](#a78c621aa7637de09eabc74b9ac450cbaa404f17f09840048050093143b0643215) = 12, [EM_SENSTIVE_FORMAT_PRESERVING](#a78c621aa7637de09eabc74b9ac450cbaabe3a18a6a1d33197e354173f8c9716b0) = 11, [EM_NOT_SENSITIVE](#a78c621aa7637de09eabc74b9ac450cbaa7387a993b4f9b352214e93c348be1f5a) = 10,<br/>  [EM_ATTRIBUTE](#a78c621aa7637de09eabc74b9ac450cbaacf249f526bf4db771494db24ca476e74) = 9, [EM_OK](#a78c621aa7637de09eabc74b9ac450cbaa1d721c0d6412a32e0908f41ea4bab010) = 0, [EM_PARAM_ERROR](#a78c621aa7637de09eabc74b9ac450cbaa1a0929da5fdea29667f453392453afb7) = -1, [EM_FAILURE](#a78c621aa7637de09eabc74b9ac450cbaa84750ccc2863a3b3f8af1f12cf4dc26a) = -2<br/>} |
|   | possible returns of the Encryption Manager [More\...](#a78c621aa7637de09eabc74b9ac450cba)<br/> |

|  |  |
|----|----|
| Functions |  |
| [DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4) int  | [EMV_EM_Init](#aa69f5a8c3d14299eb6e9f33afe67e28f) (const unsigned char \*TxnRelatedData, unsigned dataLen) |
|   | Initialize the Encryption Manager. [More\...](#aa69f5a8c3d14299eb6e9f33afe67e28f)<br/> |
| [DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4) int  | [EMV_EM_IsTagSensitive](#a6574cd195d6f49fdcbe75150b8ddc338) (unsigned long RequestedTag, const unsigned long \*\*Mapping, unsigned \*LengthMapping) |
|   | Find out if a tag is considered sensitive in the payment system environment. [More\...](#a6574cd195d6f49fdcbe75150b8ddc338)<br/> |
| const [DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4) unsigned char \*  | [EMV_EM_Encrypt](#a4721c2e04324b076f9e44afd810b09b6) (unsigned long RequestedTag, const unsigned char \*DataIn, unsigned DataInLength, unsigned \*DataOutLength) |
|   | Encrypt a sensitive tag. [More\...](#a4721c2e04324b076f9e44afd810b09b6)<br/> |

## DetailedDescription {#detailed-description}

Interface of EMV Encryption Manager.

## MacroDefinition Documentation {#macro-definition-documentation}

## DLL_EMC <a href="#ab4b56537f29043b46d36de284e28fbb4" id="ab4b56537f29043b46d36de284e28fbb4"></a>

<p>#define DLL_EMC   <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((visibility (\"default\")))</p>

## EMV_ENCRYPTION_MANAGER_VERSION <a href="#afba641b27a765441e711a5911be28237" id="afba641b27a765441e711a5911be28237"></a>

<p>#define EMV_ENCRYPTION_MANAGER_VERSION   \"0.0.1-developer\"</p>

Version of EMV Encryption Manager.

## ENCRYPTION_MANAGER_TAGS_BASE <a href="#a90750ca20d2ab2da21d35aacf916d864" id="a90750ca20d2ab2da21d35aacf916d864"></a>

<p>#define ENCRYPTION_MANAGER_TAGS_BASE   0xDFD900</p>

starting TLV tag for special information exchange between application and ecryption manager

## TypedefDocumentation {#typedef-documentation}

## EMV_EM_OUTCOME_TYPE <a href="#a70b4dff05b0d45f6f5a6eea201885405" id="a70b4dff05b0d45f6f5a6eea201885405"></a>

<p>typedef enum [EMV_EM_OUTCOME](#a78c621aa7637de09eabc74b9ac450cba) [EMV_EM_OUTCOME_TYPE](#a70b4dff05b0d45f6f5a6eea201885405)</p>

possible returns of the Encryption Manager

## EnumerationType Documentation {#enumeration-type-documentation}

## EMV_EM_OUTCOME <a href="#a78c621aa7637de09eabc74b9ac450cba" id="a78c621aa7637de09eabc74b9ac450cba"></a>

<p>enum [EMV_EM_OUTCOME](#a78c621aa7637de09eabc74b9ac450cba)</p>

possible returns of the Encryption Manager

| Enumerator |  |
|----|----|
| EM_BLOCKED  | <p>Requested tag is blocked and must not be delivered at the API.</p> |
| EM_SENSTIVE_ENCRYPTED  | <p>Requested tag is considered sensitive, not format pre-serving.</p> |
| EM_SENSTIVE_FORMAT_PRESERVING  | <p>Requested tag is considered sensitive but format pre-serving, e.g. tokenization.</p> |
| EM_NOT_SENSITIVE  | <p>Requested tag is NOT considered sensitive.</p> |
| EM_ATTRIBUTE  | <p>Requested tag is an EM owned attribue/meta data like KSN for DUKPT.</p> |
| EM_OK  | <p>Command successfully executed.</p> |
| EM_PARAM_ERROR  | <p>Bad arguments.</p> |
| EM_FAILURE  | <p>Failure reported by underlaying encryption system.</p> |

## FunctionDocumentation {#function-documentation}

## EMV_EM_Encrypt() <a href="#a4721c2e04324b076f9e44afd810b09b6" id="a4721c2e04324b076f9e44afd810b09b6"></a>

<p>const [DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4) unsigned char\* EMV_EM_Encrypt</p>

Encrypt a sensitive tag.

This function encrpyts any sensitive data provided if the tag (or template) is sensitive by the means of the encryption engine It returns a pointer to the encrypted data. If the requested tag or template is not sensitive it returns a pointer to the unencrypted data. If the data can not be encrypted by the underlying encrpytion engine it returns a NULL pointer. The encryption itself, the key injection for the encryption engine and the configuration of the encryption engine (RSA/DES/DUPKT/TOKENS, tags to be considered sensitive, scheme specific checks) is out of scope of the Encryption Manager interface. This configuration interface needs to be provided by the underlying encryption engine.

### Author

GSS R&D Germany

**Parameters**

\[in\] **RequestedTag** tag or template to be encrypted \[in\] **DataIn** data to encrypted \[in\] **DataInLength** length of data to encrypted \[out\] **DataOutLength** length of encrypted data

### Returns

pointer to encrypted or tokenized or plain data, NULL if encryption engine fails to encrypt the data

## EMV_EM_Init() <a href="#aa69f5a8c3d14299eb6e9f33afe67e28f" id="aa69f5a8c3d14299eb6e9f33afe67e28f"></a>

<p>[DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4) int EMV_EM_Init</p>

Initialize the Encryption Manager.

The Encryption manager needs to be intialized for each transaction You need to pass transaction related data here if there is a need of scheme specific encryption or if there is a need for BIN Range checking for example. This data is evaluated during any subsequent encryption process and based on the decision of the transaction data any requested EMV tag is considered to be sensitive or not. This transaction specfifc configuration allows to activate exceptions in the encryption/tokenization of sensitive data. Use Case 1: 5F24 (Expiry Date) is considered to be sensitive per default, for American Express it shall be available for the customer app. Adding the AID to the Init allows to differ in between the schemes. Use Case 2: track 2 data of fleetcards are allowed to be forwarded to the application. Adding the PAN of the current transaction allows to check if the BIN table in the security module to check this. Example for AID and PAN: TxnRelatedData = 9F 06 07 A0 00 00 00 00 03 10 10 5A 08 40 00 50 00 60 00 70 00 (VISA AID and PAN) All configuration data is forwarded in EMV TLV format (EMV book 3, Annex B), e.g. 5F240221220 or 5A0Axxxxxxxxxxxxxxxxxxxx

### Author

GSS R&D Germany

**Parameters**

\[in\] **TxnRelatedData** transaction related data for specific encryption evaluation \[in\] **dataLen** valid data length of TxnRelatedData

### Returns

[EM_OK](#a78c621aa7637de09eabc74b9ac450cbaa1d721c0d6412a32e0908f41ea4bab010 "Command successfully executed."), [EM_PARAM_ERROR](#a78c621aa7637de09eabc74b9ac450cbaa1a0929da5fdea29667f453392453afb7 "Bad arguments.")

## EMV_EM_IsTagSensitive() <a href="#a6574cd195d6f49fdcbe75150b8ddc338" id="a6574cd195d6f49fdcbe75150b8ddc338"></a>

<p>[DLL_EMC](#ab4b56537f29043b46d36de284e28fbb4) int EMV_EM_IsTagSensitive</p>

Find out if a tag is considered sensitive in the payment system environment.

The Encryption Manager hands over the information of the encryption engine considers a specific tag (or template) as sensitive data. If transaction spefific data have been configured during the intialization process of the Encryption manager this data is part of the evaluation. This allows scheme specific and BIN range specific encryption information. There are 3 possible outcomes: tag not sensitive, tag is senstive but format-preserving (e.g. tokenization) or tag is senstive encrypted (e.g. DUKPT encrypted) The out parameter is either NULL (this is used if a tag holds the plain, encrypted or tokenized data itself), a different tag (this is used if a tag shall be mapped to another tag, e.g. if an encryption is not format preserving) or a tag list (this is used if the requested tag represents a specifc template, e.g. BMP 55 template, which includes multiple sensitive data encrypted in a template). Example 1: requested tag 57 is senstive but format pre-serving (tokeneized for example): requested tag 57, return: EM_SENSTIVE_FORMAT_PRESERVING, mapped tags(s): NULL Example 2: requested tag DF8357 is senstive not format preserving and includes the original tag 57 encrypted, return: EM_SENSTIVE_ENCRYPTED, mapped tag(s): 57

### Author

GSS R&D Germany

**Parameters**

\[in\] **RequestedTag** tag to be checked if seinsitvie or not \[out\] **Mapping** mapping of this tag to another tag or a tag list \[out\] **LengthMapping** length of the mapping info stream

### Returns

[EM_SENSTIVE_ENCRYPTED](#a78c621aa7637de09eabc74b9ac450cbaa404f17f09840048050093143b0643215 "Requested tag is considered sensitive, not format pre-serving."), [EM_SENSTIVE_FORMAT_PRESERVING](#a78c621aa7637de09eabc74b9ac450cbaabe3a18a6a1d33197e354173f8c9716b0 "Requested tag is considered sensitive but format pre-serving, e.g. tokenization."), [EM_NOT_SENSITIVE](#a78c621aa7637de09eabc74b9ac450cbaa7387a993b4f9b352214e93c348be1f5a "Requested tag is NOT considered sensitive.")
